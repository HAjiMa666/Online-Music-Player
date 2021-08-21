import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getallRankAcrtion, getRankListsAction } from "../../store/actionCreators"

import {
    Content,
    RankListWrapper
} from "./style"

import Header from "@/components/theme_header"
import RanKListCpn from '../../../../../../components/rankList';

export default memo(function RankList() {
    const rankArr = [];

    const dispatch = useDispatch();

    const { allRank, upRank, newRank, originalRank } = useSelector(state => ({
        allRank: state.getIn(["recommend", "allRank"]),
        upRank: state.getIn(["recommend", "upRank"]),
        newRank: state.getIn(["recommend", "newRank"]),
        originalRank: state.getIn(["recommend", "originalRank"]),
    }), shallowEqual)
    useEffect(() => {
        dispatch(getallRankAcrtion())
    }, [dispatch])

    useEffect(() => {
        for (let i = 0; i < rankArr.length; i++) {
            dispatch(getRankListsAction(rankArr[i]));
        }
    }, [dispatch])



    allRank.slice(0, 3).map((item, index) => {
        rankArr[index] = item.id
        return "";
    })


    return (
        <RankListWrapper>
            <div className="wrap-v2">
                <Header title="榜单" />
                <Content>
                    <RanKListCpn rankInfo={upRank} />
                    <RanKListCpn rankInfo={newRank} />
                    <RanKListCpn rankInfo={originalRank} />
                </Content>
            </div>
        </RankListWrapper>
    )
})
