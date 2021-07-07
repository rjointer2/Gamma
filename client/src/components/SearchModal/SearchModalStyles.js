// styling for search modal

import styled from 'styled-components';
  
// modal wrapper
export const ModalBackground = styled.div`
    display: none; 
    position: fixed; 
    // z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    // overflow: auto; 
    // background-color: rgb(0,0,0); 
    // background-color: rgba(0,0,0,0.4); 
`;

//  styling
export const ModalContent = styled.div`
    // background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`;

//  styling
export const ModalClose = styled.span`
    color: #aaa;
    // float: right;
    font-size: 28px;
    font-weight: bold;
`;
