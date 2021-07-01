const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
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
          .populate('')
          .populate('');
      },

      // get a user by username
    user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('comments');
      },
      
    }
}