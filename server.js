/**
 * require 3 values
 */
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");

//port for the deployment
const PORT = process.env.PORT || 3001;

//const app equal to function express
const app = express();

app.use(express.json()); //express to the json object
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); //express to public folder

app.use("/", htmlRoutes); //use the htmlroutes
app.use("/api", apiRoutes); //use the api routes

//if path is incorrect send to main page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


//create the link
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
