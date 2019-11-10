const db = require('../db')
const ObjectId = require('mongodb').ObjectId;

const modules = {

    createRoom: function ({
        name
    }) {
        return db(async function (resolve) {
            this.collection('rooms').insertOne({
                name,
                users: []
            }, function (err, res) {
                if (err) throw err
                resolve(true)
            })
        })
    },

    addUser: function ({
        _id,
        user
    }) {
        return db(async function (resolve) {
            this.collection('rooms').updateOne({
                _id: ObjectId(_id)
            }, {
                $push: {
                    users: user
                }
            }, function (err, res) {
                if (err) throw err
                resolve(true)
            })
        })
    },

    getRooms: function () {
        return db(async function (resolve) {
            this.collection('rooms').find({}).toArray(function (err, res) {
                if (err) throw err
                resolve(res)
            })
        })
    },

    getRoom: function ({
        _id
    }) {
        return db(async function (resolve) {
            this.collection('rooms').findOne({
                _id: ObjectId(_id)
            }, function (err, res) {
                if (err) throw err
                resolve(res)
            })
        })
    }

}

module.exports = modules