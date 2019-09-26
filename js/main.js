// Your web app's Firebase configuration
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

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in: ", user.email);
  } else {
    console.log("USER HAS NOT YET LOGGED IN");
  }
});
// function gotoDemo() {
//   window.location.href = "../Admin/fileUploadSimple.html";
// }

const signInForm = document.querySelector("#signInForm");
if (signInForm != null) {
  signInForm.addEventListener("submit", event => {
    event.preventDefault();
    const email = signInForm["email"].value;
    const password = signInForm["password"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
    });
  });
}

const signUpForm = document.querySelector("#signUpForm");
if (signUpForm != null) {
  signUpForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = signUpForm["username"].value;
    const email = signUpForm["email"].value;
    const password = signUpForm["password"].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      signUpForm.reset();
    });
  });
}

const logoutButton = document.getElementById("logout");
if (logoutButton != null) {
  logoutButton.addEventListener("click", event => {
    event.preventDefault();
    auth.signOut();
  });
}
