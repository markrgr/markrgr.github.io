$(function () {
	$('.printpage').click(function (e) {
		alert('PDF generator is down for updates.');
	});
   /* $('.printpage').click(function (e) {
        e.preventDefault();
        var type = $(this).attr('ptype');

        if (type == 'word') {
            var words = window['__l1hv2'] = generatePDFWordSets();
        } else {
            //var words = window['__l1gv2'] = generateRandomSoundSets();
            var words = window['__l1gv2'] = generatePDFSoundSets();
        }

        var unit = unitNum;
        var url = 'pdf/print.php?';
        for (var i in words) {
            url += 'words[]=' + words[i] + '&';
        }
        url += 'unit=' + unit;
        url += '&type=' + type;
        window.open(url, '_blank');
    });*/
});

function generatePDFWordSets() {
    var words = [];
    var wordArray = [];
    for (i = 0; i < unitData.units[unitNum - 1].tw.length; i++) {
        wordArray.push(unitData.units[unitNum - 1].tw[i]);
    }
    for (i = 0; i < unitData.units[unitNum - 1].pw.length; i++) {
        wordArray.push(unitData.units[unitNum - 1].pw[i]);
    }
    var patternArray = [
 0, 1, 2, 3, 4, 5, 6, 7, 8,
 4, 9, 3, 8, 2, 7, 1, 6, 0,
 5, 4, 6, 3, 7, 2, 0, 1, 9
 ];
    var patternIndex = 0;
    var wordChunk = [];
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            wordChunk = [];
            for (k = 0; k < 3; k++) {
                wordChunk.push(wordArray[patternArray[patternIndex]]);
                patternIndex++;

            }
            words.push(wordChunk);
        }
    }


    return words;
}

function generatePDFSoundSets() {
    var words = [];
    var soundArray = [];
    for (i = 0; i < unitData.units[unitNum - 1].ts.length; i++) {
        soundArray.push(unitData.units[unitNum - 1].ts[i]);
    }
    for (i = 0; i < unitData.units[unitNum - 1].ps.length; i++) {
        soundArray.push(unitData.units[unitNum - 1].ps[i]);
    }
    console.log('soundArray');
    console.log(soundArray);
    var patternArray = [
 0, 1, 2, 3, 4, 5, 2, 1, 0,
 5, 4, 3, 2, 1, 0, 4, 0, 1,
 2, 1, 5, 3, 4, 1, 0, 1, 2

 ];
    var patternIndex = 0;
    var soundChunk = [];
    for (i = 0; i < 1; i++) {
        for (j = 0; j < 9; j++) {
            soundChunk = [];
            for (k = 0; k < 3; k++) {
                soundChunk.push(soundArray[patternArray[patternIndex]]);
                patternIndex++;

            }
            words.push(soundChunk);
        }
    }


    return words;
}