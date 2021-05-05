const mongoose = require('mongoose')

let Item = {
  item: String, 
  quatidade: Number,
  valor: String,
} 

const schema = new mongoose.Schema({
  vendas: Item = [],
  data: String
})

const Venda = mongoose.model('Venda', schema)

module.exports = Venda