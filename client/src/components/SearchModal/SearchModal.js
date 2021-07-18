import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { ADD_FRIEND } from '../../ulit/mutation/addFriendMutation';
import { QUERY_USER, QUERY_USERS } from '../../ulit/query/userQuery';

import authClient from '../../ulit/auth/authClient';

import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose,
    Input,
    SearchResult,
    AddFriendButton
} from './SearchModalStyles';

// modal to search for username - openModal passed from Navbar
const SearchModal = ({ openModal }) => {

    const currentUser = authClient.getProfile().data.username;
    console.log(currentUser)


    const [ addFriend, { friendError } ] = useMutation(ADD_FRIEND);

    // query to get all user then filter users by the client specifics
    // then gen in the modal
    const { data, loading, error } = useQuery(QUERY_USERS);

    const [ input, setInput ] = useState('');
    const [ aMatch, setAMatch] = useState('');
    const [ friend, setFriend] = useState('');

    const goFetch = async (e) => {
        e.preventDefault();

        const foundUser = data.users.filter( user => user.username === input )
        console.log(foundUser);
        setFriend(foundUser[0].username);
    
        if (foundUser.length) {
            console.log(`User ${input} found!`);
            setAMatch(true);
        } else {
            console.log(`User ${input} NOT found!`);
            setAMatch(false);
        }
    };

    

    const addFriendToList = async () => {

        try {
            console.log('test')
            // call the mutation and passed in the variables the 
            // current logged in user and the username found
            await addFriend({
                variables: {
                    "username": currentUser,
                    "friendUsername": friend
                }
            })
        } catch(err) {
            console.log(err)
            throw new Error('Something went wrong')
        }
    }
 
    // conditionally render if searched username is found where 
    // Add Friend buttonm is displayed
    const userIsFound = () => {
        return (
            <>
                Username found!
                <br></br>
                {/* 
                
                    the function uses the hook mutation to take the current
                    username logged in and the friend => username found 
                    as varaiable in the function => friends now on clien to see
                */}
                <AddFriendButton onClick={addFriendToList}>
                    Add Friend
                </AddFriendButton>
            </>
        );
    } 

    return (
        // The Modal
        <>
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent onSubmit={goFetch} >
                        <Input id="queryUser" 
                            type="text"
                            placeholder="Search.." 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)}
                            />
                        <button type="submit">Search</button>
                    </ModalContent>
                    <SearchResult>
                        {aMatch ? userIsFound() : `Username ${input} not found!`}
                    </SearchResult>
                    <ModalClose onClick={openModal}>
                        &times;
                    </ModalClose>
                </ModalWrapper>
            </ModalBackground> 
        </>
    );
};

export default SearchModal;


