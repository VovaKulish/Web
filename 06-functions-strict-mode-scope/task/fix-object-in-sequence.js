function fixStruct(struct) {
	var indexOfBrokenElement;
	for (var i = 1; i < struct.length - 1; i += 1) {
		if (struct[i].delta !== struct[i].value - struct[i - 1].value) {
			indexOfBrokenElement = i;
			break;
	}
}
struct[indexOfBrokenElement].value = struct[indexOfBrokenElement + 1].value - struct[indexOfBrokenElement + 1].delta
struct[indexOfBrokenElement].delta = struct[indexOfBrokenElement].value - struct[indexOfBrokenElement - 1].value
}
