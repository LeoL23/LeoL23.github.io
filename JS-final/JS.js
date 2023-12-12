console.log("Making sure this works");

let currentIndex = 0; // Current index of the input boxes
let countingInterval;

function startCounting(index) {
  countingInterval = setInterval(() => {
    const inputContainers = document.querySelectorAll('.input-box');
    const currentInput = inputContainers[index];

    // Get the current value and convert it to a number
    let currentValue = parseInt(currentInput.value);

    // Check if the value is a valid number, and if not, set it to 0
    if (isNaN(currentValue)) {
      currentValue = 0;
    }

    currentInput.value = (currentValue + 1) % 10;
  }, 170); // Changes the speed of numbers changing
}

function stopCounting() {
  clearInterval(countingInterval);
}

function setNumber() {
  const inputContainers = document.querySelectorAll('.input-box');
  const currentInput = inputContainers[currentIndex];

  // If the input is empty or not a number, generate a random number between 0-9
  if (currentInput.value === '' || isNaN(parseInt(currentInput.value))) {
    currentInput.value = Math.floor(Math.random() * 10);
  }

  // Move to the next input box
  currentIndex = (currentIndex + 1) % inputContainers.length;

  // Stop counting for the previous box
  const previousIndex = (currentIndex - 1 + inputContainers.length) % inputContainers.length;
  stopCounting();

  // Start counting for the current box
  startCounting(currentIndex);
}

function restart() {
  const inputContainers = document.querySelectorAll('.input-box');

  // Clear all input boxes
  inputContainers.forEach(input => {
    input.value = '';
  });

  // Reset the current index to the first input box
  currentIndex = 0;

  // Stop counting
  stopCounting();

  // Start counting for the first box
  startCounting(currentIndex);
}

// Dynamically create input boxes based on the length of the phone number
const inputContainer = document.getElementById('input-container');
for (let i = 0; i < 10; i++) {
  const inputBox = document.createElement('input');
  inputBox.setAttribute('type', 'text');
  inputBox.setAttribute('maxlength', '1');
  inputBox.setAttribute('class', 'input-box');
  inputContainer.appendChild(inputBox);
}

// Start counting for the first box initially
startCounting(currentIndex);