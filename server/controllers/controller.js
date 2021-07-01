const { model } = require('mongoose');
const { User } = require('../models/');
const { signToken } = require('../utils/auth');

model.exports = {
     
    // get a single user
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username}],
        });

        if(!foundUser) {
            return res.status(400).json({ message: 'Cannot find a user with this id!'});
        }

        res.json(foundUser);
    },

    // create a user
    async createUser({ body }, res) {
        const user = await User.create(body);

        if(!user) {
            return res.status(400).json({ message: 'Something Wrong!'});
        }

        const token = signToken(user);
        res.json({ token, user })
    }

}