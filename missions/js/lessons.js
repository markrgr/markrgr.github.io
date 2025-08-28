//Navigate function used to turn to lesson from menu

function navigate(unitNum, lessonNum) {
	$('#menuBar').fadeIn(250);
	$('#menuBarSelector').fadeIn(250);
	$('#menuBarParent').fadeIn(250);
	if (pageNum > 0) {
		//$('#content').css('background-color', 'rgba(252,252,252,.2)');
		//$('#content').css('background-image', '../img/contentBackground.png');
	} else {
		//$('#content').css('background-color', 'rgba(252,252,252,0)');
		//$('#content').css('background-image', 'none');
	}
	lesson = lessonNum;

	var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';

	console.log(lessonURL);
	pageNum = 0;
	$.getJSON(lessonURL + '?version=' + version, function (data) {
		pageNum = 0;
		lessonData = data;
		$('#menuBarLessonSelector').html('');
		for (i = 0; i < lessonData.pages.length; i++) {
			//$('#menuBarLessonSelector').append('<option value="' + lessonData.pages[i].template + '">' + lessonData.pages[i].exTitle + '</option>');
			$('#menuBarLessonSelector').append('<option value=' + i + '>' + lessonData.pages[i].exTitle + '</option>');


		}
		$('#lessonCounter').html(pageNum + ' of ' + (lessonData.pages.length - 1));

		//if (unitNum != 40) {
		titleScreen();
		/*} else {

			initPage(pageNum, lessonData.pages[pageNum].template);
			$('.contentPanel').fadeOut(250);
			$('#MENUBLOCK').fadeIn(500);
		}*/

		$('#menuBarRight').html(menuData.units[unitNum - 1].unitTitle + ' : Lesson ' + lessonNum);
		$('#menuBarLeft').css('display', 'block');
		//$('#menuBarCenter').html('');
		$('#menuBarCenter').fadeOut(200);
		$('#menuSelectorIndicator').css('display', 'inline');
		$('#menuBarLessonSelector').css('display', 'inline-block');
	}, function () {
		alert('json fail');
	});
}


function navigatePage(unitNum, lessonNum, page) {
	additional = false;
	stopVideo();
	lesson = lessonNum;
	console.log('navigate top-------------------');
	console.log('unitNum:' + unitNum);
	console.log('lessonNum:' + lessonNum);
	console.log('partNum:' + page);
	var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
	pageNum = page;
	console.log('lessonURL:' + lessonURL);
	$.getJSON(lessonURL, function (data) {
		pageNum = page;
		lessonData = data;
		$('#menuBarLessonSelector').html('');
		for (i = 0; i < lessonData.pages.length; i++) {
			$('#menuBarLessonSelector').append('<option value="' + i + '">' + lessonData.pages[i].exTitle + '</option>');
		}
		$('#lessonCounter').html(pageNum + ' of ' + (lessonData.pages.length - 1));
		if (unitNum != 40) {
			titleScreen();
		} else {
			initPage(pageNum, lessonData.pages[pageNum].template);
			$('.contentPanel').fadeOut(250);
			$('#MENUBLOCK').fadeIn(500);
		}

		if (unitNum < 26) {
			$('#menuBarRight').html('Unit ' + unitNum + ' : Lesson ' + lessonNum);
		} else {
			if (unitNum > totalUnits) {
				//$('#menuBarRight').html('Unit ' + unitNum + ' : Lesson ' + lessonNum);
				$('#menuBarRight').html('PSE Unit ' + (unitNum - 40) + ' : Lesson ' + lessonNum);
			} else {
				$('#menuBarRight').html(menuData.units[unitNum - 1].title + ' : Lesson ' + lessonNum);
			}

		}
		$('#menuBarLeft').css('display', 'block');
		$('#menuBarRight').css('display', 'block');
		$('#menuBarCenter').html('');
		$('#menuSelectorIndicator').css('display', 'inline');
		$('#menuBarLessonSelector').css('display', 'inline-block');
	});


	//New If
}


function checkLetter(letter) {
	var vowelString = 'aeiouAEIOU';
	if (vowelString.indexOf(letter) > -1) {
		return '<span class="vowel">' + letter + '</span>';
	} else {
		return '<span class="letter">' + letter + '</span>';
	}
}

function getYear() {
	var now = new Date();
	return now.getFullYear();
}

function setUpStep(lessonFunction) {
	$('#wrapper').unbind();
	$('#content').unbind('click');
	$('#content').unbind('keydown');
	$('#content').attr('tabindex','0');
	$('#content').bind('click', function (e) {
		if (!navClick) {
			eval(lessonFunction);
		}
	});
	$('#content').bind('keydown', function (e) {
		if (e.keyCode == 13) {
			if (!navClick) {
				eval(lessonFunction);
			}
		}
	});
}

function isVowel(sound) {
	var isVowel = false;
	switch (sound) {
		case ('a'):
			isVowel = true;
			break;
		case ('e'):
			isVowel = true;
			break;
		case ('i'):
			isVowel = true;
			break;
		case ('o'):
			isVowel = true;
			break;
		case ('u'):
			isVowel = true;
			break;

	}
	//return isVowel;
	return false;
}

function initSoundPicker() {
	$('#wrapper').unbind('mousedown');
	for (i = 0; i < 3; i++) {
		if (unitData.units[unitNum - 1].tsLock[i] == 1) {
			$('#tsSelect' + (i + 1)).html('<option value="' + unitData.units[unitNum - 1].ts[i] + '">' + unitData.units[unitNum - 1].ts[i] + '</option>');
			$('#tsSelect' + (i + 1)).parent().addClass('lockSelect');
		} else {
			$('#tsSelect' + (i + 1)).parent().removeClass('lockSelect');
			$('#tsSelect' + (i + 1)).html('');
			for (j = 0; j < graphemes.length; j++) {
				if (!isVowel(graphemes[j].g)) {
					$('#tsSelect' + (i + 1)).append('<option value="' + graphemes[j].g + '">' + graphemes[j].g + '</option>');
				}
			}
			$('#tsSelect' + (i + 1)).val(unitData.units[unitNum - 1].ts[i]);
		}

		if (unitData.units[unitNum - 1].psLock[i] == 1) {
			if (!isVowel(graphemes[j].g)) {
				$('#psSelect' + (i + 1)).html('<option value="' + unitData.units[unitNum - 1].ps[i] + '">' + unitData.units[unitNum - 1].ps[i] + '</option>');
			}
			$('#psSelect' + (i + 1)).parent().addClass('lockSelect');
		} else {
			$('#psSelect' + (i + 1)).parent().removeClass('lockSelect');
			$('#psSelect' + (i + 1)).html('');
			for (j = 0; j < graphemes.length; j++) {
				$('#psSelect' + (i + 1)).append('<option value="' + graphemes[j].g + '">' + graphemes[j].g + '</option>');
			}
			$('#psSelect' + (i + 1)).val(unitData.units[unitNum - 1].ps[i]);
		}
	}
}

function initWordPicker() {
	$('#wrapper').unbind('mousedown');
	for (i = 0; i < 5; i++) {
		//$('#twSelect' + (i + 1)).val(unitData.units[unitNum - 1].tw[i]);
		//$('#pwSelect' + (i + 1)).val(unitData.units[unitNum - 1].pw[i]);
		if (unitData.units[unitNum - 1].pwLock[i] == 1) {
			$('#pwSelect' + (i + 1)).html('<option value="' + unitData.units[unitNum - 1].pw[i] + '">' + unitData.units[unitNum - 1].pw[i] + '</option>');
			$('#pwSelect' + (i + 1)).parent().addClass('lockSelect');
		} else {
			$('#pwSelect' + (i + 1)).parent().removeClass('lockSelect');

			$('#pwSelect' + (i + 1)).val(unitData.units[unitNum - 1].pw[i]);
		}

		if (unitData.units[unitNum - 1].twLock[i] == 1) {
			$('#twSelect' + (i + 1)).html('<option value="' + unitData.units[unitNum - 1].tw[i] + '">' + unitData.units[unitNum - 1].tw[i] + '</option>');
			$('#twSelect' + (i + 1)).parent().addClass('lockSelect');
		} else {
			$('#twSelect' + (i + 1)).parent().removeClass('lockSelect');
			$('#twSelect' + (i + 1)).val(unitData.units[unitNum - 1].tw[i]);
		}
	}
}

function generateRandomSounds() {
	var startArray = [];
	for (i = 0; i < unitData.units[unitNum - 1].ts.length; i++) {
		startArray.push(unitData.units[unitNum - 1].ts[i]);
	}
	for (i = 0; i < unitData.units[unitNum - 1].ts.length; i++) {
		startArray.push(unitData.units[unitNum - 1].ts[i]);
	}
	for (i = 0; i < unitData.units[unitNum - 1].ps.length; i++) {
		startArray.push(unitData.units[unitNum - 1].ps[i]);
	}
	var finishArray = [];
	while (startArray.length > 0) {
		var seed = Math.round(Math.random() * (startArray.length - 1));
		finishArray.push(startArray[seed]);
		startArray.splice(seed, 1);
	}
	return finishArray;
}

function generateRandomSoundSets() {
	var sArray1 = [];
	var sArray2 = [];
	for (i = 0; i < unitData.units[unitNum - 1].ts.length; i++) {
		sArray1.push(unitData.units[unitNum - 1].ts[i]);
	}

	for (i = 0; i < unitData.units[unitNum - 1].ps.length; i++) {
		sArray2.push(unitData.units[unitNum - 1].ps[i]);
	}
	var s1, s2, s3;
	var finishArray = [];
	for (i = 0; i < 9; i++) {

		var seed1 = Math.round(Math.random() * (random3by9.length - 1));
		var seed2 = Math.round(Math.random() * random3.length - 1);
		s1 = sArray1[random3by9[seed1][0]];
		s2 = sArray1[random3by9[seed1][1]];
		s3 = sArray2[random3by9[seed1][2]];

		var tempArray = [s1, s2, s3];
		//finishArray.push([tempArray[random3[seed2][0]],tempArray[random3[seed2][1]],tempArray[random3[seed2][2]]]);
		finishArray.push(tempArray);
	}
	return finishArray;
}

function generateRandomWords() {
	var startArray = [];
	for (i = 0; i < unitData.units[unitNum - 1].tw.length; i++) {
		startArray.push(unitData.units[unitNum - 1].tw[i]);
		startArray.push(unitData.units[unitNum - 1].tw[i]);
		startArray.push(unitData.units[unitNum - 1].pw[i])
	}
	var finishArray = [];
	while (startArray.length > 0) {
		var seed = Math.round(Math.random() * (startArray.length - 1));
		finishArray.push(startArray[seed]);
		startArray.splice(seed, 1);
	}
	return finishArray;
}

function generateRandomWordSets(numberOfSets) {
	var word1, word2, word3;
	var teachArray = [];
	var practiceArray = [];
	for (i = 0; i < unitData.units[unitNum - 1].tw.length; i++) {
		teachArray.push(unitData.units[unitNum - 1].tw[i]);
		practiceArray.push(unitData.units[unitNum - 1].pw[i]);
	}
	var finalArray = [];
	var patternArray = [
		[1, 2, 3],
		[1, 3, 2],
		[2, 1, 3],
		[2, 3, 1],
		[3, 2, 1],
		[3, 1, 2]
	];
	for (i = 0; i < numberOfSets; i++) {
		var w1, w2, w3, p;
		w1 = Math.round((teachArray.length - 1) * Math.random());
		w2 = Math.round((teachArray.length - 1) * Math.random());
		w3 = Math.round((practiceArray.length - 1) * Math.random());
		p = Math.round((patternArray.length - 1) * Math.random());
		word1 = teachArray[w1];
		word2 = teachArray[w2];
		word3 = practiceArray[w3];
		finalArray.push([eval('word' + patternArray[p][0]), eval('word' + patternArray[p][1]), eval('word' + patternArray[p][2])]);
	}
	return finalArray;
}

function formatWSWord(pWord) {
	var inVowel = false;
	var tempString = '';
	for (j = 0; j < pWord.length; j++) {
		if (pWord.charAt(j) == '/') {
			tempString += '<span class="vowelText">';
			inVowel = true;
		} else {
			if (pWord.charAt(j) == '(' || pWord.charAt(j) == '_' || pWord.charAt(j) == '|') {
				switch (pWord.charAt(j)) {
					case '(':
						tempString += '<span class="wscircleText">';
						break;
					case '_':
						tempString += '<span class="wsunderlineText">';
						break;
					case '|':
						tempString += '</span>';
						break;
				}
			} else {
				tempString += pWord.charAt(j);
			}

			if (inVowel) {
				inVowel = false;
				tempString += '</span>';
			}
		}
	}
	return tempString;
}

function formatWSWordWithSubspans(pWord) {
	var inVowel = false;
	var tempString = '';
	for (j = 0; j < pWord.length; j++) {
		if (pWord.charAt(j) == '/') {
			tempString += '<span class="vowelText">';
			inVowel = true;
		} else {
			if (pWord.charAt(j) == '(' || pWord.charAt(j) == '_' || pWord.charAt(j) == '|') {
				switch (pWord.charAt(j)) {
					case '(':
						tempString += '<span class="wscircleText">';
						break;
					case '_':
						tempString += '<span class="wsunderlineText">';
						break;
					case '|':
						tempString += '</span>';
						break;
				}
			} else {
				tempString += '<span class="wscharText">' + pWord.charAt(j) + '</span>';
			}

			if (inVowel) {
				inVowel = false;
				tempString += '</span>';
			}
		}
	}
	return tempString;
}

