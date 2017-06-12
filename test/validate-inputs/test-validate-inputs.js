// Tests for validate-inputs.js

var common = require('../common.js')
var assert = common.assert
var input = common.input
var policySettings = common.policy
var validateInputs = require('../../src/validate-inputs.js')

it('Non Valid Policy Name returns error message', function (done) {
  var policyName = 'ANYTHING ELSE'
  var personIndex = 0
  var policyNameDNE
  validateInputs(policyName, personIndex, policySettings, input, function (err, success) {
    if (err) {
      policyNameDNE = err
      return
    }
    policyNameDNE = success
    return
  })
  assert.equal('The specific policy you were looking for does not exist in policy-settings.json.', policyNameDNE)
  done()
})
it('Non Valid Person Index returns error message', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 10
  var personIndexDNE
  validateInputs(policyName, personIndex, policySettings, input, function (err, success) {
    if (err) {
      personIndexDNE = err
      return
    }
    personIndexDNE = success
    return
  })
  assert.equal('The specific index you were looking for does not exist in input-info.json.', personIndexDNE)
  done()
})
it('Non Valid Policy Settings returns error message', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var emptyPS
  validateInputs(policyName, personIndex, {}, input, function (err, success) {
    if (err) {
      emptyPS = err
      return
    }
    emptyPS = success
    return
  })
  assert.equal('The policy-settings.json file has no policies.', emptyPS)
  done()
})
it('Non Valid Input Infor returns error messsage', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var emptyPI
  validateInputs(policyName, personIndex, policySettings, {}, function (err, success) {
    if (err) {
      emptyPI = err
      return
    }
    emptyPI = success
    return
  })
  assert.equal('The input-info.json file has no people.', emptyPI)
  done()
})
it('All inputs are valid', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var valid
  validateInputs(policyName, personIndex, policySettings, input, function (err, success) {
    if (err) {
      valid = err
      return
    }
    valid = success
    return
  })
  assert.equal('Files were validated.', valid)
  done()
})
