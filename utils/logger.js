const bunyan = require('bunyan')
const { app } = require('../config/index')

const log = bunyan.createLogger({
  name: app.name,
  level: app.logLevel,
})

module.exports = log
