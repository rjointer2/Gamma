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
        friends: [Friend]
    }

    type Friend {
        _id: ID!
        username: String
        friendsWith: [Friend]
    }

    type Auth {
        token: ID
        user: User
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }


`;

module.exports = typeDefs;