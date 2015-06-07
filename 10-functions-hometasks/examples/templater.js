function templater(string, data) {
	var subStringToReplace;
	var dataToReplace;
	for (var key in data) {
		subStringToReplace = '${' + key + '}';
		dataToReplace = data[key];
		while (string.indexOf(subStringToReplace) !== -1) {
			string = string.replace(subStringToReplace, dataToReplace);
		}
	}
	return string;
}

templater('${who} ${action} ${what} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
});