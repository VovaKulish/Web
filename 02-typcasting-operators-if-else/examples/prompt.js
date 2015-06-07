var MINIMAL_AGE_ALLOWED = 18;
var userInput = prompt("Сколько тебе лет?");
var userAge = parseInt(userInput, 10);
if (isNaN(userAge)) {
	alert('Вводить надо было цифрами');
} else {
	if (userAge >= MINIMAL_AGE_ALLOWED) {
		alert('Уже можно')
	} else {
		alert('Еще нельзя')
	}
}
