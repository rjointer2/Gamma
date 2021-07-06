const { gql } = require('apollo-server-express');

// setting the type definition/ schemas
const typeDefs = gql`

    type Query {
        me: User
        users: [User]
    }
    
    type User {
        _id: ID!
        username: String
        email: String
        friends: [Friends]
        chats: [Chats]
    }

    type Friend {
        _id: ID!
        username: String
        friendsWith: [Friends]
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(Username: String!, email: String!, password: String!): Auth
    }


`;

module.exports = typeDefs;