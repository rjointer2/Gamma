import styled from 'styled-components';
    
 /* the footer is fixed and may stick behind styles */
export const FooterBar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #5C458B;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding: 15px;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        height: auto;
        text-align: center;
        flex-wrap: no-wrap;
    }
`;

// Wrapper for the links
export const CopyRight = styled.div`
    text-align: left;
    color: #C5C8D5;

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

// Wrapper for the links
export const TeamLink = styled.div`
    color: white;
    align-items: center;
    text-align: right;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        text-align: center;
        justify-content: center;
        margin-bottom: 10px;
    }
`;

export const Link = styled.a`
    color: #C5C8D5;
    text-decoration: none;
    margin-left: 20px;
`;
