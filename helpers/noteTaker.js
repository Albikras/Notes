const fs = require("fs");
const util = require("util");

const readFromFile = util.promisify(fs.readFile); //what is this

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err
      ? console.error("Error!!")
      : console.info(`\nData written to ${destiantion}`)
  );

const readAndAppendNotes = (content, file);

const readAndAppendTitle = (content, file);

module.exports = noteTaker;
