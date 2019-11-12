const service = require('./service')

module.exports = {
    users: service.user.getUsers,
    user: service.user.getUser,

    rooms: service.room.getRooms,
    room: service.room.getRoom,

    createUser: service.user.createUser,
    createRoom: service.room.createRoom,
    addUser: service.room.addUser,

    deleteUser: service.user.deleteUser,
    deleteRoom: service.room.deleteRoom
}