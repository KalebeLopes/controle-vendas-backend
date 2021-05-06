const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

router.use((req, res, next) => {
  const {token} = req.headers
  if(!token) 
    res.sendStatus(401)

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    // console.log(decoded)
    req.decoded = decoded
    next(error)
  })

})

module.exports = router