var request = new XMLHttpRequest()
var STATE_READY = 4
request.open('get', '/', true)
request.onreadystatechange = function () {
	console.log('request.onreadystatechange', request.readyState)
  if (request.readyState === STATE_READY) {
    console.log(request.responseText)
  }
}
request.send()
