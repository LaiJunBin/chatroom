const db = require('../db')
const ObjectId = require('mongodb').ObjectId

class RoomService {

    createRoom({
        admin,
        name
    }) {
        return db.insertOne('rooms', {
            name,
            admin,
            users: []
        })
    }

    addUser({
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
    }

    getRooms() {
        return db.get('rooms').then(res => res);
    }

    getRoom({
        _id
    }) {
        return db.findOne('rooms', {
            _id: ObjectId(_id)
        }).then(res => res)
    }

    deleteRoom({
        _id
    }) {
        return db.deleteOne('rooms', {
            _id: ObjectId(_id)
        }).then(res => res.result)
    }

    deleteUser({
        _id
    }) {

    }

    clearUsers() {

    }
}

module.exports = new RoomService