
import styled from 'styled-components';

const white = "#fff" // white

// regular images

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`;

export const FlexImgPosition = styled.div`
    display: flex;
    margin-top: 100px;
    transform: translateX(-30px);
    
    @media screen and (max-width: 720px) {
        margin-top: 0px;
        margin-left: 40px;
    }
`;

// these are for svg's

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const Icon = styled.div`
    color: ${white};
    padding: 5px 10px 5px 0;
`;