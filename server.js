const { log } = console
, app = require(`express`)()
, bodyParser = require(`body-parser`)
, controller = require(`./controllers`)
;

console.log(controller)
app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/', controller.hello)

app.set('port', 3040)
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
