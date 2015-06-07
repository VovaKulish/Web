var min = 0;
var max = 50;
var rand = -0.5 + Math.random()*(max-min);
	proposedNumber = Math.round(rand);
var maximumNumbersOfGuesses = prompt('со скольки попыток ты угадаешь число?',10);
var numberOfUser = prompt('введи загаданное число (от 0 до 50)');
var previousNumber = numberOfUser;
var currentNumberOfGuesses = 1;
while (numberOfUser!=proposedNumber){
	if (isNaN(numberOfUser)){
	alert('Можно вводить только цифры');
break;

}
 	if (currentNumberOfGuesses == maximumNumbersOfGuesses){
	alert('Вы проиграли, нельзя больше ' + maximumNumbersOfGuesses + ' попыток');
break;
}		else if (Math.abs(numberOfUser - proposedNumber)>Math.abs(previousNumber - proposedNumber)){
    alert('Холоднее');
}		else{
	alert('Теплее');
}	

	previousNumber = numberOfUser;
	numberOfUser = prompt('Введи загаданное число (от 0 до 50)');
	currentNumberOfGuesses += 1;
}if (numberOfUser == proposedNumber){
	alert('Молодец, угадал с ' + currentNumberOfGuesses + '-й попытки');
}