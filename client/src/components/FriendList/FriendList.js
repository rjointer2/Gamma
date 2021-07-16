
import { useState } from 'react';

// styles

import {
    OuterContainer,
    TitleContainer,
    Title,
    InviteBtn,
    ListContainer,
    FriendRow,
    FriendName,
    RemoveBtn,
    Div
} from './FriendListStyles';

const FriendList = ({friendsOfUser}) => {

    const [chatData, setChatData] = useState({})

    // if chat btn is clicked open the chat and send the props of the 
    // to that component

    return (
      <Div> 
        <OuterContainer>
            <TitleContainer>
                <Title>Friends List</Title>
            </TitleContainer>
            <ListContainer>
                {/* {friends} */}

                {friendsOfUser.map(friendOfUser => <FriendRow>
                    <FriendName>{friendOfUser}</FriendName>
                </FriendRow>)}

            </ListContainer>
        </OuterContainer>
    )
}

export default FriendList;


/* 

<FriendRow>
                    <FriendName>username-1</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>username-2</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
                <FriendRow>
                    <FriendName>username-3</FriendName>
                    <RemoveBtn>Chat</RemoveBtn>
                </FriendRow>
<<<<<<< HEAD
            </ListContainer>
        </OuterContainer>
 </Div>    
    )
}
=======
>>>>>>> 59c33d015b2fa3105a90c99477681a63170ba60f

*/