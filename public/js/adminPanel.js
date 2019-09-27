//REDIRECT TO HOME IF NOT LOGGED IN
auth.onAuthStateChanged(user => {
  if (user) {
    console.log("User logged in: ", user.email);
  } else {
    console.log("User not logged in!");
    window.location.href = "/";
  }
});
//LOGOUT AND REDIRECT TO HOME
const logoutButton = document.getElementById("logout");
if (logoutButton != null) {
  logoutButton.addEventListener("click", event => {
    event.preventDefault();
    window.location.href = "/";
    auth.signOut();
  });
}
