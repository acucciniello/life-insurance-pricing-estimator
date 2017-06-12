# life-insurance-pricing-estimator [![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard     )[![Build status](https://badge.buildkite.com/90e7279784b79c9c145baf9c76b4d3305c882d44ae24bef728.svg)](https://buildkite.com/acucciniello/testing)
A pricing engine that prints out the estimated policy price for a given person - for PolicyGenius

## Dependencies
	
1. [Node.js](https://nodejs.org/en/) v5.6.0
	- This is JavaScript runtime built on Chrome's JavaScript Engine
2. [NPM](https://nodejs.org/en/download/) 5.0.3
	- This is Node.js' package ecosystem to allow you to use open source libraries in your Node code.
3. [Mocha](https://www.npmjs.com/package/mocha) 3.4.2
	- This is JavaScript Testing framework for node.js and the browser
4. [Chai](https://www.npmjs.com/package/chai) 4.0.2
	- An Assertion Framework to be paired with Mocha for tests

## Getting Started

### From GitHub

1. Install [Node.js and NPM](https://docs.npmjs.com/getting-started/installing-node)
2. Clone this repository:

	```
	$ git clone  'https://github.com/acucciniello/life-insurance-pricing-estimator.git'
	```
	
3. Install Project Dependencies (mocha and chai):
	
	```
	$ npm install
	```
	
4. Run tests:
	
	```
	$ npm test
	```

### From Zip File

1. Install [Node.js and NPM](https://docs.npmjs.com/getting-started/installing-node)

2. Rename the file to life-insurance-pricing-estimator.zip 

3. Unzip the zip file
	
4. Install Project Dependencies (mocha and chai):
	
	```
	$ npm install
	```
	
5. Run tests:
	
	```
	$ npm test
	```

## Application Flow and Design Tradeoffs

### File Storage

The problem states that this is an MVP that could completely fail or it could grow with very complex pricing rules.  The goal was to strike a balance between something that is maintainable for growth in the future while not building too much extra functionality that we may not need in the case of a failure.Keeping this in the back of my mind, I had a quick brainstorming session before I decided to start implementing this project. In my mind it made the most sense to keep this structure (until we had more information otherwise):A Policy's Rate is calculated with a:- Starting Base Rate for each customer- Some sort of Age constraint that will add to the base rate- Some sort of multiplier for health conditions that could affect the lifespan of the policy holder- Some sort of bonus for users to save some moneyFrom this, I decided that it would be best to store this information in JSON files (meaning the information of users and policy settings). This allows to quickly create a file that could be imported as a JSON object into our node code for easy parsing.  One concern with this method of storing information is having to manually add this information to a JSON file each time a new person or new policy's information is added to the system. That can be time consuming and not ideal.  As the files get larger, we might not want to read in all of the policy's/people's information into memory every time we want to calculate the total price for a user.  In a larger application it would make more sense to store this information elsewhere, we could access the information that is only necessary for processing to complete.  This could be but not limited to a database for longer term storage.  That would take more time to setup for this MVP so it was left out.As for how the information can be parsed in this MVP, I used JSON objects and attempted to make the keys as general to this example as possible.  `inputs/input-info.json` contains a key that holds an array of people.  This way a user can be accessed by an index (for constant time retrieval).  Each person contains a first name, age, gender, and an array of conditions.  I created an array of conditions to handle the possible large application's need of people with multiple conditions.For the policy settings, they are stored in `inputs/policy-settings.json`.  This is another JSON object representing a list of policies.  In this example we only have one life insurance policy but more could be added.  When accessing the individual policy, from the assumptions I made previously, there is a base rate, an array of bonuses with their specific bonus price, a list of condition multipliers, and an object representing how the age addition calculation will work.  For that, we are given a start age, an age increment, and a price to add.  ### ApplicationThis is run by calling `calculatePrice()`.  It takes in the policy name you are looking to use, the index in the people array for the specific person you are trying to calculate, the policy settings file, the file for information about the people and a callback to access the total price once calculated.  Once this is called, the input files are validated with `validateInputs()`.  If there it a problem, its callback will throw an error, if not it will continue onto calculating.The first step, given the current policy, is to calculate the age adjusted price.  That will give us a value to add to the base rate.  Once we have that, it is time to calculate the condition's adjusted rate.  With that value we multiply it against the total price we have thus far.  Afterwards, we want to calculate the total bonus a user gets for that policy. That will give us a bonus to subtract from our previous total.  The answer from that is the total price.  Now, the order in which these steps are completed is something that may change if the application grows.  In order for simplicity of building the MVP and no further information saying otherwise, the order of operations for this policy was kept as the requirements specified.  If needed, the order can be changed easily by giving the order to the `calculatePrice()` function and then it will call the individual calculation functions based on that order.  Also in the case that there are other rules that are not handled by this application, we can simply add a file and function to handle it and import it into our `calculatePrice()` function.### Tests
As for testing, this is automated with buildkite integration.  On every push it executes `npm install` and then `npm test`. Our tests are split up into individual folders and files representing the source code file they are aiming to test.  We have a common file, `common.js`, to serve as a point to require files that we need to require over and over in our tests.  Then `test.js` serves as a main point of testing, importing all our individual test files.  This allows us to simply add tests to a new folder/file in the future and it would have no effect on the other previous passing tests.  This was done for easier development and testing as the application could grow.  
### Style

For coding style, this was implemented using Sublime Linter which uses JShint.  The styling rules come from [Standard](https://github.com/feross/standard).


