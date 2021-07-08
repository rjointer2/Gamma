// styling for search modal

import styled from 'styled-components';
  
// modal wrapper
export const ModalBackground = styled.div`
    display: flex; 
    position: fixed; 
    z-index: 20; 
    // top: 0;
    // transform: translate(-70%);
    position: absolute;
    top: 35%;
    left: 66%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    // overflow: auto; 
    // background-color: rgb(0,0,0); 
    // background-color: rgba(0,0,0,0.4); 
`;

export const ModalWrapper = styled.div`
    width: 350px;
    height: 250px;
    box-shadow: 0 5px 16px rgba(0,0.0,0.2);
    background: #fff;
    color: #000;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
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
export const ModalClose = styled.div`
    color: #aaa;
    // float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 2%;
    right: 2%;
    padding: 0 8px;
    // transform: translate(0%, -50%);
    border: 2px solid purple;
    border-radius: 5px;
`;
