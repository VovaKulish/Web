//работает с любой страницы с комиксом
//начинает сходить с ума, когда пользователь прокручивает страницу до упора, сразу же, когда загружается новый комикс

(function() {
	'use strict';

	var page;
	var postUrl = getPostUrl(document.body);
	var mainContent = document.querySelector('#maincontent');
	var after = mainContent.childNodes[3];

	function addEvent(obj, event_name, handler) {
        var handler_wrapper = function (event) {
            event = event || window.event;
            if (!event.target && event.srcElement) {
                event.target = event.srcElement;
            }
            return handler.call(obj, event);
        };

        if (obj.addEventListener) {
            obj.addEventListener(event_name, handler_wrapper, false);
        } else if (obj.attachEvent) {
            obj.attachEvent('on' + event_name, handler_wrapper);
        }
        return handler_wrapper;
    }

    function getPost(answ) {
    	var page, mainContainer, post;

    	page = document.createElement('div');
    	page.innerHTML = answ;

    	mainContainer = page.querySelector('div[id="maincontent"]');
    	post = mainContainer.childNodes[3]
    	return post;
    }

    function getPostUrl(post) {
    	var url;
    	var allLinks = post.querySelectorAll('a');

    	for(var i = 0; i < allLinks.length; i += 1) {
    		if (allLinks[i].getAttribute('rel') === 'prev') {
    			url = allLinks[i].href;
    		}
    	}
    	return url;
    }

    function insertAfter(elem, refElem) {
		return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
	}

    function addPost(post) {
    	insertAfter(post, after);
    	after = post;
    }

    function getXmlHttp() {
    	 /* returns cross-browser XMLHttpRequest, or null if unable */
    	 //from this http://stackoverflow.com/posts/15339941/revisions
	    try {
	        return new XMLHttpRequest();
	    }catch(e){}
	    try {
	        return new ActiveXObject("Msxml3.XMLHTTP");
	    }catch(e){}
	    try {
	        return new ActiveXObject("Msxml2.XMLHTTP.6.0");
	    }catch(e){}
	    try {
	        return new ActiveXObject("Msxml2.XMLHTTP.3.0");
	    }catch(e){}
	    try {
	        return new ActiveXObject("Msxml2.XMLHTTP");
	    }catch(e){}
	    try {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	    }catch(e){}
	    return null;
    }

    function handler(page) {
    	var post;
    	var answ;
    	var xmlHttp = getXmlHttp();

    	xmlHttp.open('GET', page + '?r=' + Math.random(), true);
    	xmlHttp.onreadystatechange = function() {
    		if(xmlHttp.readyState !== 4) return;
    	
	    	answ = xmlHttp.responseText;

	    	post = getPost(answ);
	    	postUrl = getPostUrl(post);
	    	addPost(post);
	    };

	    xmlHttp.send(null);
    }

	function bottomScroll() {
		var doc = document.documentElement,
			body = document.body;

		if ((body.scrollTop + doc.clientHeight) === doc.scrollHeight) {
			handler(postUrl);
			return;
		}
	}

    addEvent(window, 'scroll', function(){
    	bottomScroll();
    });
}());
