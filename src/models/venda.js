const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  item: String, 
  valor: String,
  data: String
})

const Venda = mongoose.model('Venda', schema)

module.exports = Venda