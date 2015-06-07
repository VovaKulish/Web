var request = new XMLHttpRequest()
var STATE_READY = 4
request.open('get', '/data/users.json', true)
request.onreadystatechange = function () {
  if (request.readyState === STATE_READY) {
    console.log(JSON.parse(request.responseText))
  }
}
request.send()