const express = require("express");
var app = express();
const fs = require("fs");
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/contactUs.html"));
});

app.get("/sign-in", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/signIn.html"));
});

app.get("/sign-up", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/signUp.html"));
});

app.get("/admin-panel", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/Admin/dashboard.html"));
});

app.get("/upload", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/Admin/fileUploadSimple.html"));
});

app.listen(3000, () => {
  console.log("Listening...");
});
