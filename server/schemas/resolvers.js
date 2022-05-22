const { AuthenticationError } = require('apollo-server-express');
const { Service, User, Category } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    categories: async () => {
        return await Category.find();
    },
    // User Queries
    // get all users
    users: async () => {
        return await User.find();
    },
     // User by ID
    user: async (parent, { userId }) => {
    return User.findOne({ _id: userId });
    },
    // 
    services: async () => {
        return await Service.find().populate('category');
    },
    service: async (parent, { serviceId }) => {
        return Service.findOne({ _id: serviceId }).populate('category');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
   
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
   
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
  remove: async (parent, { user }) => {
    return User.findOneAndDelete({ _id: user});
  },
  removeComment: async (parent, { addUser }) => {
    return User.findOneAndUpdate(
      { _id: addUser },
      { $pull: { User: { _id: addUser } } },
      { new: true }
     );
    },
  },
};

module.exports = resolvers;
