const contactForm = document.getElementById("contactForm");
const contactName = document.querySelector('[name="name"]');
const contactEmail = document.querySelector('[name="email"]');
const contactSubject = document.querySelector('[name="subject"]');
const contactMessage = document.querySelector('[name="message"]');
dataStore = [];
if (localStorage.getItem("dataStore") != undefined) {
  var temp = localStorage.getItem("dataStore");
  dataStore.push(temp);
}

function saySomething() {
  var myPictures = document.getElementById("myPictures");
  myPictures.style.display = "none";
  var btn2 = document.getElementById("btn2");
  btn2.style.display = "block";
  var btn1 = document.getElementById("btn1");
  btn1.style.display = "none";

  var contactbox = document.getElementById("contactBox");
  contactBox.setAttribute("style", "display:block;");
}

function goBack() {
  var myPictures = document.getElementById("myPictures");
  myPictures.style.display = "block";
  var btn1 = document.getElementById("btn1");
  btn1.style.display = "block";
  var btn2 = document.getElementById("btn2");
  btn2.style.display = "none";
  var contactbox = document.getElementById("contactBox");
  contactBox.setAttribute("style", "display:none;");
}

contactForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = contactName.value;
  const email = contactEmail.value;
  const subject = contactSubject.value;
  const message = contactMessage.value;
  var set = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };
  dataStore.push(JSON.stringify(set));
  localStorage.setItem("dataStore", dataStore);
  var successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";
  setTimeout(function() {
    successMessage.style.display = "none";
  }, 3500);
});
