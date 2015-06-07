var path = '/users/dmitry/Dropbox/';

function onlyWords(element) {
  return element != '';
}

function getName(path) {
	var arr = path.split('/');
	var filtered = arr.filter(onlyWords);
	var nameOfFile = filtered[filtered.length - 1];
return nameOfFile;
}
getName(path);