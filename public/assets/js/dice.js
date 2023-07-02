const diceSelect = document.getElementById('selectDie');
const rollButton = document.querySelector('#diceForm button[type="submit"]');
const resultSpan = document.getElementById('displayResult');

// Define the function to roll the die
const rollDie = (sides) => Math.floor(Math.random() * sides) + 1;

// Add an event listener to the form to prevent the default form action and roll the die
document.getElementById('diceForm').addEventListener('submit', (event) => {
    // Prevent form submission (page reload)
    event.preventDefault();
    
    // Grab the number of sides from the selected option
    const sides = diceSelect.value;

    // If no dice selected, show message
    if (sides === "Select a die...") {
        resultSpan.textContent = 'Please select a die.';
        return;
    }

    // Roll the die and store the result
    const result = rollDie(sides);

    // Display the result
    resultSpan.textContent = `You rolled a ${result}!`;
});
