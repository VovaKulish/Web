/*global escape $ window console document*/

(function () {
	'use strict';
	var src_ru;
	var src_en;
	var JSONP_function_name;
	var translate_button;
	var last_focus_in;
	var API_key = 'trnsl.1.1.20140213T235948Z.867ed2c7cdbd910b.842f477016f84bb2de8290a3bec7f3ee29955c3d';


	// Make function name unique
	JSONP_function_name = 'processRequest';

	function init () {
		src_ru = $('#ru');
		src_en = $('#en');
		translate_button = $('button');

		// export global function for processing JSON
		window[JSONP_function_name] = process_response;

		translate_button.click(send_translate_request);
		src_ru.focus(update_last_focus_in);
		src_en.focus(update_last_focus_in);
	}

	function update_last_focus_in (event) {
		last_focus_in = event.target.id;
		console.log('Translating from - ' + last_focus_in);
	}

	function send_translate_request () {
		var JSONP_request;
		var lang;
		var text;
		var script;

		if (!last_focus_in) {
			last_focus_in = 'ru';
		}

		if (last_focus_in === 'en') {
			lang = 'en-ru';
		} else {
			lang = 'ru-en';
		}

		// Get text to translate and prepare it for sending to
		// translate server
		text = $('#' + last_focus_in).val().trim();

		JSONP_request = 'https://translate.yandex.net/api/v1.5/tr.json/translate?';
		JSONP_request += 'key=' + API_key;
		JSONP_request += '&lang=' + lang;
		JSONP_request += '&text=' + text;
		JSONP_request += '&callback=' + JSONP_function_name;

		script = document.createElement('script');
		script.src = JSONP_request;
		document.querySelector('head').appendChild(script);
	}

	function process_response (resp) {
		var target;

		target = resp.lang.split('-')[1];
		$('#' + target).val(resp.text[0]);
	}

	$(init);
}());
