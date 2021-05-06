class SaleController {
  constructor(Sale) {
    this.Sale = Sale
  }

  async get(req, res) {
    try {
      const sales = await this.Sale.find({});
      res.send(sales);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getByDate(req, res) {
    const {startDate, endDate} = req.query
    // console.log(new Date(startDate).toDateString(), ' ', new Date(endDate).toDateString())
    try {
      const sales = await this.Sale.find({
        "data": {
          $eq: new Date(startDate).toDateString()
          // $gte: new Date(startDate).toDateString(),
          // $lte: new Date(endDate).toDateString()
        }
      })
      console.log(sales)
      res.send(sales)
    } catch (err) {
      res.status(404).send(err.message);
    }
  }

  async cadastrar(req, res) {
    const sales = req.body.vendas
    let data = req.body.data 
    
    data !== '' ? new Date(req.body.data) : null

    const newSale = new this.Sale(
      {
        vendas: sales,
        data: data 
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