'use strict';

(function () {
	function wait(ms) {
		var start = (new Date()).getTime();
		while(new Date() - start < ms);
	}

	var timesCalled = 0;
	setInterval(function () {
		// wait(400)
		timesCalled += 1;
		console.log('timesCalled', timesCalled);
	}, 500);

	// ----
	var timer = document.querySelector('.timer')
	window.timer = setInterval(function () {
		var now = (new Date()).getTime()
		timer.innerText = now
	}, 100)
	
	var input = document.querySelector('input')
	var keyupTimeout
	input.addEventListener('keyup', function () {
		clearTimeout(keyupTimeout)
		keyupTimeout = setTimeout(function () {
			console.log(input.value)
		}, 300);
	});

	// ----
	var outer = document.querySelector('.outer')
	var inner = document.querySelector('.inner')
	var hidingTimeout
	outer.addEventListener('mouseout', function () {
		console.log('mouse out, planning to hide')
		hidingTimeout = setTimeout(function () {
			console.log('hiding')
			inner.style.display = 'none'
		}, 1000)
	}, false)
	outer.addEventListener('mouseenter', function () {
		console.log('mouseenter, stop planning to hide')
		clearTimeout(hidingTimeout)
		inner.style.display = 'block'
	}, false)


	//
	var animate = document.querySelector('.animate')
	var left = 0;
	var top = 0;
	setInterval(function () {
		left += 2;
		top += 1;
		animate.style.left = left + 'px';
		animate.style.top = top + 'px';
	}, 1000 / 60)
}());