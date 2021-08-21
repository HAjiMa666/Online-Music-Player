import Item from 'antd/lib/list/Item';
import React, { memo } from 'react'


import {
    SongWrapper,
    Card,
} from "./style"


export default memo(function SongCard(props) {
    const { img, description, id, playcount, name } = props;
    return (
        <SongWrapper>
            <Card>
                <a href="" className="songImg">
                    <img src={img} alt={description} />
                    <span className="playcount"><i className="headphoneIcon"></i>{playcount}<i className="playIcon"></i></span>
                </a>
                <span className="description">{name}</span>
            </Card>
        </SongWrapper>
    )
})
