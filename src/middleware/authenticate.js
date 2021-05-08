const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

router.use((req, res, next) => {
  console.log(req.headers)
  const {authorization} = req.headers
  const token = authorization.split(' ')[1]

  console.log(token)
  if(!token) 
    return res.sendStatus(401)
  console.log(token)
  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    console.log('valido')
    req.decoded = decoded
    next(error)
  })

})

module.exports = router