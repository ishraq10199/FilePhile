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
