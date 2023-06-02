// declare a const set equal to require express at function Router()
const router = require("express").Router();
const getRandomID = require("../helpers/getRandomID");

/**
 * grab exported functions from noteHelpersfunction.js
 */
const {
  readAndAppend,
  readFromFile,
  writeToFile,
} = require("../helpers/noteHelperFunction");

/**
 * get notes and send to function readFromFile and parse the data
 */
router.get("/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);
  readFromFile("./db/db.json").then((data) => {
    res.json(JSON.parse(data));
  });
});

/**
 * post the values of the json object
 */
router.post("/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);

  const { title, text } = req.body;

  if (req.body) {
    const newNotes = {
      title,
      text,
      id: getRandomID(),
    };

    readAndAppend(newNotes, "./db/db.json");
    res.json("notes added successfully");
  } else {
    res.error("Error!!");
  }
});
/**
 * function to delete notes
 */
router.delete("/notes/:id", (req, res) => {
  console.log(req.params);
  console.info(`${req.method} request recieved for notes`);
  const notesid = req.params.id;
  readFromFile("./db/db.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const deleting = json.filter(
        (title, text) => title.id !== notesid && text.id !== notesid
      );

      writeToFile("./db/db.json", deleting);

      res.json(`item ${notesid} has been deleted`);
    });
});
//export router
module.exports = router;
