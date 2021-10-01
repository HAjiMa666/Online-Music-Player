import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { getSongUrl, getSongDetail, changePlaySequenceAction, changeCurrentSongIndexAction, getSongLyric, showlocalSongData } from "../store/actionCreators"
import moment from 'moment'
import momentDurationFormatSetup from "moment-duration-format"
import resizeImg from "@/utils/resizeImg"
import getRandomSongNum from "@/utils/randomSongNum";
import formatLyric from "@/utils/formatLyric";
import { CSSTransition } from "react-transition-group";
import { NavLink } from 'react-router-dom';

import "./transition.css";
import { Slider } from 'antd';
import PlayList from "./playList";
import {
    PlayerLeft,
    PlayerRight,
    PlayerWrapper
} from "./style"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default memo(function Player() {
    momentDurationFormatSetup(moment)
    const [isplay, setIsplay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setprogress] = useState(0);
    const [duration, setduration] = useState(0);
    const [isChanging, setIsChanging] = useState(false);
    const [sequence, setSequence] = useState(0);
    const [content, setContent] = useState("");
    const [isShow, setIsShow] = useState(true);
    const [playListShow, setPlayListShow] = useState(false);

    const playRef = useRef();
    const palyerBarRef = useRef();
    const dispatch = useDispatch();
    const { playList, songInfo, currentSongIndex, lyrics } = useSelector(state => ({
        playList: state.getIn(["player", "playList"]),
        songInfo: state.getIn(["player", "songInfo"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"]),
        lyrics: state.getIn(["player", "lyrics"]),
    }), shallowEqual)

    // 第一次歌曲加载
    useEffect(() => {
        if (localStorage.getItem("songInfo") === null) {
            dispatch(getSongDetail(1847250546));
            dispatch(getSongUrl(1847250546));
            dispatch(getSongLyric(1847250546));
        } else {
            dispatch(showlocalSongData());
        }
    }, [dispatch]);


    // 设置歌曲url
    useEffect(() => {
        const time = (songInfo && songInfo[currentSongIndex]) && songInfo[currentSongIndex].dt;
        console.log(time);
        setduration(time);
        playRef.current.src = playList[currentSongIndex] && playList[currentSongIndex][0].url;
        playRef.current.play()
            .then(() => {
                setIsplay(true);
                console.log("我能够播放了");
            })
            .catch(() => {
                setIsplay(false);
                playRef.current.pause();
            })
    }, [playList, currentSongIndex, songInfo])

    // 播放功能
    const play = useCallback(() => {
        if (!isplay) {
            playRef.current.play().catch(error => {
                console.log("我捕捉到了我的错误" + error);
            });
            setIsplay(true);
        } else {
            playRef.current.pause();
            setIsplay(false);
        }
    }, [isplay])

    // 设置歌曲的播放时间
    const playTime = (e) => {
        if (isChanging === false) {
            const newProgress = (currentTime / (duration / 1000)) * 100;
            setCurrentTime(e.target.currentTime);
            setprogress(newProgress)
            const lyric = lyrics[currentSongIndex] && formatLyric(lyrics[currentSongIndex]) || [];
            const currentContentIndex = lyric.findIndex((item, index, arr) => {
                console.log(item);
                return (
                    e.target.currentTime > item.time &&
                    e.target.currentTime < (arr[index + 1] && arr[index + 1].time)
                );
            })
            const cnt = lyric[currentContentIndex] && lyric[currentContentIndex].content;
            setContent(cnt);
        }
    }
    // 将歌曲的播放总时间和当前播放时间进行格式化
    const totalTime = moment.duration(songInfo[currentSongIndex] && songInfo[currentSongIndex].dt, "milliseconds").format("mm:ss");
    const pTime = moment.duration(currentTime, "seconds").format("mm:ss", { trim: "mid" })


    // 拖动歌曲进度条,对应的变化
    const change = useCallback((value) => {
        setprogress(value);
        setCurrentTime((value / 100) * (duration / 1000));
        setIsChanging(true);
    }, [duration])



    // 在拖动歌曲进度条结束的时候,对应的变化
    const afterChange = useCallback((value) => {
        if (isChanging) {
            playRef.current.currentTime = (value / 100) * (duration / 1000);
            setCurrentTime((value / 100) * (duration / 1000));
            if (isplay === false) {
                playRef.current.play();
                setIsplay(true);
            }
        }
        setIsChanging(false);
    }, [duration, isplay, isChanging])

    // 歌曲的播放顺序
    const changePlaySequence = useCallback(() => {
        if (sequence < 2) {
            setSequence(sequence + 1);
        }
        else
            setSequence(0);
    }, [sequence])
    useEffect(() => {
        dispatch(changePlaySequenceAction(sequence));
    }, [dispatch, sequence]);

    /**
     * 根据播放顺序切歌
     * @param {Number} sequence  0:顺序 1:随机 2:单曲
     * @param {Number} tag 0:下首播放 1:上首播放 2:歌曲结束的自动播放 
     */
    const chgSongBySeq = (sequence, tag) => {
        let randomNum = getRandomSongNum(playList.length);
        switch (sequence) {
            case 1:
                if (playList.length === 1) {
                    dispatch(changeCurrentSongIndexAction(currentSongIndex));
                    playRef.current.play();
                } else if (randomNum !== currentSongIndex) {
                    dispatch(changeCurrentSongIndexAction(randomNum));
                } else chgSongBySeq(1);
                break;
            case 2:
                if (tag === 0)
                    dispatch(changeCurrentSongIndexAction(currentSongIndex + 1));
                if (tag === 1)
                    dispatch(changeCurrentSongIndexAction(currentSongIndex - 1));
                if (tag === 2)
                    dispatch(changeCurrentSongIndexAction(currentSongIndex));
                playRef.current.play();
                break;
            default:
                if (playList.length === 1) {
                    dispatch(changeCurrentSongIndexAction(currentSongIndex));
                    playRef.current.play();
                } else if ((tag === 0 || tag === 2) && currentSongIndex === playList.length - 1) {
                    dispatch(changeCurrentSongIndexAction(0));
                } else if (tag === 0 || tag === 2)
                    dispatch(changeCurrentSongIndexAction(currentSongIndex + 1));
                else if (currentSongIndex !== 0)
                    dispatch(changeCurrentSongIndexAction(currentSongIndex - 1));
        }
    }

    // 歌曲结束
    const endSong = (e) => {
        chgSongBySeq(sequence, 2);
    }

    //播放上一首
    const playLeft = () => {
        chgSongBySeq(sequence, 1);
        setIsplay(true);
        playRef.current.play();
    }
    // 播放下一首
    const playRight = () => {
        chgSongBySeq(sequence, 0);
        setIsplay(true);
        playRef.current.play();
    }

    return (
        <CSSTransition
            classNames="playerBar"
            in={isShow}
            timeout={500}
        >
            <PlayerWrapper >
                <PlayerLeft
                    ref={palyerBarRef}
                    cover={resizeImg(songInfo[currentSongIndex] && songInfo[currentSongIndex].al && songInfo[currentSongIndex].al.picUrl, 34)}
                    isplay={isplay}
                    sequence={sequence}>
                    <span className="lyric">
                        {content}
                    </span>
                    <div className="content">
                        {
                            playListShow && <PlayList></PlayList>
                        }
                        <div className="play">
                            <span className="leftIcon" onClick={e => playLeft()}></span>
                            <span className="playIcon" onClick={e => play()}></span>
                            <span className="rightIcon" onClick={e => playRight()}></span>
                        </div>
                        <div className="songInfo">
                            <NavLink exact to="/discover/player"><div className="songCover"></div></NavLink>
                            <div className="song">
                                <div className="info">
                                    <NavLink exact to="/discover/player"><span className="title">{songInfo[currentSongIndex] && songInfo[currentSongIndex].name}</span></NavLink>
                                    <span className="singer">{songInfo[currentSongIndex] && songInfo[currentSongIndex].ar && songInfo[currentSongIndex].ar[0].name}</span>
                                    <span className="link"></span>
                                </div>
                                <div className="progressBar">
                                    <Slider
                                        className="sliderBar"
                                        value={progress}
                                        onAfterChange={afterChange}
                                        onChange={change}
                                        tooltipVisible={false}
                                    />
                                    <span className="playTime">{pTime}</span>
                                    <i>/</i>
                                    <span className="totalTime">{totalTime}</span>
                                </div>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="featureLeft">
                                <span className="PIPIcon"></span>
                                <span className="collectIcon"></span>
                                <span className="shareIcon"></span>
                            </div>
                            <div className="featureRight">
                                <span className="voiceIcon"></span>
                                <span className="pTypeIcon" onClick={e => changePlaySequence()}></span>
                                <span className="playListIcon" onClick={() => setPlayListShow(!playListShow)} ><span>{songInfo.length}</span></span>
                            </div>
                        </div>
                    </div>
                    <audio
                        ref={playRef}
                        onTimeUpdate={playTime}
                        onEnded={endSong}
                    >
                    </audio>
                </PlayerLeft>
                <PlayerRight islock={isShow}>
                    <span className="lock" onClick={e => {
                        console.log(isShow);
                        setIsShow(!isShow)
                    }}></span>
                </PlayerRight>
            </PlayerWrapper >
        </CSSTransition>
    )
})
