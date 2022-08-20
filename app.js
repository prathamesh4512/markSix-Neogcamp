const input = document.getElementById("input-txt");
const translateBtn = document.getElementById("translate-btn");
const translatedOutput = document.getElementById("output-txt");

const SERVER_URL = "https://api.funtranslations.com/translate/minion.json";

function getUrl(text) {
  return SERVER_URL + "?text=" + text;
}

//erro handler
function errorHandler(error) {
  alert("Something is wrong! Please try after some time.");
  console.log("Error: " + error);
}

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

  console.log("dsdsds");
  fetchOutput(inputText);

  //   fetch(getUrl(inputText))
  //     .then((response) => response.json())
  //     .then((json) => {
  //       //   console.log(json);
  //       translatedOutput.innerText = json.contents.translated;
  //     })
  //     .catch(errorHandler);
}

function handleEnter(e) {
  if (e.key === "Enter") {
    fetchOutput(e.target.value);
  }
}

//attaching onclick eventlistener
translateBtn.addEventListener("click", clickHandler);

input.addEventListener("keydown", handleEnter);
