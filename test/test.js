var chai = require('chai')
var input = require('../input-info.json')
var policySettings = require('../policy-settings.json')
var calculatePrice = require('../calculate-price.js')
var calculateAgeAddition = require('../calculate-age-addition.js')
var calculateConditionPrice = require('../calculate-condition-price.js')
var calculateBonusTotal = require('../calculate-bonus-total.js')
var validateInputs = require('../validate-inputs.js')


describe('Inputs are valid', function () {
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
    chai.assert.equal('The specific policy you were looking for does not exist in policy-settings.json.', policyNameDNE)
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
    chai.assert.equal('The specific index you were looking for does not exist in input-info.json.', personIndexDNE)
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
    chai.assert.equal('The policy-settings.json file has no policies.', emptyPS)
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
    chai.assert.equal('The input-inf0.json file has no people.', emptyPI)
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
    chai.assert.equal('Files were validated.', valid)
    done()
  })
})

describe('Properly Calculates Age Addition', function () {
  it('Calculate Person 1 Age Addition', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 0
    var ageAddition
    calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
      ageAddition = agePrice
    })
    chai.assert.equal(120, ageAddition)
    done()
  })
  it('Calculates Person 2 Age Addition', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 1
    var ageAddition
    calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
      ageAddition = agePrice
    })
    chai.assert.equal(80, ageAddition)
    done()
  })
  it('Calculates Person 3 Age Addition', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 2
    var ageAddition
    calculateAgeAddition(policyName, personIndex, policySettings, input, function (agePrice) {
      ageAddition = agePrice
    })
    chai.assert.equal(0, ageAddition)
    done()
  })
})

describe('Properly Calculates Condition Percentage', function () {
  it('Calculate Person 1 Condition Percentage', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 0
    var conditionPercent
    calculateConditionPrice (policyName, personIndex, policySettings, input, function (percent) {
      conditionPercent = percent
    })
    chai.assert.equal(1.01, conditionPercent)
    done()
  })
  it('Calculates Person 2 Condition Percentage', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 1
    var conditionPercent
    calculateConditionPrice (policyName, personIndex, policySettings, input, function (percent) {
      conditionPercent = percent
    })
    chai.assert.equal(1.06, conditionPercent)
    done()
  })
  it('Calculates Person 3 Condition Percentage', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 2
    var conditionPercent
    calculateConditionPrice (policyName, personIndex, policySettings, input, function (percent) {
      conditionPercent = percent
    })
    chai.assert.equal(1.17, conditionPercent)
    done()
  })
})

describe('Properly Calculates Bonus Total', function () {
  it('Calculate Person 1 Bonus Total', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 0
    var bonusTotal
    calculateBonusTotal (policyName, personIndex, policySettings, input, function (bonus) {
      bonusTotal = bonus
    })
    chai.assert.equal(12, bonusTotal)
    done()
  })
  it('Calculates Person 2 Bonus Total', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 1
    var bonusTotal
    calculateBonusTotal (policyName, personIndex, policySettings, input, function (bonus) {
      bonusTotal = bonus
    })
    chai.assert.equal(0, bonusTotal)
    done()
  })
  it('Calculates Person 3 Bonus Total', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 2
    var bonusTotal
    calculateBonusTotal (policyName, personIndex, policySettings, input, function (bonus) {
      bonusTotal = bonus
    })
    chai.assert.equal(0, bonusTotal)
    done()
  })
})

describe('Calculates Individual and Total Price Properly', function () {
  it('Calculates Person 1 Price', function (done) {
    var policyName = "TICKLE"
    var personIndex = 0
    var price
    calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
      price = totalPrice
    })
    chai.assert.equal(210.2, price)
    done()
  })
  it('Calculates Person 2 Price', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 1
    var price
    calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
      price = totalPrice
    })
    chai.assert.equal(190.8, price)
    done()
  })
  it('Calculates Person 3 Price', function (done) {
    var policyName = 'TICKLE'
    var personIndex = 2
    var price
    calculatePrice(policyName, personIndex, policySettings, input, function (totalPrice) {
      price = totalPrice
    })
    chai.assert.equal(117, price)
    done()
  })
})
