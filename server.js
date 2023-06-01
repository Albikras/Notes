const express = require("express");
const api = require("./routes/index");

const {
  readFromFile,
  readAndAppendNotes,
  readAndAppendTitle,
} = require("./noteTaker");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("api/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);
  readFromFile("./db/db.jason").then((data) => {
    res.json(JSON.parse(data));
  });
});

app.get("api/noteTitle", (req, res) => {
  console.info(`${req.method} request recieved for title`);
  readFromFile("./db/db.jason").then((data) => {
    res.json(JSON.parse(data));
  });
});

app.post("api/notes", (req, res) => {
  console.info(`${req.method} request recieved for notes`);

  const notes = req.body;

  if (req.body) {
    const newNotes = {
      notes,
    };

    readAndAppendNotes(newNotes, "./dp/dp.jason");
    res.json("notes added successfully");
  } else {
    res.errored("Error!!");
  }
});

app.post("api/noteTitle", (req, res) => {
  console.info(`${req.method} request recieved for title`);

  const title = req.body;

  if (req.body) {
    const newTitle = {
      title,
    };

    readAndAppendNotes(newTitle, "./dp/dp.jason");
    res.json("title added successfully!!!");
  } else {
    res.errored("Error!!");
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

// why is it appended and read twice
