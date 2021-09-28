import React, { memo } from 'react'

import resizeImg from "../../utils/resizeImg"
import { getSongDetail, getSongUrl, getSongLyric } from "../../pages/player/store/actionCreators"

import { RankListWrapper } from "./styled"
import { useDispatch } from 'react-redux'

export default memo(function RankList(props) {
    const { name, coverImgUrl, tracks } = props.rankInfo;
    const imgCover = resizeImg(coverImgUrl, 80)
    const true_tracks = tracks === undefined ? [] : tracks;

    const dispatch = useDispatch();
    const playMusic = (item) => {
        dispatch(getSongDetail(item.id));
        dispatch(getSongLyric(item.id));
        dispatch(getSongUrl(item.id));
    }

    return (
        <RankListWrapper>
            <div className="header">
                <span className="cover"><img src={imgCover} alt="" /></span>
                <div className="headerRight">
                    <span className="rankName">{name}</span>
                    <div className="icon">
                        <span className="play_icon"></span>
                        <span className="collect_icon"></span>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    true_tracks.map((item, index) => {
                        if (index < 10) {
                            return (
                                <div className="list_content" key={item.id}>
                                    <span className="No">{index + 1}</span>
                                    <span className="song text-nowrap"><span className="text-nowrap">{item.name}</span></span>
                                    <div className="icon">
                                        <span className="play_icon" onClick={e => { playMusic(item) }}></span>
                                        <span className="add_icon"></span>
                                        <span className="collect_icon"></span>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })
                }

            </div>
        </RankListWrapper >
    )
})


/**
 * 使用useRef的时候,他每次都是返回一个对象,而且是一样的
 * 所以像我上面这么写,是有问题的,你经过多少次循环,他也只会返回最后一次循环拿到的ref对象,所以也就造成了我把鼠标放上去,只有最后一个响应了我
 */

