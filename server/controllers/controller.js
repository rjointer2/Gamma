const { model } = require('mongoose');
const { default: Login } = require('../../client/src/pages/Login/Login');
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
    },

    // user login
    async Login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email}] });
        if (!user) {
            return res.status(400).json({ message: "Can't find this user" })
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if(!correctPw) {
            return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    }

}