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
        name: 'name',
        message: 'Hello! What is your name?',
        
    }, {
        type:'input',
        name: 'id',
        message: 'What is your ID number?',
        
        
    }, {
        type: "input",
        name: "email",
        message: "What is your email address?",
        
        
    }, {
        type: "list",
        name: "title",
        message: "What is your employee title",
        choices: ["Manager", "Engineer", "Intern"],
        
        
    }];

    return inquirer
        .prompt(promptArray);
}
function runInqManager() {
    const promptArray = [{
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
    }];
    return inquirer
        .prompt(promptArray);
}
function runInqEngineer() {
    const promptArray = [{
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    }];
    return inquirer
        .prompt(promptArray);
}
function runInqIntern() {
    const promptArray = [{
        type: "input",
        name: "school",
        message: "What school are you currently attending?",
    }];

    return inquirer
        .prompt(promptArray);
}

async function run() {
    let empArray = [];
    const maxEmpCards = 4;
    for (i = 0; i < maxEmpCards; i++) {
        const promise = new Promise((resolve, reject) => {
            startInquirer()
                .then(function ({ name, id, email, title }) 
{
    if (title === "Manager") {
        runInqManager().then(function ({ officeNumber }) {
            this.employee = new Manager(name, id, email, officeNumber, title);
            console.log(officeNumber);
            employeeArray.push(employee);
            resolve("done");
        });

    } else if (title === "Engineer") {
        runInqEngineer().then(function ({ github }) {
            this.employee = new Engineer(name, id, email, github, title);
            console.log(github);
            employeeArray.push(employee);
            resolve("done");
        });
    } else if (title === "Intern") {
        runInqIntern().then(function ({ school }) {
            this.employee = new Intern(name, id, email, school, title);
            console.log(school);
            employeeArray.push(employee);
            resolve("done");
        });
    }
}


