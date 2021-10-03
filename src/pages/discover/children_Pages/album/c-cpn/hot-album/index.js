import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Album from '../../../../../../components/album';
import { ZXHotAlbumWrapper, ZXHotAlbum } from './style'
import OtherThemeHeader from '../../../../../../components/theme_header_other'

import resizeImg from "../../../../../../utils/resizeImg"
import { useDispatch } from 'react-redux';
import { getHotAlbum } from '../../store/actionsCreators';

export default memo(function HotAlbum() {
    const dispatch = useDispatch();
    const { hotAlbum } = useSelector(state => ({
        hotAlbum: state.getIn(["album", "hotAlbum"]),
    }))
    useEffect(() => {
        dispatch(getHotAlbum())
    }, [dispatch])
    return (
        <ZXHotAlbumWrapper>
            <OtherThemeHeader name="热门新碟" />
            <ZXHotAlbum>{
                hotAlbum.map((item, index) => {
                    if (index >= 10) return null;
                    return (
                        <Album name={item.name}
                            picurl={resizeImg(item.picUrl, 130)}
                            singer={item.artist.name}
                            size={130}
                            key={item.id} />
                    )
                })
            }
            </ZXHotAlbum>
        </ZXHotAlbumWrapper>
    )
})


