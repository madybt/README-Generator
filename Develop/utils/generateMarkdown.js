function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License\n\n${license}\n`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)     
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseSection(data.license)}

## Installation
To install this application, run the following command:
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
Run the following command to run tests:
${data.tests} 

## Questions
 Any questions? Don't hesitate to contact us.
`;
}

module.exports = generateMarkdown;