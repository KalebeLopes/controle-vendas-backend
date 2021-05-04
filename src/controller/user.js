class UserController {
  constructor(User) {
    this.User = User
  }

  async get(req, res) {
    try {
      const users = await this.User.find({});
      res.send(users);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async logar(req, res) {
    try {
      const user = await this.User.findOne({email: req.body.email})
      console.log(user)
      if (user.email == req.body.email || user.senha == req.body.senha) {
        console.log('autenticado')
        res.status(201).send(user);
      } 
    } catch (err) {
      res.status(400).send(err.message);
    // console.log('chegou no server ', user)
    }
  }

  async cadastrar(req, res) {
    // const user = JSON.stringify(req.body)
    const newUser = new this.User(req.body)
    // console.log(req.body.email)
    try {
      const user = await this.User.findOne({email: req.body.email})
      if (user != null) {
        res.status(422).send('error');
      } else {
        await newUser.save();
        return res.status(201).send(newUser);
      }
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

}

module.exports = UserController