const { gql } = require('apollo-server-express');

// setting the type definition/ schemas
const typeDefs = gql`
  
    type User {
        _id: ID
        username: String
        email: String
    }

    type Query {
        me: User
        users: [User]
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