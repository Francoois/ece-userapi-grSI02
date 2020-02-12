const {expect} = require('chai')
const path = require('path')
const users = require('../src/controllers/users')
const fs = require('fs')

describe('Users', ()=> {

  describe('Create', ()=> {

    beforeEach((done) => {
      config = configure()
      fs.writeFile(config.users.db_dir, '', () => {
        done()
      })
    })

    it('create user', (done)=> {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.be.null
        expect(result).to.equal('sergkudinov')
        done()
      })
    })

    it('passing wrong user parameters', (done)=> {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      users.create(user, (err, result) => {
        expect(err).to.not.be.null
        expect(result).to.be.null
        done()
      })
    })

    // TODO create a test "avoids creating if user already exists"
  })

  describe('Get', ()=> {
    // TODO Create tests for get mothod
  })
})
