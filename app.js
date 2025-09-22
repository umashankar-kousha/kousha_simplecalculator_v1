var displayEl = document.getElementById("display");
var displayResultEl = document.getElementById("displayResult");

function onClearButtonClick(val) {
  displayEl.value = "";
  displayResultEl.value = "0";
}

function onButtonClick(val) {
  displayEl.value += val;
}

function onSquareButtonClick() {
  let value = displayEl.value;
  if (value == "") {
    alert("Error : Please enter number first");
  } else {
    displayResultEl.value = value ** 2;
  }
}

function onCubeButtonClick() {
  let value = displayEl.value;
  if (value == "") {
    alert("Error : Please enter number first");
  } else {
    displayResultEl.value = value ** 3;
  }
}

displayEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    onEquallButtonClick();
  }
});

function onEquallButtonClick() {
  let end = inputValidation(displayEl.value.at(-1));
  let start = inputValidation(displayEl.value[0]);
  if (start || end) {
    alert("Error:Please give valid format");
  } else {
    let result = eval(displayEl.value);
    displayResultEl.value = result;
  }
}

function inputValidation(symbol) {
  const mainString = symbol;
  const targetStrings = ["+", "-", "*", "/"];

  const foundAny = targetStrings.some((substring) => {
    return mainString.includes(substring);
  });

  return foundAny;
}
