const { log } = console
, app = require('express')()
, bodyParser = require('body-parser')
;

app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/', function (req, res) {
  res.send('hello world')
})

app.set('port', 3040)
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
