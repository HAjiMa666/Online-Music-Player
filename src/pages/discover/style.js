import styled from "styled-components"

const DiscoverWrapper = styled.div`
       
`;

const HeadChildLink = styled.div`
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -310px;
        a{
            text-align: center;
            font-size: 14px;
            height: 80%;
            margin-right: 20px;
            color: #fff;
            :hover{
                background-color: #9b0909;
                text-decoration: none;
                border-radius: 10px;
                padding: 0 3px;
            }
        }
        .active{
            padding: 0 3px;
            border-radius: 10px;
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

