const User = require("../models/User");

const resolvers = {
  // to read data
  Query: {
    user: async () => {
      return await User.find({});
    },
  },
  // add mutation of you want to add/delete/update data
};

module.exports = resolvers;
