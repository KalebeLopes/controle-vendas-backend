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

const Sale = mongoose.model('Sale', schema)

module.exports = Sale