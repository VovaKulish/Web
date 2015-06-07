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

function Counter(node, initialValue) {
	this.val = initialValue || 0;
	this.node = node;
	this.init();
}

Counter.prototype.init = function() {
	// add extra layout
/*
<div class="counter-value"></div>
<div class="counter-controls">
	<div class="counter-control-inc">+</div>
	<div class="counter-control-dec">-</div>
</div>
*/
	this.node.innerHTML = '<div class="counter-value"></div> <div class="counter-controls"> <div class="counter-control-inc">+</div> <div class="counter-control-dec">-</div> </div>';
	this.valueNode = this.node.querySelector('.counter-value');


	// Bind implementation
	// function bind(func, context) {
	// 	return function () {
	// 		return func.apply(context, arguments);
	// 	};
	// }
	addEvent(this.node.querySelector('.counter-control-inc'), 'click', this.inc.bind(this));
	
	var _this = this;
	addEvent(this.node.querySelector('.counter-control-dec'), 'click', function () {
		_this.dec();
	});
	this.updateView();
}

Counter.prototype.updateView = function() {
	this.valueNode.innerHTML = this.val;
}

Counter.prototype.inc = function() {
	this.val += 1;
	this.updateView();
}

Counter.prototype.dec = function() {
	this.val -= 1;
	this.updateView();
}

Counter.prototype.get = function() {
	return this.val;
}
