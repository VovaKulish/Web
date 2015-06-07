/**
 * Плохо
 */
var num;
function roundNumber() {
	num = Math.round(num);
}

num = 11.5;
roundNumber();
console.log(num);


/**
 * Хорошо
 */
var num;
function roundNumber(numberToRound) {
	return Math.round(numberToRound);
}

num = 11.5;
console.log(roundNumber(num));