function initPage(curPage, template) {
	console.log('curPage initPage:' + curPage);
	$('#menuSelectorIndicator').css('display', 'inline');
	$('#menuBarLessonSelector').css('display', 'inline-block');
	$('#menuBarLeft').css('display', 'block');

	$('#menuBarLessonSelector').val(curPage);
	//$('#content').css('background-color', 'rgba(252,252,252,.2');
	//$('#content').css('background-image', '../img/contentBackground.png');
	$('#lessonCounter').html(pageNum + ' of ' + (lessonData.pages.length - 1));
	step = 0;
	if (navClick) {
		navClick = false;
		//step=-1;
	}
	if (template != titleScreen) {
		$('#contentNext').fadeIn(200);
		$('#contentBacker').fadeIn(500);
	}
	switch (template) {
		case "setup0l2":
			initSoundPicker();
			break;
		case "setup1l2":
			initWordPicker();
			break;
		case "titlePage":
			titleScreen();
			break;
		case "SLBLOCK":
			//$('#SLBLOCK').html(lessonData.pages[pageNum].slurl);
				loadSL(lessonData.pages[pageNum].slurl);
			break;
		case "HTMLBLOCK":
			var htmlString = '';
			htmlString = lessonData.pages[pageNum].code;
			if (lessonData.pages[pageNum].links == 'true') {
				htmlString += '<div id="HTMLBLOCKNext" class="nextButton" rolel="button" aria-label="next page" tabindex="0">next</div>';
			}
			$('#HTMLBLOCK').html(htmlString);
			if (lessonData.pages[pageNum].links == 'true') {
				$('#HTMLBLOCKNext').click(function () {
					nextpage();
				});
				$('#HTMLBLOCKNext').bind('keydown', function (e) {
					if (e.keyCode==13) {
						nextpage();
					}
					
				});
			}
			setUpStep('HTMLBLOCK()');
			break;
		case "MENUBLOCK":
			var htmlString = '';
			var startString = '';
			var endString = '';
			var itemStartString = '';
			var itemEndString = '';

			startString = '<ul>';
			endString = '</ul>';
			itemStartString = '<li';
			itemEndString = '</li>';



			htmlString = startString;
			for (i = 0; i < lessonData.pages[pageNum].items.length; i++) {
				htmlString += itemStartString + ' value="' + i + '">' + lessonData.pages[pageNum].items[i].itemTitle + itemEndString;
			}
			htmlString += endString;
			$('#MENUBLOCK').html(htmlString);

			$('#MENUBLOCK li').bind('click', function () {
				var htmlString = '<div class="top">Return to EL/Español Resources Menu</div>';
				htmlString += '<ul class="subMenu">';
				var currentChoice = parseInt($(this).attr('value'));
				console.log(lessonData.pages[pageNum].items[currentChoice].lessons);
				for (i = 0; i < lessonData.pages[pageNum].items[currentChoice].lessons.length; i++) {
					htmlString += '<li u="' + lessonData.pages[pageNum].items[currentChoice].lessons[i].unit + '" l="' + lessonData.pages[pageNum].items[currentChoice].lessons[i].lesson + '" p="' + lessonData.pages[pageNum].items[currentChoice].lessons[i].page + '">' + lessonData.pages[pageNum].items[currentChoice].lessons[i].subItem + '</li>';
				};
				htmlString += '</ul>';
				$('#MENUBLOCK').html(htmlString);

				$('#MENUBLOCK .subMenu li').bind('click', function () {
					$('#MENUBLOCK').fadeOut(250);
					navigatePage(parseInt($(this).attr('u')), parseInt($(this).attr('l')), parseInt($(this).attr('p')));
					unitNum = parseInt($(this).attr('u'));
					console.log('unitNumfromLI:' + unitNum);

				});
				$('#MENUBLOCK .top').bind('click', function () {
					//navigatePage(unitNum, lessonNum, pageNum);
					initPage(pageNum, lessonData.pages[pageNum].template);
				});
			});
			setUpStep('MENUBLOCK()');
			break;
		case "RI001":
			$('#RI001Pages').html(lessonData.pages[pageNum].relPages);
			$('#RI001Subtitle').html(lessonData.pages[pageNum].subtitle);
			$('#RI001Keyword').html(lessonData.pages[pageNum].keyword);
			$('#RI001ImgBlock').html('<img src="' + lessonData.pages[pageNum].image + '" />');
			setUpStep('RI001()');
			break;
		case "RI002":
			$('#RI002 h1').html(lessonData.pages[pageNum].subtitle);
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<li><strong>' + lessonData.pages[pageNum].words[i].word + '</strong> – ' + lessonData.pages[pageNum].words[i].definition + '<div class="extraSpace"><em>' + lessonData.pages[pageNum].words[i].sample + '</em></div></li>'

			}
			$('#RI002List').html(htmlString);
			setUpStep('RI002()');
			break;
		case "RI003":
			$('#RI003 h1').html(lessonData.pages[pageNum].subtitle);
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<li>' + lessonData.pages[pageNum].words[i] + '</li>'

			}
			$('#RI003List').html(htmlString);
			setUpStep('RI003()');
			break;
		case "RI004":
			var htmlString = '<h1>' + lessonData.pages[pageNum].subtitle + '</h1>';

			htmlString += '<ul id="RI004List">';
			for (i = 0; i < lessonData.pages[pageNum].questions.length; i++) {
				htmlString += '<li>' + lessonData.pages[pageNum].questions[i] + '</li>'

			}
			htmlString += '</ul>';

			if (lessonData.pages[pageNum].links == 'true') {
				htmlString += '<div id="RI004Next" class="nextButton">next</div>';
			}
			$('#RI004').html(htmlString);
			if (lessonData.pages[pageNum].links == 'true') {
				$('#RI004Next').click(function () {
					nextpage();
				});
			}
			setUpStep('RI004()');
			break;

		case "HD001":
			//Enter Title
			$('.hdPassageScroll').stop().animate({
				scrollTop: 0
			}, 500);

			$('#HD001PassageBlock').html('');
			$('#HD001PassageBlock').append('<h1>' + lessonData.pages[pageNum].passageTitle + '</h1>');
			var htmlString = '<table class="hdPassageTable">';
			for (i = 0; i < lessonData.pages[pageNum].readers.length; i++) {
				//Enter data into Calculator Here
				if (i == 0) {
					$('#HD001 #r1Offset').html('0');
				} else {
					var offsetNum = lessonData.pages[pageNum].readers[i - 1].words[lessonData.pages[pageNum].readers[i - 1].words.length - 1].count;
					$('#HD001 #r' + (i + 1) + 'Offset').html(offsetNum);
				}
				htmlString += '<tr class="hdPassageDivider"><td colspan="2">Reader #' + (i + 1) + '</td></tr>';
				for (j = 0; j < lessonData.pages[pageNum].readers[i].words.length; j++) {
					htmlString += '<tr>';
					if (lessonData.pages[pageNum].readers[i].words[j].count > 0) {
						htmlString += '<td class="hdPassageText">' + lessonData.pages[pageNum].readers[i].words[j].line + '</td>';
						htmlString += '<td class="hdPassageCount">' + lessonData.pages[pageNum].readers[i].words[j].count + '</td>';
					} else {
						htmlString += '<td>&nbsp;</td><td>&nbsp;</td>';
					}
					htmlString += '</tr>';
				}


			}
			htmlString += '</table>';
			//htmlString += '<div id="HD001CanvasBlock" class="canvasBlock">Canvas goes here</div>';
			$('#HD001PassageBlock').append(htmlString);
			HD001DrawingActive = false;
			//initDrawing();
			$('#wrapper').unbind();
			$('#content').unbind();
	
			//setUpStep('HD001()');

			break;
		case "VI001":
			var htmlString = '';

			if (!lessonData.pages[pageNum].vid) {


				var mp4Video = 'video/' + lessonData.pages[pageNum].source + '.mp4';
				var oggVideo = 'video/' + lessonData.pages[pageNum].source + '.ogg';
				//$('#VI001Vid .mp4Source').attr('src', 'video/sample.mp4');
				//$('#VI001Vid .oggSource').attr('src', 'video/sample.ogg');
				var htmlString = '<video id="VI001Vid" class="video" controls controlsList="nodownload" autoplay>';
				htmlString += '<source src="' + mp4Video + '" type="video/mp4">';
				htmlString += '</video>';
				$('#VI001').html(htmlString);
				$('a[action="swapVideo"]').click(function (e) {
					e.preventDefault();
					swapVideo($(this).attr('vlink'));
				});



			} else {


				var vid = lessonData.pages[pageNum].vid
				var vidString = '';
				vidString += '<div class="vid standard"><video id="video1" data-dashjs-player="" src="https://media.reallygreatreading.com/object-link/' + vid + '/raw.mpd" crossorigin="anonymous" autoplay>';
				vidString += '<track default kind="captions" srclang="en" src="https://media.reallygreatreading.com/object-link/' + vid + '/en.vtt" />';
				vidString += '</video><input class="vidSlider" tabindex="0" type="range" min="0" max="1000" role="slider" aria-label="set video time" alt="set video time"/><div class="btn vidPlayToggle" tabindex="0" aria-label="toggle video play" alt="toggle video play" role="button"></div><div class="btn vidCCToggle" aria-label="toggle captions"  alt= "toggle captions" role="button"" tabindex="0"></div><div class="btn vidAudioToggle" tabindex="0" aria-label="toggle audio" alt="toggle audio" role="button"></div><div class="btn vidFullScreen" tabindex="0" aria-label="fullscreen"  alt="fullscreen" role="button"></div><div class="control"></div><div class="captionBlock"><div class="vidCaptionTextBlock"><div class="vidCaption"></div></div></div></div><script src="js/dash.all.min.js"></script>';
				htmlString += vidString;
				if (lessonData.pages[pageNum].bodyText) {
					htmlString += '<div class="vidInfo">' + lessonData.pages[pageNum].bodyText + '</div>';
				}

				htmlString += '<div id="VI001Next" class="nextButton" tabindex="0">next</div>';
				htmlString += '<div class="videoCopyright">&copy;' + getYear() + ' Really Great Reading. All Rights Reserved.</div>';
				$('#VI001').html(htmlString);

				//PUT VIDEO CONTROLLER CODE HERE
				//FROM UI MEDIA PLAYER
				var video = $('#video1').get(0);
				var loaded = false;
				video.oncanplay = function () {
					if (!loaded) {
						loaded = true;
						var video = $('#video1').get(0);
						video.play();

					}
				}
				video.onloadstart = function () {
					$('.vidCaption').html('');
					var video = $('#video1').get(0);
					video.autoplay = true;
					var caption = video.textTracks[0];
					caption.mode = 'hidden';
					caption.oncuechange = function (e) {
						var cue = this.activeCues[0];
						if (cue) {
							var cueString = cue.getCueAsHTML();
							if (cueString != '') {
								$('.vidCaption').fadeIn(200);
								$('.vidCaption').html(cue.getCueAsHTML());
							} else {
								$('.vidCaption').fadeOut(200);
								$('.vidCaption').html('empty');
							}
						}
					};
					video.play();
					//Websocket Video Play
					console.log('video start');
				}

				$('.vidCaption').hide();
				//END FROM UI MEDIA PLAYER
				$('.vidCaption').hide();

				$('.vidPlay').bind('click', function () {
					$('.vidCaption').html('');
					var video = $('#video1').get(0);
					var caption = video.textTracks[0];
					caption.mode = 'hidden';
					caption.oncuechange = function (e) {
						var cue = this.activeCues[0];
						if (cue) {
							var cueString = cue.getCueAsHTML();
							if (cueString != '') {
								$('.vidCaption').fadeIn(200);
								$('.vidCaption').html(cue.getCueAsHTML());
							} else {
								$('.vidCaption').fadeOut(200);
								$('.vidCaption').html('empty');
							}
						}
					};
					$(this).fadeOut(200);
					video.play();
					//Websocket Video Play
					console.log('video play');
				});

				$('.vidPlay').bind('keydown', function (e) {

					if (e.keyCode == 13) {
						$('.vidCaption').html('');
						var video = $('#video1').get(0);
						var caption = video.textTracks[0];
						caption.mode = 'hidden';
						caption.oncuechange = function (e) {
							var cue = this.activeCues[0];
							if (cue) {
								var cueString = cue.getCueAsHTML();
								if (cueString != '') {
									$('.vidCaption').fadeIn(200);
									$('.vidCaption').html(cue.getCueAsHTML());
								} else {
									$('.vidCaption').fadeOut(200);
									$('.vidCaption').html('');
								}
							}
						};
						$(this).fadeOut(200);
						video.play();
						//Websocket Video Play
						console.log('video play');
					}
				});

				$('.vidSlider').bind('input change', function (e) {
					//var target = $(this).attr('target');
					var video = $('#video1').get(0);
					var min = $(this).attr('min');
					var max = $(this).attr('max');
					video.currentTime = video.duration * ($(this).val() / max);
				});

				$('video').bind('timeupdate', function (e) {
					var video = $(this).get(0);
					if (video.currentTime >= video.duration) {
						$('.vidSlider').val(0);
						//$('.vidPlay').fadeIn(100);
						$('.vidPlayToggle').addClass('paused');
						video.currentTime = 0;
						video.pause();
						//Websocket Video Done
						console.log('video done');
					} else {
						$('.vidSlider').val((video.currentTime / video.duration) * 1000);
					}
				});

				$('.vidPlayToggle').bind('click', function () {
					//var target = $(this).attr('target');
					// $('#' + target).requestFullscreen();
					var video = $('#video1').get(0);
					video.play();

					if ($(this).hasClass('paused')) {
						console.log('pause');
						$(this).removeClass('paused');
						video.play();
					} else {
						console.log('play');
						$(this).addClass('paused');
						video.pause();
					}
				});

				$('.vidPlayToggle').bind('keydown', function (e) {
					if (e.keyCode == 13) {
						//var target = $(this).attr('target');
						// $('#' + target).requestFullscreen();
						var video = $('#video1').get(0);
						video.play();

						if ($(this).hasClass('paused')) {
							console.log('pause');
							$(this).removeClass('paused');
							video.play();
						} else {
							console.log('play');
							$(this).addClass('paused');
							video.pause();
						}
					}
				});

				$('.vidCCToggle').bind('click', function () {
					$(this).toggleClass('captionsOff');
					if ($(this).hasClass('captionsOff')) {
						$('.vidCaptionTextBlock').fadeOut(200);
					} else {
						$('.vidCaptionTextBlock').fadeIn(200);
					}
				});

				$('.vidCCToggle').bind('keydown', function (e) {
					if (e.keyCode == 13) {
						$(this).toggleClass('captionsOff');
						if ($(this).hasClass('captionsOff')) {
							$('.vidCaptionTextBlock').fadeOut(200);
						} else {
							$('.vidCaptionTextBlock').fadeIn(200);
						}
					}
				});

				$('.vidAudioToggle').bind('click', function () {

					var video = $('#video1').get(0);

					$(this).toggleClass('audioOff');

					if ($(this).hasClass('audioOff')) {
						video.volume = 0;
					} else {
						video.volume = .8;
					}
				});

				$('.vidAudioToggle').bind('keydown', function (e) {
					if (e.keyCode == 13) {
						var video = $('#video1').get(0);

						$(this).toggleClass('audioOff');

						if ($(this).hasClass('audioOff')) {
							video.volume = 0;
						} else {
							video.volume = .8;
						}
					}

				});
				$('.vidFullScreen').bind('click', function () {
					//var target = $(this).attr('target');
					// $('#' + target).requestFullscreen();
					var video = $('#video1').get(0);
					//video.play();
					video.requestFullscreen();
				});

				$('.vidFullScreen').bind('keydown', function (e) {
					if (e.keyCode == 13) {
						//var target = $(this).attr('target');
						// $('#' + target).requestFullscreen();
						var video = $('#video1').get(0);
						//video.play();
						video.requestFullscreen();
					}
				});
			}
			//END VIDEO CONTROLLER CODE
			$('#VI001Next').click(function () {
				stopVideo();
				nextpage();
			});
			$('#VI001Next').bind('keydown', function (e) {
				if (e.keyCode ==13) {
					stopVideo();
					nextpage();
				}

			});
			setUpStep('VI001()');
			break;
		case "IM001":
			//set up images here
			$('#IM001Img').css('background-image', 'url("img/' + lessonData.pages[pageNum].image + '")');
			setUpStep('IM001()');
			break;
		case "IM002":
			//set up random tile data array here
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].images[0].imageList.length; i++) {
				htmlString += '<div id="IM002Image' + (i + 1) + '" class="standardIcon ' + lessonData.pages[pageNum].images[0].imageList[i] + '"></div>';
			}
			$('#IM002').html(htmlString);

			var iconSize = 5;
			switch (lessonData.pages[pageNum].images[0].imageList.length) {
				case 2: {
					iconSize = 4;
					break;
				}
				case 3: {
					iconSize = 3;
					break;
				}
				case 4: {
					iconSize = 2;
					break;
				}
			}

			$('#IM002 .standardIcon').css('font-size', iconSize + 'em');
			$('#IM002 .standardIcon').css('margin', '1em');
			$('#IM002 .standardIcon').css('margin-top', 6 - iconSize + 'em');
			setUpStep('IM002()');
			break;
		case "l0bv0":
			//switch banner

			switch (lessonData.pages[pageNum].challenge) {

				case "1":
					$('#l0bv0Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#l0bv0Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#l0bv0Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#l0bv0Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="l0bv0Title1" class="syllablesTableText syllableTableHead" colspan="' + lessonData.pages[pageNum].circles + '">how many<br />syllables?</td>';
			htmlString += '<td class="syllablesTableCellSpacer"></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellApple"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellEdge"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellItchy"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellOctopus"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellUp"></div>&nbsp;</td>';
			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					htmlString += '<td  class="syllableTablesCell twoEm"><div class="syllableTablesCellBorder"></div><div  id="l0bv0Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div>';
				}
				htmlString += '<td></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '_v0" class="syllableTablesCell"></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '_v1" class="syllableTablesCell"></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '_v2" class="syllableTablesCell"></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '_v3" class="syllableTablesCell"></td>';
				htmlString += '<td id="l0bv0Word' + (i + 1) + '_v4" class="syllableTablesCell"></td>';



				htmlString += '</tr>';

				$('#l0bv0Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				$('#l0bv0Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].vowels.length; j++) {
					if (lessonData.pages[pageNum].words[i].vowels[j] == 1 || lessonData.pages[pageNum].words[i].vowels[j] == 2) {
						if (lessonData.pages[pageNum].words[i].vowels[j] == 1) {
							$('#l0bv0Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].vowels[j] == 2) {
							$('#l0bv0Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}

					} else {
						$('#l0bv0Word' + (i + 1) + '_v' + (j)).html('<div class="noCheck"></div>');
					}
				}
			}
			$('#l0bv0Title1').html(lessonData.pages[pageNum].title);
			setUpStep('l0bv0()');
			break;
		case "l4bv1":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#l4bv1Banner').css('background-image', 'url(img/hdChallenging.png)');
					break;

				case "2":
					$('#l4bv1Banner').css('background-image', 'url(img/hdMoreChallengingWords.png)');
					break;

				case "3":
					$('#l4bv1Banner').css('background-image', 'url(img/hdMostChallengingWords.png)');
					break;

			}

			if (!lessonData.pages[pageNum].icon1) {
				$('#l4bv1SubText1').addClass('realNonsenseTableText');
				$('#l4bv1SubText1').removeClass('iconHeader');

				$('#l4bv1SubText2').addClass('realNonsenseTableText');
				$('#l4bv1SubText2').removeClass('iconHeader');
				$('#l4bv1SubText1').html(lessonData.pages[pageNum].subHead1);
				$('#l4bv1SubText2').html(lessonData.pages[pageNum].subHead2);
			} else {
				$('#l4bv1SubText1').removeClass('realNonsenseTableText');
				$('#l4bv1SubText1').addClass('iconHeader');

				$('#l4bv1SubText2').removeClass('realNonsenseTableText');
				$('#l4bv1SubText2').addClass('iconHeader');

				$('#l4bv1SubText1').html('<div class="syllablesTableCellArtworkDiv tableCell' + lessonData.pages[pageNum].icon1 + '"></div>');
				$('#l4bv1SubText2').html('<div class="syllablesTableCellArtworkDiv tableCell' + lessonData.pages[pageNum].icon2 + '"></div>');


				//<div class="syllablesTableCellArtworkDiv tableCellApple"></div>
			}


			for (j = 0; j < lessonData.pages[pageNum].words.length; j++) {
				var parseString = lessonData.pages[pageNum].words[j].word;
				var htmlString = '';
				var inVowel = false;
				for (i = 0; i < parseString.length; i++) {
					var currChar = parseString.charAt(i);
					if (currChar == '/') {
						if (inVowel) {
							htmlString += '</span>'
						} else {
							htmlString += '<span class="realNonsenseVowel">'
						}
						inVowel = !inVowel;
					} else {
						htmlString += currChar;
					}

				}
				$('#l4bv1Word' + (j + 1)).html(htmlString);
			}
			$('.l4bv1Check').addClass('hiddenCheck');
			setUpStep('l4bv1()');
			break;

		case "l0cv0":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#l0cv0Banner').css('background-image', 'url(img/hdChallenging.png)');
					break;

				case "2":
					$('#l0cv0Banner').css('background-image', 'url(img/hdMoreChallengingWords.png)');
					break;

				case "3":
					$('#l0cv0Banner').css('background-image', 'url(img/hdMostChallengingWords.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#l0cv0Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td id="l0cv0Title' + (i + 1) + '" class="syllablesTableText threeEm middleAlign"><div class="syllableTablesTextCellBorder"></div><div class="syllableTableTextHead">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '<td class="syllablesTableCellSpacer"></td>';

			for (i = 0; i < lessonData.pages[pageNum].icons.length; i++) {
				htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCell' + lessonData.pages[pageNum].icons[i] + '"></div></td>';
			}
			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="l0cv0Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					htmlString += '<td  class="syllableTablesCell oneEm"><div  id="l0cv0Word' + (i + 1) + 'preCheck' + (j + 1) + '"></div>';
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].icons.length; j++) {
					htmlString += '<td id="l0cv0Word' + (i + 1) + '_v' + j + '" class="syllableTablesCell"></td>';
				}
				htmlString += '</tr>';

				$('#l0cv0Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 1 || lessonData.pages[pageNum].words[i].checks[j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
							$('#l0cv0Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('checkMark hiddenCheck');
						}

						if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
							$('#l0cv0Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('checkMark checkMarkX2 hiddenCheck');
						}
					} else {
						$('#l0cv0Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('noCheck');
					}

				}
				for (j = 0; j < lessonData.pages[pageNum].words[i].vowels.length; j++) {
					if (lessonData.pages[pageNum].words[i].vowels[j] == 1 || lessonData.pages[pageNum].words[i].vowels[j] == 2) {
						if (lessonData.pages[pageNum].words[i].vowels[j] == 1) {
							$('#l0cv0Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].vowels[j] == 2) {
							$('#l0cv0Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#l0cv0Word' + (i + 1) + '_v' + (j)).html('<div class="noCheck"></div>');
					}
				}
			}
			$('#l0cv0Title1').html(lessonData.pages[pageNum].title);
			setUpStep('l0cv0()');
			break;


		case "WS001":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS001Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS001Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS001Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS001Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td id="WS001Title' + (i + 1) + '" class="syllablesTableText threeEm middleAlign"><div class="syllableTablesTextCellBorder"></div>' + lessonData.pages[pageNum].headers[i] + '</td>';
			}
			htmlString += '<td class="syllablesTableCellSpacer"></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellApple"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellEdge"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellItchy"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellOctopus"></div></td>';
			htmlString += '<td class="syllableTablesArtworkCell"><div class="syllableTablesArtworkCellBorder"></div><div class="syllablesTableCellArtworkDiv tableCellUp"></div>&nbsp;</td>';
			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					htmlString += '<td  class="syllableTablesCell oneEm"><div  id="WS001Word' + (i + 1) + 'preCheck' + (j + 1) + '"></div>';
				}
				htmlString += '<td></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '_v0" class="syllableTablesCell"></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '_v1" class="syllableTablesCell"></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '_v2" class="syllableTablesCell"></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '_v3" class="syllableTablesCell"></td>';
				htmlString += '<td id="WS001Word' + (i + 1) + '_v4" class="syllableTablesCell"></td>';
				htmlString += '</tr>';

				$('#WS001Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 1 || lessonData.pages[pageNum].words[i].checks[j] == 1) {
						if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
							$('#WS001Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('checkMark hiddenCheck');
						}

						if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
							$('#WS001Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('checkMark checkMarkX2 hiddenCheck');
						}
					} else {
						$('#WS001Word' + (i + 1) + 'preCheck' + (j + 1)).addClass('noCheck');
					}

				}
				for (j = 0; j < lessonData.pages[pageNum].words[i].vowels.length; j++) {
					if (lessonData.pages[pageNum].words[i].vowels[j] == 1 || lessonData.pages[pageNum].words[i].vowels[j] == 2) {
						if (lessonData.pages[pageNum].words[i].vowels[j] == 1) {
							$('#WS001Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].vowels[j] == 2) {
							$('#WS001Word' + (i + 1) + '_v' + (j)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#WS001Word' + (i + 1) + '_v' + (j)).html('<div class="noCheck"></div>');
					}
				}
			}
			$('#WS001Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS001()');
			break;

		case "WS004":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS004Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS004Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS004Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS004Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS004Title1" class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '">how many<br />syllables?</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS004Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					htmlString += '<td  class="syllableTablesCell threeEm"><div  id="WS004Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					htmlString += '<td id="WS004Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
				}

				htmlString += '</tr>';

				$('#WS004Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				$('#WS004Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 1 || lessonData.pages[pageNum].words[i].checks[j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
							$('#WS004Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
							$('#WS004Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#WS004Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="noCheck"></div>');
					}
				}
			}
			$('#WS004Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS004()');
			break;

		case "WS005":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS005Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS005Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS005Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS005Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS005Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS005Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS005Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS005Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS005Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS005Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}

				htmlString += '</tr>';
				//htmlString += '<div class="syllablesBorder"></div>';
				$('#WS005Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				$('#WS005Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 1 || lessonData.pages[pageNum].words[i].checks[j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
							$('#WS005Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
							$('#WS005Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#WS005Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="noCheck"></div>');
					}
				}
			}
			$('#WS005Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS005()');
			break;
		case "l0ev0":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#l0ev0Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#l0ev0Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#l0ev0Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#l0ev0Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="l0ev0Title1" class="syllablesTableText" colspan="' + lessonData.pages[pageNum].subheaders[0].length + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="l0ev0Title2" class="syllablesTableText" colspan="' + lessonData.pages[pageNum].subheaders[1].length + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="l0ev0Title3" class="syllablesTableText" rowspan=2">' + lessonData.pages[pageNum].headers[2] + '</td>';
			htmlString += '</tr>';

			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="l0ev0Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].subheaders[0].length; j++) {
					htmlString += '<td id="l0ev0Word' + (i + 1) + 'Col1Check' + (j + 1) + '" class="syllableTablesCell"></td>';
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].subheaders[0].length; j++) {
					htmlString += '<td id="l0ev0Word' + (i + 1) + 'Col2Check' + (j + 1) + '" class="syllableTablesCell"></td>';
				}
				htmlString += '<td></td>';
				htmlString += '<td id="l0ev0Word' + (i + 1) + 'Schwa" class="syllableTablesCell"><div class="syllableTablesCellBorder2"></div><span class="schwaText schwaHidden">' + lessonData.pages[pageNum].words[i].schwa + '</span></td>';
				htmlString += '</tr>';

				$('#l0ev0Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				$('#l0ev0Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks[0].length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[0][j] == 1 || lessonData.pages[pageNum].words[i].checks[0][j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[0][j] == 1) {
							$('#l0ev0Word' + (i + 1) + 'Col1' + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].checks[0][j] == 2) {
							$('#l0ev0Word' + (i + 1) + 'Col1' + 'Check' + (j + 1)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#l0ev0Word' + (i + 1) + 'Col1' + 'Check' + (j + 1)).html('<div class="noCheck"></div>');
					}
				}
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks[1].length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[1][j] == 1 || lessonData.pages[pageNum].words[i].checks[1][j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[1][j] == 1) {
							$('#l0ev0Word' + (i + 1) + 'Col2' + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].checks[1][j] == 2) {
							$('#l0ev0Word' + (i + 1) + 'Col2' + 'Check' + (j + 1)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#l0ev0Word' + (i + 1) + 'Col2' + 'Check' + (j + 1)).html('<div class="noCheck"></div>');
					}
				}

			}

			setUpStep('l0ev0()');
			break;

		case "l0fv0":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#l0fv0Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#l0fv0Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#l0fv0Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#l0fv0Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="l0ev0Title1" class="syllablesTableText" colspan="' + lessonData.pages[pageNum].subheaders.length + '">' + lessonData.pages[pageNum].title + '</td>';
			htmlString += '</tr>';

			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders.length; i++) {
				htmlString += '<td class="syllablesTableText">' + lessonData.pages[pageNum].subheaders[i] + '</td>';
			}
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="l0fv0Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].subheaders.length; j++) {
					htmlString += '<td id="l0fv0Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
				}

				$('#l0fv0Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {

				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 1 || lessonData.pages[pageNum].words[i].checks[j] == 2) {
						if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
							$('#l0fv0Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
						}
						if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
							$('#l0fv0Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					} else {
						$('#l0fv0Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="noCheck"></div>');
					}
				}

			}

			setUpStep('l0fv0()');
			break;

		case "GL001":
			//set up random tile data array here
			$('#GL001TileContent').html(unitData.units[unitNum - 1].ts[0]);
			$('#GL001PhonemicContent').html(getPhonemic(unitData.units[unitNum - 1].ts[0]));
			$('#GL001 .ltBoxLarge').css('display', 'inline-block');
			$('#GL001 .ltLarge').css('display', 'inline-block');
			$('#GL001 .stopYellowOff').removeClass('stopYellow');
			$('#GL001 .stopRedOff').removeClass('stopRed');
			$('#GL001 .stopGreenOff').removeClass('stopGreen');
			setUpStep('GL001()');
			break;
		case "GL002":
			//reset visibilities here
			$('#GL002 .ltBoxStandard').removeClass('hidden');
			$('#GL002 .ltPhonemicContentLarge').removeClass('hidden');
			$('#GL002 .ltPhonemicLarge').addClass('hidden');
			$('#GL002 .ltLarge').addClass('hidden');
			//
			//set up random tiles data here and populate td cells
			var seedArray = generateRandomSounds();
			for (i = 0; i < seedArray.length; i++) {
				$('#GL002TileContent' + (i + 1)).html(seedArray[i]);
				$('#GL002PhonemicContent' + (i + 1)).html(getPhonemic(seedArray[i]));
			}

			$('#GL002Tile1').removeClass('hidden');
			setUpStep('GL002()');
			break;
		case "GL003":

			index = 0;
			//reset visiblity
			$('#GL003').css('display', 'block');
			$('#GL003Light1').removeClass('stopRed');
			$('#GL003Light2').removeClass('stopYellow');
			$('#GL003Light3').removeClass('stopGreen');
			//set up random tiles data here and populate td cells
			wordArray = [];
			wordArray = generateRandomSoundSets();
			$('#GL003HeartWord').html('<div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile1"><div id="GL003TileContent" class="ltContentLarge">' + wordArray[index][0] + '</div></div></div><div class="emSpace"></div><div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile2"><div id="GL003TileContent" class="ltContentLarge">' + wordArray[index][1] + '</div></div></div><div class="emSpace"></div><div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile3"><div id="GL003TileContent" class="ltContentLarge">' + wordArray[index][2] + '</div></div></div>');


			index = 0;
			$('#wrapper').unbind('mousedown');
			setUpStep('GL003()');
			break;
		case "GH001":
			//set up random word data here
			index = 0;
			wordArray = [];
			for (i = 0; i < unitData.units[unitNum - 1].tw.length; i++) {
				wordArray.push(unitData.units[unitNum - 1].tw[i]);
			}
			for (i = 0; i < unitData.units[unitNum - 1].pw.length; i++) {
				wordArray.push(unitData.units[unitNum - 1].pw[i]);
			}

			index = 0;
			$('#GH001HeartWord').html(wordArray[index]);
			setUpStep('GH001()');
			break;
		case "GH002":
			//reset visibility
			$('#GH002 .heartWordBlockText').addClass('hidden');
			//
			//set up random tiles data here and populate td cells


			$('div attr[id^="GH002heartWord"]').addClass('hidden');
			wordArray = generateRandomWords();
			for (i = 0; i < wordArray.length; i++) {
				$('#GH002heartWord' + (i + 1)).html(wordArray[i]);
			}
			index = 0;
			$('#GH002heartWord1').removeClass('hidden');
			setUpStep('GH002()');
			break;
		case "GH003":
			//$('#menuBarCenter').html('Template GH003:put a real title here later');
			//reset visiblity
			$('#GH003').css('display', 'block');
			//set up random tiles data here and populate td cells
			index = 0;
			wordArray = [];
			wordArray = generateRandomWordSets(10);

			$('#GH003HeartWord').html(wordArray[index][0] + ', ' + wordArray[index][1] + ', ' + wordArray[index][2]);
			$('#GH003 .stoplight').removeClass('stopRed');
			$('#GH003 .stoplight').removeClass('stopYellow');
			$('#GH003 .stoplight').removeClass('stopGreen');
			setUpStep('GH003()');
			break;
		case "GL004":
			//$('#menuBarCenter').html('Template GL004:put a real title here later');
			//fill read a word sounds
			$('.readARowBlocker').removeClass('hidden');
			wordArray = typeof __GL004 == 'undefined' ? generateRandomSoundSets() : __GL004;
			for (i = 0; i < 3; i++) {
				$('#GL004r1b' + (i + 1)).html('<div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][0] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][1] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][2] + '</div></div></div>');
			}
			for (i = 3; i < 6; i++) {
				$('#GL004r2b' + (i - 2)).html('<div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][0] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][1] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][2] + '</div></div></div>');
			}
			for (i = 6; i < 9; i++) {
				$('#GL004r3b' + (i - 5)).html('<div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][0] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][1] + '</div></div></div><div class="ltBoxLarge"><div class="ltLarge"><div class="ltContentLarge">' + wordArray[i][2] + '</div></div></div>');
			}

			setUpStep('GL004()');
			break;
		case "GH004":
			//$('#menuBarCenter').html('Template GH004:put a real title here later');
			//fill read a row words
			$('.readARowBlocker').removeClass('hidden');
			wordArray = typeof __GH004 == 'undefined' ? generateRandomWordSets(9) : __GH004;
			index = 0;
			for (i = 1; i < 4; i++) {
				for (j = 1; j < 4; j++) {
					$('#GH004r' + i + 'b' + j).html(wordArray[index][0] + ', ' + wordArray[index][1] + ', ' + wordArray[index][2]);
					index++;
				}
			}

			setUpStep('GH004()');
			break;
		case "l2av2":
			//$('#menuBarCenter').html('Template l2av2:put a real title here later');
			//set up random tiles data here and populate td cells
			var seedArray = generateRandomSounds();
			for (i = 0; i < seedArray.length; i++) {
				$('#l2av2TileContent' + (i + 1)).html(seedArray[i]);
				$('#l2av2PhonemicContent' + (i + 1)).html(getPhonemic(seedArray[i]));
			}
			//reset here
			//$('.ltBoxStandard').addClass('hidden');
			$('.ltPhonemicLarge').addClass('hidden');
			$('.ltLarge').addClass('hidden');
			$('#l2av2Tile1').removeClass('hidden');
			setUpStep('l2av2()');
			break;
		case "l2bv2":
			//$('#menuBarCenter').html('Template l2bv2:put a real title here later');
			//set up random tiles data here and populate td cells
			var seedArray = generateRandomSounds();
			for (i = 0; i < seedArray.length; i++) {
				$('#l2bv2PhonemicContent' + (i + 1)).html(getPhonemic(seedArray[i]));
			}
			//reset here
			//$('.ltBoxStandard').addClass('hidden');
			$('.ltPhonemicLarge').removeClass('hidden');
			//$('.ltLarge').removeClass('hidden');
			$('#l2av2').hide();
			$('#l2bv2 .ltPhonemicContentLarge').addClass('hidden');
			$('#l2bv2PhonemicContent1').removeClass('hidden');
			setUpStep('l2bv2()');
			break;
		case "l2cv2":
			//$('#menuBarCenter').html('Template l2cv2:put a real title here later');
			//set up random tiles data here and populate td cells
			wordArray = generateRandomWords();
			for (i = 0; i < wordArray.length; i++) {
				$('#l2cv2heartWord' + (i + 1)).html(wordArray[i]);
			}
			index = 0;
			$('.heartWordBlockText').addClass('hidden');
			$('#l2cv2heartWord1').removeClass('hidden');
			setUpStep('l2cv2()');
			break;
		case "l2dv2":
			//$('#menuBarCenter').html('Template l2dv2:put a real title here later');
			wordArray = generateRandomWordSets(10);
			index = 0;
			$('.heartWordBlockTextMultiple').addClass('hidden');
			$('#l2dv2heartWord1').removeClass('hidden');
			setUpStep('l2dv2()');
			break;
		case "l2ev2":
			//$('#menuBarCenter').html('Template l2ev2:put a real title here later');
			setUpStep('l2ev2()');
			break;
		case "SB001":
			//build syllaboards with for loop
			var syls = lessonData.pages[pageNum].syllables[0];
			$('#SB001').html('<div id="SB001SylBox" class="sylBox"><div id="SB001Arrow" class="letterTileUpArrow"></div></div>');
			for (i = 0; i < syls; i++) {
				$('#SB001SylBox').append('<div id="SB001SylBoard' + i + '" class="syllaboardTile"><div id="SB001SylBoardContent' + i + '" class="syllaboardTileContent">&nbsp;</div></div>');
			}
			$('#SB001Arrow').css('left', '0px');
			$('#SB001Arrow').css('top', '9em');
			setUpStep('SB001()');
			break;
		case "SB003":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			var circCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				var currentChar = parseText.charAt(i);
				if (currentChar == '(' || currentChar == '|' || currentChar == '1' || currentChar == '2' || currentChar == '3' || currentChar == '4' || currentChar == '5' || currentChar == '6' || currentChar == '-' || currentChar == '*' || currentChar == '/') {

					switch (currentChar) {
						case '-':
							syllaDiv += '<div id ="SB003Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB003TileContent' + sylCount + '">' + htmlString2 + '</div></div>';
							sylCount++;
							htmlString2 = '';
							break;
						case '(':
							htmlString += '<span id="SB003Circle' + circCount + '" class="SB003Circle circleHidden">';
							circCount++;
							break;
						case '|':
							htmlString += '</span>';
							break;
						case '*':
							inVowel = true;
							break;
						case '/':
							inVowel = false;
							break;
						case '1':
							htmlString += '<span class="SB003Underline1 SB003Underline underlineText underlineHidden">';
							break;
						case '2':
							htmlString += '<span class="SB003Underline2 SB003Underline underlineText underlineHidden">';
							break;
						case '3':
							htmlString += '<span class="SB003Underline3 SB003Underline underlineText underlineHidden">';
							break;
						case '4':
							htmlString += '<span class="SB003Underline4 SB003Underline underlineText underlineHidden">';
							break;
						case '5':
							htmlString += '<span class="SB003Underline5 SB003Underline underlineText underlineHidden">';
							break;
						case '6':
							htmlString += '<span class="SB003Underline6 SB003Underline underlineText underlineHidden">';
							break;
					}
				} else {



					htmlString += '<span class="SB003Consonant">' + currentChar + '</span>';

					if (inVowel) {
						htmlString2 += '<span class="SB003Vowel">' + currentChar + '</span>';
					} else {
						htmlString2 += '<span class="SB003Consonant">' + currentChar + '</span>';
					}





				}
			}
			syllaDiv += '<div id ="SB003Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB003TileContent' + sylCount + '">' + htmlString2 + '' + '</div></div></div>';
			$('#SB003Boards').html(syllaDiv);
			$('#SB003Boards span').addClass('hiddenText');
			$('#SB003Boards span').css('transition', 'all .5s 0s');
			$('#SB003 .syllaboardTile').hide();
			$('#SB003Word').html(htmlString);
			$('#SB003 .syllaboardTile').hide();
			$('#SB003Boards span').addClass('hiddenText');
			$('#SB003Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB003()');
			break;
		case "MI002":
			//$('#menuBarCenter').html('Template MI002:put a real title here later');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI002Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (currChar == '/') {
							inVowel = !inVowel;
						} else {
							htmlString += '</span><span class="wordPartsSyllable">'
						}

					} else {
						htmlString += '<span class="wordPartsLetter">';

						if (inVowel) {
							htmlString += '<div class="wordPartsVowel">';
						}
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (inVowel && lessonData.pages[pageNum].words[i].charAt(j + 1) == '/') {
							htmlString += '</div>';
						}
						htmlString += '</span>';
					}

				}
				$('#MI002Word' + (i + 1)).html(htmlString);
			}

			$('.wordPartsSyllable').addClass('wordsNoStroke');
			$('.wordPartsVowel').addClass('vowelNoStroke');

			setUpStep('MI002()');
			break;
		case "WS008":

			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS008Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS008Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS008Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			$('td[id^="WS008Word"]').html('');
			$('.circleNum').removeClass('circleNumSelected');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS008Word' + (i + 1)).html('');
				var totalSyls = 1;
				var inSyl = true;
				var vowelArray = [0, 0, 0, 0, 0];
				var htmlString = '';
				htmlString += '';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (currChar == '/') {
							inVowel = !inVowel;
						} else {
							totalSyls++;
						}

					} else {
						if (inVowel) {
							switch (currChar) {
								case 'a':
									vowelArray[0]++;
									break;
								case 'e':
									vowelArray[1]++;
									break;
								case 'i':
									vowelArray[2]++;
									break;
								case 'o':
									vowelArray[3]++;
									break;
								case 'u':
									vowelArray[4]++;
									break;
							}
						}
						htmlString += currChar;
					}



				}
				console.log(vowelArray);
				$('#WS008Word' + (i + 1)).html(htmlString);
				if (totalSyls == 1) {
					$('#WS008Word' + (i + 1) + 'Circ1').addClass('circleNumSelected hiddenCirc');
				} else {
					$('#WS008Word' + (i + 1) + 'Circ2').addClass('circleNumSelected hiddenCirc');
				}
				for (j = 0; j < vowelArray.length; j++) {
					if (vowelArray[j] == 1) {
						$('#WS008Word' + (i + 1) + '_v' + j).html('<div class="checkMark checkMark hiddenCheck"></div>');
					} else {
						if (vowelArray[j] == 2) {
							$('#WS008Word' + (i + 1) + '_v' + j).html('<div class="checkMark checkMarkX2 hiddenCheck"></div>');
						}
					}
				}
			}


			setUpStep('WS008()');
			break;
		case "SI002":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#SI002Banner').attr('src', 'img/hdChallenging' + bannerType + '.png');
					break;

				case "2":
					$('#SI002Banner').attr('src', 'img/hdMoreChallengingWords' + bannerType + '.png');
					break;

				case "3":
					$('#SI002Banner').attr('src', 'img/hdMostChallengingWords' + bannerType + '.png');
					break;

			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var syls = 1;
				var subLetter = 0;
				var sylSwitch = false;
				var currChars = '';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).html('<div id="SI002w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r" class="radioButton"></div>');
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);


					if (currChar == '/' || currChar == '-') {

						if (currChar == '/') {
							$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
							currChars = '';
							$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
							$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
							syls++;
							subLetter = 0;
							sylSwitch = true;
						} else {
							if (j > 0 && !sylSwitch) {
								$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
								currChars = '';
								$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
								$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');

							}
							subLetter++;
							sylSwitch = false;
						}
					} else {
						currChars += currChar;
					}
				}
				$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
				currChars = '';
				$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
				$('#SI002w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
			}
			for (i = 1; i < 6; i++) {
				for (j = 1; j < 3; j++) {
					for (k = 1; k < 5; k++) {
						$('#SI002w' + (i) + 's' + j + 'l' + k).addClass('hiddenText');
						$('#SI002w' + (i) + 's' + j + 'l' + k + 'r').addClass('radioButtonSelect radioButtonHidden');
					}
				}
			}


			setUpStep('SI002()');
			break;
		case "SB002":
			//center tiles here
			$('#SB002Tile1Content').html(lessonData.pages[pageNum].words[0]);
			$('#SB002Tile2Content').html(lessonData.pages[pageNum].words[1]);
			$('#SB002Tile1').removeClass('buildWordTileNoStroke');
			$('#SB002Tile2').removeClass('buildWordTileNoStroke');
			setUpStep('SB002()');
			break;
		case "LT007":
			$('#LT007Arrow').css('display', 'none');
			$('#LT007End').css('display', 'none');
			var parseText = lessonData.pages[pageNum].words[0];
			var inString = false;
			var htmlString = '';
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);

				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (inString) {
						htmlString += '</div></div></div>';
					}
					inString = true;
					htmlString += '<div class="closedSyllableTileBack">';
					htmlString += '<div class="closedSyllableTile">';
					switch (currChar) {
						case '/':
							htmlString += '<div id="LT007Arrow" class="closeSyllableArrow"></div>';
							htmlString += '<div class="closedSyllableTileContent  closedSyllableVowel">';
							break;

						case '-':
							htmlString += '<div class="closedSyllableTileContent">';
							break;

						case '*':
							htmlString += '<div id="LT007End" class="closeSyllableEnd"></div>';
							htmlString += '<div class="closedSyllableTileContent">';
							break;

					}
				} else {
					htmlString += currChar;
				}
			}

			htmlString += '</div></div></div>';
			$('#LT007').html(htmlString);
			setUpStep('LT007()');
			break;

		case "LT008":
			var parseText = lessonData.pages[pageNum].words[0];
			var inWord = false;
			var htmlString = '';
			var tileCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-') {
					if (inWord) {
						htmlString += '</div></div></div>';
					}
					htmlString += '<div  class="letterTileBack">';
					htmlString += '<div  id="LT008Tile' + tileCount + '" class="letterTile letterTileHidden">';
					inWord = true;
					tileCount++;
					if (currChar == '/') {
						htmlString += '<div id="LT008Content' + tileCount + '" class="letterTileContent letterTileVowel">';
					} else {
						htmlString += '<div id="LT008Content' + tileCount + '" class="letterTileContent">';
					}
				} else {
					htmlString += currChar;
				}
			}
			htmlString += '</div></div></div>';
			$('#LT008LetterTiles').html(htmlString);
			$('div [id^="LT008Tile"]').fadeIn(250);
			setUpStep('LT008()');
			break;
		case "LT009":
			var parseText = lessonData.pages[pageNum].words[0].letters;
			var inWord = false;
			var htmlString = '';
			var tileCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-') {
					if (inWord) {
						htmlString += '</div></div></div>';
					}
					htmlString += '<div  class="letterTileBack">';
					htmlString += '<div  id="LT009Tile' + tileCount + '" class="letterTile letterTileHidden">';
					inWord = true;
					tileCount++;
					if (currChar == '/') {
						htmlString += '<div id="LT009Content' + tileCount + '" class="letterTileContent letterTileVowel">';
					} else {
						htmlString += '<div id="LT009Content' + tileCount + '" class="letterTileContent">';
					}
				} else {
					htmlString += currChar;
				}
			}
			htmlString += '</div></div></div>';
			htmlString += '<div class="letterTileBack">';
			htmlString += '<div id="LT009Tile' + tileCount + '" class="letterTile letterTileHidden letterTileShiftRight">'
			htmlString += '<div id="LT009Content' + tileCount + '" class="letterTileContent">'
			htmlString += lessonData.pages[pageNum].words[0].word;
			htmlString += '</div></div></div>';
			$('#LT009LetterTiles').html(htmlString);
			$('div [id^="LT009Tile"]').fadeIn(250);
			setUpStep('LT009()');
			break;
		case "MI001":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI001w' + (i + 1)).html('');
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-') {
						blockCount++;
						spacer = false;
						if (j > 0) {
							htmlString += '</span>';
						}
						htmlString += '<span id="MI001w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter">';
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span>';
				$('#MI001w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI001()');
			break;
		case "WS006":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS006Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS006Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS006Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}
			$('#WS006SubText1').html(lessonData.pages[pageNum].subHead1);
			$('#WS006SubText2').html(lessonData.pages[pageNum].subHead2);
			for (j = 0; j < lessonData.pages[pageNum].words.length; j++) {
				var parseString = lessonData.pages[pageNum].words[j].word;
				var htmlString = '';
				var inVowel = false;
				for (i = 0; i < parseString.length; i++) {
					var currChar = parseString.charAt(i);
					if (currChar == '/') {
						if (inVowel) {
							htmlString += '</span>'
						} else {
							htmlString += '<span class="realNonsenseVowel">'
						}
						inVowel = !inVowel;
					} else {
						htmlString += currChar;
					}

				}
				$('#WS006Word' + (j + 1)).html(htmlString);
			}
			$('.WS006Check').addClass('hiddenCheck');
			setUpStep('WS006()');
			break;
		case "SI001":
			//fill Challenge Headline First
			var challenge = lessonData.pages[pageNum].challenge;
			var chalURL = '';
			switch (challenge) {
				case "1":
					chalURL = 'img/hdChallenging' + bannerType + '.png';
					break;
				case "2":
					chalURL = 'img/hdMoreChallengingWords' + bannerType + '.png';
					break;
				case "3":
					chalURL = 'img/hdMostChallengingWords' + bannerType + '.png';
					break;

			}
			$('#SI001Banner').attr('src', chalURL);
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//var syls = 1;
				var currChars = '';
				var blockCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					if (lessonData.pages[pageNum].words[i].charAt(j) == '-') {
						if (j > 0) {
							$('#SI001w' + (i + 1) + 'l' + blockCount).append(currChars);
							//$('#SI001w' + (i+1) +  'l' + blockCount).addClass('hiddenText');
							currChars = '';
						}
						blockCount++;
						$('#SI001w' + (i + 1) + 'l' + (blockCount)).html('<div id="SI001w' + (i + 1) + 'l' + (blockCount) + 'r" class="radioButton"></div>');
					} else {
						currChars += lessonData.pages[pageNum].words[i].charAt(j);
					}

					//$('#SI001w' + (i+1) + 'l' + (j+1) + 'r').addClass('radioButtonSelect');

				}
				$('#SI001w' + (i + 1) + 'l' + (blockCount)).append(currChars);
				//$('#SI001w' + (i+1) +  'l' + (blockCount)).addClass('hiddenText');
			}
			$('#SI001 .radioLetterTile').addClass('hiddenText');
			$('#SI001 .radioButton').removeClass('radioButtonSelect');
			setUpStep('SI001()');
			break;
		case "SS001":
			var parseText = lessonData.pages[pageNum].words[0];
			var parseText2 = lessonData.pages[pageNum].words[1];
			var inUnder = false;
			var inBox = false;
			var htmlString, htmlString2;
			htmlString = '';
			htmlString2 = '';
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				switch (currChar) {
					case '-':
						if (!inBox) {
							inBox = true;
							htmlString += '<span id="SS001Span1" class="dottedWordOnly hiddenBorder">';
						} else {
							inBox = false;
							htmlString += '</span>';
						}
						break;
					case '/':
						if (!inUnder) {
							inUnder = true;
							htmlString += '<span id="SS001U1" class="underlineTextTight hiddenBorder">';
						} else {
							inUnder = false;
							htmlString += '</span>';
						}
						break;
					default:
						htmlString += currChar;
						break;

				}
			}
			inUnder = false;
			inBox = false;
			for (i = 0; i < parseText2.length; i++) {
				var currChar = parseText2.charAt(i);
				switch (currChar) {
					case '-':
						if (!inBox) {
							inBox = true;
							htmlString2 += '<span id="SS001Span2" class="dottedWordOnly hiddenBorder">';
						} else {
							inBox = false;
							htmlString2 += '</span>';
						}
						break;
					case '/':
						if (!inUnder) {
							inUnder = true;
							htmlString2 += '<span id="SS001U2" class="underlineTextTight hiddenBorder">';
						} else {
							inUnder = false;
							htmlString2 += '</span>';
						}
						break;
					default:
						htmlString2 += currChar;
						break;

				}
			}
			$('#SS001Text1').html(htmlString);
			$('#SS001Text2').html(htmlString2);
			setUpStep('SS001()');
			break;

		//
		case "SS002":
			var parseText = lessonData.pages[pageNum].words[0];
			var parseText2 = lessonData.pages[pageNum].words[1];
			var inUnder = false;
			var inBox = false;
			var htmlString, htmlString2;
			htmlString = '';
			htmlString2 = '';
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				switch (currChar) {
					case '-':
						if (!inBox) {
							inBox = true;
							htmlString += '<span id="SS002Span1" class="dottedWordOnly hiddenBorder">';
						} else {
							inBox = false;
							htmlString += '</span>';
						}
						break;
					case '/':
						if (!inUnder) {
							inUnder = true;
							htmlString += '<span id="SS002U1" class="underlineTextTight hiddenBorder">';
						} else {
							inUnder = false;
							htmlString += '</span>';
						}
						break;
					default:
						htmlString += currChar;
						break;

				}
			}
			inUnder = false;
			inBox = false;
			for (i = 0; i < parseText2.length; i++) {
				var currChar = parseText2.charAt(i);
				switch (currChar) {
					case '-':
						if (!inBox) {
							inBox = true;
							htmlString2 += '<span id="SS002Span2" class="dottedWordOnly hiddenBorder">';
						} else {
							inBox = false;
							htmlString2 += '</span>';
						}
						break;
					case '/':
						if (!inUnder) {
							inUnder = true;
							htmlString2 += '<span id="SS002U2" class="underlineTextTight hiddenBorder">';
						} else {
							inUnder = false;
							htmlString2 += '</span>';
						}
						break;
					default:
						htmlString2 += currChar;
						break;

				}
			}
			$('#SS002Text1').html(htmlString);
			$('#SS002Text2').html(htmlString2);
			setUpStep('SS002()');
			break;

		//
		case "LT001":

			setUpStep('LT001()');
			break;

		case "LT002":
			$('#LT001TileQu').css('display', 'block');
			$('#LT001TileQ').css('display', 'block');
			$('#LT001ContentQ').html('q');
			setUpStep('LT002()');
			break;
		case 'LT003':
			$('#LT003 .letterTile').css('display', 'block');
			$('#LT003 .letterTilePhonemicContent').css('display', 'none');
			setUpStep('LT003()');
			break;
		case 'LT004':
			$('#LT004 .letterTile').css('display', 'block');
			$('#LT004 .tableRowBlocker').css('display', 'block');
			setUpStep('LT004()');
			break;
		case 'LT005':
			$('#LT005 .vowelTile').css('display', 'none');
			$('#LT005 .vowelTileA').css('display', 'none');
			$('#LT005 .letterTilePhonemic').css('display', 'none');
			$('#LT005 .consonantTile').css('display', 'block');
			$('#LT005 .tableRowBlocker').css('display', 'none');
			setUpStep('LT005()');
			break;
		case 'LT006':
			//fill Challenge Headline First
			var challenge = lessonData.pages[pageNum].challenge;
			var chalURL = '';
			switch (challenge) {
				case "1":
					chalURL = 'img/hdChallenging' + bannerType + '.png';
					break;
				case "2":
					chalURL = 'img/hdMoreChallengingWords' + bannerType + '.png';
					break;
				case "3":
					chalURL = 'img/hdMostChallengingWords' + bannerType + '.png';
					break;

			}
			$('#LT006Challenge').attr('src', chalURL);

			//Fill Text Tiles
			$('#LT006Col1').html('');
			$('#LT006Col2').html('');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var parseText = lessonData.pages[pageNum].words[i].word;

				var inVowel = false;
				var htmlString = '';
				var firstLetter = true;
				htmlString += '<div class="letterTableRow">';
				var tileCount = 1;
				for (j = 0; j < parseText.length; j++) {
					var currChar = parseText.charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (!firstLetter) {
							htmlString += '</div></div></div>';
						} else {
							firstLetter = false;
						}
						htmlString += '		<div  class="letterTileBack">';
						htmlString += '			<div  id="LT006Tile' + tileCount + '" class="letterTile">';
						if (currChar == '/') {
							htmlString += '				<div id="LT006Content' + tileCount + '" class="letterTileContent letterTileVowel">';
						} else {
							htmlString += '				<div id="LT006Content' + tileCount + '" class="letterTileContent">';
						}
					} else {
						htmlString += currChar;

					}

				}
				htmlString += '				</div>';
				htmlString += '		</div>';
				htmlString += '		</div>';
				if (lessonData.pages[pageNum].words[i].real) {
					htmlString += '<div class="letterTileBack"><div  id="LT006Check' + i + '" class="isWordCheck hiddenCheck"></div></div>';
				} else {
					htmlString += '<div class="letterTileBack"><div id="LT006Check' + i + '" class="notWordCheck hiddenCheck"></div></div>';
				}
				htmlString += '</div>';
				if (i < lessonData.pages[pageNum].words.length / 2) {
					$('#LT006Col1').html($('#LT006Col1').html() + htmlString);
				} else {
					$('#LT006Col2').html($('#LT006Col2').html() + htmlString);
				}
			}
			//Bind Click Event
			setUpStep('LT006()');
			break;
		case 'l2gv0':


			//Fill Text Tiles
			$('#l2gv0Col1').html('');
			$('#l2gv0Col2').html('');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var parseText = lessonData.pages[pageNum].words[i].word;

				var inVowel = false;
				var htmlString = '';
				var firstLetter = true;
				htmlString += '<div class="letterTableRow">';
				var tileCount = 1;
				for (j = 0; j < parseText.length; j++) {
					var currChar = parseText.charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (!firstLetter) {
							htmlString += '</div></div></div>';
						} else {
							firstLetter = false;
						}
						htmlString += '		<div  class="letterTileBack">';
						htmlString += '			<div  id="l2gv0Tile' + tileCount + '" class="letterTile">';
						if (currChar == '/') {
							htmlString += '				<div id="l2gv0Content' + tileCount + '" class="letterTileContent letterTileVowel">';
						} else {
							htmlString += '				<div id="l2gv0Content' + tileCount + '" class="letterTileContent">';
						}
					} else {
						htmlString += currChar;

					}

				}
				htmlString += '				</div>';
				htmlString += '		</div>';
				htmlString += '		</div>';
				htmlString += '</div>';
				if (i < lessonData.pages[pageNum].words.length / 2) {
					$('#l2gv0Col1').html($('#l2gv0Col1').html() + htmlString);
				} else {
					$('#l2gv0Col2').html($('#l2gv0Col2').html() + htmlString);
				}
			}
			//Bind Click Event
			setUpStep('l2gv0()');
			break;
		case 'l2hv0':
			$('#l2hv0 .letterTile').css('display', 'block');
			$('#l2hv0 .letterTilePhonemicContent').css('display', 'none');
			setUpStep('l2hv0()');
			break;
		case 'l2iv0':
			$('#l2iv0 .letterTile').css('display', 'block');
			$('#l2iv0 .letterTilePhonemicContent').css('display', 'none');
			setUpStep('l2iv0()');
			break;
		case 'l3av0':
			setUpStep('l3av0()');
			break;
		case 'l3bv0':
			setUpStep('l3bv0()');
			break;
		case "l3ev2":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="l3ev2Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="l3ev2v' + vowelCount + '" class="l3ev2Vowel">';
						htmlString2 += '<span class="l3ev2Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="l3ev2Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="l3ev2Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="l3ev2Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="l3ev2TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="l3ev2Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="l3ev2TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#l3ev2Boards').html(syllaDiv);
			$('#l3ev2Boards span').addClass('hiddenText');
			$('#l3ev2Boards span').css('transition', 'all .5s 0s');
			$('#l3ev2 .syllaboardTile').hide();
			$('#l3ev2Word').html(htmlString);
			/*//build word vars with for loop
			var word = lessonData.pages[pageNum].words[0];
			 var syl = []; //single syllable array
			 var syls = []; //array of syllables
			 var vowels = []; //array of vowels
			 var vowelString = ''; //string to hold vowels
			 var vowel = false;
			 var currChar;
			 for (i=0; i<word.length; i++)
			 {
				 currChar = word.charAt(i);
				 if (currChar != '/' && currChar != '-') {
					 if (vowel) {
						 syl.push({char:currChar,type:"v"});
						 vowelString += currChar;
					 } else {
						 syl.push({char:currChar,type:"c"});
					 }
				 } else {
					 if (currChar == '-') {
						 syls.push(syl);
						 syl = [];
					 }
					 if (currChar == '/') {
						 //sylString += '/';
						 vowel = !vowel;
						 if (!vowel) {
							 vowels.push(vowelString);
							 vowelString = '';
						 }
					 }
				 }
				
			 }
			 syls.push(syl);
			 var vowelCount = 0;
			 $('#l3ev2Word').html('');
			 $('#l3ev2Boards').html('');
			 for (i=0; i<syls.length; i++) 
			 {
				var tempSyl = '';
				for (j=0; j<syls[i].length; j++)
				{
					if (syls[i][j].type == 'c') {
						var tempChar = '<span  class="l3ev2Consonant">'+syls[i][j].char+'</span>';
					} else {
						var tempChar = '<span id="l3ev2v' + (i+1) + '" class="l3ev2Vowel">'+syls[i][j].char+'</span>';
					}
					$('#l3ev2Word').append(tempChar);
					tempSyl += tempChar;
				}
				$('#l3ev2Boards').append('<div class="syllaboardHolder"><div id ="l3ev2Tile' + (i+1) + '" class="syllaboardTile"><div class="syllaboardTileContent" id="l3ev2TileContent' + (i+1) +'">' + tempSyl + '</div></div></div>');*/

			$('#l3ev2 .syllaboardTile').hide();

			$('#l3ev2Boards span').addClass('hiddenText');
			$('#l3ev2Boards span').css('transition', 'all .5s 0s');
			setUpStep('l3ev2()');


			break;
		case 'WS016':
			var parseHead1 = lessonData.pages[pageNum].leftHead;
			var parseHead2 = lessonData.pages[pageNum].rightHead;
			var resultHead1 = '';
			var resultHead2 = '';
			for (i = 0; i < parseHead1.length; i++) {

				switch (parseHead1.charAt(i)) {
					case '~':
						resultHead1 += '<span class="longAccentBlock"><div class="longAccent"></div>';
						break;
					case '^':
						resultHead1 += '<span class="shortAccentBlock"><div class="shortAccent"></div>';
						break;
					case '|':
						resultHead1 += '</span>';
						break;
					default:
						resultHead1 += parseHead1.charAt(i);
						break;
				}

			}
			for (i = 0; i < parseHead2.length; i++) {

				switch (parseHead2.charAt(i)) {
					case '~':
						resultHead2 += '<span class="longAccentBlock"><div class="longAccent"></div>';
						break;
					case '^':
						resultHead2 += '<span class="shortAccentBlock"><div class="shortAccent"></div>';
						break;
					case '|':
						resultHead2 += '</span>';
						break;
					default:
						resultHead2 += parseHead2.charAt(i);
						break;
				}

			}
			$('#WS016h1').html(resultHead1);
			$('#WS016h2').html(resultHead2);
			var newTop = $('#wrapper').height() * .5;
			$('#WS016Blocks').html('<div id="WS016w1" class="floatingBlock">hot</div>');
			//fill first word
			$('#WS016w1').html(lessonData.pages[pageNum].words[0].word);
			//center first word
			var newLeft = $('#content').width() / 2 - $('#WS016w1').width() / 2;

			$('#WS016w1').css('transition', 'none');
			$('#WS016w1').css('left', newLeft + 'px');
			$('#WS016w1').css('top', newTop + 'px');
			$('#WS016w1').hide();
			$('#WS016w1').fadeIn(500);
			setUpStep('WS016()');

			break;

		case 'SB008':
			navClick = true;
			$('.floatButton').unbind('click');
			$('#SB008Instruct').unbind('click');
			$('.floatButton').removeClass('floatButtonSelect');
			$('#SB008 .buildWordTile').hide();
			$('#SB008btn1').click(function (e) {
				$('#SB008 .buildWordTile').hide();
				$('#SB008Tile1').fadeIn(500);
				$('.floatButton').removeClass('floatButtonSelect');
				$('#SB008btn1').addClass('floatButtonSelect');
			});
			$('#SB008btn2').click(function (e) {
				$('#SB008 .buildWordTile').hide();
				$('#SB008Tile1').fadeIn(500);
				$('#SB008Tile2').fadeIn(500);
				$('.floatButton').removeClass('floatButtonSelect');
				$('#SB008btn2').addClass('floatButtonSelect');
			});
			$('#SB008btn3').click(function (e) {
				$('#SB008 .buildWordTile').hide();
				$('#SB008Tile1').fadeIn(500);
				$('#SB008Tile2').fadeIn(500);
				$('#SB008Tile3').fadeIn(500);
				$('.floatButton').removeClass('floatButtonSelect');
				$('#SB008btn3').addClass('floatButtonSelect');
			});
			$('#SB008btnClear').click(function (e) {
				$('#SB008 .buildWordTile').fadeOut(250);
				$('.floatButton').removeClass('floatButtonSelect');
			});
			$('#SB008btnNext').click(function (e) {
				navClick = false;
				pageNum++;
				var nextPage = '#' + lessonData.pages[pageNum].template;
				$('.contentPanel').fadeOut(200);
				//initPage(nextPage, lessonData.pages[pageNum].template);
				initPage(pageNum, lessonData.pages[pageNum].template);
				$(nextPage).fadeIn(250);
			});

			$('#SB008btnExit').click(function (e) {
				navClick = false;
				/*pageNum++;
					var nextPage = '#' + lessonData.pages[pageNum].template;
					$('.contentPanel').fadeOut(200);
					initPage(nextPage, lessonData.pages[pageNum].template);
					$(nextPage).fadeIn(250);*/
				nextpage();
			});

			$('#SB008btnInstruct').click(function (e) {
				$('#SB008Instruct').fadeToggle(500);
			});
			$('#SB008Instruct').click(function (e) {
				$('#SB008Instruct').fadeToggle(500);
			});
			break;
		case "SB009":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			var pairCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="SB009Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB009v' + vowelCount + '" class="SB009Vowel">';
						htmlString2 += '<span class="SB009Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-' && parseText.charAt(i) != '!' && parseText.charAt(i) != '*') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB009Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB009Consonant">';
						}


						if (inVowel) {
							htmlString += parseText.charAt(i);
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString += '<span class="SB009ConsonantChar">' + parseText.charAt(i) + '</span>';
							htmlString2 += parseText.charAt(i);
						}
					} else {
						if (parseText.charAt(i) == '-') {
							syllaDiv += '<div id ="SB009Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB009TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
							htmlString2 = '';
							sylCount++;
						}
						if (parseText.charAt(i) == '!') {
							htmlString += '<div id ="SB009Pair' + pairCount + '" class="syllaboardVowelPair"><div class="syllaboardVowelPairUnderline"></div>';
							pairCount++;
						}
						if (parseText.charAt(i) == '*') {
							htmlString += '</div>';
						}
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB009Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB009TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB009Boards').html(syllaDiv);
			$('#SB009Boards span').addClass('hiddenText');
			$('#SB009Boards span').css('transition', 'all .5s 0s');
			$('#SB009 .syllaboardTile').hide();
			$('#SB009Word').html(htmlString);
			$('#SB009 .syllaboardTile').hide();
			$('#SB009Boards span').addClass('hiddenText');
			$('#SB009Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB009()');
			break;
		case "SB010":
			var parseText = lessonData.pages[pageNum].words[0];
			var inWord = false;
			var htmlString = '';
			var tileCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-') {
					if (inWord) {
						htmlString += '</div></div></div>';
					}
					htmlString += '<div  class="syllaboardHolder">';
					htmlString += '<div  id="SB010Tile' + tileCount + '" class="syllaboardTile">';
					inWord = true;
					tileCount++;
					if (currChar == '/') {
						htmlString += '<div id="SB010Content' + tileCount + '" class="syllaboardTileContent syllaboardTileVowel">';
					} else {
						htmlString += '<div id="SB010Content' + tileCount + '" class="syllaboardTileContent">';
					}
				} else {
					htmlString += currChar;
				}
			}
			htmlString += '</div></div></div>';
			$('#SB010syllaboardTiles').html(htmlString);
			//$('div [id^="SB010Tile"]').fadeIn(250);
			$('#SB010 .syllaboardTile').animate({
				opacity: 1
			}, 500);
			//$('#SB010 .syllaboardTile').removeClass('syllaboardTileHidden');
			setUpStep('SB010()');
			break;
		case "SB011":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			var inVowel = false;
			var inPair = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/' || parseText.charAt(i) == '*' || parseText.charAt(i) == '|') {
					if (parseText.charAt(i) == '/') {

						if (inVowel) {
							inVowel = false;
							htmlString += '</span>';
							//htmlString2 += '</span>';

						} else {
							inVowel = true;
							vowelCount++;
							htmlString += '<span id="SB011v' + vowelCount + '" class="SB011Vowel">';
						}
					}
					if (parseText.charAt(i) == '*') {
						inPair = true;
						htmlString += '<span class="SB011under hideSpanUnder">';
						if (htmlString2.length > 0) {
							htmlString2 += '</span>';
						}
						htmlString2 += '<span class="SB011Pair">';
					}
					if (parseText.charAt(i) == '|') {
						inPair = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							htmlString += '<span class="SB011Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (!inVowel) {
							if (htmlString2.length > 0) {
								htmlString2 += '</span>';
							}
							htmlString2 += '<span class="SB011Consonant">' + parseText.charAt(i);
						}
						if (inVowel) {
							if (htmlString2.length > 0 && !inPair) {
								htmlString2 += '</span>';
							}
							if (inPair) {
								inPair = false;
							}

							htmlString2 += '<span class="SB011Vowel">' + parseText.charAt(i);
						}


					} else {
						syllaDiv += '<div id ="SB011Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB011TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
						inVowel = false;
						inPair = false;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB011Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB011TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB011Boards').html(syllaDiv);
			$('#SB011Boards .SB011Consonant').addClass('hiddenText');
			$('#SB011Boards .SB011Vowel').addClass('hiddenText');
			$('#SB011Boards span').css('transition', 'all .5s 0s');
			$('#SB011 .syllaboardTile').hide();
			$('#SB011Word').html(htmlString);
			$('#SB011 .syllaboardTile').hide();
			//$('#SB011Boards span').addClass('hiddenText');
			//$('#SB011Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB011()');
			break;
		case "SB012":
			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var vowelCount = 0;
			var underlineCount = 0;
			var htmlString2 = '<div id ="SB012Tile1" class="syllaboardTile syllaboardTileHidden"><div class="syllaboardTileContent hiddenText" id="SB012TileContent1">';
			var sylCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '~' || currChar == '|' || currChar == '-') {
					switch (currChar) {
						case '/':
							vowelCount++;
							underlineCount++;
							htmlString2 += '<span id="SB012v' + vowelCount + '" class="SB012Vowel SB012u' + underlineCount + ' hiddenText underline hiddenUnderline">';
							break;

						case '~':
							vowelCount++;
							htmlString2 += '<span id="SB012v' + vowelCount + '" class="SB012Vowel hiddenText">';
							break;

						case '|':
							//htmlString += '</span>';
							htmlString2 += '</span>';
							break;

						case '-':
							sylCount++;
							htmlString2 += '</div></div><div id ="SB012Tile' + sylCount + '" class="syllaboardTile syllaboardTileHidden"><div class="syllaboardTileContent hiddenText" id="SB012TileContent' + sylCount + '">';
							break;
					}
				} else {
					htmlString += currChar;
					htmlString2 += currChar;
				}
			}
			htmlString2 += '</div></div>';
			$('#SB012Word').addClass('hiddenText');
			$('#SB012Word').css('transition', 'all .5s');
			$('#SB012Word').html(htmlString);
			$('#SB012Boards').html(htmlString2);
			$('#SB012Word').removeClass('hiddenText');
			setUpStep('SB012()');
			break;
		/*var parseText = lessonData.pages[pageNum].words[0];
		var htmlString = '';
		var htmlString2 = '';
		var syllaDiv = '<div class="syllaboardHolder">';
		var sylCount = 1;
		inVowel = false;
		vowelCount = 0;
		for (i = 0; i < parseText.length; i++) {
			if (parseText.charAt(i) == '/') {
				if (inVowel) {
					inVowel = false;
					htmlString += '</span>';
					htmlString2 += '</span>';
					if (i < parseText.length - 1) {
						htmlString2 += '<span class="SB012Consonant">';
						inWord = true;
					}
				} else {
					inVowel = true;
					if (inWord) {
						htmlString2 += '</span>';
						inWord = false;
					}
					vowelCount++;
					htmlString += '<span class="SB012Vowel">';
					htmlString2 += '<span id="SB012v' + vowelCount + '" class="SB012Vowel">';
				}

			} else {
				if (parseText.charAt(i) != '-') {

					if (htmlString.length < 1) {
						inWord = true;
						htmlString += '<span class="SB012Consonant">';
					}


					if (htmlString2.length < 1) {
						inWord = true;
						htmlString2 += '<span class="SB012Consonant">';
					}

					htmlString += parseText.charAt(i);
					if (inVowel) {
						htmlString2 += parseText.charAt(i);
					} else {
						htmlString2 += parseText.charAt(i);
					}
				} else {
					syllaDiv += '<div id ="SB012Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB012TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
					htmlString2 = '';
					sylCount++;
				}
			}
		}
		if (parseText.charAt(parseText.length - 1) != '/') {
			htmlString += '</span>';
		}
		syllaDiv += '<div id ="SB012Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB012TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
		$('#SB012Boards').html(syllaDiv);
		$('#SB012Boards span').addClass('hiddenText');
		$('#SB012Boards span').css('transition', 'all .5s 0s');
		$('#SB012 .syllaboardTile').hide();
		$('#SB012Word').html(htmlString);
		$('#SB012 .syllaboardTile').hide();
		$('#SB012Boards span').addClass('hiddenText');
		$('#SB012Boards span').css('transition', 'all .5s 0s');
		setUpStep('SB012()');
		break;*/
		case "SB013":
			//build word vars with for loop
			$('#SB013 .letterConnector').hide();
			var word = lessonData.pages[pageNum].words[0];
			var htmlString1 = '';
			var sylCount = 1;
			var htmlString2 = '<div class="syllaboardHolder"><div id ="SB013Tile1" class="syllaboardTile"><div class="syllaboardTileContent" id="SB013TileContent' + sylCount + '">';
			var vowelCount = 0;
			var vowelPairCount = 0;
			var vceCount = 0;
			var tileCount = 0;
			var inVowel = false;
			var closeVCE = false;
			var closeVP = 0;
			for (i = 0; i < word.length; i++) {
				switch (word[i]) {
					case '*':
						vowelCount++;
						vceCount++;
						inVowel = true;
						htmlString1 += '<span id="SB013v' + (vowelCount) + '" class="SB013Vowel vceStart' + vceCount + '">';
						htmlString2 += '<span class="SB013Vowel hiddenText">';

						break;
					case '~':
						vowelCount++;
						inVowel = true;
						closeVCE = true;
						htmlString1 += '<span id="SB013v' + (vowelCount) + '" class="SB013Vowel vceEnd' + vceCount + '">';
						//htmlString2 += '<span class="SB013Vowel hiddenText">';
						break;
					case '/':
						vowelCount++;
						inVowel = true;
						htmlString1 += '<span id="SB013v' + (vowelCount) + '" class="SB013Vowel syl' + sylCount + '">';
						//htmlString2 += '<span class="SB013Vowel hiddenText">';
						break;
					case '-':
						sylCount++;
						htmlString2 += '</div></div><div id ="SB013Tile' + sylCount + '" class="syllaboardTile">' + '<div class="syllaboardTileContent" id="SB013TileContent' + sylCount + '">';

						break;
					case '_':
						vowelPairCount++;
						htmlString1 += '<span id="SB013vp' + (vowelPairCount) + '" class="SB013VowelPair syl' + sylCount + '">';
						htmlString2 += '<span class="SB013Vowel">';
						closeVP = 1;
						break;
					case '|':
						htmlString1 += '</span>';

						if (closeVP == 2) {
							htmlString2 += '</span>';
							closeVP = 0;
						}
						if (closeVP == 1) {
							closeVP++;
						}
						if (closeVCE) {
							htmlString2 += '</span>';
							closeVCE = false;
						}

						inVowel = false;
						break;
					default:
						htmlString1 += word[i];
						htmlString2 += '<span class="SB013Consonant hiddenText">' + word[i] + '</span>';
						//htmlString2 += word[i];
						break;

				}
			}

			$('#SB013Word').html(htmlString1);
			htmlString2 += '</div></div>';
			$('#SB013Boards').html(htmlString2);
			$('#SB013Boards span').addClass('hiddenText');
			$('#SB013Boards').css('opacity', '0');
			$('#SB013Boards span').css('transition', 'all .25s 0s');
			setUpStep('SB013()');
			break;
		case "SB014":
			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/' || parseText.charAt(i) == '|' || parseText.charAt(i) == '*') {
					switch (parseText.charAt(i)) {
						case '|':
							inVowel = false;
							htmlString += '</span>';
							htmlString2 += '</span>';
							break;
						case '/':
							inVowel = true;
							htmlString += '<span class="SB014VowelWrap">';
							htmlString2 += '<span class="SB014Vowel">';
							break;
						case '*':
							htmlString += '<span class="SB014Suffix">';
							htmlString2 += '<span class="SB014Suffix">';
							break;
					}

				} else {
					if (parseText.charAt(i) != '-') {
						if (inVowel) {
							htmlString += '<span class="SB014Vowel">';
							vowelCount++;
						}
						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString += '</span>';
						}
						htmlString2 += parseText.charAt(i);

					} else {
						syllaDiv += '<div id ="SB014Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB014TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			syllaDiv += '<div id ="SB014Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB014TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
			$('#SB014Boards').html(syllaDiv);
			$('#SB014Boards .syllaboardTileContent').addClass('SB014hiddenText');
			$('#SB014Boards .syllaboardTileContent .SB014Suffix').addClass('SB014hiddenText');
			$('#SB014Boards .syllaboardTileContent .SB014Suffix').css('transition', 'all .5s 0s');
			$('#SB014Boards .syllaboardTileContent').css('transition', 'all .5s 0s');
			$('#SB014 .syllaboardTile').hide();
			$('#SB014Word').html(htmlString);
			setUpStep('SB014()');
			break;
		case "SB015":
			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/' || parseText.charAt(i) == '|' || parseText.charAt(i) == '*') {
					switch (parseText.charAt(i)) {
						case '|':
							htmlString += '</span>';
							htmlString2 += '</span>';
							break;
						case '/':
							vowelCount++;
							htmlString += '<span class="SB015Vowel">';
							htmlString2 += '<span class="SB015Vowel">';
							break;
						case '*':
							htmlString += '<span class="SB015Suffix">';
							htmlString2 += '<span class="SB015Suffix">';
							break;
					}

				} else {
					if (parseText.charAt(i) != '-') {
						htmlString += parseText.charAt(i);
						htmlString2 += parseText.charAt(i);

					} else {
						syllaDiv += '<div id ="SB015Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB015TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			syllaDiv += '<div id ="SB015Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB015TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
			$('#SB015Boards').html(syllaDiv);
			$('#SB015Boards .syllaboardTileContent').addClass('SB015hiddenText');
			$('#SB015Boards .syllaboardTileContent .SB015Suffix').addClass('SB015hiddenText');
			$('#SB015Boards .syllaboardTileContent .SB015Suffix').css('transition', 'all .5s 0s');
			$('#SB015Boards .syllaboardTileContent .SB015Vowel').addClass('SB015hiddenText');
			$('#SB015Boards .syllaboardTileContent .SB015Vowel').css('transition', 'all .5s 0s');
			$('#SB015Boards .syllaboardTileContent').css('transition', 'all .5s 0s');
			$('#SB015 .syllaboardTile').hide();
			$('#SB015Word').html(htmlString);
			setUpStep('SB015()');
			break;
		case "SB016":
			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/' || parseText.charAt(i) == '|' || parseText.charAt(i) == '*') {
					switch (parseText.charAt(i)) {
						case '|':
							htmlString += '</span>';
							htmlString2 += '</span>';
							break;
						case '/':
							vowelCount++;
							htmlString += '<span class="SB016Vowel">';
							htmlString2 += '<span class="SB016Vowel">';
							break;
						case '*':
							htmlString += '<span class="SB016Suffix">';
							htmlString2 += '<span class="SB016Suffix">';
							break;
					}

				} else {
					if (parseText.charAt(i) != '-') {
						htmlString += parseText.charAt(i);
						htmlString2 += parseText.charAt(i);

					} else {
						syllaDiv += '<div id ="SB016Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB016TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			syllaDiv += '<div id ="SB016Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB016TileContent' + sylCount + '">' + htmlString2 + '</div></div></div>';
			$('#SB016Boards').html(syllaDiv);
			$('#SB016Boards .syllaboardTileContent').addClass('SB016hiddenText');
			$('#SB016Boards .syllaboardTileContent .SB016Suffix').addClass('SB016hiddenText');
			$('#SB016Boards .syllaboardTileContent .SB016Suffix').css('transition', 'all .5s 0s');
			$('#SB016Boards .syllaboardTileContent .SB016Vowel').addClass('SB016hiddenText');
			$('#SB016Boards .syllaboardTileContent .SB016Vowel').css('transition', 'all .5s 0s');
			$('#SB016Boards .syllaboardTileContent').css('transition', 'all .5s 0s');
			$('#SB016 .syllaboardTile').hide();
			$('#SB016Word').html(htmlString);
			setUpStep('SB016()');
			break;

		case "SB017":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="SB017Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB017v' + vowelCount + '" class="SB017Vowel">';
						htmlString2 += '<span class="SB017Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB017Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB017Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="SB017Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB017TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB017Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB017TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB017Boards').html(syllaDiv);
			$('#SB017Boards span').addClass('hiddenText');
			$('#SB017Boards span').css('transition', 'all .5s 0s');
			$('#SB017 .syllaboardTile').hide();
			$('#SB017Word').html(htmlString);
			$('#SB017 .syllaboardTile').hide();
			$('#SB017Boards span').addClass('hiddenText');
			$('#SB017Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB017()');
			break;

		case "SB018":
			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="SB018Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB018v' + vowelCount + '" class="SB018Vowel">';
						htmlString2 += '<span class="SB018Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB018Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB018Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="SB018Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB018TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB018Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB018TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB018Boards').html(syllaDiv);
			$('#SB018Boards span').addClass('hiddenText');
			$('#SB018Boards span').css('transition', 'all .5s 0s');
			$('#SB018 .syllaboardTile').hide();
			$('#SB018Word').html(htmlString);
			$('#SB018 .syllaboardTile').hide();
			$('#SB018Boards span').addClass('hiddenText');
			$('#SB018Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB018()');
			break;

		case "SB020":
			var htmlString = '';
			var sylCount = 1;
			var vowel = false;
			htmlString = '<div id="SB020Word" class="syllaboardWord">Temp Word</div>';
			htmlString += '<div class="syllaboardHolder"><div id ="SB020Tile1" class="syllaboardTile"><div class="syllaboardTileContent" id="SB020TileContent1">';

			var word = lessonData.pages[pageNum].words[0];
			var tempWord = '';
			for (i = 0; i < word.length; i++) {
				currChar = word.charAt(i);
				switch (currChar) {
					case '-':
						sylCount++;
						htmlString += '</div></div></div><div class="syllaboardHolder"><div id ="SB020Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB020TileContent' + sylCount + '">';
						break;
					case '_':
						htmlString += '<span class="underlineText">';
						break;
					case '|':
						htmlString += '</span>';
					case '/':
						if (!vowel) {
							htmlString += '<span class="SB020Vowel">';
						} else {
							htmlString += '</span>';
						}
						vowel = !vowel;
						break;
					default:
						htmlString += currChar;
						tempWord += currChar;
						break;
				}
			}
			htmlString += '</div></div></div>';
			$('#SB020Boards').html(htmlString);
			$('#SB020Word').html(tempWord);
			//$('#SB020 .syllaboardTile').css('opacity', .25);
			//$('#SB020 .syllaboardTile').css('opacity', 0);
			if (lessonData.pages[pageNum].fadeBoards == 'true') {
				$('#SB020Word').css('opacity', '0');
			} else {
				$('#SB020Word').css('display', 'none');
			}

			$('#SB020 .syllaboardTileContent').css('opacity', 0);
			$('#SB020 .syllaboardTile').css('transition', 'all .5s 0s');
			$('#SB020 .syllaboardTileContent').css('transition', 'all .5s 0s');


			setUpStep('SB020()');
			break;

		case "LT010":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}


					htmlString += '<div  class="letterTileBack">';
					if (currChar == '*') {
						htmlString += '<div  id="LT010Tile' + charCount + '" class="letterTile letterToHide">';
					} else {
						htmlString += '<div  id="LT010Tile' + charCount + '" class="letterTile">';
					}

					if (currChar == '-') {
						htmlString += '<div id="LT010Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="LT010Content' + charCount + '" class="letterTileContent">';
						//can add vowel
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			$('#LT010').html(htmlString);
			setUpStep('LT010()');
			break;

		case "SB004":
			//build word vars with for loop
			var word = lessonData.pages[pageNum].words[0];
			var syl = []; //single syllable array
			var syls = []; //array of syllables
			var vowels = []; //array of vowels
			var vowelString = ''; //string to hold vowels
			var vowel = false;
			var schwa = false;
			var currChar;
			for (i = 0; i < word.length; i++) {
				currChar = word.charAt(i);
				if (currChar != '/' && currChar != '-' && currChar != '*') {
					if (vowel) {
						if (schwa) {
							syl.push({
								char: currChar,
								type: "s"
							});
						} else {
							syl.push({
								char: currChar,
								type: "v"
							});
						}
						vowelString += currChar;
					} else {
						syl.push({
							char: currChar,
							type: "c"
						});
					}
				} else {
					if (currChar == '-') {
						syls.push(syl);
						syl = [];
					}
					if (currChar == '/') {
						//sylString += '/';

						schwa = false;

						vowel = !vowel;
						if (!vowel) {
							vowels.push(vowelString);
							vowelString = '';
						}
					}

					if (currChar == '*') {
						//sylString += '/';
						vowel = !vowel;
						schwa = true;
						if (!vowel) {
							vowels.push(vowelString);
							vowelString = '';
						}
					}
				}

			}
			syls.push(syl);
			var vowelCount = 0;
			$('#SB004Word').html('');
			$('#SB004Boards').html('');
			for (i = 0; i < syls.length; i++) {
				var tempSyl = '';
				for (j = 0; j < syls[i].length; j++) {
					if (syls[i][j].type == 'c') {
						var tempChar = '<span  class="SB004Consonant">' + syls[i][j].char + '</span>';
					}
					if (syls[i][j].type == 'v') {
						var tempChar = '<span id="SB004v' + (i + 1) + '" class="SB004Vowel">' + syls[i][j].char + '</span>';
					}
					if (syls[i][j].type == 's') {
						var tempChar = '<span id="SB004v' + (i + 1) + '" class="SB004Schwa">' + syls[i][j].char + '</span>';
					}
					$('#SB004Word').append(tempChar);
					tempSyl += tempChar;
				}
				$('#SB004Boards').append('<div class="syllaboardHolder"><div id ="SB004Tile' + (i + 1) + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB004TileContent' + (i + 1) + '">' + tempSyl + '</div></div></div>');
				$('#SB004 .syllaboardTile').hide();
			}
			$('#SB004Boards span').addClass('hiddenText');
			$('#SB004Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB004()');
			break;
		case "MI003":
			//$('#menuBarCenter').html('Template MI002:put a real title here later');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI003Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var inSchwa = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (currChar == '/' || currChar == '*') {
							inVowel = !inVowel;
							if (currChar == '*') {
								inSchwa = !inSchwa;
							}
						} else {
							htmlString += '</span><span class="wordPartsSyllable">'
						}

					} else {
						htmlString += '<span class="wordPartsLetter">';

						if (inVowel) {
							if (inSchwa) {
								htmlString += '<div class="vowelSchwaCombo"><div class="wordPartsSchwa"></div><div class="wordPartsVowel">';
							} else {
								htmlString += '<div class="wordPartsVowel">';
							}
						}
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (inVowel && lessonData.pages[pageNum].words[i].charAt(j + 1) == '/') {
							if (inSchwa) {
								inSchwa = false;
								htmlString += '</div>';
							}
							htmlString += '</div>';
						}
						htmlString += '</span>';
					}

				}
				$('#MI003Word' + (i + 1)).html(htmlString);
			}

			$('.wordPartsSyllable').addClass('wordsNoStroke');
			$('.wordPartsVowel').addClass('vowelNoStroke');
			$('.wordPartsSchwa').addClass('schwaNoStroke');
			setUpStep('MI003()');
			break;

		case "WS009":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS009Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS009Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS009Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS009Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS009Title1" class="syllablesTableText" colspan="' + 2 + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS009Title2" class="syllablesTableText" colspan="' + 2 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';



			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[2].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[2][i] + '</td>';
			}
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS009Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				htmlString += '<td id="WS009Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS009Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS009Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS009Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS009SchwaCount' + (i + 1) + '" class="syllableTablesCell"><span class="schwaCount hidden">' + lessonData.pages[pageNum].words[i].schwa + '</span></td>';
				htmlString += '</tr>';


			}
			$('#WS009Table').append(htmlString);
			setUpStep('WS009()');
			break;

		case "WS010":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS010Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS010Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS010Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS010Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS010Title1" class="syllablesTableText" colspan="' + 2 + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS010Title2" class="syllablesTableText" colspan="' + 2 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS010Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';
				htmlString += '<td id="WS010Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS010Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS010Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS010Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '</tr>';


			}
			$('#WS010Table').append(htmlString);
			setUpStep('WS010()');
			break;

		case "WS012":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS012Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS012Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS012Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS012Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS012Title1" class="syllablesTableText" colspan="' + 3 + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS012Title2" class="syllablesTableText" colspan="' + 2 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';



			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}

			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS012Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				htmlString += '<td id="WS012Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS012Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS012Word' + (i + 1) + 'Col1Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS012Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS012Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '</tr>';


			}
			$('#WS012Table').append(htmlString);
			setUpStep('WS012()');
			break;

		case "WS013":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS013Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS013Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS013Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS013Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS013Title1" class="syllablesTableText" colspan="' + 3 + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS013Title2" class="syllablesTableText" colspan="' + 3 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';



			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[2].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[2][i] + '</td>';
			}
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS013Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				htmlString += '<td id="WS013Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS013Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS013Word' + (i + 1) + 'Col1Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS013Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS013Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS013Word' + (i + 1) + 'Col2Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS013SchwaCount' + (i + 1) + '" class="syllableTablesCell"><span class="schwaCount hidden">' + lessonData.pages[pageNum].words[i].schwa + '</span></td>';
				htmlString += '</tr>';


			}
			$('#WS013Table').append(htmlString);
			setUpStep('WS013()');
			break;


		case "WS014":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS014Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS014Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS014Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS014Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS014Title1" class="syllablesTableText howMany" " rowspan="2">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS014Title1" class="syllablesTableText fatHead" colspan="' + 3 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS014Title2" class="syllablesTableText fatHead" colspan="' + 3 + '">' + lessonData.pages[pageNum].headers[2] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';



			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}
			htmlString += '<td></td>';
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';

				htmlString += '<td class="bulletCell"><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS014Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';


				htmlString += '<td class="syllableTablesCell">';
				htmlString += '<div id="WS014Word' + (i + 1) + 'Circ1" class="circleNum';
				if (lessonData.pages[pageNum].words[i].syls == '1') {
					htmlString += ' circleNumSelected hiddenCirc';
				}
				htmlString += '">1</div>';
				htmlString += '<div id="WS014Word' + (i + 1) + 'Circ2" class="circleNum';
				if (lessonData.pages[pageNum].words[i].syls == '2') {
					htmlString += ' circleNumSelected hiddenCirc';
				}
				htmlString += '">2</div>';
				htmlString += '</td>';
				htmlString += '<td></td>';

				htmlString += '<td id="WS014Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS014Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS014Word' + (i + 1) + 'Col1Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1 == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS014Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS014Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS014Word' + (i + 1) + 'Col2Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2 == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '</tr>';


			}
			$('#WS014Table').append(htmlString);
			setUpStep('WS014()');
			break;

		case "LT011":
			//BEGIN NEW CV CODE
			var htmlString = '';
			for (j = 0; j < lessonData.pages[pageNum].words.length; j++) {
				var parseText = lessonData.pages[pageNum].words[j];
				var charCount = 1;
				var consCount = 0;
				var firstChar = true;
				var vowelScheme = 'Red';

				for (i = 0; i < parseText.length; i++) {
					var currChar = parseText.charAt(i);
					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (firstChar) {
							firstChar = false;
						} else {
							htmlString += '</div></div></div>';
						}



						if (currChar == '*') {
							htmlString += '<div  id="LT011E' + (j + 1) + '"  class="letterTileBack hiddenTile">';
							htmlString += '<div  id="LT011Word' + (j + 1) + 'Tile' + charCount + '" class="letterTile letterToHide">';
						} else {
							htmlString += '<div  class="letterTileBack">';
							htmlString += '<div  id="LT011Word' + (j + 1) + 'Tile' + charCount + '" class="letterTile">';
						}

						if (currChar == '-') {
							htmlString += '<div id="LT011Word' + (j + 1) + 'Content' + charCount + '" class="letterTileContent">';
						} else {
							htmlString += '<div id="LT011Word' + (j + 1) + 'Content' + charCount + '" class="letterTileContent letterTileVowel">';
							//can add vowel
						}
						charCount++;
					} else {
						htmlString += currChar;

					}

				}

				htmlString += '</div></div></div><br />';
			}
			//END
			$('#LT011').html(htmlString);
			setUpStep('LT011()');
			break;
		case "CT001":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}
					htmlColorString += '<div class="letterTileBack">';
					var tileColor;
					if (currChar == '/') {
						tileColor = vowelScheme;
					} else {
						tileColor = colorScheme[consCount];
						if (consCount < colorScheme.length - 1) {
							consCount++;
						} else {
							consCount = 0;
						}
					}
					htmlColorString += '<div id="CT001Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
					htmlColorString += '</div>';

					htmlString += '<div  class="letterTileBack">';
					htmlString += '<div  id="CT001Tile' + charCount + '" class="letterTile letterTileHidden">';
					if (currChar == '-') {
						htmlString += '<div id="CT001Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT001Content' + charCount + '" class="letterTileContent letterTileVowel">';
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			$('#CT001LetterTiles').html(htmlString);
			$('#CT001ColorTiles').html(htmlColorString);
			$('#CT001Color1').fadeIn(250);
			setUpStep('CT001()');
			break;
		case "CT002":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var firstChar = true;
			var colorCount = 0;
			var htmlString = '';
			var tileColors = ['Green', 'Blue', 'Yellow', 'Purple', 'Orange'];
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				htmlString += '<div class="letterTileBack">';
				if (currChar == '-') {
					tileColor = tileColors[colorCount];
					if (colorCount < tileColors.length - 1) {
						colorCount++;
					} else {
						colorCount = 0;
					}
					htmlString += '<div id="CT002Color' + (i + 1) + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';

				} else {
					htmlString += '<div id="CT002Color' + (i + 1) + '" class="letterTile letterTileRed letterTileHidden"> </div>';

				}
				htmlString += '</div>';
			}
			$('#CT002ColorTiles').html(htmlString);
			$('#CT002Color1').fadeIn(250);
			setUpStep('CT002()');
			break;
		case "CT003":
			$('#CT003 .letterConnector').hide();
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var linkCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}
					if (currChar == '*') {
						htmlColorString += '<div class="letterTileBack hiddenTileSpacer"></div>';
					} else {
						htmlColorString += '<div class="letterTileBack">';
						var tileColor;
						if (currChar == '/') {
							tileColor = vowelScheme;
						} else {
							tileColor = colorScheme[consCount];
							if (consCount < colorScheme.length - 1) {
								consCount++;
							} else {
								consCount = 0;
							}
						}
						htmlColorString += '<div id="CT003Color' + charCount + '" class="letterTile letterTile' + tileColor + ' hidden"> </div>';
						htmlColorString += '</div>';
					}

					htmlString += '<div  class="letterTileBack">';

					if (currChar == '/' || currChar == '*') {
						htmlString += '<div class="tileBackUnderline"></div>';
					}
					htmlString += '<div  id="CT003Tile' + charCount + '" class="letterTile hidden">';
					if (currChar == '-') {
						htmlString += '<div id="CT003Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT003Link' + linkCount + '" class="letterTileContent letterTileVowel">';
						linkCount++;
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';

			$('#CT003LetterTiles').html(htmlString);
			$('#CT003ColorTiles').html(htmlColorString);





			$('#CT003Color1').fadeIn(250);
			setUpStep('CT003()');
			break;



		case "CT004":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var digraph = 0;
			var digraphOn = false;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*' || currChar == '~' || parseInt(currChar) > 0) {
					if (firstChar) {
						firstChar = false;
					} else {
						if (digraphOn) {
							htmlString += '</div>';
							digraphOn = false;
						}

						htmlString += '</div></div></div>';
					}

					htmlColorString += '<div class="letterTileBack">';
					var tileColor;
					if (currChar == '/' || currChar == '~') {
						tileColor = vowelScheme;
					} else {
						tileColor = colorScheme[consCount];
						if (consCount < colorScheme.length - 1) {
							consCount++;
						} else {
							consCount = 0;
						}
					}
					htmlColorString += '<div id="CT004Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
					htmlColorString += '</div>';
					if (currChar == '*' || currChar == '~' || parseInt(currChar) > 0) {
						digraphOn = true;
						digraph++;
						if (parseInt(currChar) > 0) {
							htmlString += '<div id="CT004DG' + parseInt(currChar) + '"  class="underlineLetterTile hideUnderline">';

						} else {
							htmlString += '<div id="CT004DG' + digraph + '"  class="underlineLetterTile hideUnderline">';

						}
					}
					if (currChar == '-' || currChar == '/') {
						digraphOn = true;
						htmlString += '<div  class="noUnderlineLetterTile">';
					}
					htmlString += '<div  class="letterTileBack">';
					htmlString += '<div  id="CT004Tile' + charCount + '" class="letterTile letterTileHidden">';
					if (currChar == '-' || currChar == '*' || parseInt(currChar) > 0) {
						htmlString += '<div id="CT004Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT004Content' + charCount + '" class="letterTileContent letterTileVowel">';
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			$('#CT004LetterTiles').html(htmlString);
			$('#CT004ColorTiles').html(htmlColorString);
			$('#CT004Color1').fadeIn(250);
			setUpStep('CT004()');
			break;
		case "CT005":
			//$('#CT005 .letterConnector').hide();
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var linkCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}
					if (currChar == '*') {
						htmlColorString += '<div class="letterTileBack hiddenTileSpacer"></div>';
					} else {
						htmlColorString += '<div class="letterTileBack">';
						var tileColor;
						if (currChar == '/') {
							tileColor = vowelScheme;
						} else {
							tileColor = colorScheme[consCount];
							if (consCount < colorScheme.length - 1) {
								consCount++;
							} else {
								consCount = 0;
							}
						}
						htmlColorString += '<div id="CT005Color' + charCount + '" class="letterTile letterTile' + tileColor + ' hidden"> </div>';
						htmlColorString += '</div>';
					}

					htmlString += '<div  class="letterTileBack">';

					if (currChar == '/' || currChar == '*') {
						htmlString += '<div class="tileBackUnderline"></div>';
					}
					htmlString += '<div  id="CT005Tile' + charCount + '" class="letterTile hidden">';
					if (currChar == '-') {
						htmlString += '<div id="CT005Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT005Link' + linkCount + '" class="letterTileContent letterTileVowel">';
						linkCount++;
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';

			$('#CT005LetterTiles').html(htmlString);
			$('#CT005ColorTiles').html(htmlColorString);





			$('#CT005Color1').fadeIn(250);
			setUpStep('CT005()');
			break;



		case "CT006":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var colorArray = lessonData.pages[pageNum].colors[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var underlineNum = 0;
			var circleNum = 0;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}


					htmlString += '<div id="CT006LetterBack' + (charCount) + '" class="letterTileBack letterTileWide">';
					htmlString += '<div  id="CT006Tile' + charCount + '" class="letterTile letterTileWide letterTileTransparent">';
					if (currChar == '-') {
						htmlString += '<div id="CT006Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT006Content' + charCount + '" class="letterTileContent letterTileVowel">';
					}
					charCount++;
				} else {
					if (currChar == '_' || currChar == '(' || currChar == '|') {
						switch (currChar) {
							case '_':
								if (!firstChar) {
									htmlString += '</div></div></div>';
								}

								underlineNum++;
								htmlString += '<div id="CT006Underline' + underlineNum + '" class="underline underlineHidden"><div class="stroke"></div>';
								firstChar = true;
								break;
							case '(':
								if (!firstChar) {
									htmlString += '</div></div></div>';
								}

								circleNum++;
								htmlString += '<div id="CT006Circle' + circleNum + '" class="circle circleHidden">';
								firstChar = true;
								break;
							case '|':
								htmlString += '</div></div></div>';
								htmlString += '</div>';
								firstChar = true;
								break;
						}
					} else {
						htmlString += currChar;
					}

				}

			}

			htmlString += '</div></div></div>';

			var colorCount = 0;
			for (i = 0; i < colorArray.length; i++) {
				htmlColorString += '<div id="CT006ColorBack' + (i + 1) + '" class="letterTileBack letterTileWide';
				/*if (colorArray[i].span == '2') {
					htmlColorString += ' letterTileBack2x';
				}*/
				htmlColorString += '">';
				if (colorArray[i].color == 'Blank') {
					htmlColorString += '<div class="letterTile letterTileBlank"> </div>';
				} else {
					colorCount++;
					htmlColorString += '<div id="CT006Color' + colorCount + '" class="letterTile letterTile' + colorArray[i].color + ' colorTile letterTileTransparent"> </div>';
				}
				htmlColorString += '</div>';
			}

			//END
			$('#CT006LetterTiles').html(htmlString);
			$('#CT006ColorTiles').html(htmlColorString);

			var delay = 100;
			setTimeout(function () {
				var currLetter = 1;
				for (i = 0; i < colorArray.length; i++) {
					var blockWidth = $('#CT006LetterBack' + currLetter).width();
					if (colorArray[i].span == 2) {
						currLetter++;
						blockWidth += $('#CT006LetterBack' + currLetter).width();
					}
					currLetter++;
					$('#CT006ColorBack' + (i + 1)).width(blockWidth);
					$('#CT006ColorBack' + (i + 1)).css('text-align', 'center');
				}
				var lettersWidth = $('#CT006LetterTiles').width();
				var colorsWidth = $('#CT006ColorTiles').width();
				var shift = (colorsWidth - lettersWidth) / 2;
				$('#CT006ColorTiles').css('left', shift + 'px');
				$('#CT006Color1').removeClass('letterTileTransparent');
				setUpStep('CT006()');
			}, delay);



			break;
		case "CT007":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var digraph = 0;
			var digraphOn = false;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*' || currChar == '1' || currChar == '2') {
					if (firstChar) {
						firstChar = false;
					} else {
						if (digraphOn) {
							htmlString += '</div>';
							digraphOn = false;
						}

						htmlString += '</div></div></div>';
					}

					htmlColorString += '<div class="letterTileBack">';
					var tileColor;
					if (currChar == '/') {
						tileColor = vowelScheme;
					} else {
						tileColor = colorScheme[consCount];
						if (consCount < colorScheme.length - 1) {
							consCount++;
						} else {
							consCount = 0;
						}
					}
					htmlColorString += '<div id="CT007Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
					htmlColorString += '</div>';
					if (currChar == '1' || currChar == '2') {
						digraphOn = true;
						digraph++;
						htmlString += '<div id="CT007DG' + digraph + '"  class="underlineLetterTile hideUnderline">';
					}
					htmlString += '<div  class="letterTileBack">';
					htmlString += '<div  id="CT007Tile' + charCount + '" class="letterTile letterTileHidden">';
					if (currChar == '-' || currChar == '*' || currChar == '1' || currChar == '2') {
						htmlString += '<div id="CT007Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT007Content' + charCount + '" class="letterTileContent letterTileVowel">';
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			$('#CT007LetterTiles').html(htmlString);
			$('#CT007ColorTiles').html(htmlColorString);
			$('#CT007Color1').fadeIn(250);
			setUpStep('CT007()');
			break;
		case "CT008":
			$('#CT008 .letterConnector').hide();
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var linkCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}
					if (currChar == '*') {
						htmlColorString += '<div class="letterTileBack hiddenTileSpacer"></div>';
					} else {
						htmlColorString += '<div class="letterTileBack">';
						var tileColor;
						if (currChar == '/') {
							tileColor = vowelScheme;
						} else {
							tileColor = colorScheme[consCount];
							if (consCount < colorScheme.length - 1) {
								consCount++;
							} else {
								consCount = 0;
							}
						}
						htmlColorString += '<div id="CT008Color' + charCount + '" class="letterTile letterTile' + tileColor + ' hidden"> </div>';
						htmlColorString += '</div>';
					}

					htmlString += '<div  class="letterTileBack">';

					if (currChar == '/' || currChar == '*') {
						htmlString += '<div class="tileBackUnderline"></div>';
					}
					htmlString += '<div  id="CT008Tile' + charCount + '" class="letterTile hidden">';
					if (currChar == '-') {
						htmlString += '<div id="CT008Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT008Link' + linkCount + '" class="letterTileContent letterTileVowel">';
						linkCount++;
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';

			$('#CT008LetterTiles').html(htmlString);
			$('#CT008ColorTiles').html(htmlColorString);

			//NOTE: Don't try to move the curled connector until reference objects are visible!!! Display:none reference objects will not return a value for position or offset.

			$('#CT008Color1').fadeIn(250);
			setUpStep('CT008()');
			break;

		case "CT009":
			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			console.log(parseText);
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var underline1 = false;
			var underline2 = false;
			var colorCount = 0;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '1' || currChar == '2' || currChar == '|') {
					if (currChar == '/' || currChar == '-') {
						if (firstChar) {
							firstChar = false;
						} else {
							if (digraphOn) {
								htmlString += '</div>';
								digraphOn = false;
							}

							htmlString += '</div></div></div>';
						}

						htmlColorString += '<div id="CT009ColorBack' + charCount + '" class="letterTileBack letterTileWide">';
						colorCount++;
						var tileColor;
						if (currChar == '/') {
							tileColor = vowelScheme;
						} else {
							tileColor = colorScheme[consCount];
							if (consCount < colorScheme.length - 1) {
								consCount++;
							} else {
								consCount = 0;
							}
						}
						htmlColorString += '<div id="CT009Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileWide colorTile letterTileTransparent"> </div>';

						htmlColorString += '</div>';

						if (underline1) {
							htmlString += '<div id="CT009U1"  class="underlineLetterTile hideUnderline">';
							underline1 = false;
						}
						if (underline2) {
							htmlString += '<div id="CT009U2"  class="underlineLetterTile hideUnderline">';
							underline2 = false;
						}
						htmlString += '<div  id="CT009LetterBack' + charCount + '" class="letterTileBack letterTileWide">';
						htmlString += '<div  id="CT009Tile' + charCount + '" class="letterTile letterTileWide letterTileTransparent">';
						if (currChar == '-' || currChar == '*') {
							htmlString += '<div id="CT009Content' + charCount + '" class="letterTileContent">';
						} else {
							htmlString += '<div id="CT009Content' + charCount + '" class="letterTileContent letterTileVowel">';
						}
						charCount++;
					} else {
						if (currChar == '1') {
							underline1 = true;
						}
						if (currChar == '2') {
							underline2 = true;
						}
						if (currChar == '|') {
							htmlString += '</div>';
						}

					}
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			console.log(htmlString);
			$('#CT009LetterTiles').html(htmlString);
			$('#CT009ColorTiles').html(htmlColorString);
			var currLetter = 1;
			/*for (i = 0; i < colorCount; i++) {
				var blockWidth = $('#CT009LetterBack' + (i + 1)).width();
				$('#CT009ColorBack' + (i + 1)).width(blockWidth);
				$('#CT009ColorBack' + (i + 1)).css('text-align', 'center');
			}*/
			$('#CT009ColorTiles .letterTileTransparent').css('opacity', '1');

			setUpStep('CT009()');

			var delay = 500;
			setTimeout(function () {
				$('#CT009LetterTiles .letterTileTransparent').css('opacity', '1');
				setUpStep('CT009()');
			}, delay);
			break;

		case "CT010":
			//BEGIN NEW CV CODE
			var htmlString = '';
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var vowelScheme = 'Red';

			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}



					if (currChar == '*') {
						htmlString += '<div  id="CT010Tile' + charCount + '" class="letterTileBack"><div id="CT010Arrow" class="arrow"></div>';
						htmlString += '<div  id="CT010Tile' + charCount + '" class="letterTile">';
					} else {
						htmlString += '<div  class="letterTileBack">';
						htmlString += '<div  id="CT010Tile' + charCount + '" class="letterTile">';
					}

					if (currChar == '-') {
						htmlString += '<div id="CT010Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="CT010Content' + charCount + '" class="letterTileContent">';
						//can add vowel
					}
					charCount++;
				} else {
					htmlString += currChar;

				}
			}
			htmlString += '</div></div></div>';
			//END
			$('#CT010').html(htmlString);
			setUpStep('CT010()');
			break;

		case "CT011":
			$('#CT011 .letterConnector').hide();
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var linkCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '_' || currChar == '|') {
					if (currChar == '_') {
						htmlString += '<div class="tileBackUnderline">';
					}
					if (currChar == '|') {
						htmlString += '</div></div></div>';
					}
				} else {

					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (currChar == '*') {
							htmlColorString += '<div class="letterTileBack hiddenTileSpacer">';
						} else {
							htmlColorString += '<div class="letterTileBack">';
							var tileColor;
							if (currChar == '/') {
								tileColor = vowelScheme;
							} else {
								tileColor = colorScheme[consCount];
								if (consCount < colorScheme.length - 1) {
									consCount++;
								} else {
									consCount = 0;
								}
							}
							htmlColorString += '<div id="CT011Color' + charCount + '" class="letterTile letterTile' + tileColor + ' hidden"> </div>';
							htmlColorString += '</div></div>';
						}

						htmlString += '<div  class="letterTileBack">';


						htmlString += '<div  id="CT011Tile' + charCount + '" class="letterTile hidden">';
						if (currChar == '-') {
							htmlString += '<div id="CT011Content' + charCount + '" class="letterTileContent">';
						} else {
							htmlString += '<div id="CT011Link' + linkCount + '" class="letterTileContent letterTileVowel">';
							linkCount++;
						}
						charCount++;
					} else {
						htmlString += currChar;

					}
				}

			}
			//htmlString += '</div>';

			$('#CT011LetterTiles').html(htmlString);
			$('#CT011ColorTiles').html(htmlColorString);


			$('#CT011Color1').fadeIn(250);
			setUpStep('CT011()');
			break;

		case "CT012":

			//BEGIN NEW CV CODE
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
			var vowelScheme = 'Red';
			var htmlColorString = '';
			var htmlString = '';
			var addCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*' || currChar == '1' || currChar == '2') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}
					htmlString += '<div  class="letterTileBack">';
					htmlColorString += '<div class="letterTileBack">';
					var tileColor;
					if (currChar == '/') {
						tileColor = vowelScheme;
					} else {
						tileColor = colorScheme[consCount];
						if (consCount < colorScheme.length - 1) {
							consCount++;
						} else {
							consCount = 0;
						}
					}

					if (currChar == '1' || currChar == '2') {
						htmlString += '<div  id="CT012AddTile' + currChar + '" class="letterTile letterTileHidden">';
						htmlString += '<div id="CT012Content' + charCount + '" class="letterTileContent">';
						htmlColorString += '<div id="CT012AddColor' + currChar + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
						addCount++;
					} else {
						htmlString += '<div  id="CT012Tile' + charCount + '" class="letterTile letterTileHidden">';
						if (currChar == '/') {
							htmlString += '<div id="CT012Content' + charCount + '" class="letterTileContent letterTileVowel">';
						} else {
							htmlString += '<div id="CT012Content' + charCount + '" class="letterTileContent">';
						}

						htmlColorString += '<div id="CT012Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
						charCount++;
					}

					htmlColorString += '</div>';
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END*/
			$('#CT012LetterTiles').html(htmlString);
			$('#CT012ColorTiles').html(htmlColorString);
			$('#CT012Color1').fadeIn(250);
			setUpStep('CT012()');
			break;


		case "LT012":
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var revealCount = 1;
			var consCount = 0;
			var firstChar = true;
			var htmlString = '';
			var linkCount = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*' || currChar == '|') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}


					htmlString += '<div  class="letterTileBack">';

					if (currChar == '*' || currChar == '|') {
						if (currChar == '*') {
							htmlString += '<div  id="LT012Reveal' + revealCount + '" class="letterTile hidden">';
						} else {
							htmlString += '<div  id="LT012Reveal' + revealCount + '" class="letterTile vowel hidden">';
						}
						revealCount++;
					} else {
						htmlString += '<div  id="LT012Tile' + charCount + '" class="letterTile">';
					}
					if (currChar == '/' || currChar == '|') {
						htmlString += '<div id="LT012Content' + charCount + '" class="letterTileContent vowel">';
					} else {
						htmlString += '<div id="LT012Content' + charCount + '" class="letterTileContent">';
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';

			$('#LT012LetterTiles').html(htmlString);



			setUpStep('LT012()');
			break;
		case "LT013":
			$('#LT013Arrow').css('display', 'none');
			$('#LT013End').css('display', 'none');
			var parseText = lessonData.pages[pageNum].words[0];
			var inString = false;
			var htmlString = '';
			var arrows = 1;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);

				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (inString) {
						htmlString += '</div></div></div>';
					}
					inString = true;
					htmlString += '<div class="closedSyllableTileBack">';
					htmlString += '<div class="closedSyllableTile">';
					switch (currChar) {
						case '/':
							htmlString += '<div id="LT013Arrow' + arrows + '" class="closeSyllableArrow"></div>';
							arrows++;
							htmlString += '<div class="closedSyllableTileContent  closedSyllableVowel">';
							break;

						case '-':
							htmlString += '<div class="closedSyllableTileContent">';
							break;

						case '*':
							htmlString += '<div id="LT013End" class="closeSyllableEnd"></div>';
							htmlString += '<div class="closedSyllableTileContent">';
							break;

					}
				} else {
					htmlString += currChar;
				}
			}

			htmlString += '</div></div></div>';
			$('#LT013').html(htmlString);
			setUpStep('LT013()');
			break;
		case "MI004":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI004w' + (i + 1)).html('');
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '/' || currChar == '*') {
						blockCount++;
						spacer = false;
						if (j > 0) {
							htmlString += '</span></span>';
						}
						if (currChar == '/') {
							htmlString += '<span id="MI004w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="begin"><span id="MI004w' + (i + 1) + 'Link1"><div id="MI004Connect' + (i + 1) + '" class="letterConnector"></div>';
						}
						if (currChar == '*') {
							htmlString += '<span id="MI004w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="end"><span id="MI004w' + (i + 1) + 'Link2">';
						}

						if (currChar == '-') {
							htmlString += '<span id="MI004w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter"><span>';
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span>';
				$('#MI004w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI004()');
			break;

		case "MI009":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI009w' + (i + 1)).html('');
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '*' || currChar == '|') {
						blockCount++;
						spacer = false;
						if (currChar == '|') {
							htmlString += '</span>';
						}
						if (currChar == '-') {
							htmlString += '<span id="MI009w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter">';
						}
						if (currChar == '*') {
							htmlString += '<span id="MI009w' + (i + 1) + 'l' + (blockCount) + '" class="markItCircle markItCircleHidden">';
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span>';
				$('#MI009w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI009()');
			break;
		case "MI010":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI010w' + (i + 1)).html('');
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '*' || currChar == '|') {
						blockCount++;
						spacer = false;
						if (currChar == '|') {
							htmlString += '</span>';
						}
						if (currChar == '-') {
							htmlString += '<span id="MI010w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter">';
						}
						if (currChar == '*') {
							htmlString += '<span id="MI010w' + (i + 1) + 'l' + (blockCount) + '" class="markItCircle markItCircleHidden">';
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span>';
				$('#MI010w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI010()');
			break;
		case "MI011":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI011w' + (i + 1)).html('');
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '*' || currChar == '|') {
						blockCount++;
						spacer = false;
						if (currChar == '|') {
							htmlString += '</span>';
						}
						if (currChar == '-') {
							htmlString += '<span id="MI011w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter">';
						}
						if (currChar == '*') {
							htmlString += '<span id="MI011w' + (i + 1) + 'l' + (blockCount) + '" class="markItCircle markItCircleHidden">';
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span>';
				$('#MI011w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI011()');
			break;
		case "MI012":
			//$('#menuBarCenter').html('Template MI012:put a real title here later');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI012Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (currChar == '/') {
							inVowel = !inVowel;
						} else {
							htmlString += '</span><span class="wordPartsSyllable">'
						}

					} else {
						htmlString += '<span class="wordPartsLetter">';

						if (inVowel) {
							htmlString += '<div class="wordPartsVowel">';
						}
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (inVowel && lessonData.pages[pageNum].words[i].charAt(j + 1) == '/') {
							htmlString += '</div>';
						}
						htmlString += '</span>';
					}

				}
				$('#MI012Word' + (i + 1)).html(htmlString);
			}

			$('.wordPartsSyllable').addClass('wordsNoStroke');
			$('.wordPartsVowel').addClass('vowelNoStroke');

			setUpStep('MI012()');
			break;
		case "MI013":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI013w' + (i + 1)).html('');
				var sylCount = 1;
				var htmlString = '<div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
				var blockCount = 0;
				var spacer = false;
				var vceCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '/' || currChar == '*' || currChar == '~') {
						if (currChar == '~') {
							sylCount++;
							htmlString += '</div><div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
						} else {
							blockCount++;
							spacer = false;
							if (j > 0) {
								htmlString += '</span></span>';
							}
							if (currChar == '/') {
								vceCount++;
								htmlString += '<span id="MI013w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="begin"><span id="MI013w' + (i + 1) + 'Link1p' + vceCount + '"><div id="MI013Connect' + (i + 1) + 'p' + vceCount + '" class="letterConnector"></div>';
							}
							if (currChar == '*') {
								htmlString += '<span id="MI013w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="end"><span id="MI013w' + (i + 1) + 'Link2p' + vceCount + '">';
							}

							if (currChar == '-') {
								htmlString += '<span id="MI013w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter"><span>';
							}
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span></div>';
				$('#MI013w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI013()');
			break;
		case "MI014":
			//$('#menuBarCenter').html('Template MI014:put a real title here later');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI014Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-') {
						if (currChar == '/') {
							inVowel = !inVowel;
						} else {
							htmlString += '</span><span class="wordPartsSyllable">'
						}

					} else {
						htmlString += '<span class="wordPartsLetter">';

						if (inVowel) {
							htmlString += '<div class="wordPartsVowel">';
						}
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (inVowel && lessonData.pages[pageNum].words[i].charAt(j + 1) == '/') {
							htmlString += '</div>';
						}
						htmlString += '</span>';
					}

				}
				$('#MI014Word' + (i + 1)).html(htmlString);
			}

			$('.wordPartsSyllable').addClass('wordsNoStroke');
			$('.wordPartsVowel').addClass('vowelNoStroke');

			setUpStep('MI014()');
			break;
		case "MI015":
			//First build table
			var tableString = '<table class="screenTable markIt">';
			if (lessonData.pages[pageNum].words.length == 12) {
				for (i = 0; i < 6; i++) {
					tableString += '<tr>';

					tableString += '<td class="markItNumberShift"><div class="dotBulletNum dotBulletNum1Digit">' + (i + 1) + '</div></td>';
					tableString += '<td class="markItText"><div id="MI015w' + (i + 1) + '" class="markItWord"></div></td>';
					tableString += '<td class="markItMiddleCol">&nbsp;</td>';
					tableString += '<td class="markItNumberShift"><div class="dotBulletNum dotBulletNum1Digit">' + (i + 7) + '</div></td>';
					tableString += '<td class="markItText"><div id="MI015w' + (i + 7) + '" class="markItWord"></div></td>';

					tableString += '</tr>';
				}
			} else {
				for (i = 0; i < 5; i++) {
					tableString += '<tr>';

					tableString += '<td class="markItNumberShift"><div class="dotBulletNum dotBulletNum1Digit">' + (i + 1) + '</div></td>';
					tableString += '<td class="markItText"><div id="MI015w' + (i + 1) + '" class="markItWord"></div></td>';
					tableString += '<td class="markItMiddleCol">&nbsp;</td>';
					tableString += '<td class="markItNumberShift"><div class="dotBulletNum dotBulletNum1Digit">' + (i + 6) + '</div></td>';
					tableString += '<td class="markItText"><div id="MI015w' + (i + 6) + '" class="markItWord"></div></td>';
					tableString += '<td class="markItMiddleCol">&nbsp;</td>';
					tableString += '<td class="markItNumberShift"><div class="dotBulletNum dotBulletNum1Digit">' + (i + 11) + '</div></td>';
					tableString += '<td class="markItText"><div id="MI015w' + (i + 11) + '" class="markItWord"></div></td>';

					tableString += '</tr>';
				}
			}
			$('#MI015').html(tableString);
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI015w' + (i + 1)).html('');
				var sylCount = 0;
				//var htmlString = '<div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				var vceCount = 0;
				var underlineCount = 0;
				var closeVCE = false;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '/' || currChar == '*' || currChar == '~' || currChar == '_' || currChar == '|') {
						if (currChar == '~' || currChar == '_' || currChar == '|') {
							if (currChar == '~') {
								sylCount++;
								htmlString += '</div><div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
							}
							if (currChar == '_') {
								underlineCount++;
								if (j > 0) {
									htmlString += '<span class="markItTextSpacerSpan"></span>';
								}
								htmlString += '<span id="MI015w' + (i + 1) + 'u' + underlineCount + '" class="spanUnderline underlineHidden">';
								spacer = false;
							}

							if (currChar == '|') {
								htmlString += '</span>';
							}
						} else {
							blockCount++;
							spacer = false;
							if (j > 0) {
								htmlString += '</span></span>';
							}

							if (currChar == '/') {
								vceCount++;
								htmlString += '<span class="markItTextHalfSpacerSpan"></span><span id="MI015w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="begin"><span id="MI015w' + (i + 1) + 'Link1p' + vceCount + '"><div id="MI015Connect' + (i + 1) + 'p' + vceCount + '" class="letterConnector"></div>';
							}
							if (currChar == '*') {
								closeVCE = true;
								htmlString += '<span id="MI015w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="end"><span id="MI015w' + (i + 1) + 'Link2p' + vceCount + '">';
							}

							if (currChar == '-') {
								htmlString += '<span id="MI015w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter"><span>';
							}
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (closeVCE) {
							htmlString += '</span></span>';
							closeVCE = false;
						}
					}

				}
				if (closeVCE) {
					htmlString += '</span></span>';
					closeVCE = false;
				}
				htmlString += '</div>';
				$('#MI015w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI015()');
			break;
		case "MI016":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI016w' + (i + 1)).html('');
				var sylCount = 0;
				var htmlString = '';
				var blockCount = 0;
				var spacer = false;
				var htmlString = '';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '|') {

						if (currChar == '/') {
							htmlString += '<span id="MI016w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter">';
							blockCount++;
						}
						if (currChar == '|') {
							htmlString += '</span>'
						}
					} else {

						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}

				$('#MI016w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI016()');
			break;
		case "SB005":
			//build word vars with for loop
			$('#SB005 .letterConnector').hide();
			var word = lessonData.pages[pageNum].words[0];
			var syl = []; //single syllable array
			var syls = []; //array of syllables
			var vowels = []; //array of vowels
			var vowelString = ''; //string to hold vowels
			var vowel = false;
			var vceStart = false;
			var vceEnd = false;
			var currChar;
			for (i = 0; i < word.length; i++) {
				currChar = word.charAt(i);
				if (currChar != '/' && currChar != '-' && currChar != '*' && currChar != '~' && currChar != '|') {
					if (vowel) {
						if (vceStart || vceEnd) {
							if (vceStart) {
								syl.push({
									char: currChar,
									type: "vs"
								});
							} else {
								syl.push({
									char: currChar,
									type: "ve"
								});
							}
						} else {
							//syl.push({char:currChar,type:"v"});
						}
						vowelString += currChar;
					} else {
						syl.push({
							char: currChar,
							type: "c"
						});
					}
				} else {
					if (currChar == '-') {
						syls.push(syl);
						syl = [];
					}
					if (currChar == '/') {
						vowel = true;
					}
					if (currChar == '*') {
						vowel = true;
						vceStart = true;
					}
					if (currChar == '~') {
						vowel = true;
						vceEnd = true;
					}
					if (currChar == '|') {
						vowels.push(vowelString);
						if (!vceStart && !vceEnd) {
							syl.push({
								char: vowelString,
								type: "v"
							});
						}
						vowelString = '';
						vowel = false;
						vceStart = false;
						vceEnd = false;
					}
				}

			}
			syls.push(syl);
			var vowelCount = 0;
			$('#SB005Word').html('');
			$('#SB005Boards').html('');
			console.log(syls);
			for (i = 0; i < syls.length; i++) {
				var inVCE = false;
				var tempSyl = '';
				for (j = 0; j < syls[i].length; j++) {
					if (syls[i][j].type == 'c') {
						if (inVCE) {
							var tempChar = '<span  class="SB005Consonant inVCE">' + syls[i][j].char + '</span>';
						} else {
							var tempChar = '<span  class="SB005Consonant">' + syls[i][j].char + '</span>';
						}
					} else {
						vowelCount++;
						if (syls[i][j].type == 'v') {
							var tempChar = '<span id="SB005v' + (vowelCount) + '" class="SB005Vowel syl' + (i + 1) + '">' + syls[i][j].char + '</span>';
						} else {
							if (syls[i][j].type == 'vs') {
								inVCE = true;
								var tempChar = '<span id="SB005v' + (vowelCount) + '" class="SB005Vowel vceStart' + (i + 1) + '">' + syls[i][j].char + '</span>';
							} else {
								inVCE = false;
								var tempChar = '<span id="SB005v' + (vowelCount) + '" class="SB005Vowel vceEnd' + (i + 1) + '">' + syls[i][j].char + '</span>';
							}
						}
					}
					$('#SB005Word').append(tempChar);
					tempSyl += tempChar;
				}
				$('#SB005Boards').append('<div class="syllaboardHolder"><div id ="SB005Tile' + (i + 1) + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB005TileContent' + (i + 1) + '">' + tempSyl + '</div></div></div>');
				$('#SB005 .syllaboardTile').hide();
			}
			$('#SB005Boards span').addClass('hiddenText');
			$('#SB005Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB005()');
			break;

		case "SB006":
			console.log('SB006');
			//build word vars with for loop
			var word = lessonData.pages[pageNum].words[0];
			var syl = []; //single syllable array
			var syls = []; //array of syllables
			var vowels = []; //array of vowels
			var vowelString = ''; //string to hold vowels
			var vowel = false;
			var vce = false;
			var currChar;
			for (i = 0; i < word.length; i++) {
				currChar = word.charAt(i);
				if (currChar != '/' && currChar != '-' && currChar != '*') {
					if (vowel) {
						syl.push({
							char: currChar,
							type: "v"
						});
						vowelString += currChar;
					} else {
						syl.push({
							char: currChar,
							type: "c"
						});
					}
				} else {
					if (currChar == '-') {
						syls.push(syl);
						syl = [];
					}
					if (currChar == '/') {
						//sylString += '/';
						vowel = !vowel;
						if (!vowel) {
							vowels.push(vowelString);
							vowelString = '';
						}
					}
				}

			}
			syls.push(syl);
			var vowelCount = 0;
			$('#SB006Boards').html('');
			for (i = 0; i < syls.length; i++) {
				var tempSyl = '';
				for (j = 0; j < syls[i].length; j++) {
					if (syls[i][j].type == 'c') {
						var tempChar = '<span  class="SB006Consonant">' + syls[i][j].char + '</span>';
					} else {
						var tempChar = '<span id="SB006v' + (i + 1) + '" class="SB006Vowel">' + syls[i][j].char + '</span>';
					}
					tempSyl += tempChar;
				}
				$('#SB006Boards').append('<div class="syllaboardHolder"><div id ="SB006Tile' + (i + 1) + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB006TileContent' + (i + 1) + '">' + tempSyl + '</div></div></div>');
				$('#SB006 .syllaboardTile').hide();
			}
			$('#SB006Boards span').addClass('hiddenText');
			$('#SB006Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB006()');
			break;



		case "l6ov1":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#l6ov1Banner').attr('src', 'img/hdChallenging' + bannerType + '.png');
					break;

				case "2":
					$('#l6ov1Banner').attr('src', 'img/hdMoreChallengingWords' + bannerType + '.png');
					break;

				case "3":
					$('#l6ov1Banner').attr('src', 'img/hdMostChallengingWords' + bannerType + '.png');
					break;

			}
			var schwaSwitch = false;
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var syls = 1;
				var subLetter = 0;
				var sylSwitch = false;
				var currChars = '';

				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).html('<div id="l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r" class="radioButton"></div>');
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);


					if (currChar == '/' || currChar == '-' || currChar == '*') {

						if (currChar == '/') {
							$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
							currChars = '';

							if (!schwaSwitch) {
								$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
							} else {
								$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('schwaRadioText');
							}

							$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
							syls++;
							subLetter = 0;
							sylSwitch = true;
						} else {
							if (j > 0 && !sylSwitch) {
								$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
								currChars = '';
								if (!schwaSwitch) {
									$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
								} else {
									$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('schwaRadioText');
								}


								$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');

							}
							subLetter++;
							sylSwitch = false;
						}
						if (currChar == '*') {
							schwaSwitch = true;
						} else {
							if (currChar == '/' || currChar == '-') {
								schwaSwitch = false;
							}
						}
					} else {
						currChars += currChar;
					}
				}
				$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
				currChars = '';
				if (!schwaSwitch) {
					$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
				}
				$('#l6ov1w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
			}
			for (i = 1; i < 6; i++) {
				for (j = 1; j < 3; j++) {
					for (k = 1; k < 5; k++) {

						$('#l6ov1w' + (i) + 's' + j + 'l' + k + 'r').addClass('radioButtonSelect radioButtonHidden');
					}
				}
			}


			setUpStep('l6ov1()');
			break;

		case "SI003":
			//fill Challenge Headline First
			var challenge = lessonData.pages[pageNum].challenge;
			var chalURL = '';
			switch (challenge) {
				case "1":
					chalURL = 'img/hdChallenging' + bannerType + '.png';
					break;
				case "2":
					chalURL = 'img/hdMoreChallengingWords' + bannerType + '.png';
					break;
				case "3":
					chalURL = 'img/hdMostChallengingWords' + bannerType + '.png';
					break;

			}
			$('#SI003Banner').attr('src', chalURL);
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//var syls = 1;
				var currChars = '';
				var blockCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					if (lessonData.pages[pageNum].words[i].charAt(j) == '-' || lessonData.pages[pageNum].words[i].charAt(j) == '*') {
						if (j > 0) {
							$('#SI003w' + (i + 1) + 'l' + blockCount).append(currChars);
							currChars = '';
						}
						blockCount++;
						$('#SI003w' + (i + 1) + 'l' + (blockCount)).html('<div id="SI003w' + (i + 1) + 'l' + (blockCount) + 'r" class="radioButton"></div>');
					} else {
						currChars += lessonData.pages[pageNum].words[i].charAt(j);
					}
				}
				$('#SI003w' + (i + 1) + 'l' + (blockCount)).append(currChars);
			}
			$('#SI003 .radioLetterTile').addClass('hiddenText');
			$('#SI003 .radioButton').removeClass('radioButtonSelect');
			setUpStep('SI003()');
			break;

		case "SI004":
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#SI004Banner').attr('src', 'img/hdChallenging' + bannerType + '.png');
					break;

				case "2":
					$('#SI004Banner').attr('src', 'img/hdMoreChallengingWords' + bannerType + '.png');
					break;

				case "3":
					$('#SI004Banner').attr('src', 'img/hdMostChallengingWords' + bannerType + '.png');
					break;

			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var syls = 1;
				var subLetter = 0;
				var sylSwitch = false;
				var currChars = '';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).html('<div id="SI004w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r" class="radioButton"></div>');
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);


					if (currChar == '/' || currChar == '-' || currChar == '*') {

						if (currChar == '/') {
							$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
							currChars = '';
							$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
							$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
							syls++;
							subLetter = 0;
							sylSwitch = true;
						} else {
							if (j > 0 && !sylSwitch) {
								$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
								currChars = '';
								$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
								$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');

							}
							subLetter++;
							sylSwitch = false;
						}
					} else {
						currChars += currChar;
					}
				}
				$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).append(currChars);
				currChars = '';
				$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter).addClass('hiddenText');
				$('#SI004w' + (i + 1) + 's' + syls + 'l' + subLetter + 'r').addClass('radioButtonSelect radioButtonHidden');
			}
			for (i = 1; i < 6; i++) {
				for (j = 1; j < 3; j++) {
					for (k = 1; k < 5; k++) {
						$('#SI004w' + (i) + 's' + j + 'l' + k).addClass('hiddenText');
						$('#SI004w' + (i) + 's' + j + 'l' + k + 'r').addClass('radioButtonSelect radioButtonHidden');
					}
				}
			}


			setUpStep('SI004()');
			break;


		case "MI007":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#MI007w' + (i + 1)).html('');
				var sylCount = 1;
				var htmlString = '<div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
				var blockCount = 0;
				var spacer = false;
				var vceCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '-' || currChar == '/' || currChar == '*' || currChar == '~') {
						if (currChar == '~') {
							sylCount++;
							htmlString += '</div><div id="syl' + sylCount + '" class="wordPartsSyllable sylHidden">';
						} else {
							blockCount++;
							spacer = false;
							if (j > 0) {
								htmlString += '</span></span>';
							}
							if (currChar == '/') {
								vceCount++;
								htmlString += '<span id="MI007w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="begin"><span id="MI007w' + (i + 1) + 'Link1p' + vceCount + '"><div id="MI007Connect' + (i + 1) + 'p' + vceCount + '" class="letterConnector"></div>';
							}
							if (currChar == '*') {
								htmlString += '<span id="MI007w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter markItVCEPair" vce="end"><span id="MI007w' + (i + 1) + 'Link2p' + vceCount + '">';
							}

							if (currChar == '-') {
								htmlString += '<span id="MI007w' + (i + 1) + 'l' + (blockCount) + '" class="markItLetter"><span>';
							}
						}
					} else {
						if (spacer) {
							htmlString += '<span class="markItTextSpacerSpan"></span>';
						}
						spacer = true;
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
					}

				}
				htmlString += '</span></span></div>';
				$('#MI007w' + (i + 1)).html(htmlString);
			}

			setUpStep('MI007()');
			break;
		case "LT014":
			var htmlString = '';
			var rowCount = 0;
			for (j = 0; j < lessonData.pages[pageNum].words.length; j++) {
				var parseText = lessonData.pages[pageNum].words[j];
				var inWord = false;

				var tileCount = 1;
				for (i = 0; i < parseText.length; i++) {
					var currChar = parseText.charAt(i);
					if (currChar == '/' || currChar == '-') {
						if (inWord) {
							htmlString += '</div></div></div>';
						}
						htmlString += '<div  class="letterTileBack">';
						htmlString += '<div  id="LT014Tile' + tileCount + '" class="letterTile letterTileHidden">';
						inWord = true;
						tileCount++;
						if (currChar == '/') {
							htmlString += '<div id="LT014Content' + tileCount + '" class="letterTileContent letterTileVowel">';
						} else {
							htmlString += '<div id="LT014Content' + tileCount + '" class="letterTileContent">';
						}
					} else {
						htmlString += currChar;
					}
				}
				htmlString += '</div></div></div><br />';

			}
			$('#LT014LetterTiles').html(htmlString);
			$('div [id^="LT014Tile"]').fadeIn(250);
			setUpStep('LT014()');
			break;
		case "SB007":

			var parseText = lessonData.pages[pageNum].words[0];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="SB007Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB007v' + vowelCount + '" class="SB007Vowel">';
						htmlString2 += '<span class="SB007Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB007Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB007Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="SB007Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB007TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB007Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB007TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB007Boards').html(syllaDiv);
			$('#SB007Boards span').addClass('hiddenText');
			$('#SB007Boards span').css('transition', 'all .5s 0s');
			$('#SB007 .syllaboardTile').hide();
			$('#SB007Word').html(htmlString);
			$('#SB007 .syllaboardTile').hide();

			$('#SB007Boards span').addClass('hiddenText');
			$('#SB007Boards span').css('transition', 'all .5s 0s');
			setUpStep('SB007()');


			break;

		case "LT015":
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var htmlString = '';
			var linkCount = 1;
			var uCount = 0;
			var underlineFlag = false;
			for (i = 0; i < parseText.length; i++) {
				var currChar = parseText.charAt(i);
				if (currChar == '/' || currChar == '-' || currChar == '*' || currChar == '|') {
					if (firstChar) {
						firstChar = false;
					} else {
						if (!underlineFlag) {
							htmlString += '</div></div></div>';
						} else {
							underlineFlag = false;
						}

					}

					if (currChar == '*' || currChar == '|') {
						underlineFlag = true;
						if (currChar == '*') {
							uCount++;
						}
						if (currChar == '*') {
							if (!firstChar) {
								htmlString += '</div>';
							}
							htmlString += '<div id="blockUnderline' + uCount + '" class="blockUnderline blockUnderlineHidden">';

						}
						if (currChar == '|') {
							htmlString += '</div>';
						}
					} else {
						htmlString += '<div  class="letterTileBack">';

						htmlString += '<div  id="LT015Tile' + charCount + '" class="letterTile">';
					}
					if (currChar == '-') {
						htmlString += '<div id="LT015Content' + charCount + '" class="letterTileContent">';
					}
					if (currChar == '/') {
						htmlString += '<div id="LT015Content' + charCount + '" class="letterTileContent letterTileVowel">';
					}

				} else {
					charCount++;
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';

			$('#LT015LetterTiles').html(htmlString);


			//NOTE: Don't try to move the curled connector until reference objects are visible!!! Display:none reference objects will not return a value for position or offset.



			$('#LT015Tile1').fadeIn(250);
			setUpStep('LT015()');
			break;

		case "l6vv1":
			//$('#menuBarCenter').html('Template MI002:put a real title here later');
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#l6vv1Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var inSchwa = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (currChar == '/' || currChar == '*') {
							if (currChar == '/') {
								if (inVowel) {
									htmlString += '</span>';
									inVowel = false;
								} else {
									htmlString += '<span class="wordPartsVowel">'
									inVowel = true;
								}
							}
							if (currChar == '*') {
								if (inSchwa) {
									inSchwa = false;
									htmlString += '</span>';
								} else {
									inSchwa = true;
									htmlString += '<span class="underLineOnly"><div class="subUnderLine"></div>';
								}
							}
						} else {

							htmlString += '</span><span class="wordPartsSyllable">';

						}

					} else {



						htmlString += lessonData.pages[pageNum].words[i].charAt(j);

					}

				}
				$('#l6vv1Word' + (i + 1)).html(htmlString);
			}

			$('.wordPartsSyllable').addClass('wordsNoStroke');
			//$('.wordPartsVowel').addClass('vowelNoStroke');
			$('.underLineOnly .subUnderLine').addClass('underLineOnlyHidden');
			setUpStep('l6vv1()');
			break;

		case "LT016":
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				var parseText = lessonData.pages[pageNum].words[i];
				var inWord = false;

				htmlString += '<div  class="letterTileBack">';
				htmlString += '<div  id="LT016TilePh' + (i + 1) + '" class="letterTile">';
				htmlString += '<div id="LT016ContentPh' + (i + 1) + '" class="letterTileContent">';
				htmlString += lessonData.pages[pageNum].words[i].ph;
				htmlString += '</div></div></div>';
				htmlString += '<div  class="letterTileBack">';
				htmlString += '<div  id="LT016Tile' + (i + 1) + 'Lt" class="letterTile letterTileHidden">';
				htmlString += '<div id="LT016Content' + (i + 1) + 'Lt" class="letterTileContent">';
				htmlString += lessonData.pages[pageNum].words[i].lt;
				htmlString += '</div></div></div><br/>';
			}
			$('#LT016LetterTiles').html(htmlString);
			$('div [id^="LT016TilePh"]').fadeIn(250);
			setUpStep('LT016()');
			break;

		case "LT017":
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var consCount = 0;
			var firstChar = true;
			var htmlString = '';
			var linkCount = 1;
			var wordString = '';
			for (i = 0; i < parseText.length; i++) {

				var currChar = parseText.charAt(i);

				if (currChar != '/' && currChar != '-' && currChar != '*') {
					wordString += currChar;
				}

				if (currChar == '/' || currChar == '-' || currChar == '*') {
					if (firstChar) {
						firstChar = false;
					} else {
						htmlString += '</div></div></div>';
					}


					htmlString += '<div  class="letterTileBack">';

					htmlString += '<div  id="LT017Tile' + charCount + '" class="letterTile hidden">';
					if (currChar == '-') {
						htmlString += '<div id="LT017Content' + charCount + '" class="letterTileContent">';
					} else {
						htmlString += '<div id="LT017Link' + linkCount + '" class="letterTileContent letterTileVowel">';
						linkCount++;
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			htmlString = '<div class="syllaboardWord">' + wordString + '</div>' + htmlString;
			$('#LT017LetterTiles').html(htmlString);

			setUpStep('LT017()');
			break;
		case "LT018":
			var parseText = lessonData.pages[pageNum].words[0];
			var charCount = 1;
			var circUnderlineCount = 1;
			var consCount = 0;
			var firstChar = true;
			var htmlString = '';
			var linkCount = 1;
			var wordString = '';
			for (i = 0; i < parseText.length; i++) {

				var currChar = parseText.charAt(i);

				if (currChar != '/' && currChar != '-' && currChar != '*' && currChar != '(' && currChar != '_' && currChar != '|') {
					htmlString += currChar;
				} else {
					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (firstChar) {
							firstChar = false;
						} else {
							htmlString += '</span>';
						}
						htmlString += '<span id="LT018Content' + charCount + '" class="LT018Hidden">';
						charCount++;
					} else {
						if (currChar == '(') {
							htmlString += '<span id="LT018CircUnderline' + circUnderlineCount + '" class="LT018Circle LT018CircUnderlineHidden">';
						}
						if (currChar == '_') {
							htmlString += '<span id="LT018CircUnderline' + circUnderlineCount + '" class="LT018Underline LT018CircUnderlineHidden">';
						}
						if (currChar == '|') {
							htmlString += '</span>';
							circUnderlineCount++;
						}
					}


				}


			}

			htmlString += '</span>';
			htmlString = '<div class="syllaboardWord">' + htmlString + '</div>';
			$('#LT018LetterTiles').html(htmlString);
			$('#LT018LetterTiles span').css('transition', 'all .5s 0s');
			$('#LT018Content1').removeClass('LT018Hidden');
			setUpStep('LT018()');
			break;
		case 'LT028':
			$('#LT028 .vowelTile').css('display', 'none');
			$('#LT028 .vowelTileA').css('display', 'none');
			$('#LT028 .letterTilePhonemic').css('display', 'none');
			$('#LT028 .consonantTile').css('display', 'block');
			$('#LT028 .tableRowBlocker').css('display', 'none');
			setUpStep('LT028()');
			break;
		case "LT029":
			var cols = lessonData.pages[pageNum].cols;
			var wordCount = lessonData.pages[pageNum].words.length;
			var wordNum = 0;
			var htmlString = '';
			for (k = 0; k < cols; k++) {
				htmlString += '<div class="words">';
				//calculate start and finish loop points here

				var startPoint = 0;
				var finishPoint = 3;

				var interval = Math.round(wordCount / cols);
				startPoint = interval * k;
				finishPoint = interval * (k + 1);
				if (k == (cols - 1)) {
					finishPoint = wordCount;
				}

				for (j = startPoint; j < finishPoint; j++) {
					var parseText = lessonData.pages[pageNum].words[j];
					wordNum++;
					htmlString += '<div id="word' + wordNum + '">';
					for (i = 0; i < parseText.length; i++) {

						var currChar = parseText.charAt(i);

						if (currChar != '(' && currChar != '_' && currChar != '|') {
							if (currChar == ' ') {
								htmlString += '&nbsp;'
							} else {
								htmlString += '<span    class="letter">' + currChar + '</span>';
							}
						} else {

							switch (currChar) {
								case '(':
									htmlString += '<span    class="LT029Circle     LT029CircUnderlineHidden">';
									break;
								case '_':
									htmlString += '<span    class="LT029Underline  LT029CircUnderlineHidden">';
									break;
								case '|':
									htmlString += '</span>';
									break;
							}

						}
					}
					htmlString += '</div>';
				}
				htmlString += '</div>';
			}
			$('#LT029').html(htmlString);

			var newSize = (2 / (wordCount / 8)) * cols;
			if (newSize > 3) {
				newSize = 3;
			}
			$('#LT029').css('font-size', newSize + 'em');
			setUpStep('LT029()');
			break;
		case "WS015":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS015Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS015Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS015Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS015Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';


			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead">' + lessonData.pages[pageNum].headers[i] + '</td>';
			}


			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS015Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				htmlString += '<td id="WS015Word' + (i + 1) + 'Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS015Word' + (i + 1) + 'Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == 2) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS015Word' + (i + 1) + 'Check3" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == 3) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';


				htmlString += '<td id="WS015Word' + (i + 1) + 'Check4" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == 4) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS015Word' + (i + 1) + 'Check5" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == 5) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '</tr>';


			}
			$('#WS015Table').append(htmlString);
			setUpStep('WS015()');
			break;

		case "WS017":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS017Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS017Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS017Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS017Table').html('');


			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td class="syllablesTableText reverseHead middleAlign wide">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td class="syllablesTableText reverseHead middleAlign wide">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableText reverseHead middleAlign wide">' + lessonData.pages[pageNum].headers[2] + '</td>';

			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';

				htmlString += '<td class="bulletCell"><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS017Word' + (i + 1) + '" class="syllablesTableWord">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';


				htmlString += '<td class="syllableTablesCell">';
				htmlString += '<div id="WS017Word' + (i + 1) + 'Circ1" class="circleNum';
				if (lessonData.pages[pageNum].words[i].syls == '1') {
					htmlString += ' circleNumSelected hiddenCirc';
				}
				htmlString += '">1</div>';
				htmlString += '<div id="WS017Word' + (i + 1) + 'Circ2" class="circleNum';
				if (lessonData.pages[pageNum].words[i].syls == '2') {
					htmlString += ' circleNumSelected hiddenCirc';
				}
				htmlString += '">2</div>';
				htmlString += '</td>';
				htmlString += '<td></td>';

				htmlString += '<td id="WS017Word' + (i + 1) + 'Col1Check" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == '1') {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS017Word' + (i + 1) + 'Col2Check" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col == '2') {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';





				htmlString += '</tr>';


			}
			$('#WS017Table').append(htmlString);
			setUpStep('WS017()');
			break;

		case "WS018":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS018Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS018Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS018Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS018Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td id="WS018Title1" class="syllablesTableText" colspan="' + 4 + '">' + lessonData.pages[pageNum].headers[0] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td id="WS018Title2" class="syllablesTableText" colspan="' + 4 + '">' + lessonData.pages[pageNum].headers[1] + '</td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td>&nbsp;</td>';
			htmlString += '</tr>';



			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[0].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[0][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[1].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[1][i] + '</td>';
			}
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].subheaders[2].length; i++) {
				htmlString += '<td class="syllablesTableText reverseHead middleAlign">' + lessonData.pages[pageNum].subheaders[2][i] + '</td>';
			}
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS018Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '-') {
						tempString += '&#8226;';
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				htmlString += '<td id="WS018Word' + (i + 1) + 'Col1Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1a == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS018Word' + (i + 1) + 'Col1Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1b == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS018Word' + (i + 1) + 'Col1Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1c == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS018Word' + (i + 1) + 'Col1Check3" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col1d == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS018Word' + (i + 1) + 'Col2Check0" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2a == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';
				htmlString += '<td id="WS018Word' + (i + 1) + 'Col2Check1" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2b == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS018Word' + (i + 1) + 'Col2Check2" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2c == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td id="WS018Word' + (i + 1) + 'Col2Check3" class="syllableTablesCell">';
				if (lessonData.pages[pageNum].words[i].col2d == 1) {
					htmlString += '<div class="checkMark hiddenCheck"></div>';
				} else {
					htmlString += '&nbsp;';
				}
				htmlString += '</td>';

				htmlString += '<td></td>';

				htmlString += '<td id="WS018SchwaCount' + (i + 1) + '" class="syllableTablesCell"><span class="schwaCount hidden">' + lessonData.pages[pageNum].words[i].schwa + '</span></td>';
				htmlString += '</tr>';


			}
			$('#WS018Table').append(htmlString);
			setUpStep('WS018()');
			break;


		case 'WS019':
			$('#WS019h1').html(lessonData.pages[pageNum].leftHead);
			$('#WS019h2').html(lessonData.pages[pageNum].centerHead);
			$('#WS019h3').html(lessonData.pages[pageNum].rightHead);
			var newTop = $('#wrapper').height() * .5;
			$('#WS019Blocks').html('<div id="WS019w1" class="floatingBlock">hot</div>');
			//fill first word
			$('#WS019w1').html(lessonData.pages[pageNum].words[0].word);
			//center first word
			var newLeft = $('#content').width() / 2 - $('#WS019w1').width() / 2;
			//var newLeft = $('#WS019').width() / 2 - $('#WS019w1').width() / 2;

			$('#WS019w1').css('transition', 'none');
			$('#WS019w1').css('left', newLeft + 'px');
			$('#WS019w1').css('top', newTop + 'px');
			$('#WS019w1').hide();
			$('#WS019w1').fadeIn(500);
			setUpStep('WS019()');

			break;
		case "WS020":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS020Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS020Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS020Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS020Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}

			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS020Title1" class="syllablesTableTextHeader">how many<br />phonemes?</div></td>';

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS020Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWordWithSubspans(parseWord);
				htmlString += '</td>';



				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS020Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS020Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}

				htmlString += '<td></td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS020Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS020Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}


				htmlString += '</tr>';
				//htmlString += '<div class="syllablesBorder"></div>';
				$('#WS020Table').html(htmlString);

				$('#WS020Table .wsunderlineText').css('border-bottom', 'solid .1em rgba(0,0,0,0)');
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS020Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS020Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS020Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS020Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS020()');
			break;
		case "WS021":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS021Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS021Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS021Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS021Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS021Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS021Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				//var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				/*var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;*/
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';



				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS021Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS021Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}


				htmlString += '</tr>';
				$('#WS021Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS021Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
			}
			$('#WS021Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS021()');
			break;
		case "WS022":
			//switch banner
			switch (lessonData.pages[pageNum].challenge[0]) {
				case "1":
					$('#WS022Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS022Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS022Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS022Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}


			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words[0].length; i++) {
				htmlString += '<tr id="WS022WordRow' + (i + 1) + '">';
				var bulletNum = i + parseInt(lessonData.pages[pageNum].startNumber);
				htmlString += '<td><div class="dotBulletNum">' + (bulletNum) + '</div></td>';
				htmlString += '<td id="WS022Word' + (i + 1) + '" class="syllablesTableWord threeEm">';

				var parseWord = lessonData.pages[pageNum].words[0][i].word;


				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';



				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS022Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS022Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}




				htmlString += '</tr>';
				//htmlString += '<div class="syllablesBorder"></div>';
				$('#WS022Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words[0].length; i++) {
				var checkCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[0][i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[0][i].checks[j].text == '*') {
						checkCount++;
						//$('#WS022Word' + (i + 1) + 'Check' + (j+1)).html('<div class="checkMark hiddenCheck"></div>');


						$('#WS022Word' + (i + 1) + 'Check' + (j + 1)).html('<div id="WS022Word' + (i + 1) + 'CheckBlock' + lessonData.pages[pageNum].words[0][i].checks[j].seq + '" class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS022Word' + (i + 1) + 'Check' + (j + 1)).html('<div id="WS022Word' + (i + 1) + 'CheckBlock' + lessonData.pages[pageNum].words[0][i].checks[j].seq + '" class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[0][i].checks[j].text + '</div>');
					}
				}
			}
			$('#WS022Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS022()');
			break;

		case "WS023":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS023Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS023Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS023Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS023Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';

			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS023Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';

			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS023Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				//var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				/*var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;*/
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS023Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS023Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS023Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS023Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}






				htmlString += '</tr>';
				//htmlString += '<div class="syllablesBorder"></div>';
				$('#WS023Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				//$('#l0bv0Word' + (i+1)).html(lessonData.pages[pageNum].words[i].word);
				$('#WS023Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');

				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS023Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS023Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS023Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS023()');
			break;

		case 'WS024':
			$('#WS024h1').html(lessonData.pages[pageNum].leftHead);
			$('#WS024h2').html(lessonData.pages[pageNum].leftCenterHead);
			$('#WS024h3').html(lessonData.pages[pageNum].rightCenterHead);
			$('#WS024h4').html(lessonData.pages[pageNum].rightHead);
			var newTop = $('#wrapper').height() * .5;
			$('#WS024Blocks').html('<div id="WS024w1" class="floatingBlock">hot</div>');
			//fill first word
			$('#WS024w1').html(lessonData.pages[pageNum].words[0].word);
			//center first word
			var newLeft = $('#content').width() / 2 - $('#WS024w1').width() / 2;

			$('#WS024w1').css('transition', 'none');
			$('#WS024w1').css('left', newLeft + 'px');
			$('#WS024w1').css('top', newTop + 'px');
			$('#WS024w1').hide();
			$('#WS024w1').fadeIn(500);
			setUpStep('WS024()');

			break;
		case 'WS025':
			$('#WS025h1').html(lessonData.pages[pageNum].col1);
			$('#WS025h2').html(lessonData.pages[pageNum].col2);
			$('#WS025h3').html(lessonData.pages[pageNum].col3);
			$('#WS025h4').html(lessonData.pages[pageNum].col4);
			$('#WS025h5').html(lessonData.pages[pageNum].col5);
			var newTop = $('#wrapper').height() * .5;
			$('#WS025Blocks').html('<div id="WS025w1" class="floatingBlock">hot</div>');
			//fill first word
			$('#WS025w1').html(lessonData.pages[pageNum].words[0].word);
			//center first word
			var newLeft = $('#content').width() / 2 - $('#WS025w1').width() / 2;

			$('#WS025w1').css('transition', 'none');
			$('#WS025w1').css('left', newLeft + 'px');
			$('#WS025w1').css('top', newTop + 'px');
			$('#WS025w1').hide();
			$('#WS025w1').fadeIn(500);
			setUpStep('WS025()');

			break;

		case "WS026":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS026Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS026Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS026Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS026Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText" colspan="2"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Closed</div></td>';
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Open</div></td>';
			}
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS026Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				//var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				/*var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/') {
						tempString += '<span class="vowelText">';
						inVowel = true;
					} else {

						tempString += parseWord.charAt(j);
						if (inVowel) {
							inVowel = false;
							tempString += '</span>';
						}
					}
				}
				htmlString += tempString;*/
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';



				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 0) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
						htmlString += '<td id="WS026Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td id="WS026Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS026Table').html(htmlString);
			}
			$('#WS026Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS026()');
			break;
		case "WS027":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS027Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS027Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS027Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS027Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';

			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS027Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';

			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS027Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS027Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS027Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS027Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS027Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}
				htmlString += '</tr>';
				$('#WS027Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS027Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS027Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS027Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS027Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS027()');
			break;
		case "WS028":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS028Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS028Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS028Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS028Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText" colspan="2"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Closed</div></td>';
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Open</div></td>';
			}
			htmlString += '</tr>';



			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS028Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				var inVowel = false;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '<' || parseWord.charAt(j) == '>') {

						if (parseWord.charAt(j) == '<') {
							tempString += '<span class="schwa' + (i + 1) + ' schwaCircle hideCircle">';
						} else {
							tempString += '</span>';
						}
						inVowel = true;
					} else {
						tempString += parseWord.charAt(j);
					}
				}
				htmlString += tempString;
				htmlString += '</td>';



				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 0) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
						htmlString += '<td id="WS028Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td id="WS028Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS028Table').html(htmlString);
			}
			$('#WS028Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS028()');
			break;

		case "WS029":

			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS029Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS029Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS029Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS029Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}


			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS029Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				//var tempString = '';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				for (j = 0; j < parseWord.length; j++) {
					if (parseWord.charAt(j) == '/' || parseWord.charAt(j) == '|') {
						if (parseWord.charAt(j) == '/') {
							htmlString += '<span class="wsunderlineText hiddenBorder">';
						}
						if (parseWord.charAt(j) == '|') {
							htmlString += '</span>';
						}
					} else {
						htmlString += parseWord.charAt(j);
					}
				}
				//htmlString += formatWSWord(parseWord);
				htmlString += '</td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS029Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS029Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}
				htmlString += '</tr>';
			}
			$('#WS029Table').html(htmlString);
			console.log('htmlString' + htmlString);
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {

				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS029Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS029Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS029Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS029()');
			break;
		case "WS030":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS030Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS030Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS030Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS030Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}

			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';
			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS030Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS030Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS030Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS030Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}

				htmlString += '<td></td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS030Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS030Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}
				htmlString += '</tr>';
				$('#WS030Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS030Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS030Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS030Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS030Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS030()');
			break;

		case "WS031":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS031Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS031Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS031Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS031Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS031Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';

			htmlString += '</tr>';


			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS031Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS031Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS031Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS031Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS031Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');
			}
			$('#WS031Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS031()');
			break;

		case "WS032":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS032Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS032Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS032Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS032Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText" colspan="2"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Closed</div></td>';
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Open</div></td>';
			}
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS032Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 0) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
						htmlString += '<td id="WS032Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td id="WS032Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS032Table').html(htmlString);
			}
			$('#WS032Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS032()');
			break;
		case "WS033":
			//switch banner
			switch (lessonData.pages[pageNum].challenge[0]) {
				case "1":
					$('#WS033Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS033Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS033Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS033Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}

			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (parseInt(lessonData.pages[pageNum].startNumber) + i) + '</div></td>';
				htmlString += '<td id="WS033Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				//htmlString += '<span class="extendWord">' + parseWord + '</span>';
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS033Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS033Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS033Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {

				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS033Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS033Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS033Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS033()');
			break;

		case "WS034":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS034Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS034Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS034Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS034Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';

			htmlString += '<td class="syllablesTableText" colspan="' + lessonData.pages[pageNum].circles + '"><div id="WS034Title1" class="syllablesTableTextHeader">how many<br />syllables?</div></td>';
			htmlString += '<td class="syllablesTableCellSpacer">&nbsp;</td>';

			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS034Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].circles; j++) {
					if (j == lessonData.pages[pageNum].circles - 1) {
						htmlString += '<td  class="syllableTablesCell sixEm noRightBorder"><div  id="WS034Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					} else {
						htmlString += '<td  class="syllableTablesCell sixEm"><div  id="WS034Word' + (i + 1) + 'Circ' + (j + 1) + '" class="circleNum">' + (j + 1) + '</div><div class="syllableTablesCellBorder"></div></td>';
					}
				}
				htmlString += '<td></td>';
				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (j == lessonData.pages[pageNum].headers.length - 1) {
						htmlString += '<td id="WS034Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell noRightBorder"></td>';
					} else {
						htmlString += '<td id="WS034Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"></td>';
					}
				}
				htmlString += '</tr>';
				$('#WS034Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#WS034Word' + (i + 1) + 'Circ' + lessonData.pages[pageNum].words[i].circle).addClass('circleNumSelected hiddenCirc');

				for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == '*') {
						$('#WS034Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS034Word' + (i + 1) + 'Check' + (j + 1)).html('<div class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[i].checks[j] + '</div>');
					}
				}
			}
			$('#WS034Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS034()');
			break;
		case "WS035":
			//switch banner
			switch (lessonData.pages[pageNum].challenge) {
				case "1":
					$('#WS035Banner').css('background-image', 'url(img/hdChallenging' + bannerType + '.png)');
					break;

				case "2":
					$('#WS035Banner').css('background-image', 'url(img/hdMoreChallengingWords' + bannerType + '.png)');
					break;

				case "3":
					$('#WS035Banner').css('background-image', 'url(img/hdMostChallengingWords' + bannerType + '.png)');
					break;

			}

			var htmlString = '';
			//create table header here
			$('#WS035Table').html('');
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText" colspan="2"><div class="syllablesTableTextHeader">' + lessonData.pages[pageNum].headers[i] + '</div></td>';
			}
			htmlString += '</tr>';
			htmlString += '<tr>';
			htmlString += '<td></td>';
			htmlString += '<td></td>';
			for (i = 0; i < lessonData.pages[pageNum].headers.length; i++) {
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Closed</div></td>';
				htmlString += '<td class="syllablesTableText subhead"><div class="syllablesTableTextHeader">Open</div></td>';
			}
			htmlString += '</tr>';

			//fill table elements here
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				htmlString += '<tr>';
				htmlString += '<td><div class="dotBulletNum">' + (i + 1) + '</div></td>';
				htmlString += '<td id="WS035Word' + (i + 1) + '" class="syllablesTableWord threeEm">';
				var parseWord = lessonData.pages[pageNum].words[i].word;
				htmlString += formatWSWord(parseWord);
				htmlString += '</td>';

				for (j = 0; j < lessonData.pages[pageNum].headers.length; j++) {
					if (lessonData.pages[pageNum].words[i].checks[j] == 0) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 1) {
						htmlString += '<td id="WS035Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
					if (lessonData.pages[pageNum].words[i].checks[j] == 2) {
						htmlString += '<td class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
						htmlString += '<td id="WS035Word' + (i + 1) + 'Check' + (j + 1) + '" class="syllableTablesCell"><div class="checkMark hiddenCheck"></div></td>';
					}
				}

				htmlString += '</tr>';
				$('#WS035Table').html(htmlString);
			}
			$('#WS035Title1').html(lessonData.pages[pageNum].title);
			setUpStep('WS035()');
			break;

		case "l7av2":
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
				$('#l7av2Word' + (i + 1)).html('');
				var inSyl = true;
				var inVowel = false;
				var inSchwa = false;
				var htmlString = '';
				htmlString += '<span class="wordPartsSyllable">';
				for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
					var currChar = lessonData.pages[pageNum].words[i].charAt(j);
					if (currChar == '/' || currChar == '-' || currChar == '*') {
						if (currChar == '/' || currChar == '*') {
							inVowel = !inVowel;
							if (currChar == '*') {
								inSchwa = !inSchwa;
							}
						} else {
							htmlString += '</span><span class="wordPartsSyllable">'
						}

					} else {
						htmlString += '<span class="wordPartsLetter">';

						if (inVowel) {
							if (inSchwa) {
								htmlString += '<div class="vowelSchwaCombo"><div class="wordPartsSchwa"></div><div class="wordPartsVowel">';
							} else {
								htmlString += '<div class="wordPartsVowel">';
							}
						}
						htmlString += lessonData.pages[pageNum].words[i].charAt(j);
						if (inVowel && lessonData.pages[pageNum].words[i].charAt(j + 1) == '/') {
							if (inSchwa) {
								inSchwa = false;
								htmlString += '</div>';
							}
							htmlString += '</div>';
						}
						htmlString += '</span>';
					}

				}
				$('#l7av2Word' + (i + 1)).html(htmlString);
			}

			$('#l7av2 .wordPartsSyllable').addClass('wordsNoStroke');
			$('#l7av2 .wordPartsVowel').addClass('vowelNoStroke');
			$('#l7av2 .wordPartsSchwa').addClass('schwaNoStroke');
			setUpStep('l7av2()');
			break;

		case "l7bv2":
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {

				htmlString = '<div id="underline' + (i + 1) + '" class="wordPartsSyllable underline uHidden">';

				var parseText = lessonData.pages[pageNum].words[i];

				for (j = 0; j < parseText.length; j++) {
					if (parseText.charAt(j) == '-' || parseText.charAt(j) == '/') {
						if (parseText.charAt(j) == '/') {
							htmlString += '</div><div id="underline' + (i + 1) + '" class="wordPartsSyllable suffix sHidden">'
						}
					} else {
						htmlString += parseText.charAt(j);
					}


				}
				htmlString += '</div>';
				$('#l7bv2w' + (i + 1)).html('');
				$('#l7bv2w' + (i + 1)).html(htmlString);


			}
			setUpStep('l7bv2()');
			break;

		//////////////////////////////////ADD COUNTDOWN HERE///////////////////////////

		case 'CD001':
			var htmlString = '';
			htmlString += '<img class="titleLogo" src="img/countdownLogo.png" />';
			htmlString += '<div class="unitTitle">' + lessonData.pages[pageNum].unitText + '</div>';
			htmlString += '<div class="lessonTitle">' + lessonData.pages[pageNum].lessonName + '</div>';
			htmlString += '<div class="partTitle">' + lessonData.pages[pageNum].partText + '</div>';
			$('#CD001').html(htmlString);
			setUpStep('CD001()');
			break;

		case 'CD003':
			var htmlString = '';
			for (i = 0; i < lessonData.pages[pageNum].dataSet.length; i++) {
				htmlString += '<div id="CD003imageBlock' + i + '" class="fullScreen"><div id="CD002image' + i + '" class="standardIcon fullScreenIcon ' + lessonData.pages[pageNum].dataSet[i] + '"></div></div>';
			}

			$('#CD003').html(htmlString);
			$('#CD003 .fullScreen').hide();
			$('#CD003imageBlock0').fadeIn(250);

			setUpStep('CD003()');
			break;





		case "CD015":

			var htmlString = '';
			htmlString += '<div id="CD015ColorBlock">';
			for (i = 0; i < lessonData.pages[pageNum].dataSet[0].colors.length; i++) {
				htmlString += '<div id="CD015ColorTile' + (i + 1) + '" class="letterTileBack"><div class="letterTile ';
				htmlString += 'letterTile' + lessonData.pages[pageNum].dataSet[0].colors[i] + '"></div></div>';
			}
			htmlString += '</div>';

			htmlString += '<div id="CD015LetterBlock">';
			for (i = 0; i < lessonData.pages[pageNum].dataSet[0].letters.length; i++) {
				htmlString += '<div id="CD015LetterTile' + (i + 1) + '" class="letterTileBack"><div class="letterTile">';
				htmlString += checkLetter(lessonData.pages[pageNum].dataSet[0].letters[i]) + '</div></div>';
			}
			htmlString += '</div>';

			htmlString += '<div id="CD015IconBlock">';
			htmlString += '<div id="CD015image" class="blockIcon ' + lessonData.pages[pageNum].dataSet[0].icon + '"></div>';
			htmlString += '</div>';



			$('#CD015').html(htmlString);
			$('#CD015image').css('font-size', '1em');
			$('#CD015 .letterTile').css('font-size', '2.75em');
			$('#CD015 .letterTile').css('opacity', '0');
			$('#CD015 .blockIcon').css('opacity', '0');
			$('#CD015').unbind();

			setUpStep('CD015()');
			break;




	}
}
//getNextLesson is used to load the next JSON lesson in a unit from a user interaction within a lesson

