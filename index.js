const express = require("express");
const app = express();

app.get("/cats", function (req, res) {
  res.end("The cats are very fluffy");
});

app.get("/dogs", function (req, res) {
  res.end("Dogs are very smart");
});

app.get("/mouses", function (req, res) {
  res.end("The mouses are small");
});

app.get("/horses", function (req, res) {
  res.end("Horses are fast");
});

app.get("/birds", function (req, res) {
  res.end("Birds can fly");
});

app.listen(8080, function () {
  console.log("Server has been started on port 8080");
});

// http://localhost:8080/cats
// http://localhost:8080/dogs
// http://localhost:8080/mouses
// http://localhost:8080/horses
// http://localhost:8080/birds
