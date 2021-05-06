const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const util = require('util')

const hashAssincrona = util.promisify(bcrypt.hash)

const schema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  }
})

schema.pre('save', async function (next) {
  if(!this.senha || this.senha === '')  
    return next()
  
  try {
    const newSenhaHash = await hashAssincrona(this.senha, 10)
    this.senha = newSenhaHash
  } catch (error) {
    next(error)
  }
})

const User = mongoose.model('User', schema)

module.exports = User