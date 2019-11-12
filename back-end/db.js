const MongoClient = require('mongodb').MongoClient

module.exports = {
    action: async function (func) {
        return new Promise(resolve => {
            MongoClient.connect(process.env.DB_HOST, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, function (err, connection) {
                if (err) throw err
                return resolve(func(connection.db(process.env.DB_DATABASE)).then((res) => {
                    connection.close()
                    return res
                }))
            })
        })
    },

    insertOne: async function (table, object) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).insertOne(object, function (err, res) {
                    if (err) throw err
                    resolve(true)
                })
            })
        })
    },

    findOne: async function (table, query) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).findOne(query, function (err, res) {
                    if (err) throw err
                    resolve(res)
                })
            })
        })
    },

    findMany: async function (table, query) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).find(query).toArray(function (err, res) {
                    if (err) throw err
                    resolve(res)
                })
            })
        })
    },

    get: async function (table) {
        return this.findMany(table, {});
    },

    updateOne: async function (table, query, object) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).updateOne(query, object, function (err, res) {
                    if (err) throw err
                    resolve(true)
                })
            })
        })
    },

    deleteOne: async function (table, query) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).deleteOne(query, function (err, res) {
                    if (err) throw err
                    resolve(res)
                })
            })
        })
    },

    deleteMany: async function (table, query) {
        return this.action(db => {
            return new Promise(resolve => {
                db.collection(table).deleteMany(query, function (err, res) {
                    if (err) throw err
                    resolve(res)
                })
            })
        })
    }
}