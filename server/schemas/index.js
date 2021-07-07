
// this is have all the resolvers imported and 
// combined into one resolver

// import resolvers

const typeDefs = require('./typeDefs');
const logInResolvers = require('./resolvers/logInResolvers');
const userResolvers = require('./resolvers/userResolvers');

// 2 more 
// chat and friend, for querying and getting the friends with a 1 - many relationship


// merge the resolver in a rootResolver

const rootResolver = {
    ...userResolvers,
    ...logInResolvers
}

// export the root resolver into the server
// where the rootValue proptery is the 
// root resolver

module.exports = { typeDefs, rootResolver }