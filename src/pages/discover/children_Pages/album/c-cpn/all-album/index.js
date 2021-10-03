import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllAlbum } from '../../store/actionsCreators';

import Album from '../../../../../../components/album';
import { ZXAllAlbumWrapper, ZXAllAlbum } from './style'
import OtherThemeHeader from "../../../../../../components/theme_header_other"
import { Pagination } from 'antd';

import resizeImg from "../../../../../../utils/resizeImg"

export default memo(function AllAlbum() {
    const { allAlbum } = useSelector(state => ({
        allAlbum: state.getIn(["album", "allAlbum"]),
    }), shallowEqual)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllAlbum(35));
    }, [dispatch])

    const changeAllAlbum = (page, pageSize) => {
        dispatch(getAllAlbum(pageSize, page))
    }
    return (
        <ZXAllAlbumWrapper>
            <OtherThemeHeader name="全部新碟" catogory={["全部", "华语", "欧美", "韩国", "日本"]} />
            <ZXAllAlbum>
                {
                    allAlbum.map(item => {
                        return (
                            <Album name={item.name}
                                picurl={resizeImg(item.picUrl, 130)}
                                singer={item.artist.name}
                                size={130}
                                key={item.id} />
                        )
                    })
                }
            </ZXAllAlbum>
            <Pagination total={500}
                onChange={(page, pageSize) => changeAllAlbum(page, pageSize)}
                defaultPageSize={35} />
        </ZXAllAlbumWrapper>
    )
});



