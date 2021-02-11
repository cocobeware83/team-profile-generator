// Modules
const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

function startInquirer() {
    const promptArray = [{
        type:'input',
        message: 'Hello, What is your name?',
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
        message: "What is your employee postion title",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title"
    }];
    

    }
    }
    }]
}

