import React, { useState, useEffect, useRef } from "react";
import { Page, Container, TextArea, Button, Form, MyRow, MyMessage, PartnerRow, PartnerMessage } from "./ChatStyles";
import { io}  from "socket.io-client";
import Image from "./ImageChat";
import './Chat.css'

const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 500
        }
      }
    }
  }

const Chat = () => {
  
    const [yourID, setYourID] = useState();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [file, setFile] = useState();

    const element = useRef();

    console.log(element.current)

    const socket = io('/', {'force new connection': true});

    useEffect(() => {
        socket.on('test', data =>  console.log(data))
    }, [])

    /* const socketRef = useRef();

    useEffect(() => {
        socketRef.current = io.connect('/localhost:3001');

        

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
         
     } */

     function handleChange(e) {
         setMessage(e.target.value)
     }

     function selectFile(e) {
         setMessage(e.target.files[0].name);
         setFile(e.target.value.files[0]);
     }

     function renderMessages(message, index) {
       if (message.type === "file") {
           const blob = new Blob([message.body], { type: message.type });
           if (message.id === yourID) {
               return (
                   <MyRow key={index}>
                      <Image fileName={message.fileName} blob={blob} />
                   </MyRow>
               )
           }
           return (
               <PartnerRow key={index}>
                  <Image fileName={message.fileName} />
               </PartnerRow>
           )
       }
       
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

     }

   return (
        
        //  <Page>
        <>
           <Container ref={element}>
                {messages.map(renderMessages) }
           </Container>
           <Form /* onSubmit={sendMessage} */>
              <TextArea value={message} onChange={handleChange} placeholder="Type your messages here" />
              <input onChange={selectFile} type="file" />
              <Button className='f3 link dim black underline pa3 pointer' onClick={(e) => {
                  e.preventDefault()
              }}>Send</Button>

              {/* 
              
              form type="submit"
              refresh, reload component, sideeffect

              function handleEvent() {
                  // complex code here
              }
              
              button onClick={() => handleEvent}
              
              
              */}
           </Form>
         {/* </Page> */}
        </>
         
    
    )
}

export default Chat;