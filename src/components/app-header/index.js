import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headLink } from "@/common/localdata"

import { Input } from 'antd';
import { SearchOutlined } from "@ant-design/icons"

import {
    HeadWrapper,
    HeaderLeft,
    HeaderRight
} from './style'

export default memo(function ZXAppHeader() {
    const showItem = () => {
        return (
            headLink.map((item) => {
                if (item.title === "商城" || item.title === "音乐人")
                    return <a href={item.path} target="_blank" rel="noreferrer" key={item.path} className="link">{item.title}</a>
                return <NavLink exact to={item.path} key={item.path} className="link">
                    {item.title}
                    <i className="icon sprite_01"></i>
                </NavLink>
            })
        )
    }



    return (
        <HeadWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <NavLink exact to="/" className="sprite_01 logo"></NavLink>
                    <div className="select-list">
                        {showItem()}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search" />
                    <div className="createCenter">创造者中心</div>
                    <div className="loginBtn">登录</div>
                </HeaderRight>
            </div>
            <div className="divder"></div>
        </HeadWrapper>
    )
})
