import {
    ChatContainer,
    BffList,
    Chatbox,
    TargetedUser,
    MessageWindow,
    InputField,
    InputText,
    SendButton
} from './ChatWindowStyles';

import FriendList from "../FriendList/FriendList";

const ChatWindow = () => {

   return (
        <>
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
                        <InputText /> {/* input field */}
                        <SendButton> {/* send button */}
                            Send
                        </SendButton>
                    </InputField>
               </Chatbox>
           </ChatContainer>
        </>
    )
}

export default ChatWindow;