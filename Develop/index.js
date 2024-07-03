// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title',
    },
    {
        type: 'list',
        message:'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],

    },
    {
        type: 'input',
        message: 'Please give a brief description of your project.',
        name: 'description',
    },
    {
        type: "input",
        message: "Instruction(s) on how to install your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How would usage information of your project:",
        name: "usage",
    },
    {
        type: "input",
        message: "We are open to any contribution(s) to this project:",
        name: "contributions",
    },
    {
        type: "input",
        message: "How would test your project:",
        name: "test",
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];

// Function to prompt questions and store user inputs
const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        } else {
            console.log("README file generated successfully!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(userAnswers)
        //writeToFile('README.md', generateMarkdown({...usersAnswers }));
        fs.writeFileSync("test2.md", generateMarkdown(userAnswers) )
    })
}

// Function call to initialize app
init();
