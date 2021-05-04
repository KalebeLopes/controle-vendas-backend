const appConfig = require('./app')
const port = 3030

async function start() {
  try {
    const app = await appConfig.init()
    app.listen(port, () => {
      console.info(`Server is running on http://127.0.0.1:${port}`)
    })
  } catch(err) {
    return console.error(err)
  }
}

start()