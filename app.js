var firebase = require("firebase-admin");

var firebaseConfig = {
  apiKey: "AIzaSyDAShOjyS8OUGzj3o02K7MTigzXVoIW9WE",
  authDomain: "filephile-f6b68.firebaseapp.com",
  databaseURL: "https://filephile-f6b68.firebaseio.com",
  projectId: "filephile-f6b68",
  storageBucket: "filephile-f6b68.appspot.com",
  messagingSenderId: "1036404157575",
  appId: "1:1036404157575:web:968283e831e79293fedc22"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const testFolder = "./fileRepo";

const multer = require("multer");
const ejs = require("ejs");

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
  fs.readdir(testFolder, (err, files) => {
    res.render("Admin/dashboard", {
      filesInRepo: files
    });
  });
});

app.get("/upload", (req, res) => {
  res.render("Admin/fileUploadSimple");
});

//Storage engine setting
const storage = multer.diskStorage({
  destination: "./fileRepo",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

//Init upload
const upload = multer({
  storage: storage
});

function writeFileData(filename, size, type, path) {
  firebase
    .database()
    .ref("files/" + filename)
    .set({
      fileName: filename,
      fileSize: size,
      fileType: type,
      filePath: path
    });
}

//On upload success
app.post("/upload-file", upload.array("files[]", 50), (req, res) => {
  try {
    //Send file data to database
    for (var i = 0; i < req.files.length; i++) {
      console.log(req.files[i]);
    }
    //Render success page
    res.render("Admin/success", {
      uploadedFilesList: req.files
    });
  } catch (error) {
    console.log(error);
    res.send(400);
  }
});

app.listen(3000, () => {
  console.log("Server started");
});
