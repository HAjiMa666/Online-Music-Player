import styled from "styled-components"
import footer01 from "@/assets/img/sprite_footer_01.png"
import footer02 from "@/assets/img/sprite_footer_02.png"


const FooterWrapper = styled.div`
    height: 179px;
    background-color: #f2f2f2;
    .content{
        height: 100%;
        display: flex;
     
    }
`;

const FooterLeft = styled.div`
    height: 100%;
    margin-right:20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;

const FooterRight = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    .right_link{
            display: flex;
            justify-content: space-between;
            width: 420px;
            height: 70px;
        span{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .footer02{
            text-indent: -9999px;
            width: 50px;
            height: 45px;
            background: url(${footer02}) no-repeat;
            background-size: 110px 552px;
        }
        .footer01{
            width: 72px;
            height: 14px;
            background: url(${footer01}) no-repeat;
            background-size: 180px 139px;
        }
            }

`;

export {
    FooterWrapper,
    FooterLeft,
    FooterRight
}