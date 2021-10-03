import React, { Fragment, memo, useEffect } from 'react'

import { LyricWrapper } from './style'

import formatLyric from "../../../../../utils/formatLyric"
import { useRef } from 'react';

export default memo(function Lyric(props) {
    const { songTitle, lyric, lyricIndex } = props;
    const newLyric = formatLyric(lyric);
    const lyricPageRef = useRef();
    useEffect(() => {
        [...lyricPageRef.current.children].forEach(item => {
            item.classList.remove("active");
        });
        [...lyricPageRef.current.children].forEach((item, index) => {
            if (index / 2 === lyricIndex)
                item.classList.add("active");
        });
        let lyricOffsetTop = lyricPageRef.current.children[lyricIndex * 2] && lyricPageRef.current.children[lyricIndex * 2].offsetTop;
        const lyricPageClientHeight = lyricPageRef.current.clientHeight;
        lyricPageRef.current.scrollTop = lyricOffsetTop - lyricPageClientHeight / 2;
    }, [lyricIndex])
    return (
        <LyricWrapper>
            <div className="songTitle">{songTitle}</div>
            <div className="lyricPage" ref={lyricPageRef}>
                {
                    newLyric.map(item => {
                        return (
                            <Fragment key={item.content + item.time}>
                                <span>{item.content}</span>
                                <br />
                            </Fragment>
                        )
                    })
                }
            </div>
        </LyricWrapper>
    )
})
