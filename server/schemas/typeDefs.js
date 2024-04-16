const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID
    username: String
    email: String
    password: String
    author: String
  }

  type Query {
    user: [User]
  }
`;

module.exports = typeDefs;
