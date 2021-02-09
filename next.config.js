const config = require('@qhnu/config').next
const composePlugins = require('next-compose-plugins')

module.exports = composePlugins([], config)
