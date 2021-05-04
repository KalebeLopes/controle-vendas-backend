const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const vendaRouter = require('./venda')


router.use('/users', userRouter)
router.use('/venda', vendaRouter)


module.exports = router
