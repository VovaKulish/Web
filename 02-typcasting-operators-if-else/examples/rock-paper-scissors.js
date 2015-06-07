//  https://en.wikipedia.org/wiki/Rock-paper-scissors
var ROCK = 'rock';
var PAPER = 'paper';
var SCISSORS = 'scissors';
var programChoise;
var random = Math.random()

if (random < 0.33) {
	programChoise = ROCK;
} else if (random < 0.66) {
	programChoise = PAPER;
} else {
	programChoise = SCISSORS;
}

var promptToPlay = 'Choose one: ' + ROCK + ', ' + PAPER + ', ' + SCISSORS;
var userGuess = prompt(promptToPlay);
if (userGuess === programChoise) {
	alert('Draw. My choise was "' + programChoise + '" too');
} else if ((userGuess === ROCK && programChoise === SCISSORS) ||
	(userGuess === PAPER && programChoise === ROCK) ||
	(userGuess === SCISSORS && programChoise === PAPER)) {
	alert('You bet me. My choise was ' + programChoise);
} else {
	alert('User-looser, My choise was "' + programChoise + '"');
}
