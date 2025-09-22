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

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    onEquallButtonClick();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    event.preventDefault();

    onClearButtonClick();
  }
});

function onEquallButtonClick() {
  let end = inputValidation(displayEl.value.at(-1));
  let start = inputValidation(displayEl.value[0]);
  if (start || end) {
    alert("Error:Please give valid format");
  } else if (displayEl.value[0] == "0") {
    let val1 = displayEl.value.slice(1);

    let result = eval(val1);
    displayEl.value = val1;
    displayResultEl.value = result;
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
