import React, { useState, useEffect, useRef } from "react";
import { Page, Container, TextArea, Button, Form, MyRow } from "./ChatStyles";
import io from "socket.io-client";




const Chat = () => {
  
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    const socketRef = useRef();

    useEffect(() => {
        
    });
    return (
        <div>
         <Page></Page>
         <Container></Container>
         <TextArea></TextArea>
         <Button></Button>
         <Form></Form>
         <MyRow></MyRow>  
        </div>
    )
}

export default Chat;