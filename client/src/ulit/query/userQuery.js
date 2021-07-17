import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            username
        }
    }
`;

export const QUERY_USERS = gql`
    query {
        users {
            _id
            username
        }
    }
`;