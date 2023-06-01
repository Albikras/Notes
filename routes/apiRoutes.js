const router = require("express").Router();

const getRandomID = require("../helpers/getRandomID");
const {
  readAndAppend,
  readFromFile,
} = require("../helpers/noteHelperFunction");

router.get("/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);
  readFromFile("./db/db.json").then((data) => {
    res.json(JSON.parse(data));
  });
});

router.post("/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      noteId: getRandomID(),
    };

    readAndAppend(newNotes, "./db/db.json");
    res.json("notes added successfully");
  } else {
    res.error("Error!!");
  }
});
module.exports = router;
