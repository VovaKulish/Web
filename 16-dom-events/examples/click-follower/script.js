var contextMenuNode = document.querySelector('.click-follower')

document.addEventListener('click', function (event) {
	contextMenuNode.style.display = 'block';
	contextMenuNode.style.left = event.x + 'px';
	contextMenuNode.style.top = event.y + 'px';
}, false)