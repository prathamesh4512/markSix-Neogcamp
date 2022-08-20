const input = document.getElementById("input-txt");
const translateBtn = document.getElementById("translate-btn");
const translatedOutput = document.getElementById("output-txt");

const SERVER_URL = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
  return SERVER_URL + "?text=" + text;
}

function errorHandler(error) {
  alert("Something is wrong! Please try after some time.");
  console.log("Error: " + error);
}

function clickHandler() {
  var inputText = input.value;

  if (inputText === "") alert("Please enter the text to translate");

  fetch(getUrl(inputText))
    .then((response) => response.json())
    .then((json) => {
      translatedOutput.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}
translateBtn.addEventListener("click", clickHandler);
