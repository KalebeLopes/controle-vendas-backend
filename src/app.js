const routes = require('./routers/index')
const express = require('express')
const database = require('./database')
const bodyParser = require("body-parser") 
const cors = require('cors')
const app = express()

const configureExpress = () => {
  app.use(bodyParser.json())
  app.use(cors())
  app.use(express.json())
  app.use('/', routes)
  app.database = database

  return app
}

async function init() {
  const app = configureExpress()
  await app.database.connect()

  return app
}

module.exports = { init }
