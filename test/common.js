// This file contains the things that are
// Required multiple times in a file for testing

var chai = require('chai')
var input = require('../inputs/input-info.json')
var policy = require('../inputs/policy-settings.json')
var assert = chai.assert

exports.input = input
exports.chai = chai
exports.policy = policy
exports.assert = assert

// Function to handle Taking in a test from a path
// name(in) = name for the set of tests to be used in describe()
// path(in) = path to the file of the test you would like to import
exports.importTest = function importTest (name, path) {
  describe(name, function () {
    require(path)
  })
}
