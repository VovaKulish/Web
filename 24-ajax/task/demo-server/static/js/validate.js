'use strict';
//############TOOLS#############
var cons;

function bind(obj, event_name, handler){
	var handler_wrapper = function (event) {
		event = event || window.event;
		if (!event.target && event.srcElement) {
			event.target = event.srcElement;
		}
		return handler.call(obj, event);
	};

	if (obj.addEventListener) {
		obj.addEventListener(event_name, handler_wrapper, false);
	} else if (obj.attachEvent) {
		obj.attachEvent('on' + event_name, handler_wrapper);
	}
	return handler_wrapper;
};

function addClass(node, classToAdd){
	var arrOfClasses = [];

	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClasses.length; i += 1) {
		if(arrOfClasses[i] === classToAdd) {
			return;
			}
	};

	if (arrOfClasses.length === 0) {
		node.className += classToAdd;
	} else {
		node.className += ' ' + classToAdd;
	};
		return;
};

function hasClass(node, classToCheck) {
	var arrOfClasses = [];
		
	if (node.className) {
		arrOfClasses = node.className.split(' ');
	};
		
	for(var i = 0; i < arrOfClasses.length; i += 1 ) {
		if(arrOfClasses[i] === classToCheck) {
			return true;
		}
	}
	return false;
};

function removeClass(node, classToRemove) {
	var arrOfClass = [];
	var resultArr = [];

	if (node.className) {
		arrOfClass = node.className.split(' ');
	};

	for(var i = 0; i < arrOfClass.length; i += 1) {
		if(arrOfClass[i] !== classToRemove) {
			resultArr.push(arrOfClass[i]);
		}
	}
	node.className = resultArr.join(' ');
};

//список уже зарезервированных мейлов
var arrOfmail = ['author@mail.com', 'foo@mail.com', 'tester@mail.com'],
	button = document.querySelector('.btn'),
	mail = document.querySelector('#email'),
	password = document.querySelector('#password'),
	cheсkBox = document.querySelector('.checkbox').children[0].children[0],
	regForMail = /\w+@[a-zA-Z_]+?\.[a-zA-Z_]{1,7}/,
	regForPass = /[0-9a-z_\-]+/i;

//показывает ошибку
function errorShow(node) {
	var node = node.parentNode;

	removeClass(node, 'required');
	addClass(node, 'has-error');
	removeClass(node.children[2], 'hide');
};

//скрывает ошибку
function errorHide(node) {
	var node = node.parentNode;
	
	removeClass(node, 'has-error');
	addClass(node, 'required');
	addClass(node.children[2], 'hide');
};

//проверяет на уникальность введенный mail
function checkForUniq(str) {
	for(var i = 0; i < arrOfmail.length; i += 1) {
		if (str === arrOfmail[i]) {
			return false;
		}
	}
	return true;
};

//добавляет ошибку
function addError(node, text) {
	errorShow(node);
	node.parentNode.children[2].textContent = text;
	addClass(button, 'disabled');
}

//проверка на правильность мыла
function chekMail() {
	setTimeout(function() {
		if (mail.value === '') {
			addError(mail, 'Поле, обязательное к заполнению не заполнено')
		} else if (!mail.value.match(regForMail)){
			addError(mail, 'Ошибка в email-е');
		} else if (!checkForUniq(mail.value)) {
			addError(mail,'email уже занят');
		} else {
			errorHide(mail);
			finalCheсk();
		}
	}, 1000);
};

//проверка на правильность пароля
function chekPas() {
	setTimeout(function() {
		var textError = password.parentNode.children[2],
			pasVal = password.value;

		if (pasVal === '') {
			addError(password, 'Поле, обязательное к заполнению не заполнено');
		} else if (pasVal.length < 5) {
			addError(password, 'Пароль слишком короток');
		} else if (pasVal.match(/[a-zA-Z]+/) === null) {
			addError(password, 'Пароль не может состоять только из чисел');
		} else if (pasVal.match(/[0-9]+/) === null) {
			addError(password, 'Пароль не может состоять только из букв');
		} else if (pasVal.match(regForPass)[0] !== pasVal) {
			addError(password, 'Пароль содержит запрещенные символы (разрешенные - латинские буквы, цифры, подчеркивание, минус)');
		} else {
			errorHide(password);
			finalCheсk();
		}
	}, 500);
};

//последня проверка для кнопки
function finalCheсk() {
	if((cheсkBox.checked) && (hasClass(mail.parentNode, 'required')) && (hasClass(password.parentNode, 'required')) && (password.value !== '') && (mail.value !== '')) {
		removeClass(button, 'disabled');
	} else {
		addClass(button, 'disabled');
	}
};

function chekMailbyAjax(){
	var result, someHuy;
	someHuy = 'sru_529@mail.ru';

	//$.ajax('/server-data/emails.json', someHuy);
	//console.log(someHuy);

	cons = jQuery.ajax( '/check-email/?email=' + someHuy);
	//console.log(cons.responseText);
	return cons.responseText;
}

// проверку сделал по кейапу, так пользователю будут подсказки выкидывать сразу в процессе набора.
// ну и на всякий случай, сделал по уходу из фокуса тоже.
bind(password, 'blur', chekPas);
bind(mail, 'blur', chekMail);
bind(cheсkBox, 'click', finalCheсk);
bind(mail, 'keyup', chekMail);
bind(password, 'keyup', chekPas);