const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

//CUSTOM ASSETS FOR EJS
app.use(express.static("public"));

//USE EJS GLOBALLY
app.set("view engine", "ejs");

//PUBLIC ROUTES:
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contactUs");
});

app.get("/sign-in", (req, res) => {
  res.render("signIn");
});

app.get("/sign-up", (req, res) => {
  res.render("signUp");
});

app.get("/admin-panel", (req, res) => {
  res.render("Admin/dashboard");
});

app.get("/upload", (req, res) => {
  res.render("Admin/fileUploadSimple");
});

app.listen(3000, () => {
  console.log("Server started");
});
