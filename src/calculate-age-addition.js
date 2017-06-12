
module.exports = calculateAgeAddition

function calculateAgeAddition(policyName, personIndex, policySettings, inputInfo, callback) {
  var age = inputInfo.people[personIndex].age
  var startAge = policySettings[policyName].ageAddition.startAge
  var ageIncrement = policySettings[policyName].ageAddition.ageIncrement
  var priceToAdd = policySettings[policyName].ageAddition.priceToAdd
  var ageDiff = age - startAge
  var incrementAmount = Math.floor(ageDiff/ageIncrement)
  var ageAddition = incrementAmount * priceToAdd
  callback(ageAddition)
  return
}
