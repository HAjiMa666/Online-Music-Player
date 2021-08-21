import React, { memo } from 'react'
import { useRef } from 'react'

import resizeImg from "../../utils/resizeImg"

import { RankListWrapper } from "./styled"

export default memo(function RankList(props) {
    const { name, coverImgUrl, tracks } = props.rankInfo;
    const imgCover = resizeImg(coverImgUrl, 80)

    return (
        <RankListWrapper>
            <div className="header">
                <a href="" className="cover"><img src={imgCover} alt="" /></a>
                <div className="headerRight">
                    <a className="rankName">{name}</a>
                    <div className="icon">
                        <a href="" className="play_icon"></a>
                        <a href="" className="collect_icon"></a>
                    </div>
                </div>
            </div>
            <div className="list">
                {
                    tracks.map((item, index) => {
                        if (index < 10) {
                            return (
                                <div className="list_content" id={item.name}>
                                    <span className="No">{index + 1}</span>
                                    <a className="song text-nowrap"><span className="text-nowrap">{item.name}</span></a>
                                    <div className="icon" id={item.name}>
                                        <a href="" className="play_icon"></a>
                                        <a href="" className="add_icon"></a>
                                        <a href="" className="collect_icon"></a>
                                    </div>
                                </div>
                            )
                        }
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

