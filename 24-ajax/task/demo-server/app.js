var path = require('path')
var fs = require('fs')
var express = require('express')
var app = express()
var PORT = 9002
var dataFolder = path.join(__dirname, 'server-data')
var emailsPath = path.join(dataFolder, 'emails.json')

var delayBase = 500
var delayMaxDeviation = 500

// Make server response with random delay
app.use(function (req, res, next) {
	setTimeout(next, delayBase + Math.random() * delayMaxDeviation);
})

// Folder with static files contents
app.use(express.static(path.join(__dirname, 'static')))
// Parse post parameters
app.use(express.urlencoded())

// Routing
app.get('/', function (req, res) {

	res.setHeader('Content-type', 'text/html')
	res.sendfile(path.join(__dirname, 'static', 'index.html'))
})

// Async check, if email is used
function isUsed(email, cb) {
	fs.readFile(emailsPath, 'utf-8', function(err, emailsJSONText) {
		// Defined emails reading issues
		if (err) {
			cb(err)
			return
		}

		// Get all defined emails
		var emails
		try {
			emails = JSON.parse(emailsJSONText)
		} catch (parseError) {
			cb(parseError)
			return
		}
		// Empty email query
		if (!email || !email.trim()) {
			cb(new Error('Email address not specified'))
			return
		}
		email = email.trim().toLowerCase()
		cb(null, emails.indexOf(email) !== -1)
	})
}


function addEmail(email, cb) {
	fs.readFile(emailsPath, 'utf-8', function(err, emailsJSONText) {
		// Defined emails reading issues
		if (err) {
			cb(err)
			return
		}

		// Get all defined emails
		var emails
		try {
			emails = JSON.parse(emailsJSONText)
		} catch (parseError) {
			cb(parseError)
			return
		}
		// Empty email query
		if (!email || !email.trim()) {
			cb(new Error('Email address not specified'))
			return
		}
		email = email.trim().toLowerCase()
		emails.push(email)
		fs.writeFile(emailsPath, JSON.stringify(emails, null, '	'), 'utf-8', cb)
	})
}

// Validate email address
app.get('/check-email/', function (req, res) {
	res.setHeader('Content-type', 'application/json')
	isUsed(req.query.email, function (err, emailIsInUse) {
		if (err) {
			res.send({
				error: {
					name: err.name,
					message: err.message
				}
			})
			return
		}
		res.send({
			used: emailIsInUse
		})
	})
})



app.post('/register/', function (req, res) {
	var email = req.body.email && req.body.email.trim().toLowerCase()
	isUsed(email, function (err, emailIsInUse) {
		if (err) {
			res.sendfile(path.join(__dirname, 'static', 'some-error.html'))
			return
		}
		if (!emailIsInUse) {
			addEmail(email, function (err) {
				if (err) {
					res.sendfile(path.join(__dirname, 'static', 'some-error.html'))
				} else {
					res.sendfile(path.join(__dirname, 'static', 'register-ok.html'))
				}
			})
		} else {
			fs.readFile(path.join(__dirname, 'static', 'email-used.html'), 'utf-8', function (err, fileContents) {
				res.setHeader('Content-type', 'text/html')
				res.send(fileContents.replace('{{email}}', req.body.email))
			})
		}
	})
})

app.listen(9002)
console.log('App started at', PORT)