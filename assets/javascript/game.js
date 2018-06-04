// Begining variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess;
var userGuess;
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var guessesSoFar = [];
document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;

// Reset of game
function resetGame() {
    computerRandomLetterGenerator();
    guessesRemaining = 9;
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
    guessesSoFar = [];
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
    document.querySelector("#winner-message").innerHTML = " ";
    document.querySelector("#loser-message").innerHTML = " ";
};

// Computer chooses a random letter. It is saved at variable computerLetter.
var computerRandomLetterGenerator = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
computerRandomLetterGenerator();
console.log("Computer generated random letter: " + letterToGuess); //bww


function compareFunc() {
    guessesSoFar.push(userGuess + " ");

    if (letterToGuess == userGuess) {
        //If equal display text signifing winner!
        wins++;
        document.querySelector("#winner-message").innerHTML = "WINNING!"
        document.querySelector("#wins").innerHTML = wins;
        resetGame();
    } else if (letterToGuess !== userGuess && guessesRemaining !== 1) {
        document.querySelector("#guesses-so-far").innerHTML = guessesSoFar;
        guessesRemaining--;
        document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
        }    
     else {
        losses++;
        document.querySelector("#loser-message").innerHTML = "Psych... you lose!"
        document.querySelector("#losses").innerHTML = losses;
        resetGame();
    }
};

// KEYBOARD PROMPT FOR MOBILE 
function getInput() {
    submit = document.getElementById("#form-input-js").submit();
    // var person = prompt("Guess a letter to get started");
    if (submit != null) {
        userGuess = person;
        compareFunc();
    } else {
        console.log("input is null " + userGuess);
        
    }
};

// IF null WE INSTEAD WILL TAKE KEYPRESS FROM THE USERS WITH KEYBOARD
if (getInput = null) {
    compareFunc(); 
} else {
    document.onkeydown = function (event) {
    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    compareFunc(); 
    };
}

// CREATE A INPUT BOX FOR USERS ON MOBILE