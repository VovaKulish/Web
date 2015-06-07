console.time('zeroTimeout');
setTimeout(function () {
	console.timeEnd('zeroTimeout');
}, 0);