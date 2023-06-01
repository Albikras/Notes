const notes = require("express").Router();

const noteTaker = require("../helpers/noteTaker");

const { readFromFile, readAndAppendNotes } = require("../helpers/noteTaker");

notes.get("/", (req, res) => {
  console.info(`${req.method} request recieved for notes`);
  readFromFile("../db/db").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  console.info(`${req.method} request recieved for notes`);

  const text = req.body;

  if (req.body) {
    const newText = text;

    readAndAppendNotes(newText, "../db/db");
    res.json(`notes added succesfully!!`);
  } else {
    res.error("Error!!");
  }
});

module.exports = notes;
