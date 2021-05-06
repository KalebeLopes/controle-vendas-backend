const mongoose = require('mongoose')

let Item = {
  item: String, 
  quatidade: Number,
  valor: String,
} 

const schema = new mongoose.Schema({
  vendas: {
    type: Item = [],
    required: true
  },
  data: {
    type: String,
    required: true
  }
})

const Sale = mongoose.model('Sale', schema)

module.exports = Sale