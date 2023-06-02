/**
 * declare to constants equal to nod.js libraries
 */
const fs = require("fs");
const util = require("util");

/**
 * const readFromFile as a function qual to the promsify of fs.readFile
 */
const readFromFile = util.promisify(fs.readFile);

/**
 * writes the data to a file logs an error if not succesful
 */
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err
      ? console.error("Error!!")
      : console.info(`\nData written to ${destination}`)
  );

/**
 * readAndAppend function equal  the content and the file parameters
 * goes through fs.readfile function and if its an error logs and error
 * else will go to the writeToFile function with the parameters stated
 * before
 */
const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parseNotes = JSON.parse(data);
      parseNotes.push(content);
      writeToFile(file, parseNotes);
    }
  });
};

//export functions
module.exports = { readAndAppend, readFromFile, writeToFile };
