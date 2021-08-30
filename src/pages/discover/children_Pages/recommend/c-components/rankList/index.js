import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getallRankAcrtion, getRankListsAction } from "../../store/actionCreators"

import {
    Content,
    RankListWrapper
} from "./style"

import Header from "@/components/theme_header"
import RanKListCpn from '../../../../../../components/rankList';

export default memo(function RankList() {
    const dispatch = useDispatch();
    const [rankArr, setrankArr] = useState([]);
    const { allRank, upRank, newRank, originalRank } = useSelector(state => ({
        allRank: state.getIn(["recommend", "allRank"]),
        upRank: state.getIn(["recommend", "upRank"]),
        newRank: state.getIn(["recommend", "newRank"]),
        originalRank: state.getIn(["recommend", "originalRank"]),
    }), shallowEqual)

    const getNewArr = useCallback(() => {
        let newArr = [];
        for (let i = 0; i < 3; i++) {
            newArr[i] = allRank[i] !== undefined && allRank[i].id;
        }
        return newArr;
    }, [allRank])
    useEffect(() => {
        setrankArr(getNewArr())
    }, [getNewArr])

    useEffect(() => {
        dispatch(getallRankAcrtion())
    }, [dispatch])

    useEffect(() => {
        dispatch(getRankListsAction(rankArr[0]));
        dispatch(getRankListsAction(rankArr[1]));
        dispatch(getRankListsAction(rankArr[2]));
        console.log(rankArr);
    }, [dispatch, rankArr])

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
