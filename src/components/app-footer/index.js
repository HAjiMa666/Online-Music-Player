import React, { memo } from 'react'


import { footerLeftLink, footerRightLink } from '../../common/localdata'

import {
    FooterWrapper,
    FooterLeft,
    FooterRight
} from "./style"

export default memo(function ZXAppFooter() {

    // 尾部的顶部链接
    const footerLink = () => {
        return (
            footerLeftLink.map((item, index) => {
                if (index <= footerLeftLink.length - 2)
                    return (
                        <span key={item.title}>
                            <a href={item.link} key={item.title}>{item.title}</a>
                            &nbsp;
                            <i>|</i>
                            &nbsp;
                        </span>
                    )
                else
                    return <a href={item.link} key={item.title}>{item.title}</a>
            })
        )
    }

    return (
        <FooterWrapper>
            <div className="content wrap-v2">
                <FooterLeft>
                    <div>{footerLink()}</div>
                    <div>
                        <span>CopyRight &copy; 2021 CodeSpirit的仿网易云&nbsp;</span>
                        <span>新手上路 第一次写</span>
                    </div>
                    <div>
                        <span>违法和不良消息举报电话:XXXXXX&nbsp;</span>
                        <span>举报邮箱:XXX@XXX.com&nbsp;</span>
                    </div>
                    <div>
                        <span>XXXXXXX&nbsp;</span>
                        <span>XXXXXXX&nbsp;</span>
                        <span>XXXXXXX&nbsp;</span>
                    </div>
                </FooterLeft>
                <FooterRight>
                    <div className="right_link">
                        <span>
                            <a key={footerRightLink[0].link} href={footerRightLink[0].link} rel="noreferrer" target="_blank" className="footer02" style={{ backgroundPosition: "-63px -456.5px" }}>Amped studio</a>
                            <i className="footer01" style={{ backgroundPosition: "2px -105px" }}></i>
                        </span>
                        <span >
                            <a key={footerRightLink[1].link} href={footerRightLink[1].link} rel="noreferrer" target="_blank" className="footer02" style={{ backgroundPosition: "-60px -101px" }}>用户认证</a>
                            <i className="footer01" style={{ backgroundPosition: "10px -86px" }}></i>
                        </span>
                        <span >
                            <a key={footerRightLink[2].link} href={footerRightLink[2].link} rel="noreferrer" target="_blank" className="footer02" style={{ backgroundPosition: "0 0" }}>独立音乐人</a>
                            <i className="footer01" style={{ backgroundPosition: "8px 4px" }}></i>
                        </span>
                        <span >
                            <a key={footerRightLink[3].link} href={footerRightLink[3].link} rel="noreferrer" target="_blank" className="footer02" style={{ backgroundPosition: "-60px -50px" }}>赞赏</a>
                            <i className="footer01" style={{ backgroundPosition: "10px -52px" }}></i>
                        </span>
                        <span>
                            <a key={footerRightLink[4].link} href={footerRightLink[4].link} rel="noreferrer" target="_blank" className="footer02" style={{ backgroundPosition: "0 -101px" }}>视频奖励</a>
                            <i className="footer01" style={{ backgroundPosition: "7px -70px" }}></i>
                        </span>
                    </div>
                </FooterRight>
            </div>
        </FooterWrapper >
    )
})
