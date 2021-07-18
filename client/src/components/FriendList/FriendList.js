
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
    RemoveBtn
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
