let input = document.getElementById("input");

function appendToinput(display) {
  input.value += display;
}
function clearinput() {
  input.value = " ";
}

function calculate(params) {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}
