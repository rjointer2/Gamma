
const { User } = require('../../models');

/* 

    getting their chats 
    getting friends

    when you their friends instead of database storing a 
    array json of friends

    ref the user's to a prop of the friend key the the user


    user {
        _id: id
        key          value
        friendsWith: function => maps out the friends 
    }

    global helper function to get though friends and reference 
    them to the dictionary of the user's key "friendWith" and 
    value will be the reference/1-many of the user assiocated 

*/

const resolvers = {

}

module.exports = resolvers;