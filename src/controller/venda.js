class VendaController {
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

  async cadastrar(req, res) {
    const newVenda = new this.Venda(req.body)
    // console.log(req.body.email)
    try {
      await newVenda.save();
      return res.status(201).send(newUser);
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

}

module.exports = VendaController