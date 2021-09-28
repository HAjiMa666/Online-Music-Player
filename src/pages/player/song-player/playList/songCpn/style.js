import styled from "styled-components";
import icon from "../../../../../assets/img/playbar_sprite.png";
import icon2 from "../../../../../assets/img/playlist.png";



const SongWrapper = styled.div`
    display: flex;
    cursor: pointer;
    height: 25px;
    position: relative;
    &:hover{
        background-color: #101416;
    }

    &.active{
        background-color: #101416;
        &:before{
            content: "";
            position: absolute;
            background-image: url(${icon2});
            background-position: -182px -1px;
            width: 12px;
            height: 12px;
            left: 20px;
            bottom: 5px;
        }
    }
    .songTitle,
    .singer,
    .time
    {
        align-self: center;
    }
    .songTitle{
        margin-left: 40px;
        flex: 1;
    }
    .singer{
        width:100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .time{
        width: 50px;
    }
    .link{
        background-image: url(${icon});
        background-position: -129px -97px;
        width: 20px;
        text-align: center;
    }
    .delete{
        width: 20px;
        height: 20px;
        position: absolute;
        left: 440px;
        top: 2px;
        background-image: url(${icon2});
        background-position: -50px 3px;
    }
`;


export {
    SongWrapper
}