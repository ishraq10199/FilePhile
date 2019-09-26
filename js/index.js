const functions = require("firebase-functions");
const path = require("path");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const app = require("../app");
// const path = require("path");
// exports.app = functions.https.onRequest(app);
const app = require("express")();

app.get("/", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/contactUs.html"));
});

app.get("/sign-in", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/signIn.html"));
});

app.get("/sign-up", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/signUp.html"));
});

app.get("/admin-panel", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/Admin/dashboard.html"));
});

app.get("/upload", (req, res) => {
  res.sendFile(path.normalize(__dirname + "/../public/fileUploadSimple.html"));
});

exports.app = functions.https.onRequest(app);
