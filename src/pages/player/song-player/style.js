import styled from "styled-components"
import playerImg from "../../../assets/img/playbar_sprite.png"
import progressBar from "../../../assets/img/progress_bar.png"
import icon from "../../../assets/img/sprite_icon.png"
import icon2 from "../../../assets/img/sprite_table.png"


const PlayerWrapper = styled.div`
    position: fixed;
    bottom: 0;
    z-index:9999;
    display: flex;
    width: 100vw;
`;

const PlayerLeft = styled.div`
    width: 95%;
    height: 47px;
    background-image: url(${playerImg});
    background-repeat: repeat-x;
    background-position: 0 -6px;
    align-self: flex-end;
    .lyric{
        position: absolute;
        bottom: 47px;
        left:50%;
        display: flex;
        transform: translate(-50%,-50%);
        justify-content: center;
        align-items: center;
        font-size: 20px;
        background-color: rgba(0,0,0,.5);
        color: #fff;
    }
    .content{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .play{
            width: 130px;
            height: 42px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .leftIcon,
            .rightIcon{
                width: 28px;
                height: 28px;
                background-image: url(${playerImg});
            }
            .leftIcon{
                background-position: -2px -128px;
            }
            .rightIcon{
                background-position: -80px -128px;
            }
            .playIcon{
                width: 36px;
                height: 36px;
                background-image: url(${playerImg});
                background-position: -1px  ${props => props.isplay ? "-163px" : "-202px"};
            }
        }
        .songInfo{
            display: flex;
            justify-content: center;
            align-items:center;
            .songCover{
                width: 35px;
                height: 35px;
                background-image:url(${props => props.cover});
                border-radius:5px;
                overflow: hidden;
                margin-right: 10px;
            }
            .song{
                display: flex;
                flex-direction: column;
                justify-content: center;
                .info{
                    display: flex;
                    align-items: center;
                    height: 24px;
                    margin-left: 10px;
                    cursor: pointer;
                    .title{
                        color: #fff;
                    }
                    .singer{
                        margin: 0px 12px;
                        color: #ccc;
                    }
                    .link{
                        width: 15px;
                        height: 15px;
                        background-image: url(${playerImg});
                        background-position: -110px -103px;
                    }
                }
                .progressBar{
                    display: flex;
                    justify-content: center;
                    align-items:flex-end;
                    height: 24px;
                    .sliderBar{
                        width: 466px;
                        margin-bottom: 12px;
                        .ant-slider-rail{
                            height: 9px;
                            background-image: url(${progressBar});
                            background-position: 0 0;
                        }
                        .ant-slider-track{
                            height: 9px;
                            background-image: url(${progressBar});
                            background-position: 0 -65px;
                        }
                        .ant-slider-handle{
                            width: 22px;
                            height: 24px;
                            border: none;
                            background-color: transparent;
                            background-image: url(${icon});
                            background-position: 0 -250px;
                            :focus{
                                box-shadow:none
                            }
                        }
                    }
                    .playTime,.totalTime{
                        width: 40px;
                        height: 20px;
                        color: #fff;
                        margin-bottom: 5px;
                        text-align: center;
                    }
                    i{
                        margin: 0px 2px;
                        margin-bottom: 5px;
                        color: #fff;
                    }
                }
            }
        }
        .feature{
            display: flex;
            margin-left: 20px;
            cursor: pointer;
            .featureLeft{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                .PIPIcon,
                .collectIcon,
                .shareIcon{
                    width: 25px;
                    height: 25px;
                    background-image: url(${icon2});
                }
                .PIPIcon{
                    background-position: -80px -168px;
                }
                .collectIcon{
                    width: 20px;
                    background-position: -20px -168px;
                }
                .shareIcon{
                    height: 20px;
                    background-position: 4px -191px;
                }
            }
            .featureRight{
                margin-left:20px;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                .voiceIcon,
                .pTypeIcon,
                .playListIcon{
                    width: 25px;
                    height: 25px;
                    background-image: url(${playerImg});
                }
                .voiceIcon{
                
                    background-position: -2px -248px;
                }
                .pTypeIcon{
                    background-position: ${props => {
        switch (props.sequence) {
            case 1:
                return "-66px -248px";
            case 2:
                return "-66px -344px";
            default:
                return "-3px -344px";
        }
    }};
                }
                .playListIcon{
                    width: 59px;
                    background-position: -42px -68px;
                    color: #fff;
                    span{
                        position: relative;
                        left: 30px;
                        bottom: -3px;
                    }
                }
            }
        }
    }

`;

const PlayerRight = styled.div`
    position: relative;
    bottom: 0px;
    right: 0px;
    width: 60px;
    height: 60px;
    background-image: url(${playerImg});
    background-position: 0 -385px;
    .lock{
        cursor: pointer;
        position: relative;
        left: 20px;
        top: 2px;
        display: flex;
        width: 15px;
        height: 15px;
        background-image: url(${playerImg});
        background-position: ${props => {
        if (props.islock) {
            return "-103px -383px";
        } else {
            return " -82px -383px";
        }
    }} 
    }
`;

export {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight,
}