function getNextLesson() {
	var lessonNum = lesson;
	/*if (unitNum > 20) {
		//Handle exceptions first
		if (unitNum == 23 || unitNum == 33 || unitNum == 27) {
			if (unitNum == 23 || unitNum == 27) {
				var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';
			}
			if (unitNum == 33) {
				if (lessonNum == 1 || lessonNum == 2 || lessonNum == 5 || lessonNum == 3) {
					var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';
				} else {
					var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
				}
			}
		} else {
			if (lessonNum == 1 || lessonNum == 2 || lessonNum == 5) {
				var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';
			} else {
				var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
			}
		}
	} else {
		if (lessonNum == 1 || lessonNum == 5) {
			var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';
		} else {
			var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
		}
	};
	if (unitNum>40){
		var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
	}*/


	//Code to fix menu issue 11/7/2024
	//if (lessonNum == 1 || lessonNum == 5) {
	var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + level + '.json';
	//} else {
	//	var lessonURL = 'data/units/u' + unitNum + '/l' + lessonNum + '.json';
	//}
	//
	console.log('level:' + level);
	$.getJSON(lessonURL + '?version=' + version, function (data) {
		pageNum = 0;
		lessonData = data;
		titleScreen();
		$('#lessonCounter').html(pageNum + ' of ' + (lessonData.pages.length - 1));
		//$('#menuBarRight').html('Unit ' + unitNum + ' : Lesson ' + lesson);


		if (unitNum > 40) {
			$('#menuBarRight').html('PSE Unit ' + (unitNum - 40) + ' : Lesson ' + lessonNum);
		} else {
			$('#menuBarRight').html(menuData.units[unitNum - 1].unitTitle + ' : Lesson ' + lessonNum);
		}

	});
	$('#menuBarLeft').css('display', 'block');
	$('#menuBarCenter').css('display', 'block');
	$('#menuBarSelector').css('display', 'block');
}
//nextpage used to turn pages of lessons from lesson screens

