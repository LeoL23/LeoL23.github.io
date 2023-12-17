console.log("Making sure this works");

let currentIndex = 0;
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

    // Introduce randomness to decide whether to count up or loop back to 0-9
    const randomAction = Math.random();

    if (randomAction < 0.8) {
      // Count up
      currentInput.value = (currentValue + 1) % 10;
    } else {
      // Loop back to 0
      currentInput.value = 0;
    }
  }, getRandomInterval()); // Get a random interval between 100 and 500 milliseconds
}

function stopCounting() {
  clearInterval(countingInterval);
}

function getRandomInterval() {
  // Get a random interval between 80 and 300 milliseconds
  return Math.floor(Math.random() * (300 - 80 + 1) + 100);
}

function setNumber() {
  const inputContainers = document.querySelectorAll('.input-box');
  const currentInput = inputContainers[currentIndex];

  // If the input is empty, will generate a random number between 0-9
  if (currentInput.value === '' || isNaN(parseInt(currentInput.value))) {
    currentInput.value = Math.floor(Math.random() * 10);
  }

  // Move to the box to the right
  currentIndex = (currentIndex + 1) % inputContainers.length;

  // Stop counting the previous box
  const previousIndex = (currentIndex - 1 + inputContainers.length) % inputContainers.length;
  stopCounting();

  // Start counting for the current box
  startCounting(currentIndex);
}
// restart button
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

  // Start counting in current box
  startCounting(currentIndex);
}

function submit() {
    const inputContainers = document.querySelectorAll('.input-box');

    // Clear all input boxes
    inputContainers.forEach(input => {
      input.value = '';
    });
  
    // Reset the current index to first input box
    currentIndex = 0;
  
    // Stop counting
    stopCounting();
  
    // Start counting in current box
    startCounting(currentIndex);
}

// Create amount of input boxes as there are 10 digits in a phone number
const inputContainer = document.getElementById('input-container');
for (let i = 0; i < 10; i++) {
  const inputBox = document.createElement('input');
  inputBox.setAttribute('type', 'text');
  inputBox.setAttribute('maxlength', '1');
  inputBox.setAttribute('class', 'input-box');
  inputContainer.appendChild(inputBox);
}

// Start counting for the first box
startCounting(currentIndex);