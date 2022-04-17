const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const inquirer = require("inquirer");
console.log(Employee)

const team = []

inquirer.prompt([{
    type: 'input',
    name: 'managerName',
    message: 'What is the manager name'
},
{
    type: 'input',
    name: 'managerId',
    message: 'what is the manager employee id'
},
{
    type: 'input',
    name: 'managerEmail',
    message: 'what is the manager email'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'what is the manager office number'
},




]).then(data => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
    team.push(manager)
    console.log(team)
  createTeam()
    // Use the team array to build html using team members
})

async function createTeam() {
    let memberChoice
    while (memberChoice !== 'None') {
        const data = await inquirer.prompt([
            {
                type: 'list',
                name: 'member',
                message: 'which team member would you like to add?',
                choices: ['Engineer', 'Intern', 'None']
            },
        ])
        memberChoice = data.member
        if (memberChoice === 'Engineer') {
            await createNewEngineer();
        }
        else if (memberChoice === 'Intern') {
           await createNewIntern();
        }
    }
}


function createNewEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the engineers name'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'what is the engineers id'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is the engineers email'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'what is the engineers Github'
        },
    ]).then(data => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        team.push(engineer)
        console.log(team)
    })
}

function createNewIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the interns name'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'what is the intern id'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is the engineers email'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'what is the interns school'
        },
    ]).then(data => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        team.push(intern)
        console.log(team)
    })
}






// {
//     type: 'input',
//     name: 'Engineer',
//     message: ''
// }


// add another inquirer prompt, for engineer and intern