function nextpage() {
	console.log('nextpage call');
	console.log('lesson:' + lesson);
	console.log('unitNum:' + unitNum);
	//console.log('lessonLength:' + menuData.units[unitNum - 1].lessons.length);
	if (pageNum + 1 < lessonData.pages.length) {
		pageNum++;
		var nextPage = '#' + lessonData.pages[pageNum].template;
		//initPage(nextPage, lessonData.pages[pageNum].template);
		initPage(pageNum, lessonData.pages[pageNum].template);
		$('.contentPanel').hide();
		$(nextPage).fadeIn(250);
	} else {
		if (unitNum > 40) {
			console.log('Next Lesson or Unit PSE');

			if (lesson < 4) {
				lesson++;
				getNextLesson();
				console.log('Get Next Lesson');
			} else {
				if (unitNum < 72) {
					unitNum++;
					lesson = 1;
					getNextLesson();
					console.log('Get Next Unit');
				} else {
					alert('end of units');
					//goHome();
				}
			}

		} else {


			if (lesson < menuData.units[unitNum - 1].lessons.length) {
				lesson++;
				getNextLesson();
			} else {
				if (unitNum < totalUnits) {
					unitNum++;
					lesson = 1;
					getNextLesson();
				} else {
					//alert('end of units');
					goHome();
				}
			}


		}


	}

}

