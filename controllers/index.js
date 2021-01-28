const hello = (req, res) => {
  res.send(`hello`)
}
const postName = (req, res) => {
  res.send(req.body.name)
}

module.exports = {
  hello,
  postName,
}
