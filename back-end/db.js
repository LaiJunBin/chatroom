const MongoClient = require('mongodb').MongoClient

module.exports = function (func) {
    return new Promise(resolve => {
        MongoClient.connect(process.env.DB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, connection) {
            if (err) throw err
            func.call(connection.db('chatroom'), resolve).then(() => {
                connection.close()
            })
        })
    })
}