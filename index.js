// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown');
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
        message: 'What is a description of the project?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions for the project?',
        validate: installInput => {
            if (installInput) {
                return true;
            }
            else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What usage information can you provide about your project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please provide usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for the project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            }
            else {
                console.log('Please provide contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for the project?',
        validate: testInput => {
            if (testInput) {
                return true;
            }
            else {
                console.log('Please provide test instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: [
            "APACHE",
            "BSD",
            "GVL-GPL",
            "MIT",
            "None"
        ],
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
const  writeToFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'ReadME Created!'
            });
        });
    });
};
// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(questions => {
            return generateMarkDown(questions);
        })
        .then(readMe => {
            return writeToFile(readMe)
        })
        .then(writeFileRes => {
            console.log(writeFileRes.message)
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();
