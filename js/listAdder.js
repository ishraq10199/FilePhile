import filesize from "./fileSize.js";

const form2 = document.getElementById("myForm2");

var countFiles = 0;

function timeConverter(UNIX_timestamp) {
  var ts = new Date(UNIX_timestamp);
  return ts.toLocaleString();
}

function handleParsing(file) {
  const name = file.name;
  const lastDot = name.lastIndexOf(".");

  const fileName = name.substring(0, lastDot);
  const ext = name.substring(lastDot + 1);

  // outputfile.value = fileName;
  // extension.value = ext;
  // console.log(timeConverter(event.target.files[0].lastModified));
  // console.log(filesize(event.target.files[0].size));

  var output = [
    fileName,
    ext,
    timeConverter(file.lastModified),
    filesize(file.size)
  ];
  return output;
}

function getoutput(event) {
  if (
    !event ||
    !event.target ||
    !event.target.files ||
    event.target.files.length === 0
  ) {
    return;
  }
  var fileDataArray = [];
  for (var i = 0; i < event.target.files.length; i++) {
    fileDataArray[i] = handleParsing(event.target.files[i]);
  }
  return fileDataArray;
}

var loadFile = function(event) {
  var reader = new FileReader();
  reader.onload = function() {
    var cardList = document.getElementById("cardList");
    for (var i = 0; i < event.target.files.length; i++) {
      var output = [];
      var previewURL = [];
      output[i] = document.createElement("div");
      var fileDataList = document.createElement("ul");
      fileDataList.setAttribute(
        "class",
        "list-group list-group-flush myCardBackground"
      );
      fileDataList.style.listStyle = "none";
      output[i].setAttribute("class", "card text-white bg-dark");
      output[i].style.width = "20rem";
      output[i].style.margin = "1rem";
      var cardHeader = document.createElement("div");
      cardHeader.setAttribute("class", "card-header");
      output.innerHTML = "<ul id='fileData'" + countFiles.toString() + "</ul>";
      const fileData = document.getElementById(
        "fileData" + countFiles.toString()
      );
      countFiles++;
      var fileParseData = getoutput(event);
      cardHeader.innerHTML =
        "<strong>" + event.target.files[i].name + "</strong>";
      // console.log(event.target.files[0].type);
      var name = document.createElement("li");
      name.innerHTML = "Name: " + fileParseData[i][0];
      var extension = document.createElement("li");
      extension.innerHTML = "Type: " + fileParseData[i][1];
      var lastModified = document.createElement("li");
      lastModified.innerHTML = "Last Modified: " + fileParseData[i][2];
      var fileSize = document.createElement("li");
      fileSize.innerHTML = "Size: " + fileParseData[i][3];

      output[i].appendChild(cardHeader);
      fileDataList.appendChild(extension);
      fileDataList.appendChild(name);
      fileDataList.appendChild(lastModified);
      fileDataList.appendChild(fileSize);
      // output.src = reader.result;
      // console.log(reader.result);
      output[i].appendChild(fileDataList);
      previewURL[i] = URL.createObjectURL(event.target.files[i]);
      var prev = document.createElement("a");
      prev.setAttribute("href", previewURL[i]);
      prev.innerHTML = "Preview";
      prev.setAttribute("class", "ml-auto");
      prev.style.paddingRight = "15px";
      prev.style.paddingBottom = "10px";
      prev.style.marginBottom = "0";
      output[i].appendChild(prev);
      cardList.appendChild(output[i]);
    }
  };
  reader.readAsDataURL(event.target.files[0]);
};

form2.addEventListener("change", function(event) {
  event.preventDefault();
  console.log(event.target.files);
  loadFile(event);
});
