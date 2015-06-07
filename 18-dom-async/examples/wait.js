function wait(ms) {
	var start = (new Date()).getTime();
	while(new Date() - start < ms);
}
