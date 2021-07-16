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

// modal to search for username - openModal passed from Navbar
const SearchModal = ({ openModal }) => {

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
        let searchField = document.getElementById("queryUser").value;
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

    // const { loading, data } = useQuery(QUERY_USER, {
    //     variables: { username: searchField }
    // });

    // if(loading) console.log('loading...');
    // if (!data) console.log('no data!');



    // fetch('/graphql', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         QUERY_USERS,
    //     })
    // }).then(r=> r.json())
    //     .then(data => console.log('data returned:', data));
    // console.log(data);


    // const { loading, data } = useQuery(QUERY_USERS);
    // console.log(data);


    // console.log(`Error! ${error}`);
    // console.log(queryData);

    // const [addFriend, { error }] = useMutation(ADD_FRIEND, {
    //     update(cache, {data: { addFriend }}) {
    //         try {
    //             const { friends } = cache.readQuery({ query: QUERY_USER });

    //             cache.writeQuery({
    //                 query: QUERY_USER,
    //                 data: { friends: [addFriend, ...friends] }
    //             });

    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    // })

    return (
        // The Modal
        <>
            <ModalBackground>
                {/* Modal content */}
                <ModalWrapper>
                    <ModalContent>
                        <Input id="queryUser" type="text" placeholder="Search.." />
                        <button onClick={goFetch}>Search</button>
            
                    </ModalContent>
                    <SearchResult>
                        {foundUser ? 'Username found!' : 'Username not found!'}
                        <br/>
                        {/* <AddFriendButton onClick={addFriend}> */}
                        <AddFriendButton>
                            Add Friend
                        </AddFriendButton>
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