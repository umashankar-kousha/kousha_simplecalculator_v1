var displayEl = document.getElementById("display");
var displayResultEl = document.getElementById("displayResult");

function onClearButtonClick(val) {
  displayEl.value = "";
  displayResultEl.value = "0";
}

function onButtonClick(val) {
  displayEl.value += val;
}

function onEquallButtonClick() {
  let result = eval(displayEl.value);
  displayResultEl.value = result;
}
