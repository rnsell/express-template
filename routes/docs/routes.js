const docsRouter = require('express').Router()
const { getSwaggerMiddleware, swaggerSpec } = require('./index')
const log = require('../../utils/logger')

docsRouter.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerSpec)
})

getSwaggerMiddleware(swaggerSpec, setupMiddleware)

function setupMiddleware (middleware) {
  docsRouter.use(middleware.swaggerMetadata())

  // Validate Swagger requests
  docsRouter.use(middleware.swaggerValidator())

  // Route validated requests to appropriate controller
  docsRouter.use(middleware.swaggerRouter({
    swaggerUi: `/swagger`,
  }))

  // Serve the Swagger documents and Swagger UI
  docsRouter.use(middleware.swaggerUi({
    swaggerUi: `/swagger`,
  }))
}

module.exports = docsRouter
