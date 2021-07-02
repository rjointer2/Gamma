import React, { useState, useEffect, useRef } from "react";
import { Page, Container, TextArea, Button, Form, MyRow, MyMessage, PartnerRow, PartnerMessage } from "./ChatStyles";
import io from "socket.io-client";




const Chat = () => {
  
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('/');

        // set eventhandlers that the above socket will listen to

        socketRef.current.on("your id", id => {
            setYourID(id);
        })

        socketRef.current.on("message", (message) => {
            receivedMessages(message);
        })
    });

     function receivedMessages(message) {
         setMessages(oldMsgs => [...oldMsgs,message]);
     }
  
     function sendMessage(e) {
         e.PreventDefault();
         const messageObject = {
             body: message,
             id: yourID,
         };
         setMessage("");
         socketRef.current.emit("send message", messageObject);
     }

     function handleChange(e) {
         setMessage(e.target.value)
     }


   return (
        
         <Page>
           <Container>
                {messages.map((message, index) => {
                    if (message.id === yourID) {
                    return (
                    <MyRow key={index}>
                        <MyMessage>
                        {message.body}
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
              <TextArea value={message} onChange={handleChange} placeholder="Type your messages here" />
              <Button>Send</Button>
           </Form>
         </Page>
         
    
    )
}

export default Chat;