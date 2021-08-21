import React, { memo, useCallback, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannersAction } from "../../store/actionCreators"

import downPic from "@/assets/img/download.png"


import { Carousel } from 'antd';
import {
    TopBannerWrapper,
    BannerLeft,
    BannerRight,
    ChangeButton,
} from "./styles"
import { useRef } from 'react';


export default memo(function TopBanners() {



    // 将组件与redux联系起来,获取数据和操作
    // 通过useSelector拿取数据 
    // 这个shallowEqual是用来性能优化的,如果不加的话,他每次会进行一个'==='比较,而函数的返回每次都是返回一个新的对象字面量,所以不可能相等的
    // 所以每次都会引起组件的重新渲染，降低性能
    // 而引入了shallowEqual，会进行浅层比较，所以在两次引用对象的时候就不会发生变化
    const state = useSelector(state => ({
        // 可以使用immutable中的getin方法,
        // topBanners: state.get("recommend").get("topBanners"),
        topBanners: state.getIn(["recommend", "topBanners"]),
    }), shallowEqual)

    const BannerRef = useRef();
    const dispatch = useDispatch();
    // 在useEffect发送网络请求
    useEffect(() => {
        dispatch(getTopBannersAction());
    }, [dispatch])
    const [index, setIndex] = useState(0);


    const bannerChange = useCallback((from, to) => {
        setIndex(to);
    }, [])

    const { topBanners } = state;
    const currentBg = `${topBanners[index] && topBanners[index].imageUrl}?imageView&blur=40x20`

    return (
        <TopBannerWrapper bgImg={currentBg}>
            <div className="content wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" className="topBanners" autoplay ref={BannerRef} beforeChange={bannerChange}>
                        {
                            topBanners.map((item) => {
                                return <div key={item.targetId}><img src={item.imageUrl} alt={item.typeTitle} className="banner" /></div>
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <div><img src={downPic} alt="" /></div>
                </BannerRight>
                <ChangeButton>
                    <span className="changeBtnLeft" onClick={e => BannerRef.current.prev()}>播放上一张</span>
                    <span className="changeBtnRight" onClick={e => BannerRef.current.next()}>播放下一张</span>
                </ChangeButton>
            </div>
        </TopBannerWrapper>
    )
})
