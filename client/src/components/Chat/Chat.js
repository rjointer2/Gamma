import React, { useState, useEffect, useRef } from "react";
import { Page, Container, TextArea, Button, Form, MyRow, MyMessage, PartnerRow, PartnerMessage } from "./ChatStyles";
import { io}  from "socket.io-client";




const Chat = () => {
  
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState();

    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('/');

        // set eventhandlers that the above socket will listen to

        socketRef.current.on("your  id", id => {
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
         if (file) {
            const messageObject = {
               id: yourID,
               type: "file",
               body: file,
               MimeType: file.type,
               fileName: file.name
            };
            setMessage("");
            setFile();
            socketRef.current.emit("send message", messageObject);
         } else { 
             const messageObject = {
             id: yourID,
             type: "text",
             body: message,
         };
         setMessage("");
         socketRef.current.emit("send message", messageObject);

        }
         
     }

     function handleChange(e) {
         setMessage(e.target.value)
     }

     function selectFile(e) {
         setMessage(e.target.files[0].name);
         setFile(e.target.value.files[0]);
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
              <input onChange={selectFile} type="file" />
              <Button>Send</Button>
           </Form>
         </Page>
         
    
    )
}

export default Chat;