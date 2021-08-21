import styled from "styled-components"
import cover from "../../assets/img/sprite_cover.png"
import icon from "../../assets/img/sprite_02.png"


const RankListWrapper = styled.div`
    width: 230px;
    height: 500px;
    .header{
        height: 120px;
        display: flex;
        .cover{
            width: 80px;
            height: 80px;
            background-image: url(${cover});
            background-position: -145px -57px;
            margin: 20px 0px 0px 20px;
        }
        .headerRight{
            display: flex;
            flex-direction: column;
                .rankName{
                font-size: 18px;
                font-weight: bolder;
                margin: 20px 0px 0px 20px;
            }
            .icon{
                display: flex;
                    .play_icon{
                    width: 25px;
                    height: 25px;
                    background-image: url(${icon});
                    background-position: -266px -205px;
                    margin: 10px 0px 0px 20px;
                    :hover{
                        background-position: -266px -235px;
                    }
                }
                .collect_icon{
                    width: 25px;
                    height: 25px;
                    background-image: url(${icon});
                    background-position: -300px -207px;
                    margin: 11px 0px 0px 12px;
                    :hover{
                        background-position: -300px -237px;
                    }
                }
            }
            
        }
    }

    .list{
        width: 220px;
        display: flex;
        flex-direction: column;
        .list_content{
            width: 220px;
            height: 32px;
            display: flex;
            &:hover .icon{
                display: flex !important;
            }
            .No{
                display: flex;
                width: 30px;
                height: 30px;
                line-height: 30px;
                margin: 0px 10px;
            }
            .song{
                flex: 1;
                display: flex;
                align-items: center;
            }
            .icon{
                display: flex;
                display: none;
                    .play_icon{
                   
                    width: 20px;
                    height: 28px;
                    background-image: url(${icon});
                    background-position: -267px -258px;
                }
                .collect_icon{
                    width: 20px;
                    background-image: url(${icon});
                    background-position: -297px -258px;
                }
            }
           
        }
    }
`;

export {
    RankListWrapper
}