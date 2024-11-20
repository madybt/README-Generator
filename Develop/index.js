const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please write a description of your project.', 
    
    },
    {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for use.',
    },
    {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
   type: 'input',
   name: 'email',
   message: 'What is your email address?',
   },
   {
   type: 'input',
   name: 'username',
   message: 'What is your GitHub username?',
   },
   {
   type: 'input',
   name: 'tests',
   message: 'What command should be run to run tests?',
   default: 'npm test',
   },
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init(){
    inquirer.prompt(questions).then((inquirerResponses) => {
     console.log('Generating README...');
     writeToFile('README.md', generateMarkdown({...inquirerResponses })); 
    });
}
init();
