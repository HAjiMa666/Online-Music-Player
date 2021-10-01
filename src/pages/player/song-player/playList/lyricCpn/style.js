import styled from "styled-components";

const LyricWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .songTitle{
        display: flex;
        align-items: center;
        height: 50px;
        font-size: 20px;
    }
    .lyricPage{
        width: 100%;
        flex: 1;
        background-color: rgba(53, 50, 55,.6);
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: auto;
        padding-top: 30px;
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
        span{
            transition: font-weight .4s ease-in-out,
                        font-size .2s ease-out,
                        color .4s ease-in-out; 
        }
    }
    .active{
        font-size: 14px;
        font-weight: bolder;
        color: orange;
    }
`;

export {
    LyricWrapper,
}