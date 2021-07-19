
import { useMutation } from '@apollo/client';
import { useRef, useState } from 'react';
import authClient from '../../ulit/auth/authClient';
import { REMOVE_FRIEND } from '../../ulit/mutation/removeFriendMutation';

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

const FriendList = () => {

    const currentUser = authClient.getProfile().data.username;


    const [ removeFriend,  { friendError } ] = useMutation(REMOVE_FRIEND);

    const parseFriends = JSON.parse(authClient.getProfile().data.friends);
    const friends = Object.values(parseFriends)

    const [beFriend, setBeFriend] = useState(false);

    const removeFriendRequest = async (arg) => {
        try {
            await removeFriend({
                variables: {
                    "username": currentUser,
                    "friendUsername": arg
                }
            });
            console.log('success')
        } catch(err) {
            console.log(err)
            throw new Error('Bad stuff happened!')
        }

    }

    // if chat btn is clicked open the chat and send the props of the 
    // to that component

    return (
      <Div> 
        <OuterContainer>
            <TitleContainer>
                <Title>Friends List</Title>
                <RemoveBtn  
                    onClick={(e) => setBeFriend(beFriend => !beFriend)}
                >Delete Friend?</RemoveBtn>
            </TitleContainer>
            <ListContainer>
                {/* {friends} */}

                {friends.map((friend, index) => <FriendRow key={index} >
                    <FriendName>{friend}</FriendName>
                    {
                        beFriend && <RemoveBtn 
                            onClick={() => {
                                removeFriendRequest(friend)
                            }}
                        >Delete</RemoveBtn>
                    }
                </FriendRow>)}

            </ListContainer>
        </OuterContainer>
    )
}

export default FriendList;
<<<<<<< HEAD


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
=======
>>>>>>> bb9ad5ab79bcb6233afdd1222a2ee77bd2f59b90
