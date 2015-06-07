'use strict';

(function () {
	var TABS_SELECTOR = '.nav-tabs > li';

	function Slider(node, slideImages) {
		this.$node = $(node);
		this.images = slideImages;
		this._buildHTML(this.images, this.$node);
		this.$slidesContainer = this.$node.find('.slides-holder');
		this.$slides = this.$slidesContainer.find('li');
		this.$tabs = this.$node.find(TABS_SELECTOR);
		this._bindEvents();
		this.currentIndex = 0;
		this.goTo(0);
		this.start();
	}


	Slider.prototype._bindEvents = function () {
		var _this = this;
		this.$tabs.on('click', function (event) {
			_this.waitAwhile();
			_this.goTo(_this.$tabs.index(this));
		});
	};


	Slider.prototype._buildHTML = function (images, $targetNode) {
		var $tabsHolder = $('<ul id="nav-tabs" class="nav-tabs">');
		var $slidesContainer = $('<ul id="parentImg" class="slides-holder">');
		var $sliderContainerWrapper = $('<div class="wrapper-img">');
		var $root = $('<div id="bigSlider">');

		$root.append($tabsHolder);
		$sliderContainerWrapper.append($slidesContainer);
		$root.append($sliderContainerWrapper);

		images.forEach(function (imgSrc, index) {
			index = index + 1;
			var $slide = $('<li><img src="img/' + imgSrc + '"></li>');
			$slidesContainer.append($slide);
			var tabNode = $('<li id="nav-tab' + index + '"><a class="tab-link" href="#fragment' + index + '"></a></li>')
			$tabsHolder.append(tabNode);
		});

		$targetNode.append($root);
	};


	Slider.prototype.scrollNext = function () {
		if (this.currentIndex >= this.images.length - 1) {
			$(document).trigger('end-start-loop', this);
			this.goTo(0);
		} else {
			this.goTo(this.currentIndex + 1);
		}
	};

	Slider.prototype.start = function () {
		this.scrollingInterval = setInterval(this.scrollNext.bind(this), 3000);
	};

	Slider.prototype.waitAwhile = function () {
		clearTimeout(this.waitAwhileTimeout);
		clearInterval(this.scrollingInterval);
		this.waitAwhileTimeout = setTimeout(this.start.bind(this), 2000);
	};


	Slider.prototype.goTo = function (index) {
		this.currentIndex = index;
		var scrollTo = [].reduce.call(this.$slides, function (to, slide, slideIndex, allSlides) {
			if (slideIndex && slideIndex <= index) {
				to -= $(allSlides[slideIndex - 1]).width();
			}
			return to;
		}, 0);
		$(this).trigger('start-animation', index);
		this.$slidesContainer.stop().animate({
			left: scrollTo + 'px'
		}, function () {
			$(this).trigger('stop-animation', index);
		});
		this.$tabs.removeClass('on');
		this.$tabs.eq(index).addClass('on');
	};

	window.Slider = Slider;
}());


$(function () {
	window.slider = new Slider(document.body, ['image1.png', 'image2.png', 'image3.png', 'image4.png']);

	$(slider).on('start-animation', function () {
		console.log('instance animation started');
	});

	// Global mediator examples
	$(document).off('end-start-loop');

	$(document).on('end-start-loop', function(event, instance) {
		console.log('full loop', instance);
	});



	$(document).on('start-animation', function(event, animatedIndex) {
		console.log('START:', animatedIndex);
	});

	$(document).on('stop-animation', function(event, animatedIndex) {
		console.log('STOP:', animatedIndex);
	});

});