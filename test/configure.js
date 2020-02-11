const {expect} = require('chai')
const configure = require('../src/configure')
const path = require('path')

describe('Configure', ()=> {
  it('load default json configuration file', ()=> {
    config = configure()
    expect(config.users.db_dir).to.equal(path.join(__dirname, '../db'))
  })

  it('load custom json configuration from the input', ()=> {
    config = configure({"users": {"db_dir": "./db_store"}})
    expect(config.users.db_dir).to.equal(path.join(__dirname, '../db_store'))
  })
})
