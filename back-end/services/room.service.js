const db = require('../db')
const ObjectId = require('mongodb').ObjectId

const modules = {

    createRoom: function ({
        name
    }) {
        return db.insertOne('rooms', {
            name,
            users: []
        })
    },

    addUser: function ({
        _id,
        user
    }) {
        return db.updateOne('rooms', {
            _id: ObjectId(_id)
        }, {
            $push: {
                users: user
            }
        })
    },

    getRooms: function () {
        return db.get('rooms').then(res => res);
    },

    getRoom: function ({
        _id
    }) {
        return db.findOne('rooms', {
            _id: ObjectId(_id)
        }).then(res => res)
    }

}

module.exports = modules