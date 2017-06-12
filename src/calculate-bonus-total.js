module.exports = calculateBonusTotal

function calculateBonusTotal (policyName, personIndex, policySettings, input, callback) {
  var bonusTotal = 0
  var female = 'female'
  if (input.people[personIndex].gender === female) {
    bonusTotal = bonusTotal + policySettings[policyName].bonuses[female]
  }
  callback(bonusTotal)
  return
}
