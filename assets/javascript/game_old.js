// INITIALIZE VARIABLES //bww add more letters
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userGuess = null;
var letterToGuess = null;

// THE ARRAY WILL HOLD WHAT WE GUESS
var guessLetters = [];

// THIS VARIABLE IS WHAT WILL BE USED TO COUNT DOWN
var guessesRemaining = 9;

// THIS IS THE COUNTER FOR WINS/LOSSES
var wins = 0;
var losses = 0;

// BELOW CREATING FUNCTIONS:

var updateGuessesRemaining = function () {
// GRABBING HTML ELEMENT AND SETTING EQUAL TO GUESSES REMAINING
// FOR EXAMPLE: guessesRemaining WILL BE DISPLAYED IN HTML
   document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
};

var updateGuessesSoFar = function () {
// HERE WE TAKE THE GUESSES THE USER HAS TRIED, THEN WE DISPLAY IT AS LETTERS SEPARATED BY COMMAS
    document.querySelector("#guesses-so-far").innerHTML = guessLetters.join(", ");
 };

var updateLetterToGuess = function () {
// HERE WE GET A RANDOM LETTER TO GUESS AND ASSIGN BASED ON RANDOM GENERATOR
    letterToGuess = letters[Math.floor(Math.random() * letters.length )];
 };

// HERE WE ARE CAPTURING THE KEYPRESS AND SAVING AS VARIABLE
// THIS FUNCTION WILL RUN WHENEVER THE USER PRESSES A KEY
document.onkeydown = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log("Player 1 chooses " + userGuess);
};

// THIS IF ELSE STATEMENT WILL COMPARE letter to guess WITH userGuess
if (letterToGuess == userGuess) {
    alert("Winner!");
} else {
    alert("Loser!");
}

// FUNCTIONS THAT WILL BE CALLED WHEN EVERYTHING IS RESET
var reset = function() {
    guessesRemaining = 9;
    guessLetters = [];
    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuessesSoFar();
};

// EXECUTE ON PAGE LOAD
var load = function() {
    updateLetterToGuess();
    updateGuessesRemaining();
};






// LEFT
// function to capture key stroke
// conditional statements
// check if match
// after 9 x resets
// add all letters A-Z
// if correct w/in 9 pop up WINNING