class VendaController {
  constructor(Venda) {
    this.Venda = Venda
  }

  async get(req, res) {
    try {
      const vendas = await this.Venda.find({});
      res.send(vendas);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async cadastrar(req, res) {
    const newVenda = new this.Venda(req.body)
    // console.log(req.body.email)
    try {
      await newVenda.save();
      return res.status(201).send(newVenda);
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

}

module.exports = VendaController