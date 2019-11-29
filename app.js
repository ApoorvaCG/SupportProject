const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const logger = require("morgan");
import mainRoutes from "./server/routes/main";
const app = express();

console.log("api",mainRoutes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use("/api", mainRoutes);

mongoose
  .connect("mongodb://localhost/projectsupport")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(error => {
    console.log("Error while connecting : ", error);
  });

const port = 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To Support Project " });
});

app.listen(port, (req, res) => {
  console.log("Server is up and running at port : " + port);
});
