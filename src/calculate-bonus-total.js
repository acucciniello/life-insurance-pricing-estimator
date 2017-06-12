module.exports = calculateBonusTotal

// Purpose: To Calculate the Total Price of a Life Insurance User
// policyName(in): The Name of the Life Insurance Policy you would like settings for
// personIndex(in): The index of the Person in list of people from input-info.json
// policySettings(in): The JSON object containing the settings for Life Insurance Policy
// input(in): The JSON object containing the information for people
// callback(in): Passes back the bonusTotal to subtract from the Total Price
function calculateBonusTotal (policyName, personIndex, policySettings, input, callback) {
  var bonusTotal = 0
  var female = 'female'
  if (input.people[personIndex].gender === female) {
    bonusTotal = bonusTotal + policySettings[policyName].bonuses[female]
  }
  callback(bonusTotal)
  return
}
