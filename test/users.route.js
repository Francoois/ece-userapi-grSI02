var chai = require('chai')
var chaiHttp = require('chai-http')
const app = require('../src/index')

chai.use(chaiHttp)

describe('Users REST API', ()=> {

  describe('POST /user', ()=> {

    after(()=> {
      app.close(() => {
        console.log('Http server closed.');
      })
    })

    it('creates a new user', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      chai.request(app)
        .post('/user')
        .send(user)
        .then((res) => {
          chai.expect(res).to.have.status(201)
          chai.expect(res.body.username).to.equal('sergkudinov')
          chai.expect(res).to.be.json
          done()
        })
        .catch((err) => {
          throw err
        })
    })

  })

  describe('GET /user', ()=> {
    // TODO create tests for GET user
  })
})
