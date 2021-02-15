// Modules for node
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

//modules for lib
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function addMember() {
    inquirer.prompt([{
        message: "Hello! What is this team member's name?",
        name: "name"
    },
    {
        type: "list",
        message: "Please select this team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Please enter this team member's ID#",
        name: "id"
    },
    {
        message: "Enter this team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleSpecifics = "";
        if (role === "Engineer") {
            roleSpecifics = "GitHub username";
        } else if (role === "Intern") {
            roleSpecifics = "school or university name";
        } else {
            roleSpecifics = "office number";
        }
        inquirer.prompt([{
            message: `Please enter team member's ${roleSpecifics}`,
            name: "roleSpecifics"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "addMember"
        }])
        .then(function({roleSpecifics, addMember}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleSpecifics);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleSpecifics);
            } else {
                newMember = new Manager(name, id, email, roleSpecifics);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (addMember === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}






//set up function to get HTML
let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>Document</title>
    <style>
       //insert styling 
    </style>
</head>
<body>
    <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
        <span class="navbar-brand mb-0 h1"><h1>My Team</h1></span>
    </nav>
    <div class="row">
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Shayla</h4>
            </div>
            <div class="col card-header">
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: shayla@gmail.com</li>
                <li class="list-group-item">Office Number: 1</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Michelle</h4>
            </div>
            <div class="col card-header">
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: michelle@gmail.com</li>
                <li class="list-group-item">GitHub: owodu001</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Andrew</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: andrew@gmail.com</li>
                <li class="list-group-item">School: UofM</li>
            </ul>
        </div>
        <div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
            <div class="col card-header">
                <h4>Chelle</h4>
            </div>
            <div class="col card-header">
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush text">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">Email: chelle@gmail.com</li>
                <li class="list-group-item">School: UofM</li>
            </ul>
        </div>
    </div>
</body>
</html>`

    for (let i in employeeArray) {
        employee = employeeArray[i];
        let cardInfo = {
            name: employee.getName(),
            role: employee.getRole(),
            id: employee.getId(),
            email: employee.getEmail()
        }

        if (employee.getRole() == "Engineer") {
            cardInfo.github = employee.getGithub();
        } else if (employee.getRole() == "Manager") {
            cardInfo.officeNumber = employee.getOfficeNumber();
        } else if (employee.getRole() == "Intern") {
            cardInfo.school = employee.getSchool();
        }

        html += getCardHtml(cardInfo);
    }
    // console.log(html);
    const fs = require("fs");
    fs.writeFile('newfile.html', html, function(err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
}
run()

function getCardHtml(cardInfo) {
    let html = "<div>";
    return html;
}