import styled from "styled-components"
import icon1 from "../../../../assets/img/sprite_icon2.png"

const PlayListWrapper = styled.div`
    position: absolute;
    color: #fff;
    height: 300px;
    bottom: 48px;
    margin: 0 auto;
    color: #fff;
    background-color: #ccc;
    display: flex;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    box-shadow: 
                0px 2px 2px rgba(0,0,0,.3),
                0px 4px 4px rgba(0,0,0,.3),
                0px 8px 8px rgba(0,0,0,.3);
`;
const PlayListLeft = styled.div`
    flex: 2;
    background-color:#1b2225;
    opacity: 0.9;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        background-color: #1f1f1f;
        .playList{
            font-size: 18px;
            flex: 1;
            padding: 10px;
            margin-left:20px;
        }
        .collect,
        .delete{
            position: relative;
            align-self: center;
            text-align: center;
            font-size: 13px;
            ::before{
                display: inline-block;
                position: absolute;
                content: "";
                width: 20px;
                height: 20px;
                background-image: url(${icon1});
            }
        }
        .collect{
            width: 80px;
            ::before{
                left: -18px;
                background-position: -45px -86px;
            }
            ::after{
                content: "|";
                font-weight: bolder;
                margin: 0px 10px;
            }
        }
        .delete{
            cursor: pointer;
            width: 80px;
            ::before{
                width: 13px;
                height: 15px;
                left: 10px;
                background-position: 0px -283px;
            }
        }
    }
    .songList{
        overflow: auto;
        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-track { /*滚动条轨道属性*/
            background-color: #0e1213;
        }
        &::-webkit-scrollbar-thumb {/*滚动条内滑块属性*/
            border-radius:4px;
            background-color: #ccc;
            height: 10px;
        } 
    }
`;

const PlayListRight = styled.div`
    height: 300px;
    flex: 1;
    background-color: #223238;
`;

export {
    PlayListWrapper,
    PlayListLeft,
    PlayListRight
}