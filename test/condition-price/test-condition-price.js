// Tests for calculate-condition-price.js

var common = require('../common.js')
var assert = common.assert
var input = common.input
var policySettings = common.policy
var calculateConditionPrice = require('../../src/calculate-condition-price.js')

it('Calculate Person 1 Condition Percentage', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var conditionPercent
  calculateConditionPrice(policyName, personIndex, policySettings, input, function (percent) {
    conditionPercent = percent
  })
  assert.equal(1.01, conditionPercent)
  done()
})
it('Calculates Person 2 Condition Percentage', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 1
  var conditionPercent
  calculateConditionPrice(policyName, personIndex, policySettings, input, function (percent) {
    conditionPercent = percent
  })
  assert.equal(1.06, conditionPercent)
  done()
})
it('Calculates Person 3 Condition Percentage', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 2
  var conditionPercent
  calculateConditionPrice(policyName, personIndex, policySettings, input, function (percent) {
    conditionPercent = percent
  })
  assert.equal(1.17, conditionPercent)
  done()
})
