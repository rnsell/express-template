const request = require('supertest')
const app = require('../server')
const test = require('ava')

// test.before(() =>
//   new Promise(res => app.on('serverStarted', res))
// )

test(async t => {
  let res = await request(app).get('/health').send()
  t.is(res.status, 200)
})
