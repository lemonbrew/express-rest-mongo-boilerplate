require(`dotenv`).config() // load env vars from .env file
const { log } = console
const app = require(`express`)()
const bodyParser = require(`body-parser`)
const controller = require(`./controllers`)

console.log(controller)
app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/', controller.hello)
app.post('/', controller.postName)

app.set('port', 3040)
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
