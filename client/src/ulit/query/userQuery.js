import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query users($username: String!) {
        users(username: $username) {
            username
        }
    }
`;

export const QUERY_USERS = gql`
    query users {
        _id
        username
    }
`;