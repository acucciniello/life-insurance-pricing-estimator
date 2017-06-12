module.exports = calculateConditionPrice

// Purpose: To Calculate the Total Price of a Life Insurance User
// policyName(in): The Name of the Life Insurance Policy you would like settings for
// personIndex(in): The index of the Person in list of people from input-info.json
// policySettings(in): The JSON object containing the settings for Life Insurance Policy
// input(in): The JSON object containing the information for people
// callback(in): Passes back the totalConditionPrice to mutliply against the current price
function calculateConditionPrice (policyName, personIndex, policySettings, input, callback) {
  var totalConditionPrice = 1
  for (var i = 0; i < input.people[personIndex].conditions.length; i++) {
    var currentCondition = input.people[personIndex].conditions[i]
    if (currentCondition in policySettings[policyName].conditionMultiplers) {
      totalConditionPrice = totalConditionPrice + policySettings[policyName].conditionMultiplers[currentCondition]
    }
  }
  callback(totalConditionPrice)
  return
}
