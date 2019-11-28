const express = require("express");

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To Support Project " });
});

app.listen(port, (req, res) => {
  console.log("Server is up and running at port : " + port);
});
