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
