class SaleController {
  constructor(Sale) {
    this.Sale = Sale
  }

  async getAll(req, res) {
    try {
      const sales = await this.Sale.find({});
      console.log(sales)
      const salesSerialized = sales.map((res) => {
        return {
          vendas: res.vendas,
          qtdParcelas: res.qtdParcelas,
          _id: res._id,
          data: res.data.toDateString(),
          __v: res.__v 
        }
      })

      res.send(salesSerialized);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getOne(req, res) {
    try {
      const sale = await this.Sale.findOne({_id: req.params.id});
      res.json(sale);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByDate(req, res) {
    let {startDate, endDate} = req.query

    try {
      if (!startDate)
        throw new Error('Data inicial invalida')
      if (!endDate)
        endDate = startDate

      const sales = await this.Sale.find({
        "data": {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }).sort({data: 'asc'})

      res.send(sales)
    } catch (err) {
      res.status(404).send(err.message);
    }
  }

  async cadastrar(req, res) {
    // console.log(req.decoded)
    const {vendas, tipoPagamento, qtdParcelas} = req.body
    let data = req.body.data 

    data !== '' ? new Date(req.body.data) : null

    const newSale = new this.Sale(
      {
        vendas: vendas,
        data: data,
        tipoPagamento: tipoPagamento,
        qtdParcelas: qtdParcelas
      }
    )
    // console.log(req.body.email)
    try {
      await newSale.save();
      return res.status(201).send(newSale);
    } catch (err) {
      return res.status(422).send(err.message);
    }
  }

  async excluirAll(req, res) {
    try {
      this.Sale.deleteMany({}, () => {
        res.send('todas as vendas excluidas')
      })
    } catch (err) {
      res.status(400).send(err.message)
    }
  }

}

module.exports = SaleController