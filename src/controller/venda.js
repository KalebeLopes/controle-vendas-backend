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

  async getByDate(req, res) {
    const {startDate, endDate} = req.query
    // console.log(new Date(startDate).toDateString(), ' ', new Date(endDate).toDateString())
    try {
      const vendas = await this.Venda.find({
        "data": {
          $eq: new Date(startDate).toDateString()
          // $gte: new Date(startDate).toDateString(),
          // $lte: new Date(endDate).toDateString()
        }
      })
      console.log(vendas)
      res.send(vendas)
    } catch (err) {
      res.status(404).send(err.message);
    }
  }

  async cadastrar(req, res) {
    const vendas = req.body.vendas
    let data = new Date(req.body.data).toDateString()

    const newVenda = new this.Venda(
      {
        vendas: vendas,
        data: data 
      }
    )
    // console.log(req.body.email)
    try {
      await newVenda.save();
      return res.status(201).send(newVenda);
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

  async excluirAll(req, res) {
    try {
      this.Venda.deleteMany({}, () => {
        res.send('todas as vendas excluidas')
      })
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

}

module.exports = VendaController