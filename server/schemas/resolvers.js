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
    user: async (parent, { username }, context) => {
      return await User.findOne({ username });
    },
  },
  Mutation: {
    login: async (parent, { username, password }, context) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    register: async (parent, { username, password, name }, context) => {
      const user = await User.create({
        username,
        name,
        password,
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
    addInfo: async (parent, { userInfo }, context) => {
      console.log({ ...userInfo });

      if (context.user) {
        try {
          const addedInfo = await User.findByIdAndUpdate(
            context.user._id,
            {
              ...userInfo,
            },
            { new: true }
          );

          return addedInfo;
        } catch (err) {
          console.error(err);
        }
        // else if as a fallback- will remove later once front-end is established
      } else if (userInfo.userId) {
        const addedInfo = await User.findByIdAndUpdate(
          userInfo.userId,
          {
            ...userInfo,
          },
          { new: true }
        );
        return addedInfo;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
