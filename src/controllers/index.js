/**
 * @api {get} /:name 
 * @apiName getExample
 * @apiGroup example
 * @apiVersion 1.0.0 
 * @apiParam {String} name 
 * @apiExample {curl} Example usage:
 * curl http:localhost:3040/jon?foo=bar 
 * @apiSuccess {String} param param sent
 * @apiSuccess {Object} query query object 
 * @apiSuccessExample {json} Success response:
 *   HTTPS 200 OK
 *   {
 *     "param": "jon",
 *     "query": { "foo": "bar" } 
 *   }
 */
const getExample = (req, res) => {
  res.json({ 
    param: req.params.name,
    query: req.query,
  })
}
/**
 * @api {post} /
 * @apiName postExample
 * @apiGroup example
 * @apiVersion 1.0.0 
 * @apiExample {curl} Example usage:
 * curl httphttp://localhost:3040Type: application/json" -d "{\-X POST -H "Content-Type: application/json" -d "{\"name\": \"jon\" }" http://localhost:3040
 * @apiSuccess {String} name Name sent 
 * @apiSuccessExample {json} Success response:
 *  HTTPS 200 OK
 *  {
 *    "name": "jon",
 *  }
 */
const postExample = (req, res) => {
  res.json({ name: req.body.name })
}

module.exports = {
  getExample,
  postExample,
}
