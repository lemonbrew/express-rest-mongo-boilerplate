require(`dotenv`).config() // load env vars from .env file
const app = require(`express`)()
const bodyParser = require(`body-parser`)
const controller = require(`./controllers`)
const mongo = require(`./config/mongo`)
const cors = require(`cors`)

app.use(cors())
app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/agent/:license_number', controller.getAgent)

app.set('port', process.env.NODE_ENV === `test` ? 3041 : 3040)
mongo.initDb((err, _) => {
  if (err) console.error(err)
  else app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'))
  })
})

module.exports = app