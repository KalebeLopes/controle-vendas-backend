const express = require('express')
const router = express.Router()
const VendaController = require('../controller/venda')
const VendaModel = require('../models/venda')

const vendaController = new VendaController(VendaModel)

router.get('/', (req, res) => {
  vendaController.get(req, res)
})

router.post('/', (req, res) => {
  vendaController.cadastrar(req, res)
})

module.exports = router