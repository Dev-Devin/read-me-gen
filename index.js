// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
      {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
    
          },
          {
            type: 'input',
            name: 'title',
            message: 'what is your project title?',
          }
    /* Pass your questions in here */
  ])
      .then((answers) => {
    console.log(answers)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

// Function call to initialize app
init();
