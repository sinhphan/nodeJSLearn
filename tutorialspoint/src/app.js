const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const multer = require("multer");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fs = require("fs");

mongoose
  .connect(
    "mongodb+srv://Cluster77742:SVxTVnlRV0pj@cluster77742.1n42d0c.mongodb.net/my_db"
  )
  .then(() => {
    console.log("Database is connecting");
  });

const app = express();
const port = 3000;
const upload = multer();

// Middleware function
app.use("/courses", (req, res, next) => {
  console.log("use link to courses");
  next();
});

app.use(bodyParser.json());

app.use(upload.array());

app.use(cookieParser());

app.use(session({ secret: "hello i am sinh" }));

// set static folder
app.use(express.static("public"));

// routes handle
app.use("/courses", routes.courses);
app.use("/person", routes.person);
app.use("/", routes.home);
app.get("*", (req, res) => {
  res.send("sorry this url invalid");
});

app.listen(port);
