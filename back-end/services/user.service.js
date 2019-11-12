const db = require('../db')
const ObjectId = require('mongodb').ObjectId

class UserService {

    createUser({
        name
    }) {
        return db.insertOne('users', {
            name
        })
    }


    getUsers() {
        return db.get('users').then(res => res)
    }

    getUser({
        _id
    }) {
        return db.findOne('users', {
            _id: ObjectId(_id)
        }).then(res => res)
    }

    deleteUser({
        _id
    }) {
        return db.deleteOne('users', {
            _id: ObjectId(_id)
        }).then(res => res.result)
    }

}

module.exports = new UserService