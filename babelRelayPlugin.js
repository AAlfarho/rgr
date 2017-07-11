'use strict'

let getBabelRelayPlugin = require('babel-relay-plugin');
let schemaData = require('./data/schema.json').data;

let plugin = getBabelRelayPlugin(schemaData);

module.exports = plugin;