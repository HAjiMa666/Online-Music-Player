import styled from "styled-components";
import icon from "../../../../../assets/img/playbar_sprite.png";

const SongWrapper = styled.div`
    display: flex;
    cursor: pointer;
    height: 25px;
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

    &:hover{
        background-color: #101416;
    }
`;


export {
    SongWrapper
}