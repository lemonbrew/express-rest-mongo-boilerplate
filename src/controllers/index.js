const client = require(`../config/mongo`)
const getExample = async (req, res) => {
  const db = client.getDb()
  // get stuff to return
  res.json({ 
    items: [],
  })
}
const postExample = (req, res) => {
  res.json({ name: req.body.name })
}

module.exports = {
  getExample,
  postExample,
}
