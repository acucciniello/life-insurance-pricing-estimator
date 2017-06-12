var calculateAgeAddition = require('./calculate-age-addition.js')
var calculateConditionPrice = require('./calculate-condition-price.js')
var calculateBonusTotal = require('./calculate-bonus-total.js')
var validateInputs = require('./validate-inputs.js')
module.exports = calculatePrice

// Purpose: To Calculate the Total Price of a Life Insurance User
// policyName(in): The Name of the Life Insurance Policy you would like settings for
// personIndex(in): The index of the Person in list of people from input-info.json
// policySettings(in): The JSON object containing the settings for Life Insurance Policy
// input(in): The JSON object containing the information for people
// callback(in): Passes back the total price for processing if necessary
function calculatePrice (policyName, personIndex, policySettings, input, callback) {
  // make sure our inputs are valid
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
