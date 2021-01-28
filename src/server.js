require(`dotenv`).config() // load env vars from .env file
const { log } = console
const app = require(`express`)()
const bodyParser = require(`body-parser`)
const controller = require(`./controllers`)
const mongo = require(`./config/mongo`)

app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/agent/:license_number', controller.getAgent)

app.set('port', 3040)
mongo.initDb((err, _) => {
  if (err) console.error(err)
  else app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
  })
})
