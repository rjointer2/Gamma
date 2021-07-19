// styling for search modal

import styled from 'styled-components';
  
const primary = "#5C458B";

// General modal styling and its positioning
export const ModalBackground = styled.div`
    display: flex; 
    position: fixed; 
    z-index: 20; 
    position: absolute;
    top: 35%;
    left: 66%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

// Modal wrapper 
export const ModalWrapper = styled.div`
    width: 350px;
    height: 250px;
    box-shadow: 0 5px 16px rgba(0,0.0,0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

//  General content of the modal
export const ModalContent = styled.form`
    // background-color: #fefefe;
    background-color: ${primary};
    margin: 15% auto; 
    padding: 5px;
    border: 1px solid #888;
    border-radius: 5px;
    width: 70%;
`;

//  styling the close icon X
export const ModalClose = styled.div`
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    position: absolute;
    top: 2%;
    right: 2%;
    padding: 0 8px;
    // border: 2px solid ${primary};
    border-radius: 5px;
`;

// Input field for search
export const Input = styled.input`
    border-bottom-color: ${primary};
    font-size: large;
    height: 40px;
    width: 100%;
    border-radius: 5px;
`;

// Search result text
export const SearchResult = styled.div`
    height: 80px;
    width: 250px;
    align-items: center;
    text-align: center;
    margin-top: -10%;
`;

// Add friend button styling
export const AddFriendButton = styled.button`
    padding: 5px;
    margin-top: 15px;
    background-color: ${primary};
    color: #C5C8D5;
    font-weight: bold;
    border-radius: 5px;
`;