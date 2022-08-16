// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log('Please enter a github username!');
                return false;
            }
        }
    },
    { 
        type: 'input', 
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is a description of the project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage information can you provide about your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for the project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for the project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [
            "APACHE 2.0",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
