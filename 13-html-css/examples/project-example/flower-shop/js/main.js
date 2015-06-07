/**
 * By Dmitry Podgorniy http://dmitrypodgorniy.com
 */
/** global $ */
document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

// Add classes for ie
// Add extra class for ie <= 8
(function () {
	var ieNavigatorInfo;
	var version;
	var browserClassName = '';

	ieNavigatorInfo = /MSIE (\d+)/.exec(navigator.userAgent);
	if (ieNavigatorInfo) {
		version = ieNavigatorInfo[1];
		browserClassName += (' ie ie-' + version);
		if (version <= 8) {
			browserClassName += ' ie-old'
		}
		document.documentElement.className += browserClassName;
	}	
}());


$(function () {
	'use strict';

	/**
	 * jCarousel
	 * http://sorgalla.com/jcarousel/docs/reference/usage.html
	 */
	(function () {
		var carousel = $('.jcarousel');
	
		// Init carusel first before controls
		carousel.jcarousel();
		// Toggle activity of arusel controls
		$('.jscarusel-control').on({
			'jcarouselcontrol:inactive': function () {
				$(this).addClass('inactive');
			},
			'jcarouselcontrol:active': function () {
				$(this).removeClass('inactive');	
			}
		});
		// Scrolling with arrows
		$('.jcarousel-prev').jcarouselControl({
			target: '-=2',
			carousel: carousel
		});
		$('.jcarousel-next').jcarouselControl({
			target: '+=2',
			carousel: carousel
		});

		// Hive arrows, if there is nothing to scroll
		if ($('.jscarusel-control').length === $('.jscarusel-control.inactive').length) {
			$('.jscarusel-control').hide();
		}
	}());


	/**
	 * Header sub navigation
	 */
	(function () {
		var subnavLevel1 = $('.top-navigation > li > ul');
		var subnav = $('.top-navigation > li ul')
		var mainNav = $('.top-navigation');
		
		// Subnav calculation is needed, to keep html simple
		subnavLevel1.each(function (index, subnavNode) {
			subnavNode = $(subnavNode);
			var parentWidth = subnavLevel1.parent().width();
			var subnavWidth = subnavNode.width();

			subnavNode.css({
				'margin-left':  -(subnavWidth - parentWidth) / 2 + 'px'
			});
		});

		(function () {
			var prevShown = $();
			// Make subnav smarter to behave
			subnav.each(function (index, subnavNode) {
				subnavNode = $(subnavNode);
				var subNavPapa = subnavNode.closest('li');
				var hideTimeout;

				subNavPapa.mouseenter(function () {
					// Hide prev shown subnav without timeout
					// in case, it's not in nav parents tree
					if (subnavNode.closest(prevShown).length === 0) {
						prevShown.hide();
					}
					prevShown = subnavNode;
					clearTimeout(hideTimeout);
					subnavNode.show();
				});
				subNavPapa.mouseleave(function () {
					clearTimeout(hideTimeout);
					hideTimeout = setTimeout(function () {
						subnavNode.hide();
					}, 200);
				});
			});
		}());
	}());


	/**
	 * Product page. Change preview on hover
	 */
	(function () {
		var $ = jQuery;

		var defaultSettings = {
			targetSelector: '.large-preview img',
			srcSelector: '.small-preview a',
			activeClass: 'current'
		};

		// ('img/large/test.png', 'medium') -> img/medium/test.png
		// ('img/medium/test.png', 'large') -> img/large/test.png
		// ('img/medium/test.png', 'large') -> img/large/test.png
		function convertPath(imgPath, toType) {
			var splittedPath = imgPath.split('/');
			splittedPath.splice(splittedPath.length - 2, 1, toType);
			return splittedPath.join('/');
		}

		function preload(imgSrcs) {
			$.each(imgSrcs, function (index, imgUrl) {
				$('<img src="' + imgUrl + '" />');
			});
		}

		$.fn.previewer = function (customSettings) {
			if (this.length === 0) {
				return;
			}
			var previewerContainer = this;
			var settings = $.extend({}, defaultSettings, customSettings);
			var target = previewerContainer.find(settings.targetSelector);

			function show(index) {
				var srcLink = previewerContainer.find(settings.srcSelector).eq(index);
				var img = srcLink.attr('href');

				previewerContainer.find(settings.srcSelector).removeClass(settings.activeClass);
				srcLink.addClass(settings.activeClass);

				target.attr('src', convertPath(img, 'medium'));
				target.parent().attr('href', convertPath(img, 'large'));
			}

			// Handle custom preview item cwitch via custom event
			previewerContainer.on('previewer:show', function (event) {
				console.log(arguments);
			});
			// Show first preview, if no other is active
			if (previewerContainer.find(settings.srcSelector + settings.activeClass).length === 0) {
				show(0);
			}
			// Preload all previews
			preload(previewerContainer.find(settings.srcSelector).map(function (index, linkToLargeImage) {
				return linkToLargeImage.href;
			}));
			// Main logic
			previewerContainer.on('mouseenter', settings.srcSelector, function () {
				show(previewerContainer.find(settings.srcSelector).index(this));
			});
			// Prevent all clicks on links inside preview
			previewerContainer.on('click', 'a', function (event) {
				if (!event.metaKey) {
					event.preventDefault();
				}
			});
		};
	}());

	// Preview and gallery
	(function () {
		$('.product .preview').previewer();
		$('.product .preview').magnificPopup({
			delegate: 'a',
			type: 'image',
			tClose: 'Закрыть (esc)',
			tLoading: 'Загружаю...',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1], // Will preload 0 - before current, and 1 after the current image
				tPrev: "Назад (←)",
				tNext: "Вперед (→)",
				tCounter: "%curr% из %total%",
				tLoading: 'Загружаю изображение...',
			},
			zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		});
	}());

	/**
	 * Product page
	 * total calculator
	 */
	(function () {
		var itemProceContainer = $('input[name="single-price"]');
		if (itemProceContainer.length === 0) {
			return
		}
		var singleItemPrice = parseInt($('input[name="single-price"]').attr('value'), 10);
		var amountInput = $('input[name="items"]');
		var totalContainer = $('.price .number');

		function setTotal() {
			var totalItems = parseInt(amountInput.val(), 10) || 0;
			var totalValue = singleItemPrice * totalItems;
			amountInput.val(totalItems);
			totalContainer.text(totalValue);
		}

		totalContainer.text(singleItemPrice)
		totalContainer.css('min-width', totalContainer.width() + 'px');
		setTotal();
		amountInput.on('change, keyup',setTotal);
	}());
});