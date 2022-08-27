const fs = require('fs');
const generatePage = require("./src/page-template.js");


// this is just storing the two arguments into an array
const profileDataArgs = process.argv.slice(2);


// this means name will always be the first argument put into the command and github the second
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log ('Portfolio complete! Checkout the index.html to see the output!');
});