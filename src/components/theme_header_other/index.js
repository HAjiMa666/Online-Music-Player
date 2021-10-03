import React, { memo, Fragment } from 'react'
import { OtherThemeHeaderWrapper, HeaderCag } from "./style"

export default memo(function OtherThemeHeader(props) {
    const { name } = props;
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
    return (
        <OtherThemeHeaderWrapper>
            <h1>{name}</h1>
            <HeaderCag>
                {props.catogory && <Cag sort={props.catogory} />}
            </HeaderCag>
        </OtherThemeHeaderWrapper>
    )
})
