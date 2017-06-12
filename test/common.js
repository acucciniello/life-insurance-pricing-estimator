var chai = require('chai')
var input = require('../inputs/input-info.json')
var policy = require('../inputs/policy-settings.json')
var assert = chai.assert

exports.input = input
exports.chai = chai
exports.policy = policy
exports.assert = assert


exports.importTest = function importTest(name, path) {
  describe(name, function () {
    require(path)
  })
}
