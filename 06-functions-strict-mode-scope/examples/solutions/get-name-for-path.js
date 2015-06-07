// http://jscourse.com/task/get-name-from-path

function getName(path) {
	var pathSegments = path.split('/');
	var lastSegment;
	while (!lastSegment || !pathSegments.length) {
		lastSegment = pathSegments.pop();
	}
	return lastSegment;
}




function getName(path) {
	return path.split('/').reduceRight(function (prev, pathSegment) {
		return prev || pathSegment;
	}, '');
}