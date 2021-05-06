const express = require('express')
const router = express.Router()
const SaleController = require('../controller/sale')
const SaleModel = require('../models/sale')

const saleController = new SaleController(SaleModel)

// rotas sempre no singular

router.get('/', (req, res) => {
  saleController.get(req, res)
})

router.get('/date_range', (req, res) => {
  saleController.getByDate(req, res)
})

router.post('/', (req, res) => {
  saleController.cadastrar(req, res)
})

router.delete('/', (req, res) => {
  saleController.excluirAll(req, res)
})

module.exports = router