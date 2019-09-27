auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in: ", user.email);
    window.location.href = "/admin-panel";
  } else {
    console.log("User not logged in!");
  }
});
function gotoDemo() {
  window.location.href = "/admin-panel";
}
function gotoHome() {
  window.location.href = "/";
}

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
