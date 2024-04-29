// here we define the graphQL query
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Book {
    bookId: ID!
    author: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    link: String
  }

  type Query {
    me: User
  }

  # return an Auth type
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(newBook: InputBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
