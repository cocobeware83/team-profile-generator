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

//set max cards to 4
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
}).catch(function (err) {
    console.log("There was an error.");
});
});

const result = await promise;
console.log(result);
}

function displayTitle(employee) {
    if (employee.title === "Manager") {
        console.log(employee.officeNumber);
        return `office number: ${employee.officeNumber}`;
    }

    if (employee.title === "Intern") {
        return `school: ${employee.school}`;
    }

    if (employee.title === "Engineer") {
        return `gitHub: ${employee.github}`;
    }

}

//set up function to get HTML

function getHtml() {
    let html = "";
    for (j = 0; j < maxEmpCards; j++) {
        console.log(employeeArray[j])
        html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>${employeeArray[j].name}</h4>
            </div>
            <div class="col card-header">
                <h4>${employeeArray[j].title}</h4 >
            </div >
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: ${employeeArray[j].id}</li>
                <li class="list-group-item">Email: ${employeeArray[j].email}</li>
                <li class="list-group-item"> ${displayTitle(employeeArray[j])}</li>
            </ul>
        </div > `;
    }
    return html;
}


//still need to add CSS
let html = `< !DOCTYPE html >
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <title>Document</title>
            <style>
//insert CSS styling here
            </style>
    </head>
        <body>
            <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <span class="navbar-brand mb-0 h1">
            <h1>My Team</h1></span>
            </nav>
                <div class="row">
                    ${getHtml()}
                </div>
        </body>
    </html>`;

console.log(html);
const fs = require("fs");
fs.writeFile('newfile.html', html, function (err) {
    if (err) throw err;
    console.log('HTML was created successfully!');
});
}
run()