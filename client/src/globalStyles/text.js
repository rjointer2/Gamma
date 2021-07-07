

import styled from 'styled-components';

// palette

const primary = "#5C458B" // purple
const white = "#fff" // white

export const TextWrapper = styled.div`
    max-width: 540px;
    padding: 0;
    padding-bottom: 10px;
`;

export const Title = styled.div`
    color: ${({lightText}) => ( lightText ? white : primary )};
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.div`
    margin-bottom: 24px;
    font-size: 40px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => ( lightText ? white : primary )};

    @media screen and (max-width: 460px) {
        font-size: 32px;
    }
`;

export const SubTitle = styled.p`
    max-width: 400px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightText}) => ( lightText ? white : primary )};
`; 

export const Text = styled.p`
    font-size: 14px;
    padding-top: 20px;
    color: ${({lightText}) => ( lightText ? white : primary )};
`;