function prevpage() {
	if (pageNum - 1 > 0) {
		pageNum--;
		var nextPage = '#' + lessonData.pages[pageNum].template;
		//initPage(nextPage, lessonData.pages[pageNum].template);
		initPage(pageNum, lessonData.pages[pageNum].template);
		$('.contentPanel').hide();
		$(nextPage).fadeIn(250);
	} else {
		if (lesson > 1) {
			lesson--;
			getNextLesson();
		} else {
			if (unitNum > 0) {
				unitNum--;
				lesson = 1;
				getNextLesson();
			} else {
				alert('beginning of instruction');
			}
		}
		//go to next lesson or next Unit if lesson 5
	}
}

//used to trigger auto fade on title screens
function waitThenTurn(lessonData) {
	navClick = false;
	//pageNum++;
	var nextPage = '#' + lessonData.pages[pageNum].template;

	$('#menuBarLessonSelector').html('');
	for (i = 0; i < lessonData.pages.length; i++) {
		//$('#menuBarLessonSelector').append('<option value="' + lessonData.pages[i].template + '">' + lessonData.pages[i].exTitle + '</option>');
		$('#menuBarLessonSelector').append('<option value=' + i + '>' + lessonData.pages[i].exTitle + '</option>');
	}

	
	$('#content').attr('tabindex', '0');
	$('#content').unbind('click');
	$('#content').bind('click', function (e) {
			if (!navClick) {
				nextpage();
			}
	});
	$('#content').unbind('keydown');
	$('#content').bind('keydown', function (e) {
		if (e.keyCode==13) {
			if (!navClick) {
				nextpage();
			}
		}
	});
}


function titleScreen() {
	$('.contentPanel').fadeOut(200);
	$('#uText').html(lessonData.pages[0].unitName);
	$('#lText').html(lessonData.pages[0].lessonName);
	$('#contentNext').fadeOut(200);
	$('#contentBacker').fadeIn(200);
	//$('#content').css('background-color', 'rgba(252,252,252,0');
	//$('#content').css('background-image', 'none');
	$('#titlePage').fadeIn(250);
	waitThenTurn(lessonData);
}


$(document).ready(function (e) {
	$('.nextpage').click(function (e) {
		nextpage();
	});
	$('.letterSoundSelector').change(function (e) {
		changeData(this);
	});
});
