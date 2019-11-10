const gql = require('graphql-tag')
const {
    buildASTSchema
} = require('graphql')

module.exports = buildASTSchema(gql `
    type Query{
        users: [User]
        user(_id: ID): User

        rooms: [Room]
        room(_id: ID): Room
    }

    type Mutation{
        createUser(name: String): Boolean
        createRoom(name: String): Boolean
        addUser(_id: ID, user: UserInput): Boolean
    }

    type Room{
        _id: ID!
        name: String!
        users: [User]
    }

    type User{
        _id: ID!
        name: String!
    }

    input UserInput{
        _id: ID!
        name: String!
    }
`)