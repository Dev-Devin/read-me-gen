// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data,'utf-8')

}

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
          },
           {
            type: 'input',
            name: 'description',
            message: 'what is the description of your project?',
          },
            {
            type: 'input',
            name: 'installation',
            message: 'how do you install this project?',
          },
           {
            type: 'input',
            name: 'usage',
            message: 'how do you use this project?',
          },
           {
            type: 'list',
             name: 'license',
            choices: ['MIT', 'apache'],
            message: 'what license does this project have?',
          },
           {
            type: 'input',
            name: 'contributing',
            message: 'who created this project?',
          },
          {
            type: 'input',
            name: 'test',
            message: 'are there any tests for this project?',
          },
          {
            type: 'input',
            name: 'questions',
            message: 'how would you like to handle questions?',
          },
    /* Pass your questions in here */
  ])
      .then((answers) => {
        console.log(answers)
        const markdown = generateMarkdown(answers)
        console.log(markdown)
        writeToFile('test.md', markdown)
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
