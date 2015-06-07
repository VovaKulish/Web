'use strict';

window.usedEmails = ['author@mail.com', 'foo@mail.com', 'tester@mail.com'];

// (function() {

	function topWalker(node, testFunc, lastParent) {
		while (node && node !== lastParent) {
			if (testFunc(node)) {
				return node;
			}
			node = node.parentNode;
		}
	}

	function showError(groupNode, errorMessage) {
		groupNode.classList.add('has-error');
		var erroMessageNode = document.createElement('div');
		erroMessageNode.className = 'alert alert-danger';
		erroMessageNode.innerHTML = errorMessage;
		groupNode.appendChild(erroMessageNode);
	}

	function hideError(groupNode) {
		groupNode.classList.remove('has-error');
		var erroMessageNode = groupNode.querySelector('.alert.alert-danger');
		if (erroMessageNode) {
			erroMessageNode.parentNode.removeChild(erroMessageNode);
		}
	}


	var emailNode = document.getElementById('email');
	var emailHolder = topWalker(emailNode, function (oneOfParents) {
		return oneOfParents.classList.contains('form-group');
	});
	function validateEmail() {
		var emailNodeValue = emailNode.value.trim();
		hideError(emailHolder)
		if (!emailNodeValue) {
			showError(emailHolder, "Введите емейл. Поле обязательно для заполнения");
			submitButton.disabled = true;
			return false;
		}
		if (!/[^@]+@[^@\.]+\.[^@]+/.test(emailNodeValue)) {
			showError(emailHolder, "Исправьте правописание. Ошибка в адресе почты");
			submitButton.disabled = true;
			return false;
		}
		return true;
	}
	emailNode.addEventListener('keyup', validateEmail, false);
	emailNode.addEventListener('change', validateEmail, false);
	emailNode.addEventListener('blur', validateEmail, false);


	var passwordNode = document.getElementById('password');
	var passwordHolder = topWalker(passwordNode, function (oneOfParents) {
		return oneOfParents.classList.contains('form-group');
	});
	function validatePassword() {
		var passwordNodeValue = passwordNode.value.trim();
		hideError(passwordHolder)
		if (!passwordNodeValue) {
			showError(passwordHolder, "Введите пароль. Поле обязательно для заполнения");
			submitButton.disabled = true;
			return false;
		}
		if (/^[a-z]+$/i.test(passwordNodeValue) || /^\d+$/i.test(passwordNodeValue)) {
			showError(passwordHolder, "Введите пароль посложнее. Пароль должен состоять из чисел и букв");
			submitButton.disabled = true;
			return false;
		}
		return true;
	}
	console.log(passwordNode)
	passwordNode.addEventListener('keyup', validatePassword, false);
	passwordNode.addEventListener('change', validatePassword, false);
	passwordNode.addEventListener('blur', validatePassword, false);

	var submitButton = document.querySelector('button[type="submit"]')
	document.querySelector('form').addEventListener('submit', function (event) {
		var formIsValid;
		formIsValid = validateEmail() && validatePassword();
		if (!formIsValid) {
			submitButton.disabled = true;
			event.preventDefault();
		}
	}, false);
// }())