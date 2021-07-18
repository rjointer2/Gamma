import { gql } from '@apollo/client';

export const ADD_FRIEND = gql`
    mutation addFriendToUser( $username: String!, $friendUsername: String! ) {
        addFriendToUser(username: $username, friendUsername: $friendUsername) {
            username
            friends
        }
    }
`;
