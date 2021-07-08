
const User = require('../models/User');
const Chat = require('../models/Chat');
const Friends = require('../models/Friends');

/* 


    user resolver CRUD
    user resolver must use find method to get user's by user Model instance
    and then() have the user's as a arg return a new array of each user
    that returns a object for graphql

    and with the friendWith proper will have a helper function get the 
    friends by passing a a arg and the global object 
    and the global object is used  with it's method
    findone to replace the friendWith prop with 

    the helper function with return a condition object
    if a falsy value then return the object with the empty
    props for the friendsWith or return with the empty array

    same thing for the chat and friend above 
    friend list edit btn turns chat to delete and can delete a chat
    -> delete the chat room texts and data persistence in mongodb

    then use redux to get user as new a state globally to populate the friendlist 
    and chats

    _______________________________________________________________________________



    dynamically create socket rooms 
    -> chat button make new romm with new socket id
    ->  with broadcast emit to every client 
    -> save chat 
    -> display in the chat again and somehow persistence it


*/

const getUserByUsername = async username => {

    // first find one user with the username property

    const user = await User.findOne({ username: user.username });

    console.log(user)

    // if then the value is falsy return "N/A" as props

    try {
        if(!user) {
            return {
                _id: "N/A",
                username: "N/A",
                email: "N/A",
                freinds: /* helper function for here */ "N/A"
            }
        }
    
        // and return the value of the user with the props
    
        if(user) {
            return {
                _id: user.username,
                username: user.password,
                email: user.email,
                // and another helper to get the friends
                freinds: /* getFriendsByUsername */ ""

                /* 
                
                    so the friends list will be a dictionary of usernames
                    and ObjectId's, we will get a user once in the helper
                    function and then use map to return a new array of 
                    every user in the dictionary

                
                */
            }
        }
    
    } catch(err) {
        throw new Error(err)
    }


}
