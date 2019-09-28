var stringifiedObject = document.getElementById("hiddenList");
var fileArray = JSON.parse(stringifiedObject.innerHTML);
var motherBox = document.getElementById("motherBox");
var filesList = document.getElementById("filesList");

for (var i = 0; i < fileArray.length; i++) {
  var listItem = document.createElement("li");
  listItem.innerText = fileArray[i].originalname;
  listItem.setAttribute("class", "list-group-item");
  listItem.style.backgroundColor = "rgb(29, 29, 41)";
  listItem.style.fontSize = "1.5rem";
  filesList.appendChild(listItem);
}

motherBox.appendChild(filesList);
