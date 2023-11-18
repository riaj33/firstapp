require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please loged in first </h1>");
});

app.get("/twitter", (req, res) => {
  res.send("riaj33");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Hello from my youtube channel </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
