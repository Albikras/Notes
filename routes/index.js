const express = require("express");

const notes = require("./notes");
const notesTitle = require("./notesTitle");

const app = express();

app.use('/notes');
app.use('/noteTitle');


module.exports = app;
