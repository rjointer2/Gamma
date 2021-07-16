
// Modals
const { User } = require('../models');

// auth middleware
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

let resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                .populate('')
                .populate('');

                return userData;
            }
            throw new AuthenticationError('You are not logged in!');
        },

        // get single user
        user: async (parent, { username }) => {
            try {
                return User.findOne({ username })
            } catch (err) {
                console.log(err)
            }
        },
        
        // get all users
        // this is be redone after the helpers are made
        users: async (parent, args, context) => {
            try {
                return User.find().then(users => users.map(user => {
                    return {
                        _id: user.id,
                        username: user.username,
                        friends: user.friends,
                        email: user.email,
                        password: user.password,
                    }
                }))
            } catch(err) {
                console.log(err)
            }
        },

    },

    Mutation: {
        addUser: async (parent, args) => {
            try {
                const user = await User.create({
                    username: args.username,
                    friends: "{}",
                    email: args.email,
                    password: args.password,
                });
                // console.log(user);
                // console.log(args)
                const token = signToken(user);
        
                if(!token) {
                    console.log(token)
                }
        
                return { token, user };
            } catch(err) {
                throw new AuthenticationError(err.message)
            }
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // checks if the password is correct
            const correctPw = await user.isCorrectPassword(password);
            
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user }
        },

        addFriendToUser: async (parent, {username, friendUsername}) => {

            if( !username || !friendUsername ) throw new Error("Field or fields aren't filled");

            const user = await User.findOne({ username });
            const friend = await User.findOne({ username: friendUsername });

            // if friend doesn't exist
            if(!user || !friend) throw new Error(`Entry or entries don't exist`);

            let counter = 1;

            async function addToFriendListWhileSwap(a, b) {

                let friendList = JSON.parse(a.friends);
                // after parsing we make the dictionary from the ObjectID and username
                friendList[b._id] = b.username;
                a.friends = JSON.stringify(friendList);
                await a.save();
                counter++;
                console.log(a, b)

                if(counter <= 2) {
                    // recursively call the function with args swapped
                    addToFriendListWhileSwap(b, a)
                }
                
            } addToFriendListWhileSwap(user, friend);

            return {
                username: username,
                friends: user.friends
            }
            
        },

        removeFriendsFromUser: async (parent, {username, friendUsername}) => {

            // get the user's friend diction and delete the value

            if( !username || !friendUsername ) throw new Error("Field or fields aren't filled");

            const user = await User.findOne({ username });
            const friend = await User.findOne({ username: friendUsername });
            // if friend doesn't exist
            if(!user || !friend) throw new Error(`Entry or entries don't exist`);

            // to the delete the diction we the have to get the id of the
            // the friend and place it's in the key

            let counter = 1;

            async function deleteFriendFromUserWhileSwap(a, b) {
                parsedFriendList = JSON.parse(a.friends);
                delete parsedFriendList[b.id];
                a.friends = JSON.stringify(parsedFriendList);
                await a.save();
                counter++;
                console.log(a, b);

                if(counter <= 2) {
                    deleteFriendFromUserWhileSwap(b, a);
                }
            } deleteFriendFromUserWhileSwap(user, friend);

            return {
                _id: user.id,
                username: user.username,
                friends: user.friends,
            }

        }
   }
}

module.exports = resolvers;
