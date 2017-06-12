var common = require('../common.js')
var assert = common.assert
var input = common.input
var policySettings = common.policy
var calculateAgeAddition = require('../../src/calculate-age-addition.js')


it('Calculate Person 1 Age Addition', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 0
  var ageAddition
  calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
    ageAddition = agePrice
  })
  assert.equal(120, ageAddition)
  done()
})
it('Calculates Person 2 Age Addition', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 1
  var ageAddition
  calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
    ageAddition = agePrice
  })
  assert.equal(80, ageAddition)
  done()
})
it('Calculates Person 3 Age Addition', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 2
  var ageAddition
  calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
    ageAddition = agePrice
  })
  assert.equal(0, ageAddition)
  done()
})
