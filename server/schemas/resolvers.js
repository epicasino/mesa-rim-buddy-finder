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
};
