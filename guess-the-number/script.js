// Make random number between 0-1000
var randomNumber = Math.floor(Math.random() * 1000);
console.log(randomNumber);

// Button click listener
var guessBtn = document.getElementById('submit');
guessBtn.addEventListener('click', (e) => {
    // Save user input
    var guessNumber = document.getElementById('userGuess').value;
    // Get result div to append result to
    var result = document.getElementById('result');

    // Compare user input to random number
    if (guessNumber == randomNumber) {
        result.innerHTML = "<p>Congratulations, you guessed Correctly!</p>";
        document.getElementById('userGuess').value = "";
    } else if (guessNumber > randomNumber) {
        result.innerHTML = "<p>Too high, guess again!</p>";
        document.getElementById('userGuess').value = "";
    } else if (guessNumber < randomNumber) {
        result.innerHTML = "<p>Too low, guess again!</p>";
        document.getElementById('userGuess').value = "";
    } // end if
})