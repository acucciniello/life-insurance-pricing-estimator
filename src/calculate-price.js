var calculateAgeAddition = require('./calculate-age-addition.js')
var calculateConditionPrice = require('./calculate-condition-price.js')
var calculateBonusTotal = require('./calculate-bonus-total.js')
var validateInputs = require('./validate-inputs.js')
module.exports = calculatePrice

function calculatePrice(policyName, personIndex, policySettings, input, callback) {
  // start with the baseRate
  validateInputs(policyName, personIndex, policySettings, input, function (err) {
    if (err) {
      return err
    }
    var baseRate = policySettings[policyName].baseRate
    calculateAgeAddition(policyName, personIndex, policySettings, input, function (ageAddition) {
      var agePlusBase = baseRate + ageAddition
      calculateConditionPrice(policyName, personIndex, policySettings, input, function (conditionPercent) {
        var conditionTotal = agePlusBase * conditionPercent
        calculateBonusTotal(policyName, personIndex, policySettings, input, function (bonusTotal) {
          var totalPrice = conditionTotal - bonusTotal
          callback(totalPrice)
          return
        })
      })
    })
  })
}
