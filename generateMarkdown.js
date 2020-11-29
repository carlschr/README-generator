// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} <br>
  ![license badge](https://img.shields.io/static/v1.svg?label=License&message=${data.license}&color=blue)<br>
  ## Description <br>
  ${data.description} <br>
  ## Table of Contents <br>
  * [Installation](#inst)<br>
  * [Usage](#use)<br>
  * [Contributing](#contr)<br>
  * [Testing](#test)<br>
  * [Questions](#questions)<br>
  * [License](#license)<br>
  ## <a id='inst'></a>Installation <br>
  ${data.installation} <br>
  ## <a id='use'></a>Usage <br>
  ${data.usage} <br>
  ## <a id='contr'></a>Contributing <br>
  ${data.contributing} <br>
  ## <a id='test'></a>Testing <br>
  ${data.testing} <br>
  ## <a id='questions'></a>Questions <br>
  If you have any questions about this project, feel free to contact me on GitHub (my username is ${data.github}) or by email at ${data.email}. <br>
  ## <a id='license'></a>License <br>
  This project is under the ${data.license} license.`;
};

module.exports = generateMarkdown;
