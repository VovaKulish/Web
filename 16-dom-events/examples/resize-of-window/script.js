'use strict'

(function () {
	var widthNode = document.querySelector('.window-width');
	var heightNode = document.querySelector('.window-height');

	function updateDimentions() {
		widthNode.value = window.innerWidth;
		heightNode.value = window.innerHeight;
	}
	
	window.addEventListener('resize', updateDimentions, false);
	updateDimentions();
}());