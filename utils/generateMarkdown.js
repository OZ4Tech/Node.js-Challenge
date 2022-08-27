// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = err) {
    return ("");
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Table Of Contents
-[Summary](#summary)
-[Installation](#installation)
-[Functionality](#functionality)
-[License](#license)
-[Contributions](#contributions)
-[Questions](#questions)

## Summary
${data.Summary}


## Installation
${data.Installation}

## Functionality
${data.Functionality}

## Credits
${data.Credits}

## License
This application is licensed by ${data.License}

## Questions
Please contact ${data.User} with any questions

## Contact Information:
-Email: [${data.Email}]
-GitHub: [${data.User}]

## App Preview

![App Preview]()

## Deployed App Link

Click [HERE]() to see our deployed app.
`;
}

module.exports = generateMarkdown;
