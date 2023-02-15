const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String!
        age: Int!
        married: Boolean
    }

    input UserInput {
        name: String!
        age: Int!
        married: Boolean
    }

    type Book {
        name: String!
        author: String!
    }

    # Queries
    type Query {
        users: [User]
    }
    # Mutations

    type Mutation {
        addUser(data: UserInput): User!
    }

`;

module.exports = { typeDefs }