import React, { memo } from 'react'


import {
    AlbumWrapper
} from "./style"




export default memo(function Album(props) {
    const { name, picurl, singer, size } = props;
    let [width, height, coverPosition, iconPositionX, iconPositionY] = [0, 0, 0, 0, 0];
    if (size === 100) {
        width = `118px`;
        height = `100px`;
        coverPosition = "-570px";
        iconPositionX = `12px`
        iconPositionY = `-51px`
    }
    if (size === 130) {
        width = "153px";
        height = "130px";
        coverPosition = "-845px";
        iconPositionX = `-43px`
        iconPositionY = `-53px`
    }
    return (
        <AlbumWrapper
            picurl={picurl}
            width={width}
            height={height}
            coverPosition={coverPosition}
            iconPositionX={iconPositionX}
            iconPositionY={iconPositionY}>
            <div className="content">
                <span className="albumCover"></span>
                <span className="songTitle">{name}</span>
                <span className="author">{singer}</span>
            </div>
        </AlbumWrapper>
    )
})
