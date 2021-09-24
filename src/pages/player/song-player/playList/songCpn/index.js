import React, { memo } from 'react'
import { SongWrapper } from './style'

import moment from 'moment'


export default memo(function Song(props) {
    const { al, dt, ar } = props.info;
    const totalTime = moment.duration(dt, "milliseconds").format("mm:ss");
    return (
        <SongWrapper>
            <span className="songTitle">{al.name}</span>
            <span className="singer">{ar[0].name}</span>
            <span className="time">{totalTime}</span>
            <span className="link"></span>
        </SongWrapper>
    )
})

