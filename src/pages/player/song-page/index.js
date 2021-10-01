import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import resizeImg from "../../../utils/resizeImg"
import formatLyric from "@/utils/formatLyric";


import {
    SongPageWrapper,
    SongPageLeft,
    SongPageRight,
} from "./style"

export default memo(function ZXPlayer() {

    const [isShow, setisShow] = useState(false);

    const { lyrics, currentSongIndex } = useSelector(state => ({
        lyrics: state.getIn(["player", "lyrics"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    }), shallowEqual)
    let trueSongInfo = JSON.parse(localStorage.getItem("songInfo")) || [];

    const { name, ar, al } = trueSongInfo[currentSongIndex] || {};
    const songCover = al && resizeImg(al.picUrl, 130);
    const lyric = formatLyric(lyrics && lyrics[currentSongIndex]);
    return (
        <SongPageWrapper>
            <div className="wrap-v1">
                <SongPageLeft className="wrap-v2">
                    <div className="left">
                        <span className="albumCover"><img src={songCover} alt={name} /></span>
                        <a href="#/">生成外链播放器</a>
                    </div>
                    <div className="right">
                        <div className="songInfo">
                            <div className="head">
                                <span className="songType"></span>
                                <span className="songTitle">{name}</span>
                                <span className="mvIcon"></span>
                            </div>
                            <div className="footer">
                                <div className="singer">歌手 <a href="#/">{ar && ar[0].name}</a></div>
                                <div className="album">所属专辑 <a href="#/">{al && al.name}</a></div>
                            </div>
                        </div>
                        <div className="operatorIcon">
                            <span className="play">
                                <span className="playIcon"><span>播放</span></span>
                                <span className="add"></span>
                            </span>
                            <span className="collect"><span>收藏</span></span>
                            <span className="share"><span>分享</span></span>
                            <span className="download"><span>下载</span></span>
                            <span className="comment"><span>评论</span></span>
                        </div>
                        <div className="lyric">
                            {
                                lyric.map((item, index) => {
                                    if (isShow) {
                                        return (
                                            <div key={item.time + index}>{item.content}</div>
                                        )
                                    } else if (index < 10) {
                                        return <div key={item.time + index}>{item.content}</div>
                                    }
                                    return null;
                                })
                            }
                            <button onClick={e => { setisShow(!isShow) }}>{isShow ? "🔼收缩" : "🔽展开"}</button>
                        </div>
                    </div>
                </SongPageLeft>
                <SongPageRight></SongPageRight>
            </div>
        </SongPageWrapper>
    )
})
