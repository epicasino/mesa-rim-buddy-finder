const { User } = require('../models/index');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          '-__v -password'
        );

        return userData;
      }

      throw AuthenticationError;
    },
    users: async () => {
      return await User.find({}).select('-__v -password');
    },
  },
  Mutation: {
    login: async (parent, { username, password }, context) => {
      if (context.user) {
        const user = await User.findOne({ username });

        if (!user) {
          throw AuthenticationError;
        }

        const correctPass = await user.isCorrectPass(password);

        if (!correctPass) {
          throw AuthenticationError;
        }

        const token = signToken(user);
        return { token, user };
      }
    },
    register: async (parent, { registerInput }, context) => {
      const user = await User.create({
        ...registerInput,
      });

      const token = signToken(user);

      return { user, token };
    },
    removeUser: async (parent, { userId }) => {
      const user = await User.findByIdAndDelete(userId);

      if (user) {
        return user;
      }
    },
  },
};

module.exports = resolvers;