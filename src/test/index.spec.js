process.env.NODE_ENV = `test`
const app = require(`../server`)
const assert = require(`assert`)
const request = require(`supertest`)

setTimeout(function () {
  describe(`MLS Service`, () => {
    describe(`GET /agents/:license_number`, () => {
      it(`should return null result if no agent is found`, done => {
        request(app)
          .get('/agent/foo')
          .then(response => {
            assert.equal(response.body.result, null, `result should be null`)
            done()
          })
      })
      // depends on existing data
      it(`should return agent if licenseNumber is matched`, done => {
        request(app)
          .get('/agent/RS173085L')
          .then(response => {
            assert.ok(response.body.result, `result should NOT be null`)
            assert.ok(response.body.result._id, `_id should not be null`)
            assert.ok(response.body.result.license_number, `license_number should not be null`)
            assert.ok(response.body.result.email, `email should not be null`)
            done()
          })
      })
    })
  })
  if (run) run() // from --delay option on mocha command
}, 1000)