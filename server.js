const express = require("express");
const config = require("./config");
const routeSetup = require("./setup/routes/route.setup")
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('./utils/logger')

class Api {
  constructor() {
    this.app = express()
  }

  middleware() {
    this.app.use(bodyParser())
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(hidePoweredBy())
  }
}

const { app } = new Api()
routeSetup({app})

app.listen(config.app.port, () => {
  app.emit('serverStarted')
  logger.info(`Express listening on port: ${config.app.port}`)
})
