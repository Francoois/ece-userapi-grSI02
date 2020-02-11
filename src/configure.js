const path = require('path')
const mixme = require('mixme')
config_default = require('../conf/default')

module.exports = (config_user = {}) => {
  config = mixme.merge(config_default, config_user)
  if (config.users.db_dir)
    config.users.db_dir = path.join(__dirname, '..', config.users.db_dir)
  return config
}
