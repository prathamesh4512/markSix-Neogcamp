const input = document.getElementById("input-txt");
const translateBtn = document.getElementById("translate-btn");
const translatedOutput = document.getElementById("output-txt");

const SERVER_URL = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
  return SERVER_URL + "?text=" + text;
}

//erro handler
function errorHandler(error) {
  alert("You exceeded per hour limit, Please try again after 1hr");
  // console.log("Error: " + error);
}

//making api call
function fetchOutput(inputText) {
  fetch(getUrl(inputText))
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      translatedOutput.innerText = data.contents.translated;
    })
    .catch(errorHandler);
}

//onclick event handler
function clickHandler() {
  var inputText = input.value;

  if (inputText === "") {
    alert("Please enter the text to translate");
    return;
  }

  fetchOutput(inputText);
}

//keydown event handler
function handleEnter(e) {
  if (e.key === "Enter") {
    fetchOutput(e.target.value);
  }
}

//attaching onclick eventlistener
translateBtn.addEventListener("click", clickHandler);
//Enter press event handler
input.addEventListener("keydown", handleEnter);
