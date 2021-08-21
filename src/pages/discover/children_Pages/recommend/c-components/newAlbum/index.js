import React, { memo } from 'react'

import {
    NewAlbumsWrapper,
    NewAlbums,
    BannerAlbums
} from "./style"
import { getNewAlbumsAction } from "../../store/actionCreators"
import resizeImg from "@/utils/resizeImg"

import { Carousel } from 'antd';
import Header from "@/components/theme_header"
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Album from '../../../../../../components/album';
import { useRef } from 'react';


export default memo(function NewAlbum() {

    const albumRef = useRef();
    const dispatch = useDispatch();
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend", "newAlbums"])
    }), shallowEqual);
    useEffect(() => {
        dispatch(getNewAlbumsAction());
    }, [dispatch])


    const showAlbums = () => {
        return (
            [0, 1].map((item) => {
                return (
                    <BannerAlbums className="banner_albums" key={item}>
                        {
                            /**
                             * @return {Album} 返回封装好的组件,name picurl,singer,size,key都是必传参数
                             * size是用来确定该显示大封面还是小封面,目前只有两种可以选择,100或130,请确保picUrl
                             */
                            newAlbums.slice(5 * item, 5 * (item + 1)).map((item) => {
                                return (
                                    <Album
                                        name={item.name}
                                        picurl={resizeImg(item.picUrl, 100)}
                                        singer={item.artist.name}
                                        size={100}
                                        key={item.id} />
                                )
                            })
                        }
                    </BannerAlbums>
                )
            })
        )
    }
    return (
        <div className="new-Album wrap-v2">
            <NewAlbumsWrapper>
                <Header title="新碟上架" />
                <NewAlbums>
                    <button className="prev" onClick={e => albumRef.current.prev()}></button>
                    <Carousel
                        className="carousel"
                        dots={false} ref={albumRef}
                        speed={1000}>
                        {showAlbums()}
                    </Carousel>
                    <button className="next" onClick={e => albumRef.current.next()}></button>
                </NewAlbums>
            </NewAlbumsWrapper>
        </div>
    )
})
