// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project's title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Summarize your project.",
        name: "Summary"
    },
    {
        type: "input",
        message: "How does your project function?",
        name: "Functionality"
    },
    {
        type: "input",
        message: "How do you install this project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Any collaborators or attributions?",
        name: "Credits"
    },
    {
        type: "input",
        message: "Enter your GitHub username.",
        name: "User"
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "Email"
    },
    {
        type: "input",
        message: "What command(s) should be run for testing?",
        name: "Tests"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "License",
        choices: [
            "MIT",
            "APACHE",
            "GPL",
            "BSD",
            "Mozilla",
            "ACADEMIC",
            "GNU",
            "ISC",
            "None"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeText = generateMarkdown(data);
    fs.writeFile(fileName, readmeText, function (err) {
        if (err) {
            return console.log(err)
        }
    console.log("Your New README.md File Is Ready!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (data) {
        const fileName = "README.md";
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();