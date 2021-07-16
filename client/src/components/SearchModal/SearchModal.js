import { useMutation, useQuery } from '@apollo/client';
import { ADD_FRIEND } from '../../ulit/mutation/addFriendMutation';
import { QUERY_USER, QUERY_USERS } from '../../ulit/query/userQuery';

import {
    ModalBackground,
    ModalWrapper,
    ModalContent,
    ModalClose,
    Input,
    SearchResult
} from './SearchModalStyles';

const SearchModal = ({ openModal }) => {

    // let searchField = document.getElementById("queryUser").value;
    let searchField = 'test2';

    const goFetch = () => {
        // let searchField = document.getElementById("queryUser").value;
        console.log("Hello world!" + searchField);
    }

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: searchField }
    });

    if(loading) console.log('loading...');
    if (!data) console.log('no data!');

    fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            QUERY_USER,
            // variables: { searchField }
        })
    }).then(r=> r.json())
        .then(data => console.log('data returned:', data));
    

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


    // const { loading, data } = useQuery(QUERY_USER);
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
                        Matching Result!
                        <br/>
                        <button>
                            Add Friend
                        </button>
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