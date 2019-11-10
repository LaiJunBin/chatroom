const fs = require('fs')

var modules = {}

fs.readdirSync('./services/').forEach(file => {
    if (file.endsWith('.service.js')) {
        let name = file.substring(0, file.length - 11)
        let path = `./services/${file.substring(0,file.length-3)}`
        modules[name] = require(path)
    }
});

module.exports = modules