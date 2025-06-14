// Appends numbers and operators to the display
function displayItem(value) {
  document.getElementById("calculator-input").value += value;
}

// Inserts the π symbol 
function displayPie() {
  document.getElementById("calculator-input").value += "π";
}

// Clears the display
function clearDisplay() {
  document.getElementById("calculator-input").value = "";
}

// Delete last value
function deleteItem() {
    let inputValue = document.getElementById("calculator-input");
    inputValue.value = inputValue.value.toString().slice(0, -1);
}

// Calculates the result and replaces π with Math.PI
function calculate() {
  const display = document.getElementById("calculator-input");
  let expression = display.value;

  // Insert multiplication if a number is directly before π 
  expression = expression.replace(/(\d)π/g, '$1*Math.PI');

  // Replace all remaining π with Math.PI
  expression = expression.replace('π', 'Math.PI');

  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}


