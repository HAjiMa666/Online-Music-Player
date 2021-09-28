import React, { memo } from 'react'
import { SongWrapper } from './style'

import moment from 'moment'
import { removeSong } from '../../../store/actionCreators';
import { useDispatch } from 'react-redux';


export default memo(function Song(props) {
    const { name, dt, ar, id } = props.info;
    const totalTime = moment.duration(dt, "milliseconds").format("mm:ss");
    const dispatch = useDispatch();
    const removeOneSong = (id) => {
        dispatch(removeSong(id));
    }
    return (
        <SongWrapper>
            <span className="songTitle">{name}</span>
            <span className="singer">{ar[0].name}</span>
            <span className="time">{totalTime}</span>
            <span className="link"></span>
            <span className="delete" onClick={e => removeOneSong(id)}></span>
        </SongWrapper>
    )
})

