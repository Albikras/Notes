const notesTitle = require("express").Router();

const noteTaker = require("../helpers/noteTaker");

const { readFromFile, readAndAppendTitle } = require("../helpers/noteTaker");

notesTitle.get("/", (req, res) => {
  console.info(`${req.method} request recieved for title`);
  readFromFile("../db/db").then((data) => res.json(JSON.parse(data)));
});

notesTitle.post("/", (req, res) => {
  console.info(`${req.method} request recieved for title`);

  const title = req.body;

  if (req.body) {
    const newTitle = title;

    readAndAppendTitle(newTitle, "../db/db");
    res.json(`title added succesfully!!`);
  } else {
    res.error("Error!!");
  }
});

module.expores = title;
