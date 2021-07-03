import styled from 'styled-components';
    
// Navbar wrapper
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
`;

// Wrapper for the links
export const CopyRight = styled.div`
    text-align: left;
    color: #C5C8D5;
`;

// Wrapper for the links
export const TeamLink = styled.div`
    color: white;
    align-items: center;
    text-align: right;
`;

export const Link = styled.a`
    color: #C5C8D5;
    text-decoration: none;
`;
