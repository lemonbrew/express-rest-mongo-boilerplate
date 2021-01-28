const config = require(`./index`)
const assert = require(`assert`)
const MongoClient = require(`mongodb`).MongoClient
const client = new MongoClient(
  config.mongoConnection,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: 1,
    connectTimeoutMS: 3000000,
    socketTimeoutMS: 5000000,
  }
)

let _db
const initDb = (cb) => {
  if (_db) return cb(null, _db)

  client.connect((err, db) => {
    if (err) return cb(err)

    _db = db.db(`my-db`)
    return cb(null, _db)
  })
}
const getDb = () => {
  assert.ok(_db, `db has not been initialized`)
  return _db
}

module.exports = {
  getDb,
  initDb,
}
