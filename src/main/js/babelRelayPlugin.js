var babelRelayPlugin = require('babel-relay-plugin');
var request = require('sync-request');

var response = request('GET', 'http://localhost:8080/graphql/introspect');

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = babelRelayPlugin(schema.data);