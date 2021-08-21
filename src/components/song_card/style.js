import styled from "styled-components"
import cover from "../../assets/img/sprite_cover.png"
import smallIcon from "../../assets/img/sprite_icon.png"

const SongWrapper = styled.div`
    
`;
const Card = styled.div`
    position: relative;
    width: 140px;

    .songImg{
        position: relative;
        z-index:1;
            ::before{
            width: 100%;
            height: 140px;
            content: "";
            position: absolute;
            left: 0;
            top: -62px;
            background: url(${cover}) no-repeat;
            background-position: 0 0;
            z-index:1;
    }
        .headphoneIcon{
            display: flex;
            position: relative;
            left: -5px;
            top: 3px;
            width: 18px;
            height: 18px;
            background-image: url(${smallIcon});
            background-position: -1px -23px;
        }
        .playIcon{
            display: flex;
            position: relative;
            left: 46px;
            top: 0px;
            width: 18px;
            height: 18px;
            background-image: url(${smallIcon});
            background-position: 0px -60px;
        }
        .playcount{
        color: #fff;
        position: absolute;
        left: 16px;
        bottom: -64px;
        display: flex;
        z-index:1;
        ::before{
            content: "";
            position: absolute;
            width: 140px;
            left: -16px;
            top: -7px;
            height: 27px;
            background: url(${cover}) no-repeat center;
            background-position: 0 -537px;
            z-index:-1;
        }
    }
    }
  
`;



export {
    SongWrapper,
    Card,
}