const path = require('path')
const fs = require('fs')
const os = require('os')

configure = require('../configure')
conig = configure()

module.exports = {
  create: (user, callback) => {
    if (!user.username) return callback(new Error('Wrong user parameter'), null)

    // TODO check if user already exists

    strUser = `${user.username}:${user.firstname}:${user.lastname}${os.EOL}`
    fs.appendFile(path.join(conig.users.db_dir, 'users'), strUser, (err) => {
      if (err) throw err
      callback(null, user.username)
    })
  },
  get: (username, callback) => {
    // TODO create this method
  }
}
