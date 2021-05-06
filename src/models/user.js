const mongoose = require('mongoose')

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
  }
})

const User = mongoose.model('User', schema)

module.exports = User