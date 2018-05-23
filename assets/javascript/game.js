// INITIALIZE VARIABLES //bww add more letters
var letters = ["a", "b", "c"];

var letterToGuess = null;

// THE ARRAY WILL HOLD WHAT WE GUESS
var guessLetters = [];

// THIS VARIABLE IS WHAT WILL BE USED TO COUNT DOWN
var guessesRemaining = 9;

// THIS IS THE COUNTER FOR WINS/LOSSES
var wins = 0;
var losses = 0;

// BELOW CREATING 3 FUNCTIONS:
// updateGuesses
// updateGuessesSoFar
// updateGuessesRemaining
// updateGuessesSoFar

var updateGuessesRemaining = function () {
// GRABBING HTML ELEMENT AND SETTING EQUAL TO GUESSES REMAINING
// FOR EXAMPLE: guessesRemaining WILL BE DISPLAYED IN HTML
   document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
   // testing //return guessesRemaining; 
};
// testing // console.log(guessesRemaining);

var updateGuessesSoFar = function () {
// HERE WE TAKE THE GUESSES THE USER HAS TRIED, THEN WE DISPLAY IT AS LETTERS SEPARATED BY COMMAS
    document.querySelector("#guesses-so-far").innerHTML = guessLetters.join(", ");
 };

var updateLetterToGuess = function () {
// HERE WE GET A RANDOM LETTER TO GUESS AND ASSIGN BASED ON RANDOM GENERATOR
    letterToGuess = letters[Math.floor(Math.random() * letters.length )];
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
updateLetterToGuess();
updateGuessesRemaining();

// LEFT
// function to capture key stroke
// conditional statements
// check if match
// after 9 x resets
// if correct w/in 9 pop up WINNING