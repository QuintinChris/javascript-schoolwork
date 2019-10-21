// Make random number between 0-1000
var randomNumber = Math.floor(Math.random() * 1000);
console.log(randomNumber);

// Click counter variable
var clicks = 0;

// Button click listener
var guessBtn = document.getElementById('submit');
guessBtn.addEventListener('click', (e) => {
    // Save user input
    var guessNumber = document.getElementById('userGuess').value;
    // Get result div to append result to
    var result = document.getElementById('result');

    guessChecker(guessNumber);
});

// Function to check guess and display result
function guessChecker(number) {
    clicks += 1;
    if (number < randomNumber) {
        result.innerHTML = "<p>Too low, guess again!</p>";
        document.getElementById('userGuess').value = "";
    } else if (number > randomNumber) {
        result.innerHTML = "<p>Too high, guess again!</p>";
        document.getElementById('userGuess').value = "";
    } else if (number == randomNumber) {
        if (clicks > 10) {
            result.innerHTML = "<p>Congratulations! Either you know the secret or you got lucky!</p>";
            document.getElementById('userGuess').value = "";
        } else if (clicks < 10) {
            result.innerHTML = "<p>Congratulations! Ahah, you know the secret!</p>";
            document.getElementById('userGuess').value = "";
        } else if (clicks == 10) {
            result.innerHTML = "<p>Congratulations! However, you should be able to do better!</p>";
            document.getElementById('userGuess').value = "";
        } // end if
    } // end if
}