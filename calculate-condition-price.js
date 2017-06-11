module.exports = calculateConditionPrice

function calculateConditionPrice (policyName, personIndex, policySettings, input, callback) {
  var totalConditionPrice = 1

  for (var i = 0; i < input.people[personIndex].conditions.length; i++) {
    // this may need to change
    // I am simply adding percentages for this to work with more than one condition
    var currentCondition = input.people[personIndex].conditions[i]
    if (currentCondition in policySettings[policyName].conditionMultiplers) {
      totalConditionPrice = totalConditionPrice + policySettings[policyName].conditionMultiplers[currentCondition]
    }
  }
  callback(totalConditionPrice)
  return
}
