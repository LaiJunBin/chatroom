require('dotenv').config();

const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')

const app = express()
app.use(cors())

const schema = require('./schema')
const rootValue = require('./root')

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue
}))

app.listen(4000)
console.log(`Running a GraphQL Server At localhost:4000/graphql`)