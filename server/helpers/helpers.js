
const User = require('../models/User');
const Chat = require('../models/Chat');
const Friends = require('../models/Friends');

/* 

    let's everyone know to delete login

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

*/

const getUserByUsername = async username => {

    

}
