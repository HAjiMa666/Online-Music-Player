import React, { memo, useEffect } from 'react'

import {
    PlayListWrapper,
    PlayListLeft,
    PlayListRight
} from "./style"
import Song from "./songCpn"
import { shallowEqual, useSelector } from 'react-redux'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removeAllSongInfo } from '../../store/actionCreators'
import Lyric from './lyricCpn'

export default memo(function PlayList(props) {
    const { songInfo, currentSongIndex, lyrics } = useSelector(state => ({
        songInfo: state.getIn(["player", "songInfo"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"]),
        lyrics: state.getIn(["player", "lyrics"]),
    }), shallowEqual);
    const songList = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        [...songList.current.children].map(item => {
            item.classList.remove("active")
            return null;
        })
        songList.current.children[currentSongIndex] && songList.current.children[currentSongIndex].classList.add("active");
    }, [currentSongIndex])
    function removeLocalData() {
        localStorage.removeItem("songInfo");
        localStorage.removeItem("playList");
        dispatch(removeAllSongInfo());
    }
    return (
        <PlayListWrapper className="wrap-v2">
            <PlayListLeft>
                <header>
                    <span className="playList">播放列表 ({songInfo.length})</span>
                    <span className="collect">收藏全部</span>
                    <span className="delete" onClick={e => removeLocalData()}>清除</span>
                </header>
                <div className="songList" ref={songList}>
                    {
                        songInfo.map(item => {
                            return (
                                <Song info={item} key={item.id} />
                            )
                        })
                    }
                </div>
            </PlayListLeft>
            <PlayListRight>
                <Lyric lyric={lyrics && lyrics[currentSongIndex]}
                    songTitle={songInfo[currentSongIndex] && songInfo[currentSongIndex].name}
                    lyricIndex={props.lyricIndex}></Lyric>
            </PlayListRight>
        </PlayListWrapper >
    )
})
