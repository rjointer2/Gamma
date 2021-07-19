
import { gql } from '@apollo/client';

export const REMOVE_FRIEND = gql`
    mutation removeFriendsFromUser( $username: String!, $friendUsername: String! ) {
        removeFriendsFromUser(username: $username, friendUsername: $friendUsername) {
        username
        friends
        }
    }
`;