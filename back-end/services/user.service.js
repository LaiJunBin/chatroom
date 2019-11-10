const db = require('../db')
const ObjectId = require('mongodb').ObjectId;

const modules = {

    createUser: function ({
        name
    }) {

        return db(async function (resolve) {
            this.collection('users').insertOne({
                name
            }, function (err, res) {
                if (err) throw err
                resolve(true)
            })
        })
    },


    getUsers: function () {
        return db(async function (resolve) {
            this.collection('users').find({}).toArray(function (err, res) {
                if (err) throw err
                resolve(res)
            })
        })
    },

    getUser: function ({
        _id
    }) {
        return db(async function (resolve) {
            this.collection('users').findOne(ObjectId(_id), function (err, res) {
                if (err) throw err
                resolve(res)
            })
        })
    }

}

module.exports = modules