var MAX_GUESSES = 5;
var programmGuess = Math.floor(Math.random() * 51); // http://stackoverflow.com/questions/4959975/generate-random-value-between-two-numbers-in-javascript
console.log('programmGuess', programmGuess);
var userWins = false;
var userSurrends = false;
var userAttempts = 0;
var userInput;
var userNumer;
var prevDifference = Infinity;
var currDifference;

var playPrompt = "Давай играть. Угадай число.";
do {
  userAttempts += 1;
  userInput = prompt(playPrompt);
  // Process escape separately
  if (userInput === null) {
    userSurrends = true;
    break;
  }
  userNumer = parseInt(userInput.trim(), 10);
  currDifference = Math.abs(programmGuess - userNumer);
  if (currDifference === 0) {
    userWins = true;
  } else if (currDifference <= prevDifference) {
    playPrompt = '"ТЕПЛЕЕ". Введите следующее число';
  } else {
    playPrompt = '"ХОЛОДНЕЕ". Введите следующее число';
  }
  prevDifference = currDifference;
} while(!userWins && !userSurrends && (userAttempts < MAX_GUESSES));


if (userWins) {
  alert('Ты победил за ' + userAttempts + ' попыток');
} else if (userSurrends) {
  alert('Ты сдался');
} else {
  alert('Ты проиграл');
}
