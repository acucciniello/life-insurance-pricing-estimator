module.exports = validateInputs

// Purpose: To Calculate the Total Price of a Life Insurance User
// policyName(in): The Name of the Life Insurance Policy you would like settings for
// personIndex(in): The index of the Person in list of people from input-info.json
// policySettings(in): The JSON object containing the settings for Life Insurance Policy
// input(in): The JSON object containing the information for people
// callback(in): Passes back err, if it does not meet the error checks.  Passes back success if they all pass
function validateInputs (policyName, personIndex, policySettings, input, callback) {
  if (Object.keys(policySettings).length === 0) {
    // Empty policy-settings.json file
    var emptyPS = 'The policy-settings.json file has no policies.'
    callback(emptyPS)
  } else if (Object.keys(input).length === 0 || Object.keys(input.people).length === 0) {
    // Empty input-info.json file
    var emptyInput = 'The input-info.json file has no people.'
    callback(emptyInput)
  } else if (!(personIndex in input.people)) {
    // person's index does not exist in list of people
    var personDNE = 'The specific index you were looking for does not exist in input-info.json.'
    callback(personDNE)
  } else if (!(policyName in policySettings)) {
    // The policy's information does not exist in the policy-settings.json file
    var policyDNE = 'The specific policy you were looking for does not exist in policy-settings.json.'
    callback(policyDNE)
  } else {
    // input files are validated
    var success = 'Files were validated.'
    callback(null, success)
  }
}
