// Reassign
var a = 10;
a = a + 20;



// Constants and naming
var NOT_FOUND = 404;
if (statusCode === NOT_FOUND) {/* ... */}
// vs
if (a === 404) {/* ... */}

if (statusCode === ACCESS_DENIED) {/* ... */}
// vs
if (statusCode === 403) {/* ... */}



// Naming
if (flag) {
	/* ... */
}

if (overrideOriginal) {
	/* ... */
}

var cacheResults = true;
var cacheResults = false;

if (cacheResults) {
	// ... 
}