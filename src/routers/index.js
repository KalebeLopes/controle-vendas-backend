const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const saleRouter = require('./sale')


router.use('/user', userRouter)
router.use('/sale', saleRouter)


module.exports = router
