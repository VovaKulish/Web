function copyLis() {
	var ulMain = document.querySelector('.navigation')
	var donorlis = document.querySelectorAll('.navigation.nav-2 > li')
	for (var i = 0; i < donorlis.length; i += 1) {
		ulMain.appendChild(donorlis[i])
	}
}

function copyLisBefore() {
	var ulMain = document.querySelector('.navigation')
	var firstChild
	var donorlis = document.querySelectorAll('.navigation.nav-2 > li')
	for (var i = 0; i < donorlis.length; i += 1) {
		ulMain.insertBefore(donorlis[i], ulMain.firstChild)
	}
}

function copyClonedLisBefore() {
	var ulMain = document.querySelector('.navigation')
	var firstChild
	var donorlis = document.querySelectorAll('.navigation.nav-2 > li')
	for (var i = 0; i < donorlis.length; i += 1) {
		ulMain.insertBefore(donorlis[i].cloneNode(true), ulMain.firstChild)
	}
}

copyClonedLisBefore()