import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { ADD_FRIEND } from '../../ulit/mutation/addFriendMutation';
import { QUERY_USER, QUERY_USERS } from '../../ulit/query/userQuery';

import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose,
    Input,
    SearchResult,
    AddFriendButton
} from './SearchModalStyles';

const SearchModal = ({ openModal }) => {

    // query to get all user then filter users by the client specifics
    // then gen in the modal
    const { data, loading, error } = useQuery(QUERY_USERS);

    const [ input, setInput ] = useState('');


    const goFetch = async (e) => {
        e.preventDefault();

        console.log(
            data.users.filter( user => user.username === input )
        )
    };

    


        
    /* const friendsList = [];
    // modal to search for username - openModal passed from Navbar
    // Add Friend button to invoke this function to write friend 
    // to a string or an array (design decision)
    const addFriendToList = () => {
        if (searchField) {
            console.log(`${searchField} is added to the DB!`);
            friendsList.push(searchField);
            console.log(friendsList);
        }
    }
 */
    // conditionally render if searched username is found where 
    // Add Friend buttonm is displayed
    /* const userIsFound = () => {
        return (
            <>
                Username found!
                <br></br>
                <AddFriendButton onClick={addFriendToList}>
                    Add Friend
                </AddFriendButton>
            </>
        );
    } */

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
                        {/* {foundUser ? userIsFound() : 'Username not found!'} */}
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





/* 


    // let searchField = document.getElementById("queryUser").value;
    let searchField = '';

    const [foundUser, setFoundUser] = useState();

    // const { loading, data } = useQuery(QUERY_USER, {
    //     variables: { username: searchField }
    // });

    // if(loading) console.log('loading...');
    // if (!data) console.log('no data!');

    // Function call when username search button is clicked
    const goFetch = async () => {
        // search input field value assignment
        searchField = document.getElementById("queryUser").value;
        try {
            // Query to the graphql server endpoint for a single user
            const userSearch = await fetch('/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `query user($username: String!) {
                        user(username: $username) {
                            username
                        }
                    }`,
                    variables: `{
                        "username": "${searchField}"
                    }`
                })
            });
            // assign query result object to a variable after promise fulfills
            const searchResult = await userSearch.json();
            // conditional whether or not query result property matches the search input value
            if (searchResult.data.user.username === searchField) {
                console.log('Searched user found:', searchField);
                setFoundUser(true);
            } else {
                setFoundUser(false);
            }
        } catch (err) {
            console.log(err);
            console.log("No username found in the database!")
            setFoundUser(false);
        }
    }




*/