const express = require('express')
const router = express.Router()
const VendaController = require('../controller/venda')
const VendaModel = require('../models/venda')

const vendaController = new VendaController(VendaModel)

// rotas sempre no singular

router.get('/', (req, res) => {
  vendaController.get(req, res)
})

router.get('/date_range', (req, res) => {
  vendaController.getByDate(req, res)
})

router.post('/', (req, res) => {
  vendaController.cadastrar(req, res)
})

router.delete('/', (req, res) => {
  vendaController.excluirAll(req, res)
})

module.exports = router