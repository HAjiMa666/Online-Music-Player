import React, { memo } from 'react'
import { HashRouter, NavLink } from "react-router-dom"

import { renderRoutes } from "react-router-config"
import { headChildLink } from "../../common/localdata"

import {
    HeadChildLink,
    DiscoverWrapper,
    DiscoverContent
} from "./style"


export default memo(function ZXDiscover(props) {
    console.log(props);
    const { route } = props;

    const childrenLink = () => {
        return (
            headChildLink.map((item) => {
                return <NavLink to={item.path} key={item.path}>{item.title}</NavLink>
            })
        )
    }
    return (
        <HashRouter>
            <DiscoverWrapper>
                {/* 设置Discover的子路由 */}
                <div style={{ backgroundColor: "#c20c0c" }}>
                    <div className="content wrap-v2">
                        <HeadChildLink>
                            {childrenLink()}
                        </HeadChildLink>
                    </div>
                </div>
                <DiscoverContent>
                    {renderRoutes(route.routes)}
                </DiscoverContent>

            </DiscoverWrapper>
        </HashRouter>

    )
})
