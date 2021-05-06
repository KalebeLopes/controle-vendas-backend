const express = require('express')
const router = express.Router()
const UserController = require('../controller/user')
const UserModel = require('../models/user')
const AuthenticateService = require('../service/authenticate')

const userController = new UserController(UserModel, AuthenticateService)

// rotas sempre no singular

router.get('/', (req, res) => {
  userController.get(req, res)
})

router.post('/', (req, res) => {
  userController.cadastrar(req, res)
})

router.delete('/', (req, res) => {
  userController.deleteAll(req, res)
})

router.post('/login', (req, res) => {
  userController.logar(req, res)
})


module.exports = router