const express = require('express')
const router = express.Router()
const SaleController = require('../controller/sale')
const SaleModel = require('../models/sale')
const authMiddleware = require('../middleware/authenticate')

const saleController = new SaleController(SaleModel)

// rotas sempre no singular

router.get('/', authMiddleware, (req, res) => {
  saleController.get(req, res)
})

router.get('/date_range', authMiddleware, (req, res) => {
  saleController.getByDate(req, res)
})

router.post('/', authMiddleware, (req, res) => {
  saleController.cadastrar(req, res)
})

router.delete('/', authMiddleware, (req, res) => {
  saleController.excluirAll(req, res)
})

module.exports = router