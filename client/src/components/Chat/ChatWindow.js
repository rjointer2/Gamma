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





const ChatWindow = () => {

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

export default ChatWindow;