// Main Test file

var common = require('./common.js')
var importTest = common.importTest

// import and execute all test

importTest('Inputs are valid', './validate-inputs/test-validate-inputs.js')
importTest('Properly Calculates Age Addition', './age-addition/test-age-addition.js')
importTest('Properly Calculates Condition Percentage', './condition-price/test-condition-price.js')
importTest('Properly Calculates Bonus Total', './bonus-total/test-bonus-total.js')
importTest('Calculates Individual and Total Price Properly', './price/test-price.js')
