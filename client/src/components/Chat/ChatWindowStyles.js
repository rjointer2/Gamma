import styled from "styled-components";

export const ChatContainer = styled.div`
    // background: linear-gradient(#5C458B 20%, white);
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 400px;
    width: 670px;
    margin: auto;
    // border: 2px solid #5C458B;

    @media screen and (max-width: 768px) {
        width: auto;
        
    }
`;

// Navbar Title "Gamma" styling
export const BffList = styled.div`
    // border: 1px solid blue;
    margin-left: -20px;
`;

// Wrapper for the links
export const Chatbox = styled.form`
    border: 2px solid #5C458B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 320px;
    width: 300px;
    // padding: 10px;
    border-radius: 5px;
`;

export const TargetedUser = styled.div`
    // border: 1px solid brown;
    color: #C5C8D5;
    background-color: #5C458B;
    height: 50px;
    font-size: large;
    align-items: center;
    text-align: center;
    padding: 10px;
`;

export const MessageWindow = styled.div`
    border: 1px solid #5C458B;
    align-items: center;
    padding: 10px;
    height: 220px;
    overflow: hidden;
    display: flex;
    flex-direction: column-reverse;
`;

export const InputField = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 3px solid blue;
`;

export const InputText = styled.input`
    align-items: center;
    border: 1px solid #5C458B;
    height: 3rem;
    width: stretch;
    padding: 10px;
    
`;

export const SendButton = styled.button`
    align-items: center;
    border: 1px solid blue;
    height: 3rem;
    width: 4rem;

`;

  