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
        createRoom(name: String, admin: UserInput): Boolean
        addUser(_id: ID, user: UserInput): Boolean

        deleteUser(_id: ID): DeleteType
        deleteRoom(_id: ID): DeleteType
    }

    type DeleteType{
        n: Int
        ok: Int
    }

    type Room{
        _id: ID!
        name: String!,
        admin: User
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