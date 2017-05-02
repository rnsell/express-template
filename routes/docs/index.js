const swaggerJSDoc = require('swagger-jsdoc')
const swaggerTools = require('swagger-tools')
const { app } = require('../../config/index')
const { version } = require('../../package.json')

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: app.name,
      version: version,
    },
  },
  apis: ['./routes/health/index.js'],
}

function getSwaggerMiddleware (swaggerSpec, callback) {
  swaggerTools.initializeMiddleware(swaggerSpec, callback)
}

module.exports = {
  getSwaggerMiddleware,
  swaggerSpec: swaggerJSDoc(swaggerOptions),
}

