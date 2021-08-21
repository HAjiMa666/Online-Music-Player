import styled from 'styled-components';
import btnIcon from "../../../../../../assets/img/radio_slide.png"

const NewAlbumsWrapper = styled.div`

`;
const NewAlbums = styled.div`
    position: relative;
    padding: 10px 20px;
    width: 700px;
    height: 200px;
    margin:20px 0px;
    transform: translateX(-5px);
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    .prev{
            cursor: pointer;
            width: 20px;
            height: 30px;
            position: absolute;
            content: "";
            top: 74px;
            left: 5px;
            background-image: url(${btnIcon});
            background-position: 0 -35px;
    }
    .next{
            cursor: pointer;
            width: 20px;
            height: 30px;
            position: absolute;
            content: "";
            top: 70px;
            right: 2px;
            background-image: url(${btnIcon});
            background-position: -31px -35px;
    }

`;

const BannerAlbums = styled.div`
    transform: translateX(5px);
    height: 186px;
    display: grid !important;
    grid-template-columns: repeat(5,1fr);
    place-content: center;
`

export {
    NewAlbumsWrapper,
    NewAlbums,
    BannerAlbums,
}