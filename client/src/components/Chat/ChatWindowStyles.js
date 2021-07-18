import styled from "styled-components";

export const Div = styled.div`
   padding: 0;
   margin: 0;

`;

export const ChatContainer = styled.div`
    background: linear-gradient(white 20%, #5C458B);
    align-items: center;
    display: flex;
    justify-content: center;
    
    height:500px;
    width: 950px;
    margin: 25px auto;
    border: 3px solid #2B0638;    
`;

// Navbar Title "Gamma" styling
export const BffList = styled.div`
    // border: 1px solid blue;
   
`;

// Wrapper for the links

export const Chatbox = styled.div`
    border: 3px double #2B0638;
    border: 2px solid #5C458B;
 62bc4db0ce92a083bd39cbea85fc69cf75056814
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 400px;
    width: 500px;
    // padding: 10px;
    border-radius: 5px;
`;

export const TargetedUser = styled.div`
    border: 1px solid #582A72;
    color: #C5C8D5;
    background-color: #5C458B;
    height: 50px;
    font-size: large;
    font-family: cursive;
    align-items: center;
    text-align: center;
    padding: 10px;
    display: flex;
    width: 495px;
`;

export const MessageWindow = styled.div`
    //border: 4px solid #582A72;
    align-items: center;
    padding: 10px;
    height: 400px;
    display: flex;
    font-family: cursive;
    font-weight: 300;
    font-size: 17px;
`;

export const InputField = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #582A72;
    width:100%;
`;

export const InputText = styled.input`
    align-items: center;
    //border: 1px solid red;
    height: 3rem;
    width: stretch;
    padding: 10px;
    flex: 80%;
    font-size: 20px;
    font-family: cursive;
    
`;

export const SendButton = styled.button`
    align-items: center;
    //border: 2px solid blue;
    background-color: #4b1361;
    color: white;
    height: 50px;
    width: 100px;
    font-size: 18px;
    flex: 20%;
    cursor: pointer;
    font-family: cursive;



`;

  