import styled from "styled-components";

const ZXAllAlbumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ZXAllAlbum = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0px 0px 30px;
    div{
        flex: 20%;
    }
    
`;

export {
    ZXAllAlbumWrapper,
    ZXAllAlbum,
}