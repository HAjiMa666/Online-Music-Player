import React, { Fragment, memo } from 'react'

import {
    HeaderWrapper,
    HeaderCag,
    HeaderTitle,
    HeaderMore
} from "./style"


// 用于展示分类的
function Cag(props) {
    const { sort } = props;
    return (
        <div>
            {
                sort.map((item) => {
                    return (
                        <Fragment key={item}>
                            <a href="#/">{item}</a>
                            &nbsp;
                            <i>|</i>
                            &nbsp;
                        </Fragment>
                    )
                })
            }
        </div>
    )
}



export default memo(function ThemeHeader(props) {
    const { title } = props

    return (
        <HeaderWrapper>
            <HeaderTitle>
                <span className="sprite"></span>
                {title}
            </HeaderTitle>
            <HeaderCag>
                {props.catogory && <Cag sort={props.catogory} />}
            </HeaderCag>
            <HeaderMore>更多<span className="sprite"></span></HeaderMore>
        </HeaderWrapper>
    )
})
