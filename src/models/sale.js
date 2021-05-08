const mongoose = require('mongoose')

let Item = {
  nome: String, 
  quatidade: Number,
  valor: String,
} 

const schema = new mongoose.Schema({
  vendas: {
    type: Item = [],
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  tipoPagamento: {
    type: String,
    required: true
  }, 
  qtdParcelas: {
    type: Number,
    default: 1
  }
})

const Sale = mongoose.model('Sale', schema)

module.exports = Sale