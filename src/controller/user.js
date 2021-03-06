class UserController {
  constructor(User, AuthenticateService) {
    this.User = User
    this.AuthenticateService = AuthenticateService
  }

  async get(req, res) {
    console.log(req.decoded)
    try {
      const users = await this.User.find({});
      res.send(users);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async cadastrar(req, res) {
    // const user = JSON.stringify(req.body)
    const newUser = new this.User(req.body)
    // console.log(req.body.email)
    try {
      const user = await this.User.findOne({email: req.body.email})
      if (user != null) {
        throw new Error("email ja cadastrado")
      } else {
        await newUser.save();
        return res.status(201).send(newUser);
      }
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

  async deleteAll(req, res) {    
    try {
      await this.User.deleteMany()
      res.send('usuarios deletados')
    } catch (error) {
      res.send(error)
    }
  }

  async logar(req, res) {
    const authenticateService = new this.AuthenticateService(this.User)
    try {
      const user = await authenticateService.authenticate(req.body)
      if(!user)
        throw new Error('Dados incorretos')
      
      const token = this.AuthenticateService.generateToken({
        _id: user._id,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        role: user.role,
      })

      return res.status(200).json({
        token: token,
        expiresIn: process.env.EXPIRES_IN
      })

    } catch (err) {
      res.status(400).send(err.message);
    }
  }

}

module.exports = UserController