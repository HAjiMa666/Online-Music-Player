import React, { memo } from 'react'
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongCardAction } from "../../store/actionCreators"
import formatNum from "@/utils/formartNum"
import resizeImg from "@/utils/resizeImg"


import Header from "@/components/theme_header";
import SongCard from "@/components/song_card";
import {
    HrecoWrapper
} from "./style"


export default memo(function HRec() {
    const dispatch = useDispatch();
    const { songCards } = useSelector(state => ({
        songCards: state.getIn(["recommend", "songCards"])
    }), shallowEqual);
    useEffect(() => {
        dispatch(getSongCardAction(8));
    }, [dispatch])

    const CardInfo = () => {
        return (
            songCards.map((item) => {
                return (
                    <div className="song" key={item.id}>
                        <SongCard img={resizeImg(item.picUrl, 140)} description={item.name} id={item.id} playcount={formatNum(item.playCount)} name={item.name} />
                    </div>
                )
            })
        )
    }

    return (
        <HrecoWrapper>
            <div className="content wrap-v2">
                <Header title="热门推荐" catogory={["华语", "流行", "摇滚", "民谣", "电子"]} />
                <div className="card wrap-v3">
                    {CardInfo()}
                </div>
            </div>
        </HrecoWrapper>
    )
})
