<<<<<<< HEAD
import {
    ChatContainer,
    BffList,
    Chatbox,
    TargetedUser,
    MessageWindow,
    InputField,
    InputText,
    SendButton,
    Div
} from './ChatWindowStyles';

import FriendList from "../FriendList/FriendList";
=======
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import io from "socket.io-client";

import { Column1, Column2, Container as PageContainer, Row, Wrapper } from '../../globalStyles/aligment';
import FriendList from "../FriendList/FriendList";

const Page = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-height: 500px;
  overflow: auto;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-top: 25px;
`;

const TextArea = styled.textarea`
  width: 98%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 17px;
  background-color: transparent;
  border: 1px solid lightgray;
  outline: none;
  color: lightgray;
  letter-spacing: 1px;
  line-height: 20px;
  ::placeholder {
    color: lightgray;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  height: 50px;
  border-radius: 10px;
  color: #5C458B;
  font-size: 17px;
`;

const Form = styled.form`
  width: 400px;
`;

const MyRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const MyMessage = styled.div`
  width: 45%;
  background-color: pink;
  color: #46516e;
  padding: 10px;
  margin-right: 5px;
  text-align: center;
  border-top-right-radius: 10%;
  border-bottom-right-radius: 10%;
`;

const PartnerRow = styled(MyRow)`
  justify-content: flex-start;
`;

const PartnerMessage = styled.div`
  width: 45%;
  background-color: transparent;
  color: lightgray;
  border: 1px solid lightgray;
  padding: 10px;
  margin-left: 5px;
  text-align: center;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
`;
>>>>>>> 59c33d015b2fa3105a90c99477681a63170ba60f





const ChatWindow = () => {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("your id", id => {
      setYourID(id);
    })

    socketRef.current.on("message", (message) => {
      console.log("here");
      receivedMessage(message);
    })
  }, []);

  function receivedMessage(message) {
    setMessages(oldMsgs => [...oldMsgs, message]);
  }

  function sendMessage(e) {
    e.preventDefault();
    const messageObject = {
      body: message,
      id: yourID,
    };
    setMessage("");
    socketRef.current.emit("send message", messageObject);
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  return (
    <PageContainer>
        <Wrapper>
            <Row>
                <Column1>
                    <FriendList />
                </Column1>
                <Column2>
                <Page>
                    <Container>
                        {messages.map((message, index) => {
                        if (message.id === yourID) {
                            return (
                            <MyRow key={index}>
                                <MyMessage>
                                You Wrote: {message.body}
                                </MyMessage>
                            </MyRow>
                            )
                        }
                        return (
                            <PartnerRow key={index}>
                            <PartnerMessage>
                                {message.body}
                            </PartnerMessage>
                            </PartnerRow>
                        )
                        })}
                    </Container>
                    <Form onSubmit={sendMessage}>
                        <TextArea value={message} onChange={handleChange} placeholder="Say something..." />
                        <Button>Send</Button>
                    </Form>
                    </Page>
                </Column2>
            </Row>
        </Wrapper>
    </PageContainer>

<<<<<<< HEAD
   return (
        <Div>
            
           <ChatContainer>
               <BffList>  {/*Friends List */}
                    <FriendList /> 
               </BffList> 
               <Chatbox> {/* 2-way chat window */}
                    <TargetedUser> {/* username */}
                        username
                    </TargetedUser>
                    <MessageWindow> {/* message window */}
                        HelloWorld
                    </MessageWindow>
                    <InputField> {/* bottom input/send container */}
                        <InputText type="text" placeholder=
                        "say something....." /> {/* input field */}
                        <SendButton> {/* send button */}
                            Send
                        </SendButton>
                    </InputField>
               </Chatbox>
           </ChatContainer>
        </Div>
    )
}
=======
  );
};
>>>>>>> 59c33d015b2fa3105a90c99477681a63170ba60f

export default ChatWindow;