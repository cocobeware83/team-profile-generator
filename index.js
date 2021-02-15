const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function init() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Pleae enter this team member's name",
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
        message: "Pleaes enter this team member's ID#",
        name: "id"
    },
    {
        message: "Please enter this team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleSpec = "";
        if (role === "Engineer") {
            roleSpec = "GitHub username";
        } else if (role === "Intern") {
            roleSpec = "school name";
        } else {
            roleSpec = "office number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleSpec}`,
            name: "roleSpec"
        },
        {
            type: "list",
            message: "Would you like to add another team member?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleSpec, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleSpec);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleSpec);
            } else {
                newMember = new Manager(name, id, email, roleSpec);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-red mb-5 text-is-white">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./dist/work-crew.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Let's build your team!");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID#: ${id}</li>
                <li class="list-group-item">Email Address: <a href= "mailto:${email}"></a></li>
                <li class="list-group-item">GitHub Profile name: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID#: ${id}</li>
                <li class="list-group-item">Email Address: <a href= "mailto:${email}"></a></li>
                <li class="list-group-item">School/University attending: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officeNmbr = member.getOfficeNumber();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID#: ${id}</li>
                <li class="list-group-item">Email Address: <a href= "mailto:${email}"></a></li>
                <li class="list-group-item">Office Number: ${officeNmbr}</li>
            </ul>
            </div>
        </div>`
        }
        fs.appendFile("./dist/work-crew.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
    
            
    
        
    
    
}

function finishHtml() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./dist/work-crew.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("Your all set!  Check out your newly created Team Profile!");
}

init();