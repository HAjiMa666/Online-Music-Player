import React, { memo } from 'react'
import {
    SongWrapper,
    Card,
} from "./style"


export default memo(function SongCard(props) {
    const { img, description, playcount, name } = props;
    return (
        <SongWrapper>
            <Card>
                <span className="songImg">
                    <img src={img} alt={description} />
                    <span className="playcount"><i className="headphoneIcon"></i>{playcount}<i className="playIcon"></i></span>
                </span>
                <span className="description">{name}</span>
            </Card>
        </SongWrapper>
    )
})
