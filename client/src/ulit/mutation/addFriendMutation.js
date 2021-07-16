import { gql } from '@apollo/client';

export const ADD_FRIEND = gql`
    mutation addFriend( $username: String!, $friendUsername: String! ) {
        addFriend(username: $username, friendUsername: $friendUsername) {
            _id
            username
            friends
        }
    }
`;
