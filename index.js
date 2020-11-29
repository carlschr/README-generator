//Inquirer module
const inquirer = require('inquirer');
//Filesystem module
const fs = require('fs');
//Markdown function
const mark = require('./generateMarkdown');

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
}, {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions for your project?',
}, {
    type: 'input',
    name: 'usage',
    message: 'What are the guidelines for using your project?',
}, {
    type: 'input',
    name: 'contributing',
    message: 'What are the guidelines for contributing to your project?',
}, {
    type: 'input',
    name: 'testing',
    message: 'How should a user go about testing your project?',
}, {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['AFL', 'Apache', 'Artistic', 'BSL', 'BSD', 'CC', 'WTFPL', 'ECL', 'EPL', 'EUPL', 'AGPL', 'GPL', 'LGPL', 'ISC', 'LPPL', 'MS PL', 'MIT', 'MPL', 'OSL', 'NCSA', 'Unlicense', 'ZLib'],
}, {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => console.log('Your README.md file has been generated!'));
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        let markdown = mark(answers);
        writeToFile('README.md', markdown);
    });
};

// function call to initialize program
init();
