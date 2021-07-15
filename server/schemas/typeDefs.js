const { gql } = require('apollo-server-express');

// setting the type definition/ schemas
const typeDefs = gql`

    type Query {
        me: User
        user(username: String): User
        users: [User]
    }
    
    type User {
        _id: ID
        username: String
        email: String
        friends: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addFriendToUser(username: String!, friendUsername: String!): User
        removeFriendsFromUser(username: String!, friendUsername: String!): User
    }


`;

module.exports = typeDefs;