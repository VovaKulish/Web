// https://en.wikipedia.org/wiki/99_Bottles_of_Beer
var bottlesOfBeer = 99;
var verseOfSong;
for (var currentVerseBottlesCount = bottlesOfBeer; currentVerseBottlesCount > 0; currentVerseBottlesCount -= 1) {
	verseOfSong = '';
	verseOfSong += (currentVerseBottlesCount + " bottles of beer on the wall," + currentVerseBottlesCount + " bottles of beer.\n");
	verseOfSong += ('Take one down, pass it around, ' + (currentVerseBottlesCount - 1) + ' bottles of beer on the wall...');
	console.log(verseOfSong);
}
