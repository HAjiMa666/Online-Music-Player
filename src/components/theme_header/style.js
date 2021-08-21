import styled from "styled-components";
import headerPic from "@/assets/img/header.png"

const HeaderWrapper = styled.div`
    width: 690px;
    display: flex;
    border-bottom: 2px solid #c20c0c;
`;

const HeaderTitle = styled.div`
    width: 150px;
    font-size: 24px;
    font-weight:bolder;
    .sprite{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url(${headerPic});
        background-position: -227px -149px;
    }
`;

const HeaderCag = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    flex:1;
    i{
        margin: 0px 10px;
    }
`;

const HeaderMore = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items:center;
    .sprite{
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url(${headerPic});
        background-position: 2px -230px;
    }
`;

export {
    HeaderWrapper,
    HeaderTitle,
    HeaderCag,
    HeaderMore
}