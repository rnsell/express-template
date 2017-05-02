const express = require("express");
const config = require("./config");
const routeSetup = require("./setup/routes/route.setup")
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')

class Api {
  constructor() {
    this.app = express()
  }

  middleware() {
    this.app.use(compression())
    this.app.use(cors())
    this.app.use(hidePoweredBy())
  }
}

const { app } = new Api()
routeSetup({app})

app.listen(config.express.port, () => {
  app.emit('serverStarted')
  console.log(`Express listening on port: ${config.express.port}`)
})
