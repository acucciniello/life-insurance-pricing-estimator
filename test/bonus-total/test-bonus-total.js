// Tests for calculate-bonus-total.js

var common = require('../common.js')
var assert = common.assert
var input = common.input
var policySettings = common.policy
var calculateBonusTotal = require('../../src/calculate-bonus-total.js')

it('Calculate Person 1 Bonus Total', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var bonusTotal
  calculateBonusTotal(policyName, personIndex, policySettings, input, function (bonus) {
    bonusTotal = bonus
  })
  assert.equal(12, bonusTotal)
  done()
})
it('Calculates Person 2 Bonus Total', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 1
  var bonusTotal
  calculateBonusTotal(policyName, personIndex, policySettings, input, function (bonus) {
    bonusTotal = bonus
  })
  assert.equal(0, bonusTotal)
  done()
})
it('Calculates Person 3 Bonus Total', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 2
  var bonusTotal
  calculateBonusTotal(policyName, personIndex, policySettings, input, function (bonus) {
    bonusTotal = bonus
  })
  assert.equal(0, bonusTotal)
  done()
})
