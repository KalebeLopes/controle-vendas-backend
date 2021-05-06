require('dotenv').config();
const mongoose = require('mongoose')
const mongoUrl = process.env.URL
const mongoLocalHost = 'mongodb://localhost/controleVendas'

const connect = () => {
  mongoose.connect(mongoLocalHost, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}

module.exports = {connect}
