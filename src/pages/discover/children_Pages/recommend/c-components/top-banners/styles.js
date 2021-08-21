import styled from "styled-components";
import radioBtn from "@/assets/img/radio_slide.png"

const TopBannerWrapper = styled.div`
    background: url(${props => props.bgImg});
    background-position: center center;
    background-size: 6000px;
    .content{
        display: flex;
        height: 285px;
    }
`;
const BannerLeft = styled.div`
    .topBanners{
        width: 730px;
        .banner{
        width: 730px;
        height: 284px;
    }
    }
`;
const BannerRight = styled.div`
    height: 284px;
    overflow: hidden;
`;
const ChangeButton = styled.div`
    position: relative;
    height: 100%;
    .changeBtnLeft{
        text-indent:-9999px;
        position: absolute;
        transform: translate(-1100px,100px);
        width: 30px;
        height: 50px;
        background-color: red;
        background: url(${radioBtn}) no-repeat;
        background-position: 0 -20px;
        transition: all 0.2s;
        :hover{
            background-color: #ccc;
        }
    }
    .changeBtnRight{
        text-indent:-9999px;
        width: 30px;
        height: 50px;
        background: url(${radioBtn}) no-repeat;
        position: absolute;
        background-position: -20px -20px;
        transform: translate(50px,100px);
        transition: all 0.2s;
        :hover{
            background-color: #ccc;
        }
    }
`;

export {
    TopBannerWrapper,
    BannerLeft,
    BannerRight,
    ChangeButton
}