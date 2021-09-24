import styled from "styled-components"

const DiscoverWrapper = styled.div`
       
`;

const HeadChildLink = styled.div`
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -70px;
        a{
            text-align: center;
            font-size: 14px;
            height: 80%;
            width: 100px;
            color: #fff;
            padding: 0 10px;
            :hover{
                background-color: #9b0909;
                text-decoration: none;
                border-radius: 5px;
            }
        }
        .active{
            border-radius: 5px;
            background-color:#9b0909;
        }
`

const DiscoverContent = styled.div`

`;

export {
    HeadChildLink,
    DiscoverWrapper,
    DiscoverContent
}

