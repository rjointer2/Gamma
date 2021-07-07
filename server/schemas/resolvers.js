const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

let resolvers = {
    Query: {
        me: async (parent, args, context) => {
            console.log('yest')
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

            console.log('test')

            const user = await User.create(args);
            const token = singleToken(user);

            if(!token) {
                console.log(token)
            }

            return { token, user };
        },

        login: async (parent, { username, password }) => {
            console.log('test')
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

   }
}

module.exports = resolvers;


/* 

return {
                token: 'hi',
                user: {
                    _id: "hi"
                }
            }

*/