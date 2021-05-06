const bcrypt = require('bcrypt')
const util = require('util')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const compareAsync = util.promisify(bcrypt.compare)

dotenv.config()

class AuthService {
  constructor(User){
    this.User = User
  }

  async authenticate(user) {
    const userFinded = await this.User.findOne({'email': user.email})
    if (!userFinded)
      return false

    const result = await compareAsync(user.senha, userFinded.senha)
    if(result) 
      return userFinded
    else
      return false
  }

  static generateToken(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIRES_IN
    })
    return token
  }

}

module.exports = AuthService