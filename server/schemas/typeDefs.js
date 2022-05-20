const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
    image: String
    description: String
  }

  type Service {
    _id: ID
    name: String
    price: Float
    category: Category
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    users: [User]
    user(userId: ID!): User
    services: [Service]
    service(serviceId: ID!): Service
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
