let justCalculated = false;

function appendToDisplay(value) {
  const display = document.getElementById('display');

  if (justCalculated) {
    if (!isOperator(value)) {
      display.value = '';
    }
    justCalculated = false;
  }

  // Handle % as /100
  if (value === '%') {
    display.value += '/100';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
  justCalculated = false;
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.value);
    display.value = result;
    justCalculated = true;
  } catch {
    display.value = 'Error';
    justCalculated = true;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}
