var request = new XMLHttpRequest()
var STATE_READY = 4
request.open('get', '/data/users.json', true)
request.onreadystatechange = function () {
	var arr
  if (request.readyState === STATE_READY) {
  	arr = JSON.parse(request.responseText)
  	arr.sort()
  	console.log(arr)
    // console.log(JSON.parse(request.responseText))
  }
}
request.send()