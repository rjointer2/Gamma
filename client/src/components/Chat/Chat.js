import React, { useState, useEffect, useRef } from "react";
import { Page, Container, TextArea, Button, Form, MyRow } from "./ChatStyles";
import io from "socket.io-client";




const Chat = () => {
  
    
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