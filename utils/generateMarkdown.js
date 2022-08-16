// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `https://img.shields.io/badge/license-${license}-blue`
  }
  else {
    return ' '
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `
    (https://opensource.org/licenses/${license})`
  }
  else {
    return ' '
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project used ${license} license`
  }
  else {
    return ' '
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
#Project Title
${data.title} 
      
##Project Description 
${data.description}

#[License]
##${renderLicenseSection(data.license)}
##Licnese Badge: ${renderLicenseBadge(data.license)}
##License Link: ${renderLicenseLink(data.license)}
      
#Table of Contents

*[Installation](#Installation)
*[Usage](#usage)
*[License](#license)
*[Contributing](#contribute)
*[Tests](#test)
*[Questions](#questions)

#Installation
${data.install}

#Usage
${data.usage}

#Contributing
${data.contribution}

#Tests
${data.test}

# Questions

Have any questions? Feel free to contact me.

Github: [https://github.com/${data.github}](https://github.com/${data.github})
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
