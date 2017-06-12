module.exports = validateInputs

function validateInputs(policyName, personIndex, policySettings, input, callback)
{
  if (Object.keys(policySettings).length === 0) {
    // Empty policy-settings.json file
    var emptyPS = 'The policy-settings.json file has no policies.'
    callback(emptyPS)
    return
  } else if (Object.keys(input).length === 0 || Object.keys(input.people).length === 0) {
    // Empty input-info.json file
    var emptyInput = 'The input-inf0.json file has no people.'
    callback(emptyInput)
    return
  } else if (!(personIndex in input.people)) {
    // person's index does not exist in list of people
    var personDNE = 'The specific index you were looking for does not exist in input-info.json.'
    callback(personDNE)
    return
  } else if (!(policyName in policySettings)) {
    // The policy's information does not exist in the policy-settings.json file
    var policyDNE = 'The specific policy you were looking for does not exist in policy-settings.json.'
    callback(policyDNE)
    return
  } else {
    // input files are validated
    var success = 'Files were validated.'
    callback(null, success)
    return
  }
}
