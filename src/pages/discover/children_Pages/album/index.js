import React, { memo } from 'react'
import AllAlbum from "./c-cpn/all-album"
import HotAlbum from './c-cpn/hot-album'
import { AlbumWrapper } from './style'

export default memo(function ZXAlbum() {
    return (
        <AlbumWrapper>
            <div className="wrap-v1">
                <HotAlbum />
                <AllAlbum />
            </div>
        </AlbumWrapper>
    )
})
