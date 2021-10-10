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
            type: "list",
            name: "license",
            message: " Choose a license",
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
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        }
    ]).then(answers => {
        console.log(answers)
        createReadme(answers)
    })
}

function createReadme(obj) {
    let licenseChosen = "No license Chosen"
    if (obj.license === "MIT") {
        licenseChosen = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (obj.license === "GNU") {
        licenseChosen = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (obj.license === "Mozilla") {
        licenseChosen = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    if (obj.license === "Apache") {
        licenseChosen = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (obj.license === "Boost") {
        licenseChosen = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    }
    if (obj.license === "The Unlicense") {
        licenseChosen = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    const syntax = `# ${obj.title} ${licenseChosen}

## Description 

${obj.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#test)

## Installation

${obj.installation}


## Usage

${obj.usage}

## License

This project has a: ${obj.license}


## Contributing

${obj.contributing}

## Tests 

${obj.tests}

## Questions

GitHub: ${obj.github}
Email: ${obj.email}
`

    fs.writeFileSync('README.md', syntax)
}

questioningBegins()