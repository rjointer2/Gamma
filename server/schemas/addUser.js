
exports = module.exports = {
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
    }
}