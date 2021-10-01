import styled from "styled-components";

import cover from "../../../assets/img/sprite_cover.png"
import icon from "../../../assets/img/sprite_icon2.png"
import button from "../../../assets/img/sprite_button.png"


const SongPageWrapper = styled.div`
    .wrap-v1{
        border: 2px solid #ccc;
    }
`

const SongPageLeft = styled.section`
    display: flex;
    margin-top: 20px;
    .left{
        align-self: flex-start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 40px 30px 0px 0px; 
        .albumCover{
            width: 206px;
            height: 206px;
            ::before{
                content: "";
                width: 206px;
                height: 206px;
                background-image: url(${cover});
                background-position: -144px -583px;
                position: absolute;
                z-index: 1;
                left: -35px;
                top: -32px;
            }
            position: relative;
            z-index:0;
        }
        a{
            transform: translate(-40px,-20px);
            color: blue;
            ::before{
                display: inline-block;
                content: "";
                width: 20px;
                height:18px;
                background-image: url(${icon});
                background-position: -31px -860px;
            }
        }
    }

    .right{
        display: flex;
        flex-direction: column;
        .songInfo{
            display: flex;
            justify-content: center;
            flex-direction: column;
            .head{
                display: flex;
                align-items: center;
                .songType{
                width: 60px;
                height: 30px;
                background-image: url(${icon});
                background-position: 0 -459px;
                }
                .songTitle{
                    margin: 0px 20px; 
                    font-size: 24px;
                }
                .mvIcon{
                    width: 21px;
                    height: 20px;
                    background-image: url(${icon});
                    background-position: 0 -18px;
                }
            }
            .footer{
                .singer,
                .album{
                    color: #ccc;
                    a{
                        color: blue;
                    }
                }

            }
        }
        .operatorIcon{
            width: 421px;
            justify-content: space-between;
            display: flex;
            .play{
                display: flex;
                overflow: hidden;
                border-radius: 5px;
                .playIcon{
                    width: 66px;
                    height: 31px;
                    background-image: url(${button});
                    background-position: -6px -634px;
                    span{
                        position: relative;
                        left: 35px;
                        top:4px;
                        font-weight: 600;
                        color: #fff;
                    }
                }
                .add{
                    width: 31px;
                    height: 31px;
                    background-image: url(${button});
                    background-position: 0px -1589px;
                }
            }
            .collect,
            .share,
            .download,
            .comment{
                border: 1px solid #ccc;
                border-radius:5px;
                width: 56px;
                height: 31px;
                background-image: url(${button});
                span{
                    position: relative;
                    left: 26px;
                    top: 6px;
                }
            }
            .collect{
                background-position: 0px -977px;
            }
            .share{
                background-position: 0px -1268px;
            }
            .download{
                background-position: 0px -2762px;
            }
            .comment{
                background-position: 0px -1466px;
            }
        }
        .lyric{
            button{
                position: relative;
                left: -7px;
                top: 0;
            }
        }
    }
`

const SongPageRight = styled.section`

`


export {
    SongPageWrapper,
    SongPageLeft,
    SongPageRight,
}