import styled from "styled-components";

const OtherThemeHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 3px solid #c10d0c;
    h1{
        margin-bottom: 5px;
    }
`;

const HeaderCag = styled.div`
    margin-left: 30px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex:1;
    i{
        margin: 0px 10px;
    }
`;

export {
    OtherThemeHeaderWrapper,
    HeaderCag
}