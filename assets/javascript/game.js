// Begining variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess; //used

var wins;
var losses;
var guessesRemaining = 9;
document.querySelector("#guesses-remaining").innerHTML;
var guessesSoFar = [];

// HTML setup of page
document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;

// Computer chooses a random letter. It is saved at variable computerLetter.
var computerLetter = function() {
   letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
computerLetter(); // bww
console.log("Computer generated random letter: " + letterToGuess); //bww

// User makes letter guess
// Key is pressed. Calls a function that is called on keyboard event
// Stored as variable userGuess
document.onkeydown = function(event) {
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   console.log("User just guessed: " + userGuess);

   guessesSoFar.push(userGuess + ", ");
   document.querySelector("#guesses-so-far").innerHTML = guessesSoFar

// Countdown on guessesRemaining
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining--;
// };
};
