import styled from 'styled-components'
// 如果要在styled-componnets中引入图片,必须要使用import将这个资源导入进来
import lastLinkPic from "@/assets/img/sprite_01.png"

const HeadWrapper = styled.div`
    height: 70px;
    background-color: #242424;

    .content{
        height: 70px;
        background-color: #242424;
        display: flex;
    }

    .divder{
        height: 5px;
        min-width: 1100px;
        background-color: #c20c0c;
    }
`

const HeaderLeft = styled.div`
        flex: 4;
        height: 100%;
        display: flex;
        .logo{
            width: 177px;
            height: 69px;
            background-position: 0 0;
            }
        .select-list{
            flex: 1;
            height: 100%;
            display: flex;
                    .link{
                    flex:1;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.2s;
                    &:hover{
                        text-decoration: none;
                        background-color: #000;
                    }
                }
                .link:last-child{
                    position: relative;
                    ::after{
                        position: absolute;
                        content: "";
                        width: 28px;
                        height: 19px;
                        background-image: url(${lastLinkPic});
                        background-position: -190px 0;
                        top: 13px;
                        right: 6px;
                    }
                }
                .active{
                    background-color: #000;
                    position: relative;

                   .icon{
                       background-color: #000;
                        display: block;
                        width: 12px;
                        height: 7px;
                        content: "";
                        position: absolute;
                        background-position: -226px 0;
                        bottom: 0px;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
        }
        

`;
const HeaderRight = styled.div`
    height: 100%;
    display: flex;
    flex:1;
    justify-content: center;
    align-items: center;
    .search{
        width: 158px;
        height: 32px;
        border-radius: 32px;
    }
    .createCenter{
        color: #fff;
        width: 90px;
        height: 32px;
        border: 1px solid #fff;
        border-radius:32px;
        text-align: center;
        line-height: 32px;
        margin: 0px 10px;
        cursor: pointer;
    }
    .loginBtn{
        color: #ccc;
        width: 28px;
        height: 12px; 
        cursor: pointer;
    }
`;


export {
    HeadWrapper,
    HeaderLeft,
    HeaderRight
}