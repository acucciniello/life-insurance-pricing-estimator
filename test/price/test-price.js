var common = require('../common.js')
var assert = common.assert
var input = common.input
var policySettings = common.policy
var calculatePrice = require('../../src/calculate-price.js')

it('Calculates Person 1 Price', function (done) {
  var policyName = "TICKLE"
  var personIndex = 0
  var price
  calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
    price = totalPrice
  })
  assert.equal(210.2, price)
  done()
})
it('Calculates Person 2 Price', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 1
  var price
  calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
    price = totalPrice
  })
  assert.equal(190.8, price)
  done()
})
it('Calculates Person 3 Price', function (done) {
  var policyName = 'TICKLE'
  var personIndex = 2
  var price
  calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
    price = totalPrice
  })
  assert.equal(117, price)
  done()
})
