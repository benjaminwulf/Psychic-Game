// Begining variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess;
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesSoFar = [];
document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;

// Reset of game
var resetGame = function() {
    // computerRandomLetterGenerator();
    guessesRemaining = 9;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining
    guessesSoFar = [];
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
    document.querySelector("#loser-message").innerHTML = " ";
    document.querySelector("#winner-message").innerHTML = " ";
};

// Computer chooses a random letter. It is saved at variable computerLetter.
var computerRandomLetterGenerator = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
computerRandomLetterGenerator();
console.log("Computer generated random letter: " + letterToGuess); //bww

// KEYBOARD PROMPT FOR MOBILE 
function getKeyboardViaPrompt() {
    var person = prompt("Guess a letter to get started");
    if (person != null) {
    var userGuess = person;
    } else if (userAction == null) {
        document.onkeydown = function (event) {
     userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User just guessed: " + userGuess);    }
};

// Key is pressed. Calls a function that is called on keyboard event
    // document.onkeydown = function (event) {
    // userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // console.log("User just guessed: " + userGuess);

    guessesSoFar.push(userGuess + " ");
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar

    // Countdown on guessesRemaining
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining--;

    //Computer choice is compared to users choice for equality inside for loop
    if (letterToGuess == userGuess) {
        //If equal display text signifing winner!
        wins++;
        document.querySelector("#winner-message").innerHTML = "We have a WINNER!";
        document.querySelector("#wins").innerHTML = wins;
        resetGame();
    } else if (letterToGuess !== userGuess && guessesRemaining == 0) {
        losses++;
        document.querySelector("#loser-message").innerHTML = "Psych... you lose!"
        document.querySelector("#losses").innerHTML = losses;
        resetGame();
    }
};
resetGame(); //resetGame

///=================Work on reset
