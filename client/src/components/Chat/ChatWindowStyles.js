import styled from "styled-components";

export const ChatContainer = styled.div`
    // background: linear-gradient(#5C458B 20%, white);
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    min-height: 400px;
    width: 650px;
    margin: 25px auto;
    border: 1px solid blue;
`;

// Navbar Title "Gamma" styling
export const BffList = styled.div`
    // border: 1px solid blue;
`;

// Wrapper for the links
export const Chatbox = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
    width: 300px;
    // padding: 10px;
    border-radius: 5px;
`;

export const TargetedUser = styled.div`
    border: 1px solid brown;
    color: #C5C8D5;
    background-color: #5C458B
    height: 60px;
    font-size: large;
    align-items: center;
    padding: 10px;
`;

export const MessageWindow = styled.div`
    border: 1px solid pink;
    align-items: center;
    padding: 10px;
    height: 220px;
`;

export const InputField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 3px solid blue;
`;

export const InputText = styled.input`
    align-items: center;
    border: 1px solid red;
    height: 3rem;
    width: stretch;
    padding: 10px;
    
`;

export const SendButton = styled.button`
    align-items: center;
    border: 2px solid blue;
    height: 3rem;
    width: 4rem;

`;

  