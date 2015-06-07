(function () {
	'use strict';

	function addEvent(obj, eventName, handler) {
		var handlerWrapper = function(event) {
			event = event || window.event;
			if (!event.target && event.srcElement) {
				event.target = event.srcElement;
			}
			return handler.call(obj, event);
		};

		if (obj.addEventListener) {
			obj.addEventListener(eventName, handlerWrapper, false);
		} else if (obj.attachEvent) {
			obj.attachEvent('on' + eventName, handlerWrapper);
		}
		return handlerWrapper;
	}


	function topWalker(node, testFunc, lastParent) {
		while (node && node !== lastParent) {
			if (testFunc(node)) {
				return node;
			}
			node = node.parentNode;
		}
	}


	function getLink(node) {
		return topWalker(node, function(node) {
			return node.nodeName === 'A';
		});
	}

	addEvent(document, 'click', function(event) {
		var link;
		link = getLink(event.target);
		if (link) {
			event.preventDefault();
			console.log(link);
		}
	});
}());