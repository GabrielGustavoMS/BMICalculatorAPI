const express = require('express')
const cors = require('cors')
class AppController {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.use(require('./routes'))
  }
}

module.exports = new AppController().app
