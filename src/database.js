require('dotenv').config();
const mongoose = require('mongoose')
const mongoUrl = process.env.URL

const connect = () => {
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = {connect}
