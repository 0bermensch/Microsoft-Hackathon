const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const tasksRoute = require("./routes/tasks.js");
const usersRoute = require("./routes/users.js");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use("/notes", notesRoute);

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

//setup the notes middleware
app.use("/tasks/", tasksRoute);

//setup the notes middleware
app.use("/users/", usersRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`server is listening on PORT: ${PORT}`));
