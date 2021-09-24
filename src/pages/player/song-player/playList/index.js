import React, { memo } from 'react'

import {
    PlayListWrapper,
    PlayListLeft,
    PlayListRight
} from "./style"
import Song from "./songCpn"
import { useSelector } from 'react-redux'

export default memo(function PlayList() {
    const { songInfo } = useSelector(state => ({
        songInfo: state.getIn(["player", "songInfo"]),
    }));
    return (
        <PlayListWrapper className="wrap-v2">
            <PlayListLeft>
                <header>
                    <span className="playList">播放列表 ({songInfo.length})</span>
                    <span className="collect">收藏全部</span>
                    <span className="delete">清除</span>
                </header>
                <div className="songList">
                    {
                        songInfo.map((item, index) => {
                            return (
                                <Song info={songInfo[index]} key={songInfo[index].id} />
                            )
                        })
                    }
                </div>
            </PlayListLeft>
            <PlayListRight></PlayListRight>
        </PlayListWrapper>
    )
})
