const inquirer = require("inquirer")
const fs = require("fs")

const questioningBegins = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Enter a description",
            name: "description"
        },
        {
            type: "input",
            message: "What are the Installation steps?",
            name: "installation"
        },
        {
            type: "input",
            message: " Provide instructions for use",
            name: "usage"
        },
        // {
        //     type: "confirm",
        //     name: 'confirmScreenShot',
        //     message: " Would you like to add screenshots?",
        //     default: false
        // },
        // {
        //     type: 'input',
        //     name: 'screenShot',
        //     message: 'Enter the path to your screenshots',
        //     when: ({ confirmScreenShot }) => {
        //         if (confirmScreenShot) {
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // },
        {
            type:"checkbox",
            name: "license",
            message:" Choose a license",
            choices: ["No License", "MIT", "GNU", "Mozilla", "Apache", "Boost", "The Unlicense"]
        },
        {
            type: "confirm",
            name: "contributing",
            message: "Would you like to set how people can contribute?",
            default: false
        },
        {
          type: "input",
          name: "tests",
          message: "Provide any tests you ran on your application",
        },
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub profile"
        }
    ]).then(answers => {
        console.log(answers)
        createReadme(answers)
    })
}

function createReadme(obj) {
    const syntax = `# ${obj.title}

## Description 

${obj.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)

## Installation

${obj.installation}


## Usage

${obj.usage}
// ${obj.screenShot}

## License
This project has a: ${obj.license}


## Contributing

${obj.contributing}

## Tests 

${obj.tests}

`

    fs.writeFileSync('README.md', syntax)
}

questioningBegins()