const { User } = require('../models');
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
        
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('Friend')
            .populate('Chat');
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
                console.log(user);
                console.log(args)
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

            if( !username || !friendUsername ) throw new Error("Field or fields are filled");

            const user = await User.findOne({ username });
            const friend = await User.findOne({ username: friendUsername });

            // if friend doesn't exist
            if(!user || !friend) throw new Error(`Entry or entries don't exist`);

            let users = [user, friend]
            
            for(let i = 0; i <= user.length; i++ ) {
                let friendList = JSON.parse(users[i].friends);
                friendList[users[i]._id] = users[i].username;
                users[i].friends = JSON.stringify(friendList);
                await users[i].save();
            }

            return {
                username: username,
                friends: user.friends
            }
            
        }
   }
}

module.exports = resolvers;
