
module.exports = calculateAgeAddition

// Purpose: To Calculate the Total Price of a Life Insurance User
// policyName(in): The Name of the Life Insurance Policy you would like settings for
// personIndex(in): The index of the Person in list of people from input-info.json
// policySettings(in): The JSON object containing the settings for Life Insurance Policy
// input(in): The JSON object containing the information for people
// callback(in): Passes back the ageAddition in order to add to baseRate
function calculateAgeAddition (policyName, personIndex, policySettings, inputInfo, callback) {
  var age = inputInfo.people[personIndex].age
  var startAge = policySettings[policyName].ageAddition.startAge
  var ageIncrement = policySettings[policyName].ageAddition.ageIncrement
  var priceToAdd = policySettings[policyName].ageAddition.priceToAdd
  var ageDiff = age - startAge
  var incrementAmount = Math.floor(ageDiff / ageIncrement)
  var ageAddition = incrementAmount * priceToAdd
  callback(ageAddition)
  return
}
