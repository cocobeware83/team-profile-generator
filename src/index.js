// Modules for node
const inquirer = require("inquirer");
const fs = require("fs");

//modules for lib
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

function startInquirer() {
    const promptArray = [{
        type:'input',
        message: 'Hello! What is your name?',
        name: 'name'
    }, {
        type:'input',
        message: 'What is your ID number?'
        name: 'id'
    }, {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }, {
        type: "list",
        message: "What is your employee title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];

    return inquirer
        .prompt(promptArray);
}
function runInqManager() {
    const promptArray = [{
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }];
    return inquirer
        .prompt(promptArray);
}
function runInqEngineer() {
    const promptArray = [{
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }];
    return inquirer
        .prompt(promptArray);
}
function runInqIntern() {
    const promptArray = [{
        type: "input",
        message: "What school are you currently attening?",
        name: "school"
    }];

    return inquirer
        .prompt(promptArray);
}


