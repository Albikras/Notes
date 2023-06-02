/**
 * grab 2 requires one set to router another set to path
 */
const router = require("express").Router();
const path = require("path");

/**
 * get of the original page to index.html
 */
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
/**
 * get of the notes page to notes.html
 */
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//export this page
module.exports = router;
