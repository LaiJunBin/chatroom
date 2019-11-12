const db = require('../db')
const ObjectId = require('mongodb').ObjectId

const modules = {

    createUser: function ({
        name
    }) {
        return db.insertOne('users', {
            name
        })
    },


    getUsers: function () {
        return db.get('users').then(res => res)
    },

    getUser: function ({
        _id
    }) {
        return db.findOne('users', ObjectId(_id))
            .then(function (res) {
                return res;
            })
    }

}

module.exports = modules