import styled from 'styled-components';

import cover from '@/assets/img/sprite_cover.png';
import icon from '@/assets/img/sprite_icon.png';

const AlbumWrapper = styled.div`
    width: ${props => props.width};
    .content{
        display: flex;
        flex-direction: column;
        .albumCover{
            position: relative;
            width: ${props => props.width};
            height: ${props => props.height};
            background-color: pink;
            background: url(${props => props.picurl}) no-repeat;
            ::before{
                width: 100%;
                height: 100%;
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                background-image: url(${cover});
                background-position: 0 ${props => props.coverPosition};
            }
            ::after{
                display: none;
                content: "";
                width: 30px;
                height: 30px;
                position: absolute;
                right:20px;
                bottom:2px;
                background-image: url(${icon});
                background-position: ${props => props.iconPositionX} ${props => props.iconPositionY};
                z-index:2;
            }
            &:hover::after{
                display: block;
            }
        }
        .songTitle,.author{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
`;

export {
    AlbumWrapper,
}