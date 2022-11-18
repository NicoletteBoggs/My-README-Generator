// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
      },
      {
        type: "input",
        name: "description",
        message: "Please describe your application",
      },
      {
        type: "input",
        name: "installation",
        message: "Please describe installation instructions",
      },
      {
        type: "input",
        name: "usage",
        message: "Please include usage instructions",
      },
      {
        type: "input",
        name: "license",
        message: "Please include license",
      },
      {
        type: "input",
        name: "contributing",
        message: "Please list any contributing parties",
      },
      {
        type: "input",
        name: "tests",
        message: "Any test instructions?",
      },
      {
        type: "input",
        name: "email",
        message: "Please include your email",
      },
      {
        type: "input",
        name: "github",
        message: "Please include your github",
      },
    ])
    .then((answers) => {
      console.log(answers);
      fs.writeFileSync("READMEtest.md", generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
