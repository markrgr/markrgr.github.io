/*Scripts for individual exercises*/

function HTMLBLOCK() {
	if (lessonData.pages[pageNum].links != 'true') {
		nextpage();
	}
}

function MENUBLOCK() {
	// nextpage();
}

function RI001() {
	nextpage();
}

function RI002() {
	nextpage();
}

function RI003() {
	nextpage();
}

function RI004() {
	if (lessonData.pages[pageNum].links != 'true') {
		nextpage();
	}
}

function HD001() {
	//nextpage();
	console.log('clicky');
}

function VI001() {
	// nextpage();
}

function IM001() {
	nextpage();
}

function IM002() {
	step++;
	if (step < lessonData.pages[pageNum].images.length) {
		var htmlString = '';
		for (i = 0; i < lessonData.pages[pageNum].images[step].imageList.length; i++) {
			htmlString += '<div id="IM002Image' + (i + 1) + '" class="standardIcon ' + lessonData.pages[pageNum].images[step].imageList[i] + '"></div>';
		}
		$('#IM002').html(htmlString);

		var iconSize = 5;
		switch (lessonData.pages[pageNum].images[step].imageList.length) {
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
	} else {
		nextpage();
	}

}

function l0bv0() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('#l0bv0Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');
		} else {
			row = parseInt(row);
			$('div [id^="l0bv0Word' + row + '_v"] div').removeClass('hiddenCheck');
		}
	} else {
		nextpage();
	}
}

function WS001() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('div [id^="WS001Word' + row + 'preCheck"]').removeClass('hiddenCheck');
		} else {
			row = parseInt(row);
			$('div [id^="WS001Word' + row + '_v"] div').removeClass('hiddenCheck');
		}
	} else {
		nextpage();
	}
}

function WS004() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('#WS004Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');
		} else {
			row = parseInt(row);
			$('div [id^="WS004Word' + row + 'Check"] div').removeClass('hiddenCheck');
		}
	} else {
		nextpage();
	}
}

function WS005() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('#WS005Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');
		} else {
			row = parseInt(row);
			$('div [id^="WS005Word' + row + 'Check"] div').removeClass('hiddenCheck');
		}
	} else {
		nextpage();
	}
}


function l0ev0() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 3 + 1) {
		var row = parseInt((step - 1) / 3) + 1;
		switch (step % 3) {
			case 1:
				$('div [id^="l0ev0Word' + row + 'Col1"] div').removeClass('hiddenCheck');
				break;
			case 2:
				$('div [id^="l0ev0Word' + row + 'Col2"] div').removeClass('hiddenCheck');
				break;
				break;
			case 0:
				$('div [id^="l0ev0Word' + row + 'Schwa"] span').removeClass('schwaHidden');
				break;
		}
	} else {
		nextpage();
	}
}

function l0fv0() {
	step++;
	if (step < lessonData.pages[pageNum].words.length + 1) {
		var row = step;
		$('div [id^="l0fv0Word' + row + '"] div').removeClass('hiddenCheck');

	} else {
		nextpage();
	}
}

function l4bv1() {
	step++;
	if (step > lessonData.pages[pageNum].words.length) {
		nextpage();
	} else {
		if (step > 0) {
			if (lessonData.pages[pageNum].words[step - 1].real) {
				$('#l4bv1Word' + step + 'Check1').removeClass('hiddenCheck');
			} else {
				$('#l4bv1Word' + step + 'Check2').removeClass('hiddenCheck');
			}
		}
	}
}

function l0cv0() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('div [id^="l0cv0Word' + row + 'preCheck"]').removeClass('hiddenCheck');
		} else {
			row = parseInt(row);
			$('div [id^="l0cv0Word' + row + '_v"] div').removeClass('hiddenCheck');
		}
	} else {
		nextpage();
	}
}

function GL001() {
	step++;
	var subStep = step % 5;
	var stepIndex = step / 5;
	if (step < 30) {
		switch (true) {
			case (subStep == 1):
				$('#GL001Light1').addClass('stopRed');
				break;
			case (subStep == 2):
				$('#GL001Light2').addClass('stopYellow');
				break;
			case (subStep == 3):
				$('#GL001Light3').addClass('stopGreen');
				break;
			case (subStep == 4):
				$('#GL001Tile').fadeOut(100);
				break;
			case (subStep == 0):
				$('#GL001').fadeOut(100, function () {
					if (stepIndex < 3) {
						$('#GL001TileContent').html(unitData.units[unitNum - 1].ts[stepIndex]);
						$('#GL001PhonemicContent').html(getPhonemic(unitData.units[unitNum - 1].ts[stepIndex]));
					} else {
						$('#GL001TileContent').html(unitData.units[unitNum - 1].ps[stepIndex - 3]);
						$('#GL001PhonemicContent').html(getPhonemic(unitData.units[unitNum - 1].ps[stepIndex - 3]));
					}
					$('#GL001PhonemicContent').hide();
					$('#GL001Tile').fadeIn(100, function () {
						$('#GL001PhonemicContent').show();
					});
					$('.stoplight').removeClass('stopRed');
					$('.stoplight').removeClass('stopYellow');
					$('.stoplight').removeClass('stopGreen');
					$('#GL001').fadeIn(100);
				});
				break;
		}
	} else {
		nextpage();
	}
}

function GL002() {
	step++;
	switch (true) {
		case (step == 1):
			$('#GL002Tile1').addClass('hidden');
			$('#GL002Phoneme1').removeClass('hidden');
			break;
		case (step == 2):
			$('#GL002Phoneme1').addClass('hidden');
			$('#GL002Tile2').removeClass('hidden');
			break;
		case (step == 3):
			$('#GL002Tile2').addClass('hidden');
			$('#GL002Phoneme2').removeClass('hidden');
			break;
		case (step == 4):
			$('#GL002Phoneme2').addClass('hidden');
			$('#GL002Tile3').removeClass('hidden');
			break;
		case (step == 5):
			$('#GL002Tile3').addClass('hidden');
			$('#GL002Phoneme3').removeClass('hidden');
			break;
		case (step == 6):
			$('#GL002Phoneme3').addClass('hidden');
			$('#GL002Tile4').removeClass('hidden');
			break;
		case (step == 7):
			$('#GL002Tile4').addClass('hidden');
			$('#GL002Phoneme4').removeClass('hidden');
			break;
		case (step == 8):
			$('#GL002Phoneme4').addClass('hidden');
			$('#GL002Tile5').removeClass('hidden');
			break;
		case (step == 9):
			$('#GL002Tile5').addClass('hidden');
			$('#GL002Phoneme5').removeClass('hidden');
			break;
		case (step == 10):
			$('#GL002Phoneme5').addClass('hidden');
			$('#GL002Tile6').removeClass('hidden');
			break;
		case (step == 11):
			$('#GL002Tile6').addClass('hidden');
			$('#GL002Phoneme6').removeClass('hidden');
			break;
		case (step == 12):
			$('#GL002Phoneme6').addClass('hidden');
			$('#GL002Tile7').removeClass('hidden');
			break;
		case (step == 13):
			$('#GL002Tile7').addClass('hidden');
			$('#GL002Phoneme7').removeClass('hidden');
			break;
		case (step == 14):
			$('#GL002Phoneme7').addClass('hidden');
			$('#GL002Tile8').removeClass('hidden');
			break;
		case (step == 15):
			$('#GL002Tile8').addClass('hidden');
			$('#GL002Phoneme8').removeClass('hidden');
			break;
		case (step == 16):
			$('#GL002Phoneme8').addClass('hidden');
			$('#GL002Tile9').removeClass('hidden');
			break;
		case (step == 17):
			$('#GL002Tile9').addClass('hidden');
			$('#GL002Phoneme9').removeClass('hidden');
			break;
		case (step == 18):
			$('#GL002Phoneme9').addClass('hidden');
			nextpage();
			break;
	}
}

function GL003() {
	if (index < wordArray.length) {
		step++;
		switch (true) {
			case (step == 1):
				$('#GL003Light1').addClass('stopRed');
				break;
			case (step == 2):
				$('#GL003Light2').addClass('stopYellow');
				break;
			case (step == 3):
				$('#GL003Light3').addClass('stopGreen');
				break;
			case (step == 4):
				step = 0;
				index++;
				if (index == wordArray.length) {
					nextpage();
				} else {
					$('#GL003').fadeOut(100, function () {
						$('#GL003HeartWord').html('<div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile1"><div id="GL001TileContent" class="ltContentLarge">' + wordArray[index][0] + '</div></div></div><div class="emSpace"></div><div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile2"><div id="GL001TileContent" class="ltContentLarge">' + wordArray[index][1] + '</div></div></div><div class="emSpace"></div><div class="ltBoxLarge"><div class="ltLarge" id="GL003Tile3"><div id="GL001TileContent" class="ltContentLarge">' + wordArray[index][2] + '</div></div></div>');
						$('.stoplight').removeClass('stopRed');
						$('.stoplight').removeClass('stopYellow');
						$('.stoplight').removeClass('stopGreen');
						$('#GL003').fadeIn(100);
					});
				}
				break;
		}

	} else {
		nextpage();
	}
}

function GH001() {
	if (index < wordArray.length) {
		step++;
		switch (true) {
			case (step == 1):
				$('#GH001Light1').addClass('stopRed');
				break;
			case (step == 2):
				$('#GH001Light2').addClass('stopYellow');
				break;
			case (step == 3):
				$('#GH001Light3').addClass('stopGreen');
				break;
			case (step == 4):
				step = 0;
				index++;
				$('#GH001').fadeOut(100, function () {
					$('#GH001HeartWord').html(wordArray[index]);
					$('.stoplight').removeClass('stopRed');
					$('.stoplight').removeClass('stopYellow');
					$('.stoplight').removeClass('stopGreen');
					if (index == wordArray.length) {
						nextpage();
					} else {
						$('#GH001').fadeIn(100);
					}
				});
				break;
		}

	} else {
		nextpage();
	}
}

function GH002() {
	step++;
	if (step < 9) {
		$('#GH002heartWord' + step).addClass('hidden');
		$('#GH002heartWord' + (step + 1)).removeClass('hidden');
	} else {
		nextpage();
	}
}

function GH003() {
	if (index < wordArray.length) {
		step++;
		switch (true) {
			case (step == 1):
				$('#GH003Light1').addClass('stopRed');
				break;
			case (step == 2):
				$('#GH003Light2').addClass('stopYellow');
				break;
			case (step == 3):
				$('#GH003Light3').addClass('stopGreen');
				break;
			case (step == 4):
				step = 0;
				index++;
				if (index == wordArray.length) {
					nextpage();
				} else {
					$('#GH003').fadeOut(100, function () {
						$('#GH003HeartWord').html(wordArray[index][0] + ', ' + wordArray[index][1] + ', ' + wordArray[index][2]);
						$('.stoplight').removeClass('stopRed');
						$('.stoplight').removeClass('stopYellow');
						$('.stoplight').removeClass('stopGreen');
						$('#GH003').fadeIn(100);
					});
				}
				break;
		}

	} else {
		nextpage();
	}
}

function GL004() {
	step++;
	if (step < 4) {
		$('#GL004Blocker' + (step - 1)).removeClass('hidden');
		$('#GL004Blocker' + step).addClass('hidden');
	} else {
		if (step < 8) {
			if (step == 4) {
				$('#GL004 .readARowBlocker').removeClass('hidden');
			} else {
				$('#GL004 .readARowBlocker').removeClass('hidden');
				$('#GL004Blocker' + (step - 4)).addClass('hidden');
			}
		} else {
			nextpage();
		}
	}
}

function GH004() {
	step++;
	if (step < 4) {
		$('#GH004Blocker' + (step - 1)).removeClass('hidden');
		$('#GH004Blocker' + step).addClass('hidden');
	} else {
		if (step < 8) {
			if (step == 4) {
				$('#GH004 .readARowBlocker').removeClass('hidden');
			} else {
				$('#GH004 .readARowBlocker').removeClass('hidden');
				$('#GH004Blocker' + (step - 4)).addClass('hidden');
			}
		} else {
			nextpage();
		}
	}
}

function l2av2() {
	step++;
	switch (true) {
		case (step == 1):
			$('#l2av2Tile1').addClass('hidden');
			$('#l2av2Phoneme1').removeClass('hidden');
			break;
		case (step == 2):
			$('#l2av2Phoneme1').addClass('hidden');
			$('#l2av2Tile2').removeClass('hidden');
			break;
		case (step == 3):
			$('#l2av2Tile2').addClass('hidden');
			$('#l2av2Phoneme2').removeClass('hidden');
			break;
		case (step == 4):
			$('#l2av2Phoneme2').addClass('hidden');
			$('#l2av2Tile3').removeClass('hidden');
			break;
		case (step == 5):
			$('#l2av2Tile3').addClass('hidden');
			$('#l2av2Phoneme3').removeClass('hidden');
			break;
		case (step == 6):
			$('#l2av2Phoneme3').addClass('hidden');
			$('#l2av2Tile4').removeClass('hidden');
			break;
		case (step == 7):
			$('#l2av2Tile4').addClass('hidden');
			$('#l2av2Phoneme4').removeClass('hidden');
			break;
		case (step == 8):
			$('#l2av2Phoneme4').addClass('hidden');
			$('#l2av2Tile5').removeClass('hidden');
			break;
		case (step == 9):
			$('#l2av2Tile5').addClass('hidden');
			$('#l2av2Phoneme5').removeClass('hidden');
			break;
		case (step == 10):
			$('#l2av2Phoneme5').addClass('hidden');
			$('#l2av2Tile6').removeClass('hidden');
			break;
		case (step == 11):
			$('#l2av2Tile6').addClass('hidden');
			$('#l2av2Phoneme6').removeClass('hidden');
			break;
		case (step == 12):
			$('#l2av2Phoneme6').addClass('hidden');
			$('#l2av2Tile7').removeClass('hidden');
			break;
		case (step == 13):
			$('#l2av2Tile7').addClass('hidden');
			$('#l2av2Phoneme7').removeClass('hidden');
			break;
		case (step == 14):
			$('#l2av2Phoneme7').addClass('hidden');
			$('#l2av2Tile8').removeClass('hidden');
			break;
		case (step == 15):
			$('#l2av2Tile8').addClass('hidden');
			$('#l2av2Phoneme8').removeClass('hidden');
			break;
		case (step == 16):
			$('#l2av2Phoneme8').addClass('hidden');
			$('#l2av2Tile9').removeClass('hidden');
			break;
		case (step == 17):
			$('#l2av2Tile9').addClass('hidden')
			$('#l2av2Phoneme9').removeClass('hidden');
			break;
		case (step == 18):
			$('#l2av2Phoneme9').addClass('hidden');
			nextpage();
			break;
	}
}

function l2bv2() {
	step++;
	switch (true) {
		case (step == 1):
			$('#l2bv2PhonemicContent1').addClass('hidden');
			$('#l2bv2PhonemicContent2').removeClass('hidden');
			break;
		case (step == 2):
			$('#l2bv2PhonemicContent2').addClass('hidden');
			$('#l2bv2PhonemicContent3').removeClass('hidden');
			break;
		case (step == 3):
			$('#l2bv2PhonemicContent3').addClass('hidden');
			$('#l2bv2PhonemicContent4').removeClass('hidden');
			break;
		case (step == 4):
			$('#l2bv2PhonemicContent4').addClass('hidden');
			$('#l2bv2PhonemicContent5').removeClass('hidden');
			break;
		case (step == 5):
			$('#l2bv2PhonemicContent5').addClass('hidden');
			$('#l2bv2PhonemicContent6').removeClass('hidden');
			break;
		case (step == 6):
			$('#l2bv2PhonemicContent6').addClass('hidden');
			$('#l2bv2PhonemicContent7').removeClass('hidden');
			break;
		case (step == 7):
			$('#l2bv2PhonemicContent7').addClass('hidden');
			$('#l2bv2PhonemicContent8').removeClass('hidden');
			break;
		case (step == 8):
			$('#l2bv2PhonemicContent8').addClass('hidden');
			$('#l2bv2PhonemicContent9').removeClass('hidden');
			break;
		case (step == 9):
			$('#l2bv2PhonemicContent9').addClass('hidden');
			nextpage();
			break;
	}
}

function l2cv2() {
	step++;
	if (step < 9) {
		$('#l2cv2heartWord' + step).addClass('hidden');
		$('#l2cv2heartWord' + (step + 1)).removeClass('hidden');
	} else {
		nextpage();
	}
}

function l2dv2() {
	step++;
	if (step < 9) {
		$('#l2dv2heartWord' + step).addClass('hidden');
		$('#l2dv2heartWord' + (step + 1)).removeClass('hidden');
	} else {
		nextpage();
	}
}

function l2ev2() {
	nextpage();
}

//SB Syllaboards///////////////////////////////////////////
function SB001() {
	step++;
	var total = lessonData.pages[pageNum].syllables.length;
	if (step < total * 2) {
		switch (step % 2) {
			case 1:
				var leftStop = $('#SB001SylBox').width() - $('#SB001Arrow').width();
				$('#SB001Arrow').animate({
					left: leftStop + "px"
				}, 1000);
				break;
			case 0:
				var syls = lessonData.pages[pageNum].syllables[step / 2];
				$('#SB001').html('<div id="SB001SylBox" class="sylBox"><div id="SB001Arrow" class="letterTileUpArrow"></div></div>');
				for (i = 0; i < syls; i++) {
					$('#SB001SylBox').append('<div id="SB001SylBoard' + i + '" class="syllaboardTile"><div id="SB001SylBoardContent' + i + '" class="syllaboardTileContent">&nbsp;</div></div>');
				}
				$('#SB001Arrow').css('left', '0px');
				$('#SB001Arrow').css('top', '9em');
				break;
		}
	} else {
		nextpage();
	}
}

function SB003() {
	step++;
	if (step == 1) {
		step += 1;
	}
	var clickArray = [];
	var underlines = 0;
	var circles = 0;
	var vowels = false;
	var totalSteps = 0;
	var u1 = true;
	var u2 = true;
	var u3 = true;
	var u4 = true;
	var u5 = true;
	var u6 = true;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		u1 = true;
		u2 = true;
		u3 = true;
		u4 = true;
		u5 = true;
		u6 = true;
		underlines = 0;
		circles = 0;
		vowels = false;
		for (j = 0; j < parseText.length; j++) {
			var currChar = parseText.charAt(j);
			switch (currChar) {
				case '1':
					if (u1) {
						underlines++;
						u1 = false;
					}
					break;
				case '2':
					if (u2) {
						underlines++;
						u2 = false;
					}
					break;
				case '3':
					if (u3) {
						underlines++;
						u3 = false;
					}
					break;
				case '4':
					if (u4) {
						underlines++;
						u4 = false;
					}
					break;
				case '5':
					if (u5) {
						underlines++;
						u5 = false;
					}
					break;
				case '6':
					if (u6) {
						underlines++;
						u6 = false;
					}
					break;
				case '(':
					circles++;
					break;
				case '*':
					vowels = true;
					break;
			}
		}
		totalSteps += underlines + circles;
		if (vowels) {
			totalSteps += 4;
		} else {
			totalSteps += 3;
		}
		clickArray.push({
			under: underlines,
			circ: circles,
			vow: vowels,
			total: totalSteps
		})
	}
	if (step <= clickArray[clickArray.length - 1].total) {
		var word = 0;
		while (step > clickArray[word].total) {
			word++;
		}
		var subClicks = clickArray[word].under;
		subClicks += clickArray[word].circ;

		if (clickArray[word].vow) {
			subClicks += 3;
		} else {
			subClicks += 2;
		}



		var subStep = subClicks + step - clickArray[word].total;
		console.log(clickArray);
		console.log('word:' + word);
		console.log('subStep:' + subStep);
		if (subStep > 0) {
			if (subStep <= clickArray[word].under) {
				$('.SB003Underline' + subStep).removeClass('underlineHidden');
			} else {
				if (subStep <= clickArray[word].under + clickArray[word].circ) {
					var subCircle = subStep - clickArray[word].under;
					$('#SB003Circle' + subCircle).removeClass('circleHidden');
				} else {
					if (clickArray[word].vow) {
						if (subStep < subClicks - 1) {
							$('#SB003 .syllaboardTile').fadeIn(500);
						} else {
							if (subStep < subClicks) {
								$('#SB003Boards span.SB003Vowel').removeClass('hiddenText');
							} else {
								$('#SB003Boards span.SB003Consonant').removeClass('hiddenText');
							}

						}

					}
					if (!clickArray[word].vow) {
						if (subStep < subClicks) {
							$('#SB003 .syllaboardTile').fadeIn(500);

						} else {
							$('#SB003Boards span.SB003Vowel').removeClass('hiddenText');
							$('#SB003Boards span.SB003Consonant').removeClass('hiddenText');
						}

					}

				}
			}


		} else {
			console.log('redraw screen');
			var parseText = lessonData.pages[pageNum].words[word];
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
		}
	} else {
		nextpage();
	}
}
/*var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
							htmlString2 += '<span class="SB003Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB003v' + vowelCount + '" class="SB003Vowel">';
						htmlString2 += '<span class="SB003Vowel">';
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB003Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB003Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="SB003Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB003TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB003Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB003TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB003Boards').html(syllaDiv);
			$('#SB003Boards span').addClass('hiddenText');
			$('#SB003Boards span').css('transition', 'all .5s 0s');
			$('#SB003 .syllaboardTile').hide();
			$('#SB003Word').html(htmlString);
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			if (stepper < tempVowels + 1) {
				$('#SB003v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB003v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case tempVowels + 1:
						//$('#SB003 .syllaboardTileContent').hide();
						$('#SB003 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + 2:
						//vowels
						$('#SB003Boards span.SB003Vowel').removeClass('hiddenText');
						break;
					case tempVowels + 3:
						//rest of word
						$('#SB003Boards span.SB003Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}
}*/

function MI002() {
	step++;
	var remainder1 = step % 3;
	var currentStep = parseInt(step / 3) + 1;
	if (step < 36) {
		if (remainder1 == 2) {
			$('#MI002Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 1) {
			$('#MI002Word' + currentStep + ' .wordPartsVowel').removeClass('vowelNoStroke');
		}
		if (remainder1 == 0) {
			$('#MI002Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#MI002Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
		}
	} else {
		nextpage();
	}
}

function WS008() {
	step++;
	switch (step) {
		case 1:
			$('#WS008Word1Circ1').removeClass('hiddenCirc');
			$('#WS008Word1Circ2').removeClass('hiddenCirc');
			break;
		case 2:
			$('div [id^="WS008Word1_v"] div').removeClass('hiddenCheck');
			break;
		case 3:
			$('#WS008Word2Circ1').removeClass('hiddenCirc');
			$('#WS008Word2Circ2').removeClass('hiddenCirc');
			break;
		case 4:
			$('div [id^="WS008Word2_v"] div').removeClass('hiddenCheck');
			break;
		case 5:
			$('#WS008Word3Circ1').removeClass('hiddenCirc');
			$('#WS008Word3Circ2').removeClass('hiddenCirc');
			break;
		case 6:
			$('div [id^="WS008Word3_v"] div').removeClass('hiddenCheck');
			break;
		case 7:
			$('#WS008Word4Circ1').removeClass('hiddenCirc');
			$('#WS008Word4Circ2').removeClass('hiddenCirc');
			break;
		case 8:
			$('div [id^="WS008Word4_v"] div').removeClass('hiddenCheck');
			break;
		case 9:
			nextpage();
			break;

	}

}

function SI002() {
	step++;
	var stepCount = 1;
	var word = 1;
	var letter = 0;
	var syl = 1;
	var parseCount = 0;
	var radio = true;
	while (stepCount < step + 1 && word < lessonData.pages[pageNum].words.length + 1) {
		var parseText = lessonData.pages[pageNum].words[word - 1];
		if (parseText.charAt(parseCount) == '-') {
			letter++;
			stepCount++
			parseCount++;
		} else {
			if (parseText.charAt(parseCount) == '/') {
				letter = 0;
				syl++;
				parseCount++;
			} else {
				if (parseText.charAt(parseCount) != '/' && parseText.charAt(parseCount) != '-') {
					parseCount++;
				}
			}
		}
		if (parseCount == parseText.length + 1) {
			if (radio) {
				radio = false;
			} else {
				radio = true;
				word++;
			}
			letter = 0;
			syl = 1;
			parseCount = 0;
		}
	}
	if (word > lessonData.pages[pageNum].words.length) {
		nextpage();
	} else {
		if (radio) {
			$('#SI002w' + (word) + 's' + syl + 'l' + (letter) + 'r').removeClass('radioButtonHidden');
		} else {
			$('#SI002w' + (word) + 's' + syl + 'l' + (letter)).removeClass('hiddenText');
		}
	}
}

function SB002() {
	step++;
	if (step < 2) {
		//animate tile 1
		$('#SB002Tile1').addClass('buildWordTileNoStroke');
		$('#SB002Tile2').addClass('buildWordTileNoStroke');

	} else {
		nextpage();
	}
}

function LT007() {
	step++;
	var word = 0;
	var subStep = 0;
	var subStepper = 0;
	for (i = 0; i < step; i++) {
		var wordText = lessonData.pages[pageNum].words[word];
		var arrowCount = 0;
		var closedCount = 0;
		for (j = 0; j < wordText.length; j++) {
			var currChar = wordText.charAt(j);
			if (currChar == '/') {
				arrowCount++;
			}
			if (currChar == "*") {
				closedCount++;
			}
		}
		subStep = arrowCount + closedCount;
		if (subStepper < subStep) {
			subStepper++;
		} else {
			subStepper = 0;
			word++;
		}
	}
	if (word < lessonData.pages[pageNum].words.length) {
		switch (subStepper) {
			case 1:
				$('#LT007Arrow').fadeIn(250);
				break;
			case 2:
				$('#LT007End').fadeIn(250);
				break;
			case 0:
				$('#LT007Arrow').css('display', 'none');
				$('#LT007End').css('display', 'none');
				var parseText = lessonData.pages[pageNum].words[word];
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
		}


	} else {
		nextpage();
	}



}





function LT008() {
	step++;
	if (step < lessonData.pages[pageNum].words.length) {
		var parseText = lessonData.pages[pageNum].words[step];
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
	} else {
		nextpage();
	}
}

function LT009() {
	step++;
	if (step < lessonData.pages[pageNum].words.length) {
		var parseText = lessonData.pages[pageNum].words[step];
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
		$('#LT009LetterTiles').html(htmlString);
		$('div [id^="LT009Tile"]').fadeIn(250);
	} else {
		nextpage();
	}
}

function MI001() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var letter = 0;
	var blockCount = 0;
	for (i = 0; i < step; i++) {
		blockCount = 0;
		letter++;
		for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
			if (lessonData.pages[pageNum].words[word].charAt(j) == '-') {
				blockCount++;
			}
		}
		if (letter == blockCount + 1) {
			word++;
			letter = 1;
			blockCount = 0;
			if (word < lessonData.pages[pageNum].words.length) {
				for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
					if (lessonData.pages[pageNum].words[word].charAt(j) == '-') {
						blockCount++;
					}
				}
			}
		}
		if (word < lessonData.pages[pageNum].words.length) {
			if (letter > 0 && letter <= blockCount) {
				$('#MI001w' + (word + 1) + 'l' + (letter)).addClass('markItUnderLine');
			}
		}

		if (word + 1 > lessonData.pages[pageNum].words.length) {
			nextpage();
		}

	}

}

function WS006() {
	step++;
	if (step > lessonData.pages[pageNum].words.length) {
		nextpage();
	} else {
		if (step > 0) {
			if (lessonData.pages[pageNum].words[step - 1].real) {
				$('#WS006Word' + step + 'Check1').removeClass('hiddenCheck');
			} else {
				$('#WS006Word' + step + 'Check2').removeClass('hiddenCheck');
			}
		}
	}
}

function SI001() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var blocks = 0;
	var letter = 0;
	var radio = true;
	for (i = 0; i < step; i++) {
		letter++;
		blocks = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
			if (lessonData.pages[pageNum].words[word].charAt(j) == '-') {
				blocks++;
			}
		}
		if (letter == blocks + 1) {

			if (radio) {
				radio = false;
			} else {
				radio = true;

				word++;
			}
			letter = 1;
			//show new word here
		}
		if (word < lessonData.pages[pageNum].words.length) {
			if (radio) {
				if (letter > 0 && letter <= blocks) {
					$('#SI001w' + (word + 1) + 'l' + (letter) + 'r').addClass('radioButtonSelect');
				}
			} else {
				$('#SI001w' + (word + 1) + 'l' + (letter)).removeClass('hiddenText');
			}
		}

		if (word + 1 > lessonData.pages[pageNum].words.length) {
			nextpage();
		}

	}

}

function SS001() {
	step++;
	switch (step) {
		case 1:
			$('#SS001Span1').removeClass('hiddenBorder');
			break;
		case 2:
			$('#SS001U1').removeClass('hiddenBorder');
			break;
		case 3:
			$('#SS001Span2').removeClass('hiddenBorder');
			break;
		case 4:
			$('#SS001U2').removeClass('hiddenBorder');
			break;
		case 5:
			nextpage();
			break;
	}
}

function SS002() {
	step++;
	switch (step) {
		case 1:
			$('div [id^="SS002Span"]').removeClass('hiddenBorder');
			break;
		case 2:
			nextpage();
			break;
	}
}

function LT001() {
	step++;
	nextpage();
}

function LT002() {
	step++;
	switch (step) {
		case 1:
			$('#LT001TileQu').fadeOut(250);
			$('#LT001TileQ').fadeOut(500, function () {
				$('#LT001ContentQ').html('qu');
				$('#LT001TileQ').fadeIn(250);
			});
			//swap Qu with Q here;
			break;
		case 2:
			nextpage();
			break;
	}
}

function LT003() {
	step++;
	switch (step) {
		case 1:
			$('#LT003Tile1').slideUp(250);
			$('#LT003Content1').fadeIn(250);
			break;
		case 2:
			$('#LT003Tile2').fadeOut(250);
			$('#LT003Content2').fadeIn(250);
			break;
		case 3:
			$('#LT003Tile3').fadeOut(250);
			$('#LT003Content3').fadeIn(250);
			break;
		case 4:
			$('#LT003Tile4').fadeOut(250);
			$('#LT003Content4').fadeIn(250);
			break;
		case 5:
			$('#LT003Tile5').slideUp(250);
			$('#LT003Content5').fadeIn(250);
			break;
		case 6:
			$('#LT003Tile6').fadeOut(250);
			$('#LT003Content6').fadeIn(250);
			break;
		case 7:
			$('#LT003Tile7').fadeOut(250);
			$('#LT003Content7').fadeIn(250);
			break;
		case 8:
			$('#LT003Tile8').fadeOut(250);
			$('#LT003Content8').fadeIn(250);
			break;
		case 9:
			$('#LT003Tile9').slideUp(250);
			$('#LT003Content9').fadeIn(250);
			break;
		case 10:
			$('#LT003Tile10').fadeOut(250);
			$('#LT003Content10').fadeIn(250);
			break;
		case 11:
			$('#LT003Tile11').fadeOut(250);
			$('#LT003Content11').fadeIn(250);
			break;
		case 12:
			$('#LT003Tile12').fadeOut(250);
			$('#LT003Content12').fadeIn(250);
			break;
		case 13:
			$('#LT003Tile13').fadeOut(250);
			$('#LT003Content13').fadeIn(250);
			break;
		case 14:
			$('#LT003Tile14').fadeOut(250);
			$('#LT003Content14').fadeIn(250);
			break;
		case 15:
			$('#LT003Tile15').slideUp(250);
			$('#LT003Content15').fadeIn(250);
			break;
		case 16:
			$('#LT003Tile16').fadeOut(250);
			$('#LT003Content16').fadeIn(250);
			break;
		case 17:
			$('#LT003Tile17').fadeOut(250);
			$('#LT003Content17').fadeIn(250);
			break;
		case 18:
			$('#LT003Tile18').fadeOut(250);
			$('#LT003Content18').fadeIn(250);
			break;
		case 19:
			$('#LT003Tile19').fadeOut(250);
			$('#LT003Content19').fadeIn(250);
			break;
		case 20:
			$('#LT003Tile20').fadeOut(250);
			$('#LT003Content20').fadeIn(250);
			break;
		case 21:
			$('#LT003Tile21').slideUp(250);
			$('#LT003Content21').fadeIn(250);
			break;
		case 22:
			$('#LT003Tile22').fadeOut(250);
			$('#LT003Content22').fadeIn(250);
			break;
		case 23:
			$('#LT003Tile23').fadeOut(250);
			$('#LT003Content23').fadeIn(250);
			break;
		case 24:
			$('#LT003Tile24').fadeOut(250);
			$('#LT003Content24').fadeIn(250);
			break;
		case 25:
			$('#LT003Tile25').fadeOut(250);
			$('#LT003Content25').fadeIn(250);
			break;
		case 26:
			$('#LT003Tile26').fadeOut(250);
			$('#LT003Content26').fadeIn(250);
			break;
		case 27:
			nextpage();
			break;
	}
}

function LT004() {
	step++;
	var vowelArray = [1, 5, 9, 15, 21];
	switch (true) {
		case (step < 8):
			if (step == 1) {
				$('div [id^="LT004PContent"]').css('display', 'none');
				$('#LT004Blocker' + step).fadeOut(250);
			} else {
				var letterBlock = step - 1;
				if ($.inArray(letterBlock, vowelArray) !== -1) {
					$('#LT004Tile' + letterBlock).slideUp(250);
				} else {
					$('#LT004Tile' + letterBlock).fadeOut(250);
				}
				$('#LT004PContent' + letterBlock).fadeIn(250);
			}
			break;
		case (step >= 8 && step < 15):
			if (step == 8) {
				$('div [id^="LT004PContent"]').css('display', 'none');
				$('#LT004Blocker' + 1).fadeIn(250);
				$('#LT004Blocker' + 2).fadeOut(250);
			} else {
				var letterBlock = step - 2;
				if ($.inArray(letterBlock, vowelArray) !== -1) {
					$('#LT004Tile' + letterBlock).slideUp(250);
				} else {
					$('#LT004Tile' + letterBlock).fadeOut(250);
				}
				$('#LT004PContent' + letterBlock).fadeIn(250);
			}
			break;
		case (step >= 15 && step < 23):
			if (step == 15) {
				$('div [id^="LT004PContent"]').css('display', 'none');
				$('#LT004Blocker' + 2).fadeIn(250);
				$('#LT004Blocker' + 3).fadeOut(250);
			} else {
				var letterBlock = step - 3;
				if ($.inArray(letterBlock, vowelArray) !== -1) {
					$('#LT004Tile' + letterBlock).slideUp(250);
				} else {
					$('#LT004Tile' + letterBlock).fadeOut(250);
				}
				$('#LT004PContent' + letterBlock).fadeIn(250);
			}
			break;
		case (step >= 23 && step < 31):
			if (step == 23) {
				$('div [id^="LT004PContent"]').css('display', 'none');
				$('#LT004Blocker' + 3).fadeIn(250);
				$('#LT004Blocker' + 4).fadeOut(250);
			} else {
				var letterBlock = step - 4;
				if ($.inArray(letterBlock, vowelArray) !== -1) {
					$('#LT004Tile' + letterBlock).slideUp(250);
				} else {
					$('#LT004Tile' + letterBlock).fadeOut(250);
				}
				$('#LT004PContent' + letterBlock).fadeIn(250);
			}
			break;
		case (step >= 31):
			nextpage();
			break;
	}
}

function LT005() {
	step++;
	switch (step) {
		case 1:
			$('.consonantTile').fadeOut(250);
			$('.vowelTile').fadeIn(250);
			break;
		case 2:
			nextpage();
			break;
	}
}

function LT006() {
	step++;
	if (step < lessonData.pages[pageNum].words.length + 1) {
		$('#LT006Check' + (step - 1)).removeClass('hiddenCheck');
	} else {
		nextpage();
	}
}

function l2gv0() {
	step++;
	nextpage();

}

function l2hv0() {
	step++;
	nextpage();

}

function l2iv0() {
	step++;
	if (step < 22) {
		$('#l2iv0Tile' + step).fadeOut(250);
		$('#l2iv0Content' + step).fadeIn(250);
	} else {
		nextpage();
	}

}

function l3av0() {
	step++;
	nextpage();
}

function l3bv0() {
	step++;
	nextpage();
}

function l3ev2() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			if (stepper < 3) {
				$('#l3ev2v' + stepper).css('transition', 'all 200ms 0ms');
				$('#l3ev2v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case 3:
						//$('#l3ev2 .syllaboardTileContent').hide();
						$('#l3ev2 .syllaboardTile').fadeIn(200);
						break;

					case 4:
						//vowels
						$('#l3ev2Boards span.l3ev2Vowel').removeClass('hiddenText');
						break;
					case 5:
						//rest of word
						$('#l3ev2Boards span.l3ev2Consonant').removeClass('hiddenText');
						break;

					case 6:
						nextpage();
						break;
				}
			}
		}

	}
}


function WS016() {
	step++;
	var newLeft;
	var newTop;
	if (step / 2 < lessonData.pages[pageNum].words.length) {
		if (step == 1) {
			if (lessonData.pages[pageNum].words[step - 1].column == 'left') {
				newLeft = $('#WS016colLeft').width() / 2 - $('#WS016w1').width() / 2;
			} else {
				newLeft = $('#WS016colLeft').width() * 1.5 - $('#WS016w1').width() / 2;
			}
			$('#WS016w1').css('transition', 'all 1s 0s');
			$('#WS016w1').css('top', '0');
			$('#WS016w1').css('left', newLeft + 'px');

		} else {
			if (step % 2 == 0) {
				newLeft = $('#WS016').width() / 2 - $('#WS016w1').width() / 2;
				newTop = $('#wrapper').height() * .5;
				$('#WS016Blocks').append('<div id="WS016w' + (step / 2 + 1) + '" class="floatingBlock">' + lessonData.pages[pageNum].words[step / 2].word + '</div>');
				$('#WS016w' + (step - 1 / 2)).css('transition', 'none');
				$('#WS016w' + (step / 2 + 1)).css('left', newLeft + 'px');
				$('#WS016w' + (step / 2 + 1)).css('top', newTop + 'px');

			} else {
				//animate next block
				//need to figure out position in column first to calc top
				//figure out position in data set
				var dataSetPos = (step - 1) / 2;
				//loop through dataset Counting lefts and rights
				var leftCount = 0;
				var rightCount = 0;
				for (i = 0; i < dataSetPos; i++) {
					if (lessonData.pages[pageNum].words[i].column == 'left') {
						leftCount++;
					} else {
						rightCount++;
					}
				}
				//now calc newTop and newLeft
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'left') {
					newTop = leftCount * $('#WS016w1').outerHeight() * 1.1;
					newLeft = $('#WS016colLeft').outerWidth() / 2 - $('#WS016w1').width() / 2;
				} else {
					newTop = rightCount * $('#WS016w1').outerHeight() * 1.1;
					newLeft = $('#WS016colLeft').outerWidth() * 1.5 - $('#WS016w1').width() / 2;
				}
				$('#WS016w' + (dataSetPos + 1)).css('transition', 'all 1s 0s');
				$('#WS016w' + (dataSetPos + 1)).css('top', newTop + 'px');
				$('#WS016w' + (dataSetPos + 1)).css('left', newLeft + 'px');
			}
		}
	} else {
		nextpage();
	}
}

function WS019() {

	step++;
	var newLeft;
	var newTop;
	if (step / 2 < lessonData.pages[pageNum].words.length) {
		if (step == 1) {
			if (lessonData.pages[pageNum].words[0].column == 'left') {
				newLeft = $('#WS019Blocks').width() / 6 - $('#WS019w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'center') {
				newLeft = $('#WS019Blocks').width() * .5 - $('#WS019w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'right') {
				newLeft = $('#WS019Blocks').width() * 5 / 6 - $('#WS019w1').width() / 2;
			}
			$('#WS019w1').css('transition', 'all 1s 0s');
			$('#WS019w1').css('top', '0');
			$('#WS019w1').css('left', newLeft + 'px');

		} else {
			if (step % 2 == 0) {
				newLeft = $('#WS019').width() / 2 - $('#WS019w1').width() / 2;
				newTop = $('#wrapper').height() * .5;
				$('#WS019Blocks').append('<div id="WS019w' + (step / 2 + 1) + '" class="floatingBlock">' + lessonData.pages[pageNum].words[step / 2].word + '</div>');
				$('#WS019w' + (step - 1 / 2)).css('transition', 'none');
				$('#WS019w' + (step / 2 + 1)).css('left', newLeft + 'px');
				$('#WS019w' + (step / 2 + 1)).css('top', newTop + 'px');

			} else {
				//animate next block
				//need to figure out position in column first to calc top
				//figure out position in data set
				var dataSetPos = (step - 1) / 2;
				//loop through dataset Counting lefts and rights
				var leftCount = 0;
				var centerCount = 0;
				var rightCount = 0;
				for (i = 0; i < dataSetPos; i++) {
					if (lessonData.pages[pageNum].words[i].column == 'left') {
						leftCount++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'center') {
						centerCount++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'right') {
						rightCount++;
					}
				}
				//now calc newTop and newLeft
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'left') {
					newTop = leftCount * $('#WS019w1').outerHeight() * 1.1;
					newLeft = $('#WS019Blocks').width() / 6 - $('#WS019w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'center') {
					newTop = centerCount * $('#WS019w1').outerHeight() * 1.1;
					newLeft = $('#WS019Blocks').width() * .5 - $('#WS019w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'right') {
					newTop = rightCount * $('#WS019w1').outerHeight() * 1.1;
					newLeft = $('#WS019Blocks').width() * 5 / 6 - $('#WS019w1').width() / 2;
				}
				$('#WS019w' + (dataSetPos + 1)).css('transition', 'all 1s 0s');
				$('#WS019w' + (dataSetPos + 1)).css('top', newTop + 'px');
				$('#WS019w' + (dataSetPos + 1)).css('left', newLeft + 'px');
			}
		}
	} else {
		nextpage();
	}
}

function WS020() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var wordClicks = 0;
		var checkClicks = 0;
		var circleClicks = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[i].word.length; j++) {
			if (lessonData.pages[pageNum].words[i].word.charAt(j) == '_') {
				wordClicks = 1;
			}
			checkClicks = 1;
			circleClicks = 1;
		}
		totalClicks += wordClicks + checkClicks + circleClicks;
		clickArray.push({
			'total': totalClicks,
			'wordclicks': wordClicks,
			'checkclicks': checkClicks,
			'circleclicks': circleClicks
		});
	}


	if (step <= clickArray[clickArray.length - 1].total) {
		var row = 0;
		while (step > clickArray[row].total) {
			row++;
		}
		console.log('row:' + row);
		var subStep = (clickArray[row].wordclicks + clickArray[row].checkclicks + clickArray[row].circleclicks) - (clickArray[row].total - step);
		console.log('subStep:' + subStep);
		if (clickArray[row].wordclicks == 0) {
			subStep++;
		}
		switch (subStep) {
			case 1:
				$('#WS020Table #WS020Word' + (row + 1) + ' .wsunderlineText').css('border-bottom', 'solid .1em #c00');
				break;
			case 2:
				$('div [id^="WS020Word' + (row + 1) + 'Check"] div').removeClass('hiddenCheck');
				$('div [id^="WS020Word' + (row + 1) + 'Check"] div').removeClass('hiddenString');
				break;
			case 3:
				$('#WS020Word' + (row + 1) + 'Circ' + lessonData.pages[pageNum].words[row].circle).removeClass('hiddenCirc');
				break;
		}
	} else {
		nextpage();
	}

}

function WS021() {
	step++;
	if (step < lessonData.pages[pageNum].words.length + 1) {
		var row = step;
		$('#WS021Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');

	} else {
		nextpage();
	}
}

function WS022() {
	step++;
	var clickArray = [];
	var clickSet = []
	var totalClicks = 0;
	var subClicks = 0;

	for (k = 0; k < lessonData.pages[pageNum].words.length; k++) {

		for (i = 0; i < lessonData.pages[pageNum].words[k].length; i++) {
			subClicks = 0;
			for (j = 0; j < lessonData.pages[pageNum].words[k][i].checks.length; j++) {
				if (lessonData.pages[pageNum].words[k][i].checks[j].seq > 0) {
					totalClicks++;
					subClicks++;
				}

			}
			clickArray.push({
				'total': totalClicks,
				'sub': subClicks
			});
		}
		clickSet.push(clickArray);
		totalClicks++;
		clickArray = [];

	}

	console.log(clickSet);

	var clickSetCount = 0;

	var lastStep = clickSet[clickSet.length - 1][clickSet[clickSet.length - 1].length - 1].total;
	console.log('lastStep:' + lastStep);
	if (step <= lastStep) {
		while (step > clickSet[clickSetCount][clickSet[clickSetCount].length - 1].total) {
			clickSetCount++;
		}

		console.log('step:' + step);
		console.log('clickSetCount:' + clickSetCount);

		var word = 0;
		while (step > clickSet[clickSetCount][word].total) {
			word++;
		}
		var subStep = Math.abs(clickSet[clickSetCount][word].total - step - clickSet[clickSetCount][word].sub);

		console.log('word:' + word);
		console.log('subStep:' + subStep);

		if (subStep == 0) {
			//--------------------------------------REDRAW------------
			console.log('redraw');

			//switch banner
			switch (lessonData.pages[pageNum].challenge[clickSetCount]) {
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
			for (i = 0; i < lessonData.pages[pageNum].words[clickSetCount].length; i++) {
				htmlString += '<tr id="WS022WordRow' + (i + 1) + '">';
				var startCount = 1;
				for (j = 0; j < clickSetCount; j++) {
					startCount += lessonData.pages[pageNum].words[j].length;
				}
				console.log(clickSetCount);
				console.log(startCount);
				var bulletNum = i + startCount - 1;
				bulletNum += parseInt(lessonData.pages[pageNum].startNumber);
				htmlString += '<td><div class="dotBulletNum">' + (bulletNum) + '</div></td>';
				htmlString += '<td id="WS022Word' + (i + 1) + '" class="syllablesTableWord threeEm">';

				var parseWord = lessonData.pages[pageNum].words[clickSetCount][i].word;


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
				$('#WS022Table').html(htmlString);
			}
			for (i = 0; i < lessonData.pages[pageNum].words[clickSetCount].length; i++) {
				var checkCount = 0;
				for (j = 0; j < lessonData.pages[pageNum].words[clickSetCount][i].checks.length; j++) {
					if (lessonData.pages[pageNum].words[clickSetCount][i].checks[j].text == '*') {
						checkCount++;


						$('#WS022Word' + (i + 1) + 'Check' + (j + 1)).html('<div id="WS022Word' + (i + 1) + 'CheckBlock' + lessonData.pages[pageNum].words[clickSetCount][i].checks[j].seq + '" class="checkMark hiddenCheck"></div>');
					} else {
						$('#WS022Word' + (i + 1) + 'Check' + (j + 1)).html('<div id="WS022Word' + (i + 1) + 'CheckBlock' + lessonData.pages[pageNum].words[clickSetCount][i].checks[j].seq + '" class="checkMark checkString hiddenString">' + lessonData.pages[pageNum].words[clickSetCount][i].checks[j].text + '</div>');
					}
				}
			}
			//------------------------------END REDRAW-----------------
		} else {
			console.log('#WS022Word' + (word + 1) + 'CheckBlock' + subStep);
			$('#WS022Word' + (word + 1) + 'CheckBlock' + subStep).removeClass('hiddenCheck');
			$('#WS022Word' + (word + 1) + 'CheckBlock' + subStep).removeClass('hiddenString');
		}



	} else {
		nextpage();
	}
	/* if (step <= clickArray[clickArray.length - 1].total) {

		 var word = 0;
		 while (step > clickArray[word].total) {
			 word++;
		 }
		 var subStep = Math.abs(clickArray[word].total - step - clickArray[word].sub);
		 console.log('-----------');
		 console.log('word:' + word);
		 console.log('subStep:' + subStep);

		 var row = step;

		 var currentCell = 0;

		 for (j = 0; j < lessonData.pages[pageNum].words[word].checks.length; j++) {
			 if (lessonData.pages[pageNum].words[word].checks[j].seq == subStep) {
				 currentCell = j + 1;
			 }
		 }


		 console.log('curentCell:' + currentCell);

		 $('#WS022Word' + (word + 1) + 'Check' + currentCell + ' div').removeClass('hiddenCheck');
		 $('#WS022Word' + (word + 1) + 'Check' + currentCell + ' div').removeClass('hiddenString');
		 //$('#WS022Word1CheckBlock1').css('background-color','red');
		 //alert('wtf');
	 } else {
		 nextpage();
	 }*/
}

function WS023() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('#WS023Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');


		} else {
			row = parseInt(row);
			$('div [id^="WS023Word' + row + 'Check"] div').removeClass('hiddenCheck');
			$('div [id^="WS023Word' + row + 'Check"] div').removeClass('hiddenString');
		}
	} else {
		nextpage();
	}
}

function WS024() {

	step++;
	var newLeft;
	var newTop;
	if (step / 2 < lessonData.pages[pageNum].words.length) {
		if (step == 1) {

			if (lessonData.pages[pageNum].words[0].column == 'left') {
				newLeft = $('#WS024Blocks').width() / 8 - $('#WS024w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'leftcenter') {
				newTop = leftCenterCount * $('#WS024w1').outerHeight() * 1.1;
				newLeft = $('#WS024Blocks').width() * 3 / 8 - $('#WS024w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'rightcenter') {
				newTop = rightCenterCount * $('#WS024w1').outerHeight() * 1.1;
				newLeft = $('#WS024Blocks').width() * 5 / 8 - $('#WS024w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'right') {
				newTop = rightCount * $('#WS024w1').outerHeight() * 1.1;
				newLeft = $('#WS024Blocks').width() * 7 / 8 - $('#WS024w1').width() / 2;
			}

			$('#WS024w1').css('transition', 'all 1s 0s');
			$('#WS024w1').css('top', '0');
			$('#WS024w1').css('left', newLeft + 'px');

		} else {
			if (step % 2 == 0) {
				newLeft = $('#WS024').width() / 2 - $('#WS024w1').width() / 2;
				newTop = $('#wrapper').height() * .5;
				$('#WS024Blocks').append('<div id="WS024w' + (step / 2 + 1) + '" class="floatingBlock">' + lessonData.pages[pageNum].words[step / 2].word + '</div>');
				$('#WS024w' + (step - 1 / 2)).css('transition', 'none');
				$('#WS024w' + (step / 2 + 1)).css('left', newLeft + 'px');
				$('#WS024w' + (step / 2 + 1)).css('top', newTop + 'px');

			} else {
				//animate next block
				//need to figure out position in column first to calc top
				//figure out position in data set
				var dataSetPos = (step - 1) / 2;
				//loop through dataset Counting lefts and rights
				var leftCount = 0;
				var leftCenterCount = 0;
				var rightCenterCount = 0;
				var rightCount = 0;
				for (i = 0; i < dataSetPos; i++) {
					if (lessonData.pages[pageNum].words[i].column == 'left') {
						leftCount++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'leftcenter') {
						leftCenterCount++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'rightcenter') {
						rightCenterCount++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'right') {
						rightCount++;
					}
				}
				//now calc newTop and newLeft
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'left') {
					newTop = leftCount * $('#WS024w1').outerHeight() * 1.1;
					newLeft = $('#WS024Blocks').width() / 8 - $('#WS024w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'leftcenter') {
					newTop = leftCenterCount * $('#WS024w1').outerHeight() * 1.1;
					newLeft = $('#WS024Blocks').width() * 3 / 8 - $('#WS024w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'rightcenter') {
					newTop = rightCenterCount * $('#WS024w1').outerHeight() * 1.1;
					newLeft = $('#WS024Blocks').width() * 5 / 8 - $('#WS024w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'right') {
					newTop = rightCount * $('#WS024w1').outerHeight() * 1.1;
					newLeft = $('#WS024Blocks').width() * 7 / 8 - $('#WS024w1').width() / 2;
				}
				$('#WS024w' + (dataSetPos + 1)).css('transition', 'all 1s 0s');
				$('#WS024w' + (dataSetPos + 1)).css('top', newTop + 'px');
				$('#WS024w' + (dataSetPos + 1)).css('left', newLeft + 'px');
			}
		}
	} else {
		nextpage();
	}
}

function WS025() {

	step++;
	var newLeft;
	var newTop;
	if (step / 2 < lessonData.pages[pageNum].words.length) {
		if (step == 1) {

			if (lessonData.pages[pageNum].words[0].column == 'col1') {
				newLeft = $('#WS025Blocks').width() / 10 - $('#WS025w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'col2') {
				newTop = col2Count * $('#WS025w1').outerHeight() * 1.1;
				newLeft = $('#WS025Blocks').width() * 3 / 10 - $('#WS025w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'col3') {
				newTop = col3Count * $('#WS025w1').outerHeight() * 1.1;
				newLeft = $('#WS025Blocks').width() * 5 / 10 - $('#WS025w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'col4') {
				newTop = col4Count * $('#WS025w1').outerHeight() * 1.1;
				newLeft = $('#WS025Blocks').width() * 7 / 10 - $('#WS025w1').width() / 2;
			}
			if (lessonData.pages[pageNum].words[0].column == 'col5') {
				newTop = col5Count * $('#WS025w1').outerHeight() * 1.1;
				newLeft = $('#WS025Blocks').width() * 9 / 10 - $('#WS025w1').width() / 2;
			}

			$('#WS025w1').css('transition', 'all 1s 0s');
			$('#WS025w1').css('top', '0');
			$('#WS025w1').css('left', newLeft + 'px');

		} else {
			if (step % 2 == 0) {
				newLeft = $('#WS025').width() / 2 - $('#WS025w1').width() / 2;
				newTop = $('#wrapper').height() * .5;
				$('#WS025Blocks').append('<div id="WS025w' + (step / 2 + 1) + '" class="floatingBlock">' + lessonData.pages[pageNum].words[step / 2].word + '</div>');
				$('#WS025w' + (step - 1 / 2)).css('transition', 'none');
				$('#WS025w' + (step / 2 + 1)).css('left', newLeft + 'px');
				$('#WS025w' + (step / 2 + 1)).css('top', newTop + 'px');

			} else {
				//animate next block
				//need to figure out position in column first to calc top
				//figure out position in data set
				var dataSetPos = (step - 1) / 2;
				//loop through dataset Counting lefts and rights
				var col1Count = 0;
				var col2Count = 0;
				var col3Count = 0;
				var col4Count = 0;
				var col5Count = 0;
				for (i = 0; i < dataSetPos; i++) {
					if (lessonData.pages[pageNum].words[i].column == 'col1') {
						col1Count++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'col2') {
						col2Count++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'col3') {
						col3Count++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'col4') {
						col4Count++;
					}
					if (lessonData.pages[pageNum].words[i].column == 'col5') {
						col5Count++;
					}
				}
				//now calc newTop and newLeft
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'col1') {
					newTop = col1Count * $('#WS025w1').outerHeight() * 1.1;
					newLeft = $('#WS025Blocks').width() / 10 - $('#WS025w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'col2') {
					newTop = col2Count * $('#WS025w1').outerHeight() * 1.1;
					newLeft = $('#WS025Blocks').width() * 3 / 10 - $('#WS025w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'col3') {
					newTop = col3Count * $('#WS025w1').outerHeight() * 1.1;
					newLeft = $('#WS025Blocks').width() * 5 / 10 - $('#WS025w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'col4') {
					newTop = col4Count * $('#WS025w1').outerHeight() * 1.1;
					newLeft = $('#WS025Blocks').width() * 7 / 10 - $('#WS025w1').width() / 2;
				}
				if (lessonData.pages[pageNum].words[dataSetPos].column == 'col5') {
					newTop = col5Count * $('#WS025w1').outerHeight() * 1.1;
					newLeft = $('#WS025Blocks').width() * 9 / 10 - $('#WS025w1').width() / 2;
				}
				$('#WS025w' + (dataSetPos + 1)).css('transition', 'all 1s 0s');
				$('#WS025w' + (dataSetPos + 1)).css('top', newTop + 'px');
				$('#WS025w' + (dataSetPos + 1)).css('left', newLeft + 'px');
			}
		}
	} else {
		nextpage();
	}
}

function WS026() {
	step++;
	var row = 1;
	var col = 1;
	var stepCount = 1;
	var clickArray = [];
	var clickCount = 0;
	var totalClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		clickCount = 0;
		for (j = 0; j < 3; j++) {
			if (lessonData.pages[pageNum].words[i].checks[j] > 0) {
				clickCount++;
				totalClicks++;
			}
		}
		clickArray.push({
			"total": totalClicks,
			"subClicks": clickCount
		});
	}
	console.log(clickArray);
	if (step < totalClicks + 1) {
		while (step > clickArray[row - 1].total) {

			row++;

			console.log('loop');
		}

		col = ((clickArray[row - 1].total - step) - clickArray[row - 1].subClicks) * -1;
		$('div [id^="WS026Word' + row + 'Check' + col + '"] div').removeClass('hiddenCheck');
	} else {
		nextpage();
	}
}

function WS027() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = step / 2;
		if (step % 2 == 1) {
			row = parseInt(row + .5);
			$('#WS027Word' + row + 'Circ' + lessonData.pages[pageNum].words[row - 1].circle).removeClass('hiddenCirc');


		} else {
			row = parseInt(row);
			$('div [id^="WS027Word' + row + 'Check"] div').removeClass('hiddenCheck');
			$('div [id^="WS027Word' + row + 'Check"] div').removeClass('hiddenString');
		}
	} else {
		nextpage();
	}
}

function WS028() {
	step++;
	var row = 1;
	var col = 1;
	var stepCount = 1;
	var clickArray = [];
	var clickCount = 0;
	var totalClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		clickCount = 1;
		totalClicks++;
		for (j = 0; j < 3; j++) {
			if (lessonData.pages[pageNum].words[i].checks[j] > 0) {
				clickCount++;
				totalClicks++;
			}
		}
		clickArray.push({
			"total": totalClicks,
			"subClicks": clickCount
		});
	}
	console.log(clickArray);
	if (step < totalClicks + 1) {
		while (step > clickArray[row - 1].total) {

			row++;

			console.log('loop');
		}

		col = ((clickArray[row - 1].total - step) - clickArray[row - 1].subClicks) * -1;
		console.log(col);
		if (col < 4) {
			$('div [id^="WS028Word' + row + 'Check' + col + '"] div').removeClass('hiddenCheck');
		} else {
			$('#WS028 .schwa' + row).removeClass('hideCircle');
		}
	} else {
		nextpage();
	}
}

function WS029() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var row = 0;
		if (step % 2 == 0) {
			row = step / 2;
			$('div [id^="WS029Word' + row + 'Check"] div').removeClass('hiddenCheck');
		} else {
			row = (step + 1) / 2;
			$('#WS029Word' + row + ' span').removeClass('hiddenBorder');
		}




	} else {
		nextpage();
	}
}

function WS030() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}
		}
		totalClicks += 2;

		clickArray.push({
			'underline': underline,
			'endClick': totalClicks
		});
		underline = false;
	}


	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;

		switch (subStep) {
			case 2:
				$('div [id^="WS030Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
				$('div [id^="WS030Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				break;
			case 1:
				if (clickArray[word].underline) {
					$('#WS030Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				} else {
					$('div [id^="WS030Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
					$('div [id^="WS030Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				}
				break;
			case 0:
				if (clickArray[word].underline) {
					$('#WS030Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
				} else {
					$('#WS030Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				}
				break;

		}
	} else {
		nextpage();
	}
}

function WS031() {

	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}
		}
		totalClicks += 1;

		clickArray.push({
			'underline': underline,
			'endClick': totalClicks
		});
		underline = false;
	}


	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;

		switch (subStep) {
			case 0:
				$('#WS031Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				break;
			case 1:
				if (clickArray[word].underline) {
					$('#WS031Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
				} else {
					$('#WS031Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				}
				break;

		}
	} else {
		nextpage();
	}
}

function WS032() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	var circle = false;
	var checks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}

			if (parseText.charAt(j) == '(') {
				if (!circle) {
					totalClicks++;
				}
				circle = true;
			}
		}

		for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
			if (lessonData.pages[pageNum].words[i].checks[j] > 0) {
				checks++;
				totalClicks++;
			}
		}

		clickArray.push({
			'underline': underline,
			'circle': circle,
			'checks': checks,
			'endClick': totalClicks
		});
		underline = false;
		circle = false;
		checks = 0;
	}


	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;
		console.log('---------------');
		console.log(clickArray);
		var newSubStep = Math.abs(clickArray[word].endClick - step - clickArray[word].checks);
		console.log('subStep:' + subStep);
		console.log('newSubStep:' + newSubStep);
		if (lessonData.pages[pageNum].circleFirst == 'false') {
			alert('here!');
			switch (newSubStep) {
				case 0:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						if (clickArray[word].underline) {
							$('#WS032Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
						} else {
							$('#WS032Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
						}

					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 1:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 2:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 3:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 4:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
					}

					break;

			}
		} else {
			switch (newSubStep) {
				case 0:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						if (clickArray[word].underline) {
							$('#WS032Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
						} else {
							$('#WS032Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
						}

					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 1:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 2:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 3:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}

					if (!clickArray[word].underline && !clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
					}
					break;
				case 4:
					if (clickArray[word].underline && clickArray[word].circle) {
						$('#WS032Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
					}

					if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
						$('#WS032Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
					}

					break;

			}
		}




	} else {
		nextpage();
	}
}

function WS033() {

	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}
		}
		totalClicks += 1;

		clickArray.push({
			'underline': underline,
			'endClick': totalClicks
		});
		underline = false;
	}

	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;

		switch (subStep) {
			case 0:
				$('div [id^="WS033Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
				$('div [id^="WS033Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				break;
			case 1:
				if (clickArray[word].underline) {
					$('#WS033Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
				} else {
					$('div [id^="WS033Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
					$('div [id^="WS033Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				}
				break;

		}
	} else {
		nextpage();
	}
}

function WS034() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	var circle = false;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}

			if (parseText.charAt(j) == '(') {
				if (!circle) {
					totalClicks++;
				}
				circle = true;
			}
		}
		totalClicks += 2;

		clickArray.push({
			'underline': underline,
			'circle': circle,
			'endClick': totalClicks
		});
		underline = false;
		circle = false;
	}


	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;
		//var newSubStep =  Math.abs(clickArray[word].endClick - step - clickArray[word].checks);
		console.log('subStep:' + subStep);
		//console.log('newSubStep:' + newSubStep);

		switch (subStep) {
			case 1:
				$('#WS034Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				break;

			case 0:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				}
				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('#WS034Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				}
				break;

			case 2:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS034Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
				}
				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				}
				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('#WS034Word' + (word + 1) + 'Circ' + lessonData.pages[pageNum].words[(word + 1) - 1].circle).removeClass('hiddenCirc');
				}
				break;

			case 3:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS034Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #C00');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					if (clickArray[word].underline) {
						$('#WS034Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
					} else {
						$('#WS034Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #C00');
					}

				}

				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenCheck');
					$('div [id^="WS034Word' + (word + 1) + 'Check"] div').removeClass('hiddenString');
				}
				break;

		}
	} else {
		nextpage();
	}

}
function WS035() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	var underline = false;
	var circle = false;
	var checks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i].word;
		for (j = 0; j < parseText.length; j++) {

			if (parseText.charAt(j) == '_') {
				if (!underline) {
					totalClicks++;
				}
				underline = true;
			}

			if (parseText.charAt(j) == '(') {
				if (!circle) {
					totalClicks++;
				}
				circle = true;
			}
		}

		for (j = 0; j < lessonData.pages[pageNum].words[i].checks.length; j++) {
			if (lessonData.pages[pageNum].words[i].checks[j] > 0) {
				checks++;
				totalClicks++;
			}
		}

		clickArray.push({
			'underline': underline,
			'circle': circle,
			'checks': checks,
			'endClick': totalClicks
		});
		underline = false;
		circle = false;
		checks = 0;
	}


	var word = 0;
	if (step <= clickArray[clickArray.length - 1].endClick) {
		while (step > clickArray[word].endClick) {
			word++;
		}
		var subStep = clickArray[word].endClick - step;
		console.log('---------------');
		console.log(clickArray);
		var newSubStep = Math.abs(clickArray[word].endClick - step - clickArray[word].checks);
		console.log('subStep:' + subStep);
		console.log('newSubStep:' + newSubStep);

		/*switch (newSubStep) {
			case 0:
				alert('circle');
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					if (clickArray[word].underline) {
						$('#WS035Word' + (word + 1) + ' .wsunderlineText').css('border-bottom', 'solid .15em #C00');
					} else {
						$('#WS035Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
					}

				}

				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
				}
				break;
			case 1:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('#WS035Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
				}

				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
				}
				break;
			case 2:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check1' + ' div').removeClass('hiddenCheck');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('#WS035Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
				}

				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
				}
				break;
			case 3:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check2' + ' div').removeClass('hiddenCheck');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('#WS035Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
				}

				if (!clickArray[word].underline && !clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
				}
				break;
			case 4:
				if (clickArray[word].underline && clickArray[word].circle) {
					$('#WS035Word' + (word + 1) + 'Check3' + ' div').removeClass('hiddenCheck');
				}

				if ((clickArray[word].underline || clickArray[word].circle) && !(clickArray[word].underline && clickArray[word].circle)) {
					$('#WS035Word' + (word + 1) + 'Check4' + ' div').removeClass('hiddenCheck');
				}

				break;

		}*/


		if (subStep == 0) {
			$('#WS035Word' + (word + 1) + ' .wscircleText').css('border', 'solid .1em #000');
		} else {
			$('#WS035Word' + (word + 1) + 'Check' + (newSubStep + 1) + '  div').removeClass('hiddenCheck');
		}


	} else {
		nextpage();
	}
}
function LT010() {
	step++;
	if (step < lessonData.pages[pageNum].words.length * 2) {
		if ((step % 2) == 1) {
			$('#LT010 .letterToHide').fadeOut(250);
		} else {
			var parseText = lessonData.pages[pageNum].words[step / 2];
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
					}
					charCount++;
				} else {
					htmlString += currChar;

				}

			}
			htmlString += '</div></div></div>';
			//END
			$('#LT010').html(htmlString);
		}
	} else {
		nextpage();
	}
}

function SB004() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	var schwaCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		schwaCount = 0;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/' || parseText.charAt(j) == '*') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
				if (parseText.charAt(j) == '*') {
					if (schwaCount < 1) {
						schwaCount++;
					}
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4 + schwaCount;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
			var htmlString = '';
			var htmlString2 = '';
			var syllaDiv = '<div class="syllaboardHolder">';
			var sylCount = 1;
			inVowel = false;
			vowelCount = 0;
			for (i = 0; i < parseText.length; i++) {
				if (parseText.charAt(i) == '/' || parseText.charAt(i) == '*') {
					if (inVowel) {
						inVowel = false;
						htmlString += '</span>';
						htmlString2 += '</span>';
						if (i < parseText.length - 1) {
							htmlString2 += '<span class="SB004Consonant">';
							inWord = true;
						}
					} else {
						inVowel = true;
						if (inWord) {
							htmlString2 += '</span>';
							inWord = false;
						}
						vowelCount++;
						htmlString += '<span id="SB004v' + vowelCount + '" class="SB004Vowel">';
						if (parseText.charAt(i) == '*') {
							htmlString2 += '<span class="SB004Schwa">';
						} else {
							htmlString2 += '<span class="SB004Vowel">';
						}
					}

				} else {
					if (parseText.charAt(i) != '-') {

						if (htmlString.length < 1) {
							inWord = true;
							htmlString += '<span class="SB004Consonant">';
						}


						if (htmlString2.length < 1) {
							inWord = true;
							htmlString2 += '<span class="SB004Consonant">';
						}

						htmlString += parseText.charAt(i);
						if (inVowel) {
							htmlString2 += parseText.charAt(i);
						} else {
							htmlString2 += parseText.charAt(i);
						}
					} else {
						syllaDiv += '<div id ="SB004Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB004TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
						htmlString2 = '';
						sylCount++;
					}
				}
			}
			if (parseText.charAt(parseText.length - 1) != '/') {
				htmlString += '</span>';
			}
			syllaDiv += '<div id ="SB004Tile' + sylCount + '" class="syllaboardTile"><div class="syllaboardTileContent" id="SB004TileContent' + sylCount + '">' + htmlString2 + '</span>' + '</div></div></div>';
			$('#SB004Boards').html(syllaDiv);
			$('#SB004Boards span').addClass('hiddenText');
			$('#SB004Boards span').css('transition', 'all .5s 0s');
			$('#SB004 .syllaboardTile').hide();
			$('#SB004Word').html(htmlString);
		} else {
			var stepper = step - wordBreaks[word - 1];
			if (stepper < vowels[word - 1] + 1) {
				$('#SB004v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB004v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case vowels[word - 1] + 1:
						$('#SB004 .syllaboardTile').fadeIn(200);
						break;

					case vowels[word - 1] + 2:
						//vowels
						$('#SB004Boards span.SB004Vowel').removeClass('hiddenText');
						$('#SB004Boards span.SB004Schwa').removeClass('hiddenText');
						break;
					case vowels[word - 1] + 3:
						//rest of word
						$('#SB004Boards span.SB004Consonant').removeClass('hiddenText');
						break;
					case vowels[word - 1] + 4:
						//rest of word
						$('#SB004Boards span.SB004Schwa').addClass('underLineSchwa');
						console.log('underline schwa');
						break;
				}
			}
		}

	}

}

function MI003() {
	step++;
	var remainder1 = step % 4;
	var currentStep = parseInt(step / 4) + 1;
	if (step < 48) {
		if (remainder1 == 2) {
			$('#MI003Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 1) {
			$('#MI003Word' + currentStep + ' .wordPartsVowel').removeClass('vowelNoStroke');
		}
		if (remainder1 == 3) {
			$('#MI003Word' + currentStep + ' .wordPartsSchwa').removeClass('schwaNoStroke');
		}
		if (remainder1 == 0) {
			$('#MI003Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#MI003Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
			$('#MI003Word' + (currentStep - 1) + ' .wordPartsSchwa').addClass('schwaNoStroke');
		}
	} else {
		nextpage();
	}
}

function WS009() {
	step++;
	var remainder = step % 3;
	var currWord = parseInt(step / 3) + 1;
	if (step <= 3 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS009Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS009Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				break;
			case 2:
				$('#WS009Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS009Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS009SchwaCount' + (currWord - 1) + ' span').removeClass('hidden');
				break;
		}
		console.log(step);
		console.log(remainder);
	} else {
		nextpage();
	}
}

function WS010() {
	step++;
	var remainder = step % 2;
	var currWord = parseInt(step / 2) + remainder;
	if (step <= 2 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS010Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS010Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS010Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS010Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				break;
		}
		console.log(step);
		console.log(remainder);
	} else {
		nextpage();
	}
}

function WS012() {
	step++;
	var remainder = step % 2;
	var currWord = parseInt(step / 2) + remainder;
	if (step <= 2 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS012Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS012Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				$('#WS012Word' + currWord + 'Col1Check2 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS012Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS012Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				break;
		}
		console.log(step);
		console.log(remainder);
	} else {
		nextpage();
	}
}

function WS013() {
	step++;
	var remainder = step % 3;
	var currWord = parseInt(step / 3) + 1;
	if (step <= 3 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS013Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS013Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				$('#WS013Word' + currWord + 'Col1Check2 div').removeClass('hiddenCheck');
				break;
			case 2:
				$('#WS013Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS013Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				$('#WS013Word' + currWord + 'Col2Check2 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS013SchwaCount' + (currWord - 1) + ' span').removeClass('hidden');
				break;
		}
		console.log(step);
		console.log(remainder);
	} else {
		nextpage();
	}
}

function WS014() {
	step++;
	var remainder = step % 3;
	var currWord = parseInt((step - 1) / 3) + 1;
	if (step <= 3 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS014Word' + currWord + 'Circ1').removeClass('hiddenCirc');
				$('#WS014Word' + currWord + 'Circ2').removeClass('hiddenCirc');
				break;
			case 2:
				$('#WS014Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS014Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				$('#WS014Word' + currWord + 'Col1Check2 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS014Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS014Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				$('#WS014Word' + currWord + 'Col2Check2 div').removeClass('hiddenCheck');
				break;

		}
		console.log('currWord:' + currWord);
		console.log(step);
		console.log('remainder:' + remainder);
	} else {
		nextpage();
	}
}


function LT011() {
	step++;
	if (step <= lessonData.pages[pageNum].words.length) {
		if (step == 1) {
			console.log('fadeIn:E');
			$('#LT011E1 div').fadeIn(250);
		} else {
			$('#LT011E' + (step - 1) + ' div').fadeOut(250);
			$('#LT011E' + (step) + ' div').fadeIn(250);
			console.log('moveE');
		}
	} else {
		nextpage();
	}
}

function CT001() {
	var totalLetters = 0;
	var tempLetters = 0;
	var wordArray = [];
	var testArray = [];

	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var inSound = false;
		tempLetters = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {

			if (lessonData.pages[pageNum].words[i].charAt(j) != '/' && lessonData.pages[pageNum].words[i].charAt(j) != '-') {
				if (!inSound) {
					inSound = true;
					tempLetters++;
					totalLetters++;
					testArray.push(lessonData.pages[pageNum].words[i].charAt(j));
				}
			} else {
				inSound = false;
			}
		}
		wordArray.push(tempLetters);
	}
	step++;
	if (step < totalLetters * 2) {
		//calculate current word and current letter
		var word = 1;
		var letter = 0;
		for (k = 0; k < step; k++) {
			if (letter > wordArray[word - 1] * 2 - 2) {
				word++;
				letter = 0;
			} else {
				letter++;
			}
		}
		if (letter < wordArray[word - 1]) {
			if (letter == 0) {
				letter = 1;
				var parseText = lessonData.pages[pageNum].words[word - 1];
				var charCount = 1;
				var colorCount = 0;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Orange', 'Purple'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var firstChar = true;
				for (i = 0; i < parseText.length; i++) {
					var currChar = parseText.charAt(i);
					if (currChar == '/' || currChar == '-') {
						if (firstChar) {
							firstChar = false;
						} else {
							htmlString += '</div></div></div>';
						}
						htmlColorString += '<div class="letterTileBack">';
						if (currChar == '/') {
							htmlColorString += '<div id="CT001Color' + charCount + '" class="letterTile letterTile' + vowelScheme + ' letterTileHidden"> </div>';
						} else {
							htmlColorString += '<div id="CT001Color' + charCount + '" class="letterTile letterTile' + colorScheme[colorCount] + ' letterTileHidden"> </div>';
							if (colorCount < colorScheme.length - 1) {
								colorCount++;
							} else {
								colorCount = 0;
							}
						}
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

			} else {
				$('#CT001Color' + (letter + 1)).removeClass('letterTileHidden');
			}

		} else {
			$('#CT001Tile' + ((letter + 1) - wordArray[word - 1])).removeClass('letterTileHidden');
		}
	} else {
		nextpage();
	}
}

function CT002() {
	step++;
	var parseText;
	var stepCount = 0;
	var wordCount = 0;
	var charCount = 0;
	var endData = false;
	var buildNew = false;
	var colorCount = 0;
	var htmlString = '';
	var tileColors = ['Green', 'Blue', 'Yellow', 'Purple', 'Orange'];

	while (stepCount < step) {
		stepCount++;
		endData = false;
		buildNew = false;
		if (charCount < lessonData.pages[pageNum].words[wordCount].length - 1) {
			charCount++;

		} else {
			if (charCount == lessonData.pages[pageNum].words[wordCount].length - 1 && wordCount < lessonData.pages[pageNum].words.length - 1) {
				charCount = 0;
				wordCount++;
				buildNew = true;

			} else {
				endData = true;
			}
		}
	}
	if (!endData) {
		if (buildNew) {
			//Build and Change
			var parseText = lessonData.pages[pageNum].words[wordCount];
			htmlString = '';
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

			//End Build
		} else {
			$('#CT002Color' + (charCount + 1)).fadeIn(250);
		}
	} else {
		nextpage();
	}
}

function CT003() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalColors = 0;
	var totalClicks = 0;
	var totalLinks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		totalColors = 0;
		totalLinks = 0;
		var connectIt = true;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '/':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '*':
					totalLetters++;
					totalClicks += 3;
					totalLinks++;
					break;
			}

		}

		clickArray.push({
			'letters': totalLetters,
			'colors': totalColors,
			'clickStart': totalClicks,
			'links': totalLinks,
			'connect': connectIt
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors - (clickArray[currentWord - 1].clickStart - step - clickArray[currentWord - 1].links);
		if (clickArray[currentWord - 1].connect) {
			subClick++;
		}
		console.log('step:' + step);
		console.log('subClick:' + subClick);
		console.log('endpoint:' + clickArray[currentWord - 1].clickStart);

		if (subClick <= clickArray[currentWord - 1].colors) {
			if (subClick == 1) {
				/////////////////////////
				var parseText = lessonData.pages[pageNum].words[currentWord - 1];
				var charCount = 1;
				var consCount = 0;
				var firstChar = true;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var linkCount = 1;
				$('#CT003Connect').css('display', 'none');
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

				//////////////////////////
			}
			var currentColor = subClick;
			$('#CT003Color' + currentColor).fadeIn(250);
		}
		if (subClick <= (clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) && subClick > clickArray[currentWord - 1].colors) {
			var currentLetter = subClick - clickArray[currentWord - 1].colors;
			$('#CT003Tile' + currentLetter).fadeIn(250);
		}
		if (subClick > clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) {
			//console.log('subclick CT003:' + subClick-clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors);
			console.log('here:' + (clickArray[currentWord - 1].clickStart - step));
			if (clickArray[currentWord - 1].clickStart - step == 1) {
				$('#CT003 .tileBackUnderline').fadeIn(250);
			} else {
				var connectLeft = $('#CT003Link1').parent().parent().offset().left - $('#CT003').offset().left;
				connectLeft += $('#CT003Link1').width();
				var connectTop = $('#CT003Link1').offset().top;
				connectTop += $('#CT003Link1').height() * .5;
				var connectWidth = $('#CT003Link2').parent().parent().offset().left - $('#CT003Link1').parent().parent().offset().left;
				$('#CT003Connect').css('left', connectLeft + 'px');
				$('#CT003Connect').css('width', connectWidth + 'px');
				$('#CT003Connect').css('top', connectTop + 'px');
				$('#CT003Connect').fadeIn(250);
			}

		}
	} else {
		nextpage();
	}
}

function CT004() {
	var totalLetters = 0;
	var tempLetters = 0;
	var totalUnderlines = 0; //this can be added to total clicks if numeric underlines are present.
	var wordArray = [];
	var testArray = [];
	var numstring = '123456789';
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var inSound = false;
		tempLetters = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {

			if (numstring.indexOf(lessonData.pages[pageNum].words[i].charAt(j)) >= 0) {
				totalUnderlines++;
			}
			if (lessonData.pages[pageNum].words[i].charAt(j) != '/' && lessonData.pages[pageNum].words[i].charAt(j) != '-' && lessonData.pages[pageNum].words[i].charAt(j) != '*' && lessonData.pages[pageNum].words[i].charAt(j) != '~' && numstring.indexOf(lessonData.pages[pageNum].words[i].charAt(j)) < 0) {
				if (!inSound) {
					inSound = true;
					tempLetters++;
					totalLetters++;
					testArray.push(lessonData.pages[pageNum].words[i].charAt(j));
				}
			} else {
				inSound = false;
			}
		}
		wordArray.push(tempLetters);
	}
	console.log('total letters:' + totalLetters);
	step++;

	if (!lessonData.pages[pageNum].numbers) {
		//Normal

		if (step < totalLetters * 2 + lessonData.pages[pageNum].words.length) {
			//calculate current word and current letter
			var word = 1;
			var letter = 0;
			for (k = 0; k < step; k++) {
				if (letter > wordArray[word - 1] * 2 - 1) {
					word++;
					letter = 0;
				} else {
					letter++;
				}
			}
			if (letter < wordArray[word - 1]) {
				if (letter == 0) {
					letter = 1;
					var parseText = lessonData.pages[pageNum].words[word - 1];
					var charCount = 1;
					var colorCount = 0;
					var colorScheme = ['Green', 'Yellow', 'Blue', 'Orange', 'Purple'];
					var vowelScheme = 'Red';
					var htmlColorString = '';
					var htmlString = '';
					var firstChar = true;
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
							if (currChar == '/' || currChar == '~') {
								htmlColorString += '<div id="CT004Color' + charCount + '" class="letterTile letterTile' + vowelScheme + ' letterTileHidden"> </div>';
							} else {
								htmlColorString += '<div id="CT004Color' + charCount + '" class="letterTile letterTile' + colorScheme[colorCount] + ' letterTileHidden"> </div>';
								if (colorCount < colorScheme.length - 1) {
									colorCount++;
								} else {
									colorCount = 0;
								}
							}
							htmlColorString += '</div>';
							if (currChar == '*' || currChar == '~' || parseInt(currChar) > 0) {
								digraphOn = true;
								digraph++;
								htmlString += '<div id="CT004DG' + digraph + '"  class="underlineLetterTile hideUnderline">';
							}
							htmlString += '<div  class="letterTileBack">';
							htmlString += '<div  id="CT004Tile' + charCount + '" class="letterTile letterTileHidden">';
							if (currChar == '-' || currChar == '*' || parseInt(currChar) > 0) {
								if (parseInt(currChar) > 0) {
									htmlString += '<div id="CT004Content' + parseInt(currChar) + '" class="letterTileContent">';
								} else {
									htmlString += '<div id="CT004Content' + charCount + '" class="letterTileContent">';
								}

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

				} else {
					$('#CT004Color' + (letter + 1)).removeClass('letterTileHidden');
				}

			} else {
				console.log('letter:' + letter);
				console.log('wordArray[word-1]:' + wordArray[word - 1]);
				if (letter == wordArray[word - 1] * 2) {
					$('#CT004 .underlineLetterTile').removeClass('hideUnderline');
				} else {
					$('#CT004Tile' + ((letter + 1) - wordArray[word - 1])).removeClass('letterTileHidden');
				}
			}
		} else {
			nextpage();
		}
	} else {
		//Numeric Underlines
		console.log('numeric:' + totalUnderlines);
		if (step < totalLetters * 2 + totalUnderlines) {

			if (step >= totalLetters * 2) {
				var currentUnderline = step - totalLetters * 2 + lessonData.pages[pageNum].words.length;
				console.log('currentUL:' + currentUnderline);
				$('#CT004DG' + currentUnderline).removeClass('hideUnderline');
			} else {


				//calculate current word and current letter
				var word = 1;
				var letter = 0;
				for (k = 0; k < step; k++) {
					if (letter > wordArray[word - 1] * 2 - 1) {
						word++;
						letter = 0;
					} else {
						letter++;
					}
				}
				if (letter < wordArray[word - 1]) {
					if (letter == 0) {
						letter = 1;
						var parseText = lessonData.pages[pageNum].words[word - 1];
						var charCount = 1;
						var colorCount = 0;
						var colorScheme = ['Green', 'Yellow', 'Blue', 'Orange', 'Purple'];
						var vowelScheme = 'Red';
						var htmlColorString = '';
						var htmlString = '';
						var firstChar = true;
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
								if (currChar == '/' || currChar == '~') {
									htmlColorString += '<div id="CT004Color' + charCount + '" class="letterTile letterTile' + vowelScheme + ' letterTileHidden"> </div>';
								} else {
									htmlColorString += '<div id="CT004Color' + charCount + '" class="letterTile letterTile' + colorScheme[colorCount] + ' letterTileHidden"> </div>';
									if (colorCount < colorScheme.length - 1) {
										colorCount++;
									} else {
										colorCount = 0;
									}
								}
								htmlColorString += '</div>';
								if (currChar == '*' || currChar == '~' || parseInt(currChar) > 0) {
									digraphOn = true;
									digraph++;
									htmlString += '<div id="CT004DG' + digraph + '"  class="underlineLetterTile hideUnderline">';
								}
								htmlString += '<div  class="letterTileBack">';
								htmlString += '<div  id="CT004Tile' + charCount + '" class="letterTile letterTileHidden">';
								if (currChar == '-' || currChar == '*' || parseInt(currChar) > 0) {
									if (parseInt(currChar) > 0) {
										htmlString += '<div id="CT004Content' + parseInt(currChar) + '" class="letterTileContent">';
									} else {
										htmlString += '<div id="CT004Content' + charCount + '" class="letterTileContent">';
									}

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

					} else {
						$('#CT004Color' + (letter + 1)).removeClass('letterTileHidden');
					}

				} else {
					console.log('letter:' + letter);
					console.log('wordArray[word-1]:' + wordArray[word - 1]);
					if (letter == wordArray[word - 1] * 2) {
						$('#CT004 .underlineLetterTile').removeClass('hideUnderline');
					} else {
						$('#CT004Tile' + ((letter + 1) - wordArray[word - 1])).removeClass('letterTileHidden');
					}
				}
			}
		} else {
			nextpage();
		}
	}





}

function CT005() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalColors = 0;
	var totalClicks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		totalColors = 0;
		var connectIt = false;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '/':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '*':
					totalLetters++;
					totalClicks += 1;
					break;
			}

		}

		clickArray.push({
			'letters': totalLetters,
			'colors': totalColors,
			'clickStart': totalClicks,
			'connect': connectIt
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors - (clickArray[currentWord - 1].clickStart - step);
		if (clickArray[currentWord - 1].connect) {
			subClick++;
		}
		console.log('step:' + step);
		console.log('subClick:' + subClick);
		console.log('endpoint:' + clickArray[currentWord - 1].clickStart);

		if (subClick <= clickArray[currentWord - 1].colors) {
			if (subClick == 1) {
				/////////////////////////
				var parseText = lessonData.pages[pageNum].words[currentWord - 1];
				var charCount = 1;
				var consCount = 0;
				var firstChar = true;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var linkCount = 1;
				$('#CT005Connect').css('display', 'none');
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
							//htmlString += '<div class="tileBackUnderline"></div>';
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

				//////////////////////////
			}
			var currentColor = subClick;
			$('#CT005Color' + currentColor).fadeIn(250);
		}
		if (subClick <= (clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) && subClick > clickArray[currentWord - 1].colors) {
			var currentLetter = subClick - clickArray[currentWord - 1].colors;
			$('#CT005Tile' + currentLetter).fadeIn(250);
		}
		if (subClick > clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) {
			if (!clickArray[currentWord - 1].connect || (subClick < clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors + 1)) {
				$('#CT005 .tileBackUnderline').fadeIn(250);
			} else {
				var connectLeft = $('#CT005Link1').parent().parent().offset().left;
				connectLeft += $('#CT005Link1').width() * .2;
				var connectTop = $('#CT005Link1').offset().top;
				connectTop += $('#CT005Link1').height() * .5;
				var connectWidth = $('#CT005Link2').parent().parent().offset().left - $('#CT005Link1').parent().parent().offset().left;
				$('#CT005Connect').css('left', connectLeft + 'px');
				$('#CT005Connect').css('width', connectWidth + 'px');
				$('#CT005Connect').css('top', connectTop + 'px');
				$('#CT005Connect').fadeIn(250);
			}
		}
	} else {
		nextpage();
	}
}


function CT006() {
	step++;
	if (step == 1) {
		step += 1;
	}

	var clickArray = [];
	var totalClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var colorClicks = 0;

		for (c = 0; c < lessonData.pages[pageNum].colors[i].length; c++) {
			if (lessonData.pages[pageNum].colors[i][c].color != 'Blank') {
				colorClicks++;
			}
		}
		var letterClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseText.length; j++) {
			var currChar = parseText.charAt(j);
			if (currChar == '-' || currChar == '/') {
				letterClicks++;
			}
		}
		var underlineClicks = 0;
		var circleClicks = 0;
		for (k = 0; k < parseText.length; k++) {
			var currChar = parseText.charAt(k);
			if (currChar == '_') {
				underlineClicks = 1;
			}
			if (currChar == '(') {
				circleClicks = 1;
			}
		}
		totalClicks += colorClicks + letterClicks + underlineClicks + circleClicks;
		clickArray.push({
			'total': totalClicks,
			'color': colorClicks,
			'letters': letterClicks,
			'underlines': underlineClicks,
			'circles': circleClicks

		});
	}


	if (step <= clickArray[clickArray.length - 1].total) {
		var word = 0;
		while (step > clickArray[word].total) {
			word++;
		}
		var range = clickArray[word].color + clickArray[word].letters;

		var subStep = step - (clickArray[word].total - clickArray[word].color - clickArray[word].letters - clickArray[word].underlines - clickArray[word].circles);

		if (subStep == 1) {

			var parseText = lessonData.pages[pageNum].words[word];
			var colorArray = lessonData.pages[pageNum].colors[word];
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
			}, delay);




		} else {
			if (subStep <= clickArray[word].color) {
				$('#CT006Color' + (subStep)).removeClass('letterTileTransparent');
			} else {
				if (subStep <= clickArray[word].color + clickArray[word].letters) {


					var currentLetter = subStep - clickArray[word].color;
					$('#CT006Tile' + currentLetter).removeClass('letterTileTransparent');
				} else {
					if (subStep <= clickArray[word].color + clickArray[word].letters + clickArray[word].underlines) {

						$('#CT006 .underline').removeClass('underlineHidden');
					} else {
						//clickArray[word].letters - clickArray[word].underlines));
						$('#CT006 .circle').removeClass('circleHidden');
					}

				}
			}
		}
	} else {
		nextpage();
	}
}


function CT007() {
	var totalLetters = 0;
	var totalClicks = 0;
	var tempLetters = 0;
	var wordArray = [];
	var clickArray = [];
	var clickCounter = 0;

	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var inSound = false;
		tempLetters = 0;
		clickCounter = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {

			if (lessonData.pages[pageNum].words[i].charAt(j) != '/' && lessonData.pages[pageNum].words[i].charAt(j) != '-' && lessonData.pages[pageNum].words[i].charAt(j) != '*' && lessonData.pages[pageNum].words[i].charAt(j) != '1' && lessonData.pages[pageNum].words[i].charAt(j) != '2') {
				if (!inSound) {
					inSound = true;
					tempLetters++;
					totalLetters++;
					//testArray.push(lessonData.pages[pageNum].words[i].charAt(j));
				}
			} else {
				if (lessonData.pages[pageNum].words[i].charAt(j) == '1' || lessonData.pages[pageNum].words[i].charAt(j) == '2') {
					clickCounter++;
					totalClicks++;
				}
				inSound = false;
			}
		}
		wordArray.push(tempLetters);
		clickArray.push(clickCounter);
	}
	step++;
	console.log('totalClicks:' + totalClicks);
	if (step < totalLetters * 2 + lessonData.pages[pageNum].words.length + totalClicks) {
		//calculate current word and current letter
		var word = 1;
		var letter = 0;
		for (k = 0; k < step; k++) {
			if (letter > wordArray[word - 1] * 2 + clickArray[word - 1] - 1) {
				word++;
				letter = 0;
			} else {
				letter++;
			}
		}
		if (letter < wordArray[word - 1]) {
			if (letter == 0) {
				letter = 1;
				var parseText = lessonData.pages[pageNum].words[word - 1];
				var charCount = 1;
				var colorCount = 0;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Orange', 'Purple'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var firstChar = true;
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
						if (currChar == '/') {
							htmlColorString += '<div id="CT007Color' + charCount + '" class="letterTile letterTile' + vowelScheme + ' letterTileHidden"> </div>';
						} else {
							htmlColorString += '<div id="CT007Color' + charCount + '" class="letterTile letterTile' + colorScheme[colorCount] + ' letterTileHidden"> </div>';
							if (colorCount < colorScheme.length - 1) {
								colorCount++;
							} else {
								colorCount = 0;
							}
						}
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

			} else {
				$('#CT007Color' + (letter + 1)).removeClass('letterTileHidden');
			}

		} else {
			console.log('letter:' + letter);
			console.log('wordArray[word-1]:' + wordArray[word - 1]);
			if (letter == wordArray[word - 1] * 2 + clickArray[word - 1]) {
				$('#CT007 .underlineLetterTile').removeClass('hideUnderline');
				$('#CT007Color1').fadeIn(250);
				$('#CT007Tile1').fadeIn(250);
				$('#CT007Color2').fadeIn(250);
				$('#CT007Tile2').fadeIn(250);
			} else {
				var hiderIndex = 1 + letter - wordArray[word - 1] * 2;
				console.log('hiderIndex:' + hiderIndex);
				if (hiderIndex > 0) {
					if (hiderIndex == 1) {
						//$('#CT007Color1').fadeOut(250);
						$('#CT007Tile1').fadeOut(250);
					}
					if (hiderIndex == 2) {
						$('#CT007Color1').fadeIn(250);
						$('#CT007Tile1').fadeIn(250);
						//$('#CT007Color2').fadeOut(250);
						$('#CT007Tile2').fadeOut(250);
					}

				} else {
					$('#CT007Tile' + ((letter + 1) - wordArray[word - 1])).removeClass('letterTileHidden');
				}

			}
		}
	} else {
		nextpage();
	}
}


function CT008() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalColors = 0;
	var totalClicks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		totalColors = 0;
		var connectIt = false;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '/':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '*':
					connectIt = true;
					totalLetters++;
					totalClicks += 1;
					break;
			}

		}
		if (connectIt) {
			totalClicks += 2;
		} else {
			totalClicks += 1;
		}

		clickArray.push({
			'letters': totalLetters,
			'colors': totalColors,
			'clickStart': totalClicks,
			'connect': connectIt
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors - (clickArray[currentWord - 1].clickStart - step) + 1;
		if (clickArray[currentWord - 1].connect) {
			subClick++;
		}
		console.log('step:' + step);
		console.log('subClick:' + subClick);
		console.log('endpoint:' + clickArray[currentWord - 1].clickStart);

		if (subClick <= clickArray[currentWord - 1].colors) {
			if (subClick == 1) {
				/////////////////////////
				var parseText = lessonData.pages[pageNum].words[currentWord - 1];
				var charCount = 1;
				var consCount = 0;
				var firstChar = true;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var linkCount = 1;
				$('#CT008Connect').css('display', 'none');
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
				$('#CT008Color1').fadeIn(250);

				//////////////////////////
			}
			var currentColor = subClick;
			$('#CT008Color' + currentColor).fadeIn(250);
		}
		if (subClick <= (clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) && subClick > clickArray[currentWord - 1].colors) {
			var currentLetter = subClick - clickArray[currentWord - 1].colors;
			$('#CT008Tile' + currentLetter).fadeIn(250);
		}
		if (subClick > clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) {
			if (!clickArray[currentWord - 1].connect || (subClick < clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors + 2)) {
				$('#CT008 .tileBackUnderline').fadeIn(250);
			} else {
				var connectLeft = $('#CT008Link1').parent().parent().offset().left;
				connectLeft += $('#CT008Link1').width() * .2;
				var connectTop = $('#CT008Link1').offset().top;
				connectTop += $('#CT008Link1').height() * .9;
				var connectWidth = $('#CT008Link2').parent().parent().offset().left - $('#CT008Link1').parent().parent().offset().left;
				$('#CT008Connect').css('left', connectLeft + 'px');
				$('#CT008Connect').css('width', connectWidth + 'px');
				$('#CT008Connect').css('top', connectTop + 'px');
				$('#CT008Connect').fadeIn(250);
			}
			/*if (subClick < (clickArray[currentWord-1].letters + clickArray[currentWord-1].colors)+1) {
				$('#CT008 .tileBackUnderline').fadeIn(250);
			} else {
				
				var connectLeft = $('#CT008Link1').parent().parent().offset().left;
				connectLeft += $('#CT008Link1').width()*.2;
				var connectTop = $('#CT008Link1').offset().top;
				connectTop += $('#CT008Link1').height()*.9;
				var connectWidth = $('#CT008Link2').parent().parent().offset().left - $('#CT008Link1').parent().parent().offset().left;
				$('#CT008Connect').css('left', connectLeft + 'px');
				$('#CT008Connect').css('width', connectWidth + 'px');
				$('#CT008Connect').css('top', connectTop + 'px');
				$('#CT008Connect').fadeIn(250);
				}
			//} else {
			//	$('#CT008 .tileBackUnderline').fadeIn(250);
			//}*/
		}
	} else {
		nextpage();
	}
}

function CT009() {
	console.log('step:' + step);
	step++;
	if (step < lessonData.pages[pageNum].words.length) {
		//build new html here
		//BEGIN NEW CV CODE
		var parseText = lessonData.pages[pageNum].words[step];
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
				htmlColorString += '<div id="CT009Color' + charCount + '" class="letterTile letterTile' + tileColor + ' letterTileHidden"> </div>';
				htmlColorString += '</div>';

				htmlString += '<div  class="letterTileBack">';
				htmlString += '<div  id="CT009Tile' + charCount + '" class="letterTile letterTileHidden">';
				if (currChar == '-') {
					htmlString += '<div id="CT009Content' + charCount + '" class="letterTileContent">';
				} else {
					htmlString += '<div id="CT009Content' + charCount + '" class="letterTileContent letterTileVowel">';
				}
				charCount++;
			} else {
				htmlString += currChar;

			}

		}
		htmlString += '</div></div></div>';
		//END
		$('#CT009LetterTiles').html(htmlString);
		$('#CT009ColorTiles').html(htmlColorString);
		$('#CT009 #CT009ColorTiles .letterTileHidden').fadeIn(250, function () {
			$('#CT009 #CT009LetterTiles .letterTileHidden').fadeIn(250);
		});
	} else {
		nextpage();
	}

}

function CT010() {
	step++;
	var remainder = step % 2;
	if (step < lessonData.pages[pageNum].words.length * 2) {
		switch (remainder) {
			case 1:
				$('#CT010Arrow').fadeIn(250);
				break;
			case 0:
				//Build next word
				var htmlString = '';
				var parseText = lessonData.pages[pageNum].words[step / 2];
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

				//End Build
				break;

		}

	} else {
		nextpage();
	}
}

function CT011() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalColors = 0;
	var totalClicks = 0;
	var totalLinks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		totalColors = 0;
		totalLinks = 0;
		var connectIt = false;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '/':
					totalLetters++;
					totalColors++;
					totalClicks += 2;
					break;
				case '*':
					totalLetters++;
					totalClicks += 1;
					break;
				case '_':
					totalClicks += 1;
					totalLinks++;
					break;
			}

		}

		clickArray.push({
			'letters': totalLetters,
			'colors': totalColors,
			'clickStart': totalClicks,
			'links': totalLinks,
			'connect': connectIt
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	if (step < endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors - (clickArray[currentWord - 1].clickStart - step - clickArray[currentWord - 1].links);
		if (clickArray[currentWord - 1].connect) {
			subClick++;
		}
		console.log('step:' + step);
		console.log('subClick:' + subClick);
		console.log('endpoint:' + clickArray[currentWord - 1].clickStart);

		if (subClick <= clickArray[currentWord - 1].colors) {
			if (subClick == 1) {
				/////////////////////////
				var parseText = lessonData.pages[pageNum].words[currentWord - 1];
				var charCount = 1;
				var consCount = 0;
				var firstChar = true;
				var colorScheme = ['Green', 'Yellow', 'Blue', 'Purple', 'Orange'];
				var vowelScheme = 'Red';
				var htmlColorString = '';
				var htmlString = '';
				var linkCount = 1;
				$('#CT011Connect').css('display', 'none');
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
				//htmlString += '</div></div></div>';

				$('#CT011LetterTiles').html(htmlString);
				$('#CT011ColorTiles').html(htmlColorString);
				$('#CT011Color1').fadeIn(250);

				//////////////////////////
			}
			var currentColor = subClick;
			$('#CT011Color' + currentColor).fadeIn(250);
		}
		if (subClick <= (clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) && subClick > clickArray[currentWord - 1].colors) {
			var currentLetter = subClick - clickArray[currentWord - 1].colors;
			$('#CT011Tile' + currentLetter).fadeIn(250);
		}
		if (subClick > clickArray[currentWord - 1].letters + clickArray[currentWord - 1].colors) {

			$('#CT011 .tileBackUnderline').addClass('showUnderline');

		}
	} else {
		nextpage();
	}
}

function CT012() {
    var tileCount = 0;
    var addCount = 0;
    var clickArray = [];
    var totalClicks = 0;

    for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
        tileCount = 0;
        addCount = 0;
        for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
            var currChar = lessonData.pages[pageNum].words[i].charAt(j);
            if (currChar == '/' || currChar == '-') {
                tileCount++;
                totalClicks += 2;
            }
            if (currChar == '1' || currChar == '2') {
                addCount++;
                totalClicks += 2;
            }

        }
        //totalClicks++;
        clickArray.push({
            'addCount': addCount,
            'tileCount': tileCount,
            'total': totalClicks
        });
    }
    step++;
    if (step == 1) {
        step++;
    }
    console.log(clickArray);
    if (step <= clickArray[clickArray.length - 1].total) {
        var word = 0;
        while (step > clickArray[word].total) {
            word++;
        }
        var subStep = step - (clickArray[word].total - (clickArray[word].addCount * 2 + clickArray[word].tileCount * 2));
        console.log('step:' + step);
        console.log('subStep:' + subStep);
        console.log('word:' + word);
        if (subStep == 1) {
            console.log('redraw');
            var parseText = lessonData.pages[pageNum].words[word];
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


        } else {
            if (subStep <= clickArray[word].tileCount * 2) {
                console.log('show tiles');
                if (subStep <= clickArray[word].tileCount) {
                    $('#CT012Color' + subStep).fadeIn(500);
                } else {
                    $('#CT012Tile' + (subStep - clickArray[word].tileCount)).fadeIn(500);
                }
            } else {
                console.log('show add tiles');
                var addNum = 0;
                var addColor = true;
                if (subStep % 2 != 1) {
                    addColor = false;
                }
                if (subStep <= clickArray[word].tileCount * 2 + clickArray[word].addCount) {
                    addNum = 1;

                } else {
                    addNum = 2;
                }
                if (addColor) {
                    $('#CT012AddColor' + addNum).fadeIn(500);
                } else {
                    $('#CT012AddTile' + addNum).fadeIn(500);
                }
            }
        }

    } else {
        nextpage();
    }
}



function LT012() {
	step++;
	var clickArray = [];
	var totalClicks = 0;
	var subClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		subClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '*' || parseText.charAt(j) == '|') {
				totalClicks++;
				subClicks++;
			}
		}
		totalClicks++;
		clickArray.push({
			'letters': subClicks,
			'switchAt': totalClicks
		});
	}
	var currentWord = 1;
	while (step > clickArray[currentWord - 1].switchAt && step <= clickArray[clickArray.length - 1].switchAt) {
		currentWord++;
	}
	console.log('currentWord:' + currentWord);

	var subClick = clickArray[currentWord - 1].letters + 1 + (step - clickArray[currentWord - 1].switchAt);
	if (subClick == clickArray[currentWord - 1].letters + 1) {
		subClick = 0;
	}
	console.log('subClick:' + subClick);
	if (subClick <= clickArray[currentWord - 1].letters + 1 && step < clickArray[clickArray.length - 1].switchAt) {
		if (subClick == 0) {
			console.log('redraw');

			///////////////////
			var parseText = lessonData.pages[pageNum].words[currentWord];
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
			//////////////////
		} else {
			$('#LT012Reveal' + subClick).fadeIn(250);
		}
	} else {
		nextpage();
	}
}

function LT013() {
	step++;
	var word = 0;
	var subStep = 0;
	var subStepper = 0;
	for (i = 0; i < step; i++) {
		var wordText = lessonData.pages[pageNum].words[word];
		var arrowCount = 0;
		var closedCount = 0;
		for (j = 0; j < wordText.length; j++) {
			var currChar = wordText.charAt(j);
			if (currChar == '/') {
				arrowCount++;
			}
			if (currChar == "*") {
				closedCount++;
			}
		}
		subStep = arrowCount + closedCount;
		if (subStepper < subStep) {
			subStepper++;
		} else {
			subStepper = 0;
			word++;
		}
	}
	if (word < lessonData.pages[pageNum].words.length) {
		if (subStepper > 0) {
			$('#LT013Arrow' + subStepper).fadeIn(250);
			console.log(subStepper);
		} else {
			$('#LT013Arrow').css('display', 'none');
			$('#LT013End').css('display', 'none');
			var parseText = lessonData.pages[pageNum].words[word];
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
		}


	} else {
		nextpage();
	}



}

function MI004() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var letter = 0;
	var blockCount = 0;
	for (i = 0; i < step; i++) {
		blockCount = 0;
		letter++;
		for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
			if (lessonData.pages[pageNum].words[word].charAt(j) == '-' || lessonData.pages[pageNum].words[word].charAt(j) == '/') {
				blockCount++;
			}
		}
		if (letter == blockCount + 1) {
			word++;
			letter = 1;
			blockCount = 0;
			if (word < lessonData.pages[pageNum].words.length) {
				for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
					if (lessonData.pages[pageNum].words[word].charAt(j) == '-') {
						blockCount++;
					}
				}
			}
		}
		if (word < lessonData.pages[pageNum].words.length) {
			if (letter > 0 && letter <= blockCount) {


				if ($('#MI004w' + (word + 1) + 'l' + (letter)).attr('vce') == 'begin') {
					$('#MI004w' + (word + 1) + ' .markItVCEPair').addClass('markItUnderLine');
					//position and fade in connector here
					var connectLeft = $('#MI004w' + (word + 1) + 'Link1').position().left + $('#MI004w' + (word + 1) + 'Link2').width() * .7;
					var connectTop = $('#MI004w' + (word + 1) + 'Link2').position().top + $('#MI004w' + (word + 1) + 'Link2').height() * .9;
					var connectWidth = $('#MI004w' + (word + 1) + 'Link2').position().left - $('#MI004w' + (word + 1) + 'Link1').position().left;
					$('#MI004Connect' + (word + 1)).css('left', connectLeft + 'px');
					$('#MI004Connect' + (word + 1)).css('top', connectTop + 'px');
					$('#MI004Connect' + (word + 1)).css('width', connectWidth + 'px');
					$('#MI004Connect' + (word + 1)).css('font-size', '.2em');
					$('#MI004Connect' + (word + 1)).css('height', '1.75em');
					$('#MI004Connect' + (word + 1)).css('border-radius', '5em');
					$('#MI004Connect' + (word + 1)).delay(500).fadeIn(500);
				} else {
					$('#MI004w' + (word + 1) + 'l' + (letter)).addClass('markItUnderLine');
				}
			}
		}

		if (word + 1 > lessonData.pages[pageNum].words.length) {
			nextpage();
		}

	}

}


function MI009() {
	step++;
	//Count through letters and words through based on step

	if (step < lessonData.pages[pageNum].words.length * 2 + 1) {
		var subStep = step % 2;
		console.log('subStep:' + subStep);
		var word = parseInt(step / 2) + subStep;
		console.log('word:' + word);
		if (subStep == 1) {
			$('#MI009w' + word + ' .markItCircle').removeClass('markItCircleHidden');
		} else {

			$('#MI009w' + word + ' .markItLetter').addClass('markItUnderLine');
		}
	} else {
		nextpage();
	}

}

function MI010() {
	step++;
	//Count through letters and words through based on step

	if (step < lessonData.pages[pageNum].words.length + 1) {
		var subStep = step % 2;
		console.log('subStep:' + subStep);
		var word = step;
		console.log('word:#MI010w' + word);
		$('#MI010w' + word + ' .markItCircle').removeClass('markItCircleHidden');
	} else {
		nextpage();
	}

}

function MI011() {
	step++;
	//Count through letters and words through based on step

	if (step < lessonData.pages[pageNum].words.length + 1) {
		var subStep = step;
		var word = step;
		/*console.log('subStep:' + subStep);
		var word = parseInt(step / 2) + subStep;
		console.log('word:' + word);
		if (subStep == 1) {*/
		$('#MI011w' + word + ' .markItLetter').addClass('markItUnderLine');
		//} else {
		$('#MI011w' + word + ' .markItCircle').removeClass('markItCircleHidden');
		//}
	} else {
		nextpage();
	}

}

function MI012() {
	step++;
	var remainder1 = step % 3;
	var currentStep = parseInt(step / 3) + 1;
	if (step < 36) {
		if (remainder1 == 2) {
			$('#MI012Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 1) {
			$('#MI012Word' + currentStep + ' .wordPartsVowel').removeClass('vowelNoStroke');
		}
		if (remainder1 == 0) {
			$('#MI012Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#MI012Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
		}
	} else {
		nextpage();
	}
}

function MI013() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var sylCount = 1;
	var vceCount = 1;
	var totalClicks = 0;
	var clickArray = [];
	var clickStart = 1;
	var secondVCE = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		sylCount = 1;
		vceCount = 0;
		totalClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		console.log(parseText);
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '-' || parseText.charAt(j) == '/') {
				totalClicks++;
			}
			if (parseText.charAt(j) == '~') {
				sylCount++;
				secondVCE = totalClicks;
			}
			if (parseText.charAt(j) == '*') {
				vceCount++;
			}

		}
		//totalClicks += sylCount;
		clickArray.push({
			'clickStart': clickStart,
			'vceCount': vceCount,
			'sylCount': sylCount,
			'clickEnd': totalClicks + clickStart,
			'totalClicks': totalClicks,
			'secondVCE': secondVCE
		});
		clickStart = totalClicks + clickStart;
	}
	console.log(clickArray);
	while (step > clickArray[word].clickEnd - 1 && step < clickArray[clickArray.length - 1].clickEnd) {
		word++;
	}
	if (step < clickArray[clickArray.length - 1].clickEnd) {
		var subStep = step - clickArray[word].clickStart + 1;
		var clickCount = clickArray[word].clickEnd - clickArray[word].clickStart;
		var startBoxes = clickCount + 1; // - clickArray[word].sylCount + 1;
		var stopBoxes = startBoxes + clickArray[word].sylCount;
		var vces = clickArray[word].vceCount;
		if (subStep < clickArray[word].secondVCE + 1) {
			var currentLetter = subStep;
		} else {
			var currentLetter = subStep + (clickArray[word].vceCount - 1);
		}
		console.log('step:' + step);
		console.log('subStep:' + subStep);
		console.log('clickCount:' + clickCount);
		console.log('startBoxes:' + startBoxes);
		console.log('stopBoxes:' + stopBoxes);
		console.log('currentLetter:' + currentLetter);
		if (subStep < startBoxes) {
			if ($('#MI013w' + (word + 1) + 'l' + (currentLetter)).attr('vce') == 'begin') {
				console.log('found for fade');
				$('#MI013w' + (word + 1) + 'l' + (currentLetter)).addClass('markItUnderLine');
				$('#MI013w' + (word + 1) + 'l' + (currentLetter + 2)).addClass('markItUnderLine');
				//position and fade in connector here
				var startLink = '#' + $('#MI013w' + (word + 1) + 'l' + (currentLetter) + ' span').attr('id');
				var endLink = '#' + $('#MI013w' + (word + 1) + 'l' + (currentLetter + 2) + ' span').attr('id');
				var connector = '#' + $(startLink + ' div').attr('id');
				var connectLeft = $(startLink).position().left + $(endLink).width() * .7;
				var connectTop = $(endLink).position().top + $(endLink).height() * .9;
				var connectWidth = $(endLink).position().left - $(startLink).position().left;
				$(connector).css('left', connectLeft + 'px');
				$(connector).css('top', connectTop + 'px');
				$(connector).css('width', connectWidth + 'px');
				$(connector).css('font-size', '.2em');
				$(connector).css('height', '1.75em');
				$(connector).css('border-radius', '5em');
				$(connector).delay(500).fadeIn(500);
			} else {
				//if not part of vce pair
				$('#MI013w' + (word + 1) + 'l' + (currentLetter)).addClass('markItUnderLine');
			}
		} else {
			var currSyl = clickArray[word].sylCount - (clickCount - currentLetter) - (vces - 1);
			$('#MI013w' + (word + 1) + ' #syl' + currSyl).removeClass('sylHidden');
		}
	} else {
		nextpage();
	}


}

function MI014() {
	step++;
	var remainder1 = step % 3;
	var currentStep = parseInt(step / 3) + 1;
	if (step < 36) {
		if (remainder1 == 2) {
			$('#MI014Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 1) {
			$('#MI014Word' + currentStep + ' .wordPartsVowel').removeClass('vowelNoStroke');
		}
		if (remainder1 == 0) {
			$('#MI014Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#MI014Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
		}
	} else {
		nextpage();
	}
}

function MI015() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var sylCount = 1;
	var vceCount = 0;
	var underlineCount = 0;
	var totalClicks = 0;
	var clickArray = [];
	var clickStart = 1;
	var secondVCE = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		sylCount = 0;
		vceCount = 0;
		underlineCount = 0;
		totalClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				totalClicks++;
			}
			if (parseText.charAt(j) == '~') {
				sylCount++;
				secondVCE = totalClicks;
			}
			if (parseText.charAt(j) == '*') {
				vceCount++;
			}
			if (parseText.charAt(j) == '_') {
				underlineCount++;
				totalClicks++;
			}

		}
		//totalClicks += sylCount;
		clickArray.push({
			'clickStart': clickStart,
			'vceCount': vceCount,
			'sylCount': sylCount,
			'underlineCount': underlineCount,
			'clickEnd': totalClicks + clickStart,
			'totalClicks': totalClicks,
			'secondVCE': secondVCE
		});
		clickStart = totalClicks + clickStart;
	}
	while (step > clickArray[word].clickEnd - 1 && step < clickArray[clickArray.length - 1].clickEnd) {
		word++;
	}
	if (step < clickArray[clickArray.length - 1].clickEnd) {
		var subStep = step - clickArray[word].clickStart + 1;

		if (subStep <= clickArray[word].underlineCount && clickArray[word].underlineCount > 0) {
			$('#MI015w' + (word + 1) + 'u' + subStep).removeClass('underlineHidden');
		} else {
			var clickCount = clickArray[word].clickEnd - clickArray[word].clickStart;
			var startBoxes = clickCount - clickArray[word].sylCount + 1;
			var stopBoxes = startBoxes + clickArray[word].sylCount;
			var vces = clickArray[word].vceCount;
			var currentLetter = subStep - clickArray[word].underlineCount
			if (subStep < startBoxes) {
				if ($('#MI015w' + (word + 1) + 'l' + (currentLetter)).attr('vce') == 'begin') {
					$('#MI015w' + (word + 1) + 'l' + (currentLetter)).addClass('markItUnderLine');
					$('#MI015w' + (word + 1) + 'l' + (currentLetter + 2)).addClass('markItUnderLine');
					//position and fade in connector here
					var startLink = '#' + $('#MI015w' + (word + 1) + 'l' + (currentLetter) + ' span').attr('id');
					var endLink = '#' + $('#MI015w' + (word + 1) + 'l' + (currentLetter + 2) + ' span').attr('id');
					var connector = '#' + $(startLink + ' div').attr('id');
					var connectLeft = $(startLink).position().left + $(startLink).width() * .7;
					var connectTop = $(endLink).position().top + $(endLink).height() * .9;
					var connectWidth = $(endLink).position().left - $(startLink).position().left;
					var connectWidth = ($(endLink).position().left + $(endLink).width() * .7) - connectLeft;
					$(connector).css('left', connectLeft + 'px');
					$(connector).css('top', connectTop + 'px');
					$(connector).css('width', connectWidth + 'px');
					$(connector).css('font-size', '.2em');
					$(connector).css('height', '1.75em');
					$(connector).css('border-radius', '5em');
					$(connector).delay(100).fadeIn(250);
				}
			}
		}

	} else {
		nextpage();
	}


}

function MI016() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var blockCount = 0;
	var totalClicks = 0;
	var clickArray = [];
	var clickStart = 1;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {

		totalClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				totalClicks++;
			}

		}
		//totalClicks += sylCount;
		clickArray.push({
			'clickStart': clickStart,
			'clickEnd': totalClicks + clickStart,
			'totalClicks': totalClicks,
		});
		clickStart = totalClicks + clickStart;
	}
	console.log(clickArray);
	while (step > clickArray[word].clickEnd - 1 && step < clickArray[clickArray.length - 1].clickEnd) {
		word++;
	}
	if (step < clickArray[clickArray.length - 1].clickEnd) {
		var subStep = step - clickArray[word].clickStart;
		var clickCount = clickArray[word].clickEnd - clickArray[word].clickStart;
		$('#MI016w' + (word + 1) + 'l' + (subStep)).addClass('markItUnderLine');
	} else {
		nextpage();
	}


}

function SB005() {
	step++;

	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var vceStart = false;
	var vceEnd = false;
	var vce = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var vcePresent = false;
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/' || parseText.charAt(j) == '~' || parseText.charAt(j) == '*') {
				inVowel = true;
				vowelCount++;
				if (parseText.charAt(j) == '*') {
					vcePresent = true;
					vceStart = true;
				}
				if (parseText.charAt(j) == '~') {
					vceEnd = true;
				}
			}
			if (parseText.charAt(j) == '|') {
				inVowel = false;
				vceStart = false;
				vceEnd = false;
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		if (vcePresent) {
			stepCount += 1;
		}
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//build word vars with for loop
			$('#SB005 .letterConnector').hide();
			var word = lessonData.pages[pageNum].words[word];
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
			console.log('syls:');
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

		} else {

			var wordCurrent = lessonData.pages[pageNum].words[word - 1];
			var vceSyl = [0, 0];
			var tempSyl = 0;
			for (i = 0; i < wordCurrent.length; i++) {
				if (wordCurrent.charAt(i) == '-') {
					tempSyl++;
				}
				if (wordCurrent.charAt(i) == '*') {
					vce = true;
					vceSyl[tempSyl] = 1;
				}
			}
			var stepper = step - wordBreaks[word - 1];
			var vowelBreak = vowels[word - 1];
			if (stepper <= vowelBreak) {
				$('#SB005v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB005v' + stepper).addClass('underlineText');
			} else {
				if (!vce) {
					vowelBreak--;
				}
				var drop = .85;
				switch (stepper) {
					case vowelBreak + 1:
						if (vceSyl[0] == 1) {
							var startConnect1 = $('#SB005 .vceStart1').position().left + $('#SB005 .vceStart1').width() / 2;
							var endConnect1 = $('#SB005 .vceEnd1').position().left + $('#SB005 .vceEnd1').width() / 2;
							var connectWidth1 = endConnect1 - startConnect1;
							var connectTop = $('#SB005 .vceStart1').position().top + $('#SB005 .vceStart1').height() * drop;
							var connectHeight = $('#SB005 .vceStart1').height() * .6;
						}
						if (vceSyl[1] == 1) {
							var startConnect2 = $('#SB005 .vceStart2').position().left + $('#SB005 .vceStart2').width() / 2;
							var endConnect2 = $('#SB005 .vceEnd2').position().left + $('#SB005 .vceEnd2').width() / 2;
							var connectWidth2 = endConnect2 - startConnect2;
							var connectTop = $('#SB005 .vceStart2').position().top + $('#SB005 .vceStart2').height() * drop;
							var connectHeight = $('#SB005 .vceStart2').height() * .6;
						}
						if (vceSyl[2] == 1) {
							var startConnect3 = $('#SB005 .vceStart3').position().left + $('#SB005 .vceStart3').width() / 2;
							var endConnect3 = $('#SB005 .vceEnd3').position().left + $('#SB005 .vceEnd3').width() / 2;
							var connectWidth3 = endConnect3 - startConnect3;
							var connectTop = $('#SB005 .vceStart3').position().top + $('#SB005 .vceStart3').height() * drop;
							var connectHeight = $('#SB005 .vceStart3').height() * .6;
						}
						if (vceSyl[3] == 1) {
							var startConnect4 = $('#SB005 .vceStart4').position().left + $('#SB005 .vceStart4').width() / 2;
							var endConnect4 = $('#SB005 .vceEnd4').position().left + $('#SB005 .vceEnd4').width() / 2;
							var connectWidth4 = endConnect4 - startConnect4;
							var connectTop = $('#SB005 .vceStart4').position().top + $('#SB005 .vceStart4').height() * drop;
							var connectHeight = $('#SB005 .vceStart4').height() * .6;
						}
						if (vceSyl[4] == 1) {
							var startConnect5 = $('#SB005 .vceStart5').position().left + $('#SB005 .vceStart5').width() / 2;
							var endConnect5 = $('#SB005 .vceEnd5').position().left + $('#SB005 .vceEnd5').width() / 2;
							var connectWidth5 = endConnect5 - startConnect5;
							var connectTop = $('#SB005 .vceStart5').position().top + $('#SB005 .vceStart5').height() * drop;
							var connectHeight = $('#SB005 .vceStart5').height() * .6;
						}
						if (vceSyl[0] == 1) {
							$('#SB005 .letterConnector1').css('top', connectTop + 'px');
							$('#SB005 .letterConnector1').css('height', connectHeight + 'px');
							$('#SB005 .letterConnector1').css('left', startConnect1 + 'px');
							$('#SB005 .letterConnector1').css('width', connectWidth1 + 'px');
							$('#SB005 .letterConnector1').fadeIn(200);
						}

						if (vceSyl[1] == 1) {
							$('#SB005 .letterConnector2').css('top', connectTop + 'px');
							$('#SB005 .letterConnector2').css('height', connectHeight + 'px');
							$('#SB005 .letterConnector2').css('left', startConnect2 + 'px');
							$('#SB005 .letterConnector2').css('width', connectWidth2 + 'px');
							$('#SB005 .letterConnector2').fadeIn(200);
						}

						if (vceSyl[2] == 1) {
							$('#SB005 .letterConnector3').css('top', connectTop + 'px');
							$('#SB005 .letterConnector3').css('height', connectHeight + 'px');
							$('#SB005 .letterConnector3').css('left', startConnect3 + 'px');
							$('#SB005 .letterConnector3').css('width', connectWidth3 + 'px');
							$('#SB005 .letterConnector3').fadeIn(200);
						}
						if (vceSyl[3] == 1) {
							$('#SB005 .letterConnector4').css('top', connectTop + 'px');
							$('#SB005 .letterConnector4').css('height', connectHeight + 'px');
							$('#SB005 .letterConnector4').css('left', startConnect4 + 'px');
							$('#SB005 .letterConnector4').css('width', connectWidth4 + 'px');
							$('#SB005 .letterConnector4').fadeIn(200);
						}
						if (vceSyl[4] == 1) {
							$('#SB005 .letterConnector5').css('top', connectTop + 'px');
							$('#SB005 .letterConnector5').css('height', connectHeight + 'px');
							$('#SB005 .letterConnector5').css('left', startConnect5 + 'px');
							$('#SB005 .letterConnector5').css('width', connectWidth5 + 'px');
							$('#SB005 .letterConnector5').fadeIn(200);
						}


						break;

					case vowelBreak + 2:
						$('#SB005 .syllaboardTile').fadeIn(200);
						break;

					case vowelBreak + 3:
						//vowels
						$('#SB005Boards span.SB005Vowel').removeClass('hiddenText');
						$('#SB005Boards span.SB005Consonant.inVCE').removeClass('hiddenText');
						break;
					case vowelBreak + 4:
						//rest of word
						$('#SB005Boards span.SB005Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}

}


function SB006() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += sylCount * 2 + 1;
		wordBreaks.push(stepCount);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	console.log('word right after:' + word);
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			var thisWord = lessonData.pages[pageNum].words[word];
			var syl = []; //single syllable array
			var syls = []; //array of syllables
			var vowels = []; //array of vowels
			var vowelString = ''; //string to hold vowels
			var vowel = false;
			var vce = false;
			var currChar;
			for (i = 0; i < thisWord.length; i++) {
				currChar = thisWord.charAt(i);
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
		} else {
			var stepper = step - wordBreaks[word - 1];

			switch (stepper) {
				case 1:
					$('#SB006 #SB006Tile1').fadeIn(200);
					break;

				case 2:
					$('#SB006 #SB006Tile2').fadeIn(200);
					break;

				case 3:
					$('#SB006Boards #SB006Tile1 span.SB006Vowel').removeClass('hiddenText');
					$('#SB006Boards #SB006Tile1 span.SB006Consonant').removeClass('hiddenText');
					break;
				case 4:
					$('#SB006Boards #SB006Tile2 span.SB006Vowel').removeClass('hiddenText');
					$('#SB006Boards #SB006Tile2 span.SB006Consonant').removeClass('hiddenText');

					break;

				case 5:
					console.log('case 5');
					break;
			}

		}

	}
	console.log('step:' + step);
	console.log('word:' + word);
	console.log('stepCount:' + stepCount);
	console.log('stepper:' + stepper);
	console.log('wordBreaks:' + wordBreaks);
	console.log('------------------');
}


function l6ov1() {
	step++;
	var stepCount = 1;
	var word = 1;
	var letter = 0;
	var syl = 1;
	var parseCount = 0;
	var radio = true;
	while (stepCount < step + 1 && word < lessonData.pages[pageNum].words.length + 1) {
		var parseText = lessonData.pages[pageNum].words[word - 1];
		if (parseText.charAt(parseCount) == '-' || parseText.charAt(parseCount) == '*') {
			letter++;
			stepCount++
			parseCount++;
		} else {
			if (parseText.charAt(parseCount) == '/') {
				letter = 0;
				syl++;
				parseCount++;
			} else {
				if (parseText.charAt(parseCount) != '/' && parseText.charAt(parseCount) != '-' && parseText.charAt(parseCount) != '*') {
					parseCount++;
				}
			}
		}
		if (parseCount == parseText.length + 1) {
			if (radio) {
				radio = false;
			} else {
				radio = true;
				word++;
			}
			letter = 0;
			syl = 1;
			parseCount = 0;
		}
	}
	if (word > lessonData.pages[pageNum].words.length) {
		nextpage();
	} else {
		if (radio) {
			$('#l6ov1w' + (word) + 's' + syl + 'l' + (letter) + 'r').removeClass('radioButtonHidden');
		} else {
			$('#l6ov1w' + (word) + 's' + syl + 'l' + (letter)).removeClass('hiddenText');
			$('#l6ov1w' + (word) + 's' + syl + 'l' + (letter)).removeClass('schwaRadioText');
		}
	}
}


function SI003() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var blocks = 0;
	var letter = 0;
	var radio = true;
	for (i = 0; i < step; i++) {
		letter++;
		blocks = 0;
		for (j = 0; j < lessonData.pages[pageNum].words[word].length; j++) {
			if (lessonData.pages[pageNum].words[word].charAt(j) == '-') {
				blocks++;
			}
		}

		//One for radios and one for letters
		if (letter == blocks + 1 && radio) {

			if (radio) {
				radio = false;
			} else {
				radio = true;

				word++;
			}
			letter = 1;
			//show new word here
		}
		if (letter == blocks + 2 && !radio) {

			radio = true;
			word++;
			letter = 1;
			//show new word here
		}
		if (word < lessonData.pages[pageNum].words.length) {
			if (radio) {
				if (letter > 0 && letter <= blocks) {
					$('#SI003w' + (word + 1) + 'l' + (letter) + 'r').addClass('radioButtonSelect');
				}
			} else {
				$('#SI003w' + (word + 1) + 'l' + (letter)).removeClass('hiddenText');
			}
		}

		if (word + 1 > lessonData.pages[pageNum].words.length) {
			nextpage();
		}

	}

}

function SI004() {
	step++;
	var stepCount = 1;
	var word = 1;
	var letter = 0;
	var syl = 1;
	var parseCount = 0;
	var radio = true;
	var totalLetters = 0;
	while (stepCount < step + 1 && word < lessonData.pages[pageNum].words.length + 1) {
		var parseText = lessonData.pages[pageNum].words[word - 1];
		totalLetters = 0;
		for (i = 0; i < parseText.length; i++) {
			if (parseText.charAt(i) != '/' && parseText.charAt(i) != '-' && parseText.charAt(i) != '*') {
				totalLetters++;
			}
		}
		if (parseText.charAt(parseCount) == '-' || parseText.charAt(parseCount) == '*') {
			letter++;
			stepCount++
			parseCount++;
		} else {
			if (parseText.charAt(parseCount) == '/') {
				letter = 0;
				syl++;
				parseCount++;
			} else {
				if (parseText.charAt(parseCount) != '/' && parseText.charAt(parseCount) != '-' && parseText.charAt(parseCount) != '*') {
					parseCount++;
				}
			}
		}
		if ((parseCount == parseText.length) && !radio) {
			radio = true;
			word++;
			letter = 0;
			syl = 1;
			parseCount = 0;

		}
		if (parseCount == parseText.length - 2 && radio) {
			radio = false;
			letter = 0;
			syl = 1;
			parseCount = 0;
		}



		/*if (parseCount == parseText.length + 1) {
			if (radio) {
				radio = false;
			} else {
				radio = true;
				word++;
			}
			letter=0;
			syl = 1;
			parseCount=0;
		}*/

	}
	if (word > lessonData.pages[pageNum].words.length) {
		nextpage();
	} else {
		if (radio) {
			$('#SI004w' + (word) + 's' + syl + 'l' + (letter) + 'r').removeClass('radioButtonHidden');
		} else {
			$('#SI004w' + (word) + 's' + syl + 'l' + (letter)).removeClass('hiddenText');
		}
	}
}

function MI007() {
	step++;
	//Count through letters and words through based on step
	var word = 0;
	var sylCount = 1;
	var vceCount = 1;
	var totalClicks = 0;
	var clickArray = [];
	var clickStart = 1;
	var secondVCE = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		sylCount = 1;
		vceCount = 0;
		totalClicks = 0;
		var parseText = lessonData.pages[pageNum].words[i];
		console.log(parseText);
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '-' || parseText.charAt(j) == '/') {
				totalClicks++;
			}
			if (parseText.charAt(j) == '~') {
				sylCount++;
				secondVCE = totalClicks;
			}
			if (parseText.charAt(j) == '*') {
				vceCount++;
			}

		}
		totalClicks += sylCount;
		clickArray.push({
			'clickStart': clickStart,
			'vceCount': vceCount,
			'sylCount': sylCount,
			'clickEnd': totalClicks + clickStart,
			'totalClicks': totalClicks,
			'secondVCE': secondVCE
		});
		clickStart = totalClicks + clickStart;
	}
	console.log(clickArray);
	while (step > clickArray[word].clickEnd - 1 && step < clickArray[clickArray.length - 1].clickEnd) {
		word++;
	}
	if (step < clickArray[clickArray.length - 1].clickEnd) {
		var subStep = step - clickArray[word].clickStart + 1;
		var clickCount = clickArray[word].clickEnd - clickArray[word].clickStart;
		var startBoxes = clickCount - clickArray[word].sylCount + 1;
		var stopBoxes = startBoxes + clickArray[word].sylCount;
		var vces = clickArray[word].vceCount;
		if (subStep < clickArray[word].secondVCE + 1) {
			var currentLetter = subStep;
		} else {
			var currentLetter = subStep + (clickArray[word].vceCount - 1);
		}
		console.log('step:' + step);
		console.log('subStep:' + subStep);
		console.log('clickCount:' + clickCount);
		console.log('startBoxes:' + startBoxes);
		console.log('stopBoxes:' + stopBoxes);
		console.log('currentLetter:' + currentLetter);
		if (subStep < startBoxes) {
			if ($('#MI007w' + (word + 1) + 'l' + (currentLetter)).attr('vce') == 'begin') {
				console.log('found for fade');
				$('#MI007w' + (word + 1) + 'l' + (currentLetter)).addClass('markItUnderLine');
				$('#MI007w' + (word + 1) + 'l' + (currentLetter + 2)).addClass('markItUnderLine');
				//position and fade in connector here
				var startLink = '#' + $('#MI007w' + (word + 1) + 'l' + (currentLetter) + ' span').attr('id');
				var endLink = '#' + $('#MI007w' + (word + 1) + 'l' + (currentLetter + 2) + ' span').attr('id');
				var connector = '#' + $(startLink + ' div').attr('id');
				var connectLeft = $(startLink).position().left + $(endLink).width() * .7;
				var connectTop = $(endLink).position().top + $(endLink).height() * .9;
				var connectWidth = $(endLink).position().left - $(startLink).position().left;
				$(connector).css('left', connectLeft + 'px');
				$(connector).css('top', connectTop + 'px');
				$(connector).css('width', connectWidth + 'px');
				$(connector).css('font-size', '.2em');
				$(connector).css('height', '1.75em');
				$(connector).css('border-radius', '5em');
				$(connector).delay(500).fadeIn(500);
			} else {
				//if not part of vce pair
				$('#MI007w' + (word + 1) + 'l' + (currentLetter)).addClass('markItUnderLine');
			}
		} else {
			var currSyl = clickArray[word].sylCount - (clickCount - currentLetter) - (vces - 1);
			$('#MI007w' + (word + 1) + ' #syl' + currSyl).removeClass('sylHidden');
		}
	} else {
		nextpage();
	}


}

function LT014() {

	nextpage();
}

function SB007() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			if (stepper < 3) {
				$('#SB007v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB007v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case 3:
						$('#SB007 .syllaboardTile').fadeIn(200);
						break;

					case 4:
						//vowels
						$('#SB007Boards span.SB007Vowel').removeClass('hiddenText');
						break;
					case 5:
						//rest of word
						$('#SB007Boards span.SB007Consonant').removeClass('hiddenText');
						break;

					case 6:
						nextpage();
						break;
				}
			}
		}

	}
}

function SB009() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var pairs = [];
	var vowelCount = 0;
	var vowelPairCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}
			if (parseText.charAt(j) == '!') {
				vowelPairCount++;
			}

		}
		stepCount += vowelCount + vowelPairCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		pairs.push(vowelPairCount);
		vowelPairCount = 0;
		console.log('pairs:' + pairs);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			var tempPairs = pairs[word - 1];
			if (stepper < tempVowels + 1) {
				$('#SB009v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB009v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case tempVowels + tempPairs - 1:
						//vowelpair underline
						$('#SB009Pair' + (tempPairs - 1) + ' .syllaboardVowelPairUnderline').fadeIn(200);
						break;
					case tempVowels + tempPairs:
						//vowelpair underline
						$('#SB009Pair' + tempPairs + ' .syllaboardVowelPairUnderline').fadeIn(200);
						break;
					case tempVowels + tempPairs + 1:
						//show syllaboards
						$('#SB009 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + tempPairs + 2:
						//vowels
						$('#SB009Boards span.SB009Vowel').removeClass('hiddenText');
						break;
					case tempVowels + tempPairs + 3:
						//rest of word
						$('#SB009Boards span.SB009Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}
}

function SB010() {
	step++;
	if (step < lessonData.pages[pageNum].words.length) {
		var parseText = lessonData.pages[pageNum].words[step];
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
		$('#SB010 .syllaboardTile').animate({
			opacity: 1
		}, 500);
		//$('#SB010 .syllaboardTile').removeClass('syllaboardTileHidden');
	} else {
		nextpage();
	}
}

function SB011() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 5;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			if (stepper < tempVowels + 1) {
				$('#SB011v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB011v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case tempVowels + 1:
						$('.SB011under').removeClass('hideSpanUnder');
						break;
					case tempVowels + 2:
						$('#SB011 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + 3:
						//vowels
						$('#SB011Boards span.SB011Vowel').removeClass('hiddenText');
						$('#SB011Boards span.SB011Pair span.SB011Consonant').removeClass('hiddenText');
						break;
					case tempVowels + 4:
						//rest of word
						$('#SB011Boards span.SB011Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}
}

function SB012() {
	step++;
	if (step == 1) {
		step++;
	}
	var clickArray = [];
	var sylCount = 1;
	var vowelCount = 0;
	var underlineCount = 0;
	var totalClicks = 0;
	var parseText;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		underlineCount = 0;
		for (j = 0; j < parseText.length; j++) {
			var currChar = parseText.charAt(j);
			switch (currChar) {
				case '-':
					sylCount++;
					break;
				case '/':
					vowelCount++;
					underlineCount++;
					break;
				case '~':
					vowelCount++;
					break;
			}
		}
		totalClicks += sylCount + vowelCount + underlineCount + 2;
		clickArray.push({
			'syls': sylCount,
			'vowels': vowelCount,
			'underlines': underlineCount,
			'total': totalClicks
		});

	}

	console.log(clickArray);

	if (step > clickArray[clickArray.length - 1].total) {
		nextpage();
	} else {
		var word = 0;
		while (step > clickArray[word].total) {
			word++;
		}
		console.log('step:' + step);
		console.log('word:' + word);
		var subStep = (step - clickArray[word].total) + clickArray[word].syls + clickArray[word].vowels + clickArray[word].underlines + 1;
		console.log('subStep:' + subStep);
		if (subStep == 0) {
			console.log('redraw');
			var parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			if (subStep <= clickArray[word].syls) {
				var showSyl = subStep;
				console.log('show syls:' + showSyl);
				$('#SB012Tile' + showSyl).removeClass('syllaboardTileHidden');

			} else {
				if (subStep <= clickArray[word].syls + clickArray[word].vowels) {
					var showVowel = subStep - clickArray[word].syls;
					console.log('show vowel:' + showVowel);
					$('#SB012v' + showVowel).removeClass('hiddenText');
				} else {
					if (subStep <= clickArray[word].syls + clickArray[word].vowels + 1) {
						console.log('show consonants');
						$('#SB012 .syllaboardTileContent').removeClass('hiddenText');
					} else {
						var showUnderline = subStep - clickArray[word].syls - clickArray[word].vowels - 1;
						console.log('show underlines:' + showUnderline);
						$('.SB012u' + showUnderline).removeClass('hiddenUnderline');
					}

				}
			}
		}
	}
	/*var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			if (stepper > 3) {
				var vowelNum = stepper - 3;
				$('#SB012v' + vowelNum).css('transition', 'all 200ms 0ms');
				$('#SB012v' + vowelNum).addClass('underlineText');
			} else {
				switch (stepper) {
					case 1:
						//$('#SB012 .syllaboardTileContent').hide();
						$('#SB012 .syllaboardTile').fadeIn(200);
						break;

					case 2:
						//vowels
						$('#SB012Boards span.SB012Vowel').removeClass('hiddenText');
						break;
					case 3:
						//rest of word
						$('#SB012Boards span.SB012Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}*/
}

function SB013() {
	step++;

	var clickArray = [];
	//Build array of click breaks
	var subClicks = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var vowels = 0;
		var vces = 0;
		var vowelPairs = 0;

		for (j = 0; j < lessonData.pages[pageNum].words[i].length; j++) {
			var tempChar = lessonData.pages[pageNum].words[i].charAt(j);
			switch (tempChar) {
				case '/':
					vowels++;
					subClicks++;
					break;
				case '*':
					vces++;
					vowels += 2;
					subClicks += 2;
					break;
				case '_':
					vowelPairs++;
					subClicks++;
			}

		}
		subClicks += 5;
		clickArray.push({
			'vowels': vowels,
			'vces': vces,
			'vowelPairs': vowelPairs,
			'totalClicks': subClicks
		});
	}
	console.log(clickArray);
	console.log('step:' + step);

	var clicksToThis = 0;

	var clickArrayIndex = 0;
	while (step > clickArray[clickArrayIndex].totalClicks) {
		clicksToThis += clickArray[clickArrayIndex].totalClicks;
		clickArrayIndex++;
	}


	console.log('clickArrayIndex:' + clickArrayIndex);
	console.log('clicksToThis:' + clicksToThis);

	if (clickArray[clickArrayIndex].totalClicks == step) {
		if (clickArrayIndex < lessonData.pages[pageNum].words.length - 1) {
			console.log('New Word');
			$('#SB013 .letterConnector').hide();
			var word = lessonData.pages[pageNum].words[clickArrayIndex + 1];
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
			$('#SB013Boards').css('opacity', '0');
			$('#SB013Boards span').addClass('hiddenText');
			$('#SB013Boards span').css('transition', 'all .25s 0s');
		} else {
			nextpage();
		}
	} else {
		var subStep = step - clicksToThis;
		console.log('subStep:' + subStep);

		if (subStep < clickArray[clickArrayIndex].vowels + 1) {
			console.log('show vowel ' + subStep);
			$('#SB013v' + subStep).addClass('underlineText');
		}
		if (subStep > clickArray[clickArrayIndex].vowels && subStep < clickArray[clickArrayIndex].vowels + clickArray[clickArrayIndex].vces + 1) {
			console.log('show vce ' + (subStep - clickArray[clickArrayIndex].vowels));
			var tempVCE = subStep - clickArray[clickArrayIndex].vowels;
			var startConnect = $('#SB013 .vceStart' + tempVCE).position().left + $('#SB013 .vceStart' + tempVCE).width() / 2;
			var endConnect = $('#SB013 .vceEnd' + tempVCE).position().left + $('#SB013 .vceEnd' + tempVCE).width() / 2;
			var connectWidth = endConnect - startConnect;
			var connectTop = $('#SB013 .vceStart' + tempVCE).position().top + $('#SB013 .vceStart' + tempVCE).height() * .75;
			var connectHeight = $('#SB013 .vceStart' + tempVCE).height() * .6;
			$('#SB013 .letterConnector' + tempVCE).css('top', connectTop + 'px');
			$('#SB013 .letterConnector' + tempVCE).css('height', connectHeight + 'px');
			$('#SB013 .letterConnector' + tempVCE).css('left', startConnect + 'px');
			$('#SB013 .letterConnector' + tempVCE).css('width', connectWidth + 'px');
			$('#SB013 .letterConnector' + tempVCE).fadeIn(200);
		}
		if (subStep > clickArray[clickArrayIndex].vowels + clickArray[clickArrayIndex].vces && subStep < clickArray[clickArrayIndex].vowels + clickArray[clickArrayIndex].vces + clickArray[clickArrayIndex].vowelPairs + 1) {
			var tempVowelPair = subStep - clickArray[clickArrayIndex].vowels - clickArray[clickArrayIndex].vces;
			console.log('show vowelPair ' + (subStep - clickArray[clickArrayIndex].vowels - clickArray[clickArrayIndex].vces));
			$('#SB013vp' + tempVowelPair).addClass('underlineText');
		}
		if (subStep > clickArray[clickArrayIndex].vowels + clickArray[clickArrayIndex].vces + clickArray[clickArrayIndex].vowelPairs) {
			if (subStep - clickArray[clickArrayIndex].vowels - clickArray[clickArrayIndex].vces - clickArray[clickArrayIndex].vowelPairs == 1) {
				console.log('show boards');
				$('#SB013Boards').css('opacity', '1');
			} else {
				if (subStep == clickArray[clickArrayIndex].totalClicks - 1) {
					console.log('show board consonants ');
					$('#SB013 .SB013Consonant').removeClass('hiddenText');
				} else {
					console.log('show board vowels ');
					$('#SB013 .SB013Vowel').removeClass('hiddenText');
					$('#SB013 .SB013Vowel .SB013Consonant').removeClass('hiddenText');
				}


			}
		}
	}
}

function SB014() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if ((parseText.charAt(j) != '/' || parseText.charAt(j) != '|' || parseText.charAt(j) != '-') && inVowel) {
				vowelCount++;
			}
			if (parseText.charAt(j) == '/') {
				inVowel = true;
				//stepCount ++;
			}
			if (parseText.charAt(j) == '|') {
				inVowel = false;
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += 5 + (vowelCount - 1);
		if (vowelCount > 3) {
			stepCount--;
		}
		wordBreaks.push(stepCount);
		vowels.push(vowelCount - 1);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	console.log(wordBreaks);
	console.log(wordBreaks);
	if (step >= wordBreaks[wordBreaks.length - 1] - 1) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			console.log(vowels);
			console.log(step);
			console.log(stepper);
			if (stepper < tempVowels + 1) {
				if (stepper == 1) {
					$('#SB014Word .SB014Vowel').css('transition', 'all 200ms 0ms');
					$('#SB014Word .SB014VowelWrap').css('transition', 'all 200ms 0ms');
					$('#SB014Word .SB014Suffix').css('transition', 'all 200ms 0ms');
					$('#SB014Word .SB014Vowel').addClass('underlineText');
					$('#SB014Word .SB014Suffix').addClass('underlineText');
				} else {
					$('#SB014Word .SB014VowelWrap').addClass('underlineText');
				}




			} else {
				switch (stepper) {
					case tempVowels + 1:
						//$('#SB014 .syllaboardTileContent').hide();
						$('#SB014 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + 2:
						//vowels
						$('#SB014Boards span.SB014Suffix').removeClass('SB014hiddenText');
						break;
					case tempVowels + 3:
						//rest of word
						$('#SB014Boards .syllaboardTileContent').removeClass('SB014hiddenText');
						break;

				}
			}
		}

	}
}

function SB015() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				vowelCount++;
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += 1 + 5;
		wordBreaks.push(stepCount);
		vowels.push(1);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];

			switch (stepper) {
				case 1:
					$('#SB015Word .SB015Suffix').addClass('underlineText');
					break;
				case 2:
					$('#SB015Word .SB015Vowel').addClass('underlineText');
					break;
				case 3:
					$('#SB015 .syllaboardTile').fadeIn(200);
					break;
				case 4:
					//vowels
					$('#SB015Boards span.SB015Suffix').removeClass('SB015hiddenText');
					$('#SB015Boards span.SB015Vowel').removeClass('SB015hiddenText');
					break;
				case 5:
					//rest of word
					$('#SB015Boards .syllaboardTileContent').removeClass('SB015hiddenText');
					break;

			}

		}

	}
}

function SB016() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;

	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		stepCount += 2;
		wordBreaks.push(stepCount);
		vowels.push(1);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
			$('#SB016 .syllaboardTile').hide();
			$('#SB016Word').html(htmlString);
		} else {
			var stepper = step - wordBreaks[word - 1];

			switch (stepper) {

				case 1:
					$('#SB016 .syllaboardTile').fadeIn(200);
					break;

			}

		}

	}
}

function SB017() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			if (stepper < tempVowels + 1) {
				$('#SB017v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB017v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case tempVowels + 1:
						//$('#SB017 .syllaboardTileContent').hide();
						$('#SB017 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + 2:
						//vowels
						$('#SB017Boards span.SB017Vowel').removeClass('hiddenText');
						break;
					case tempVowels + 3:
						//rest of word
						$('#SB017Boards span.SB017Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}
}

function SB018() {
	step++;
	var word = 0;
	var wordBreaks = [0];
	var vowels = [];
	var vowelCount = 0;
	var sylCount = 0;
	var inVowel = false;
	var inWord = false;
	var parseText;
	var stepCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		parseText = lessonData.pages[pageNum].words[i];
		vowelCount = 0;
		sylCount = 1;
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '/') {
				if (inVowel) {
					inVowel = false;
				} else {
					inVowel = true;
					vowelCount++;
				}
			}
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}

		}
		stepCount += vowelCount + 4;
		wordBreaks.push(stepCount);
		vowels.push(vowelCount);
		console.log(vowels);
	}
	while (step > wordBreaks[word]) {
		word++;
	}
	if (step == wordBreaks[wordBreaks.length - 1]) {
		nextpage();
	} else {
		if (step == wordBreaks[word]) {
			//populate html
			parseText = lessonData.pages[pageNum].words[word];
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
		} else {
			var stepper = step - wordBreaks[word - 1];
			var tempVowels = vowels[word - 1];
			if (stepper < tempVowels + 1) {
				$('#SB018v' + stepper).css('transition', 'all 200ms 0ms');
				$('#SB018v' + stepper).addClass('underlineText');
			} else {
				switch (stepper) {
					case tempVowels + 1:
						//$('#SB018 .syllaboardTileContent').hide();
						$('#SB018 .syllaboardTile').fadeIn(200);
						break;

					case tempVowels + 2:
						//vowels
						$('#SB018Boards span.SB018Vowel').removeClass('hiddenText');
						break;
					case tempVowels + 3:
						//rest of word
						$('#SB018Boards span.SB018Consonant').removeClass('hiddenText');
						break;

				}
			}
		}

	}
}

function SB020() {
	step++;
	var sylCount = 0;
	var wordBreak = 0;
	var wordBreakArray = [];




	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		sylCount = 1;
		parseText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseText.length; j++) {
			if (parseText.charAt(j) == '-') {
				sylCount++;
			}
		}
		wordBreak += sylCount;
		if (lessonData.pages[pageNum].fadeBoards == 'true') {
			wordBreak++;
		}
		if (i > 0) {
			wordBreak++;
		}
		wordBreakArray.push(wordBreak);
	}

	var currentWord = 0;
	while (step > wordBreakArray[currentWord]) {
		currentWord++;
	}
	var wordBreakEnd = wordBreakArray.length - 1;
	if (step <= wordBreakArray[wordBreakEnd]) {
		sylCount = 0;
		var subStep = 0;
		if (currentWord > 0) {
			sylCount = ((wordBreakArray[currentWord] - 1) - wordBreakArray[currentWord - 1]);
			subStep = sylCount + (step - wordBreakArray[currentWord]);
		} else {
			sylCount = (wordBreakArray[currentWord]) / 2;
			subStep = step;
		}
		if (subStep == 0) {
			var htmlString = '';
			var sylCount = 1;
			var vowel = false;
			htmlString = '<div id="SB020Word" class="syllaboardWord">Temp Word</div>';
			htmlString += '<div class="syllaboardHolder"><div id ="SB020Tile1" class="syllaboardTile"><div class="syllaboardTileContent" id="SB020TileContent1">';

			var word = lessonData.pages[pageNum].words[currentWord];
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
			//$('#SB020 .syllaboardTile').css('opacity', 0);
			if (lessonData.pages[pageNum].fadeBoards == 'true') {
				$('#SB020Word').css('opacity', '0');
			} else {
				$('#SB020Word').css('display', 'none');
			}
			$('#SB020 .syllaboardTileContent').css('opacity', 0);
			$('#SB020 .syllaboardTile').css('transition', 'all .5s 0s');
			$('#SB020 .syllaboardTileContent').css('transition', 'all .5s 0s');

		} else {
			if (step < wordBreakArray[currentWord]) {
				$('#SB020TileContent' + (subStep)).css('transition', 'all .5s 0s');
				$('#SB020TileContent' + (subStep)).css('opacity', '1');
			} else {

				if (lessonData.pages[pageNum].fadeBoards == 'true') {
					$('#SB020Word').css('transition', 'all .5s 0s');
					$('#SB020Word').css('opacity', '1');
					$('#SB020 .syllaboardHolder').css('transition', 'all .5s 0s');
					$('#SB020 .syllaboardHolder').css('opacity', '0');
				} else {
					$('#SB020TileContent' + (subStep)).css('transition', 'all .5s 0s');
					$('#SB020TileContent' + (subStep)).css('opacity', '1');
				}
			}
		}
	} else {
		nextpage();
	}

}

function LT015() {
	step++;
	//Off by one on first click; increment to fix
	/*if (step == 1) {
		step++;
	}*/
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalClicks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		subClicks = 0;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					//totalClicks++;
					break;
				case '/':
					totalLetters++;
					//totalClicks++;
					break;
				case '*':
					totalClicks++;
					subClicks++;
					break;
			}

		}
		var tempClickStart = 0;
		if (i > 0) {
			tempClickStart = clickArray[i - 1].clickStart + clickArray[i - 1].subClicks + 1;
		}
		clickArray.push({
			'letters': totalLetters,
			'clickStart': tempClickStart,
			'subClicks': subClicks
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart + clickArray[clickArray.length - 1].subClicks;
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart + clickArray[currentWord - 1].subClicks && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = (step - clickArray[currentWord - 1].clickStart);
		console.log('currentWord' + lessonData.pages[pageNum].words[currentWord - 1]);
		console.log('subClick' + subClick);
		console.log('currentWord' + currentWord);
		console.log('step' + step);
		console.log('clickStart' + clickArray[currentWord - 1].clickStart);
		if (step == clickArray[currentWord - 1].clickStart) {
			console.log('newWord');
			var parseText = lessonData.pages[pageNum].words[currentWord - 1];
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


			$('#LT015Tile1').fadeIn(250);

			var currentLetter = subClick;

		} else {

			$('#LT015 #blockUnderline' + subClick).removeClass('blockUnderlineHidden');
			// $('#LT015 .blockUnderline').removeClass('blockUnderlineHidden');
		}
	} else {
		nextpage();
	}
}


function l6vv1() {
	step++;
	var remainder1 = step % 3;
	var currentStep = parseInt(step / 3) + 1;
	if (step < 36) {
		if (remainder1 == 1) {
			$('#l6vv1Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 2) {
			$('#l6vv1Word' + currentStep + ' .underLineOnly .subUnderLine').removeClass('underLineOnlyHidden');
		}
		if (remainder1 == 0) {
			$('#l6vv1Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#l6vv1Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
			$('#l6vv1Word' + (currentStep - 1) + ' .underLineOnly .subUnderLine').addClass('underLineOnlyHidden');
		}
	} else {
		nextpage();
	}
}

function LT016() {
	step++;
	if (step <= lessonData.pages[pageNum].words.length) {
		$('div [id^="LT016Tile' + step + '"]').fadeIn(250);
	} else {
		nextpage();
	}
}

function LT017() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalClicks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalClicks++;
					break;
				case '/':
					totalLetters++;
					totalClicks++;
					break;
				case '*':
					totalLetters++;
					totalClicks++;
					break;
			}
		}
		totalClicks++;
		clickArray.push({
			'letters': totalLetters,
			'clickStart': totalClicks
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	console.log('endPoint:' + endPoint);
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}



		var subClick = 0;
		subClick = (clickArray[currentWord - 1].letters) - (clickArray[currentWord - 1].clickStart - (step + 1));
		console.log('step:' + step);
		console.log('currentWord:' + currentWord);
		console.log('subClick:' + subClick);
		console.log('clickStart:' + clickArray[currentWord - 1].clickStart);
		console.log('letters:' + clickArray[currentWord - 1].letters);

		if (subClick != 1) {
			$('#LT017Tile' + (subClick - 1)).fadeIn(500);
		} else {
			console.log('build new word');
			/////////////////////////
			var parseText = lessonData.pages[pageNum].words[currentWord - 1];
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
			//////////////////////////

		}



	} else {
		nextpage();
	}
}

function LT018() {
	step++;
	//Off by one on first click; increment to fix
	if (step == 1) {
		step++;
	}
	//First compute a click array to determine what word and color
	var clickArray = [];
	var totalLetters = 0;
	var totalClicks = 0;
	var revealClicks = 0;
	var underlineClicks = 0;
	var circleClicks = 0;
	//Count letters and colors and push on array
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		totalLetters = 0;
		circleClicks = 0;
		underlineClicks = 0;
		var parseCountText = lessonData.pages[pageNum].words[i];
		for (j = 0; j < parseCountText.length; j++) {
			switch (parseCountText.charAt(j)) {
				case '-':
					totalLetters++;
					totalClicks++;
					break;
				case '/':
					totalLetters++;
					totalClicks++;
					break;
				case '*':
					totalLetters++;
					totalClicks++;
					break;
				case '(':
					totalLetters++;
					circleClicks++;
					totalClicks++;
					break;
				case '_':
					totalLetters++;
					underlineClicks++;
					totalClicks++;
					break;
			}
		}
		//totalClicks++;
		totalLetters -= 1;
		clickArray.push({
			'letters': totalLetters,
			'circles': circleClicks,
			'underlines': underlineClicks,
			'clickStart': totalClicks
		});
	}
	console.log(clickArray);
	var endPoint = clickArray[clickArray.length - 1].clickStart;
	if (step <= endPoint) {
		//figure out which word and which color
		var currentWord = 1;

		while (step > clickArray[currentWord - 1].clickStart && currentWord < clickArray.length) {
			currentWord++;
		}
		var subClick = 0;
		subClick = (clickArray[currentWord - 1].letters) - (clickArray[currentWord - 1].clickStart - (step + 1));
		var circles = clickArray[currentWord - 1].circles;
		var underlines = clickArray[currentWord - 1].underlines;
		var clicks = clickArray[currentWord - 1].letters;
		var letters = (clicks + 1) - circles - underlines;
		console.log('subClick:' + subClick);
		if (subClick != 1) {
			//Figure out what to show
			if (subClick - 1 <= (clicks - circles - underlines)) {
				$('#LT018Content' + (subClick)).removeClass('LT018Hidden');
				console.log('show letters');
			} else {
				//circles and underlines 
				if (subClick - 1 <= (clicks - circles)) {

					console.log('show underlines');
					console.log('subClick:' + subClick);
					console.log('letters:' + letters);
					console.log('underlines:' + underlines);
					console.log('circles:' + circles);
					console.log('underline to show:' + (subClick - letters));
					$('#LT018CircUnderline' + (subClick - letters)).removeClass('LT018CircUnderlineHidden');
					//show underlines
					//console.log('current underline:' + subClick - (clicks-circles-underlines));
				} else {
					console.log('show circles');
					console.log('subClick:' + subClick);
					console.log('letters:' + letters);
					console.log('underlines:' + underlines);
					console.log('circles:' + circles);
					console.log('circle to show:' + (subClick - letters));
					$('#LT018CircUnderline' + (subClick - letters)).removeClass('LT018CircUnderlineHidden');
					//show circles
					//console.log('current circle:' + subClick - (clicks-underlines));
				}
			}
		} else {
			//Create Next word
			var parseText = lessonData.pages[pageNum].words[currentWord - 1];
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
		}
	} else {
		nextpage();
	}
}

function LT028() {
	nextpage();
}

function LT029() {
	step++;

	var clickArray = [];
	var circleCount = 0;
	var underlineCount = 0;
	var totalCount = 0;
	for (i = 0; i < lessonData.pages[pageNum].words.length; i++) {
		var parseText = lessonData.pages[pageNum].words[i];
		circleCount = 0;
		underlineCount = 0;
		for (j = 0; j < parseText.length; j++) {
			var currChar = parseText.charAt(j);
			switch (currChar) {
				case '(':
					circleCount++;
					totalCount++;
					break;
				case '_':
					underlineCount++;
					totalCount++;
					break;
			}
		}
		clickArray.push({
			'circles': circleCount,
			'underlines': underlineCount,
			'total': totalCount
		});
	}

	if (step <= clickArray[clickArray.length - 1].total) {
		var word = 0;
		while (step > clickArray[word].total) {
			word++;
		}
		word++;

		var subStep = step - clickArray[word - 1].total + clickArray[word - 1].underlines + clickArray[word - 1].circles;
		if (subStep == 1 && clickArray[word - 1].underlines > 0) {
			$('#word' + word + ' .LT029Underline').removeClass('LT029CircUnderlineHidden');
			// $('#word' + word + ' .LT029Circle').removeClass('LT029CircUnderlineHidden');

		} else {
			$('#word' + word + ' .LT029Circle').removeClass('LT029CircUnderlineHidden');
			$('#word' + word + ' .LT029Underline').removeClass('LT029CircUnderlineHidden');
		}
	} else {
		nextpage();
	}
}

function WS015() {
	step++;
	var currWord = step;
	if (step <= lessonData.pages[pageNum].words.length) {

		$('#WS015Word' + currWord + 'Check1 div').removeClass('hiddenCheck');
		$('#WS015Word' + currWord + 'Check2 div').removeClass('hiddenCheck');
		$('#WS015Word' + currWord + 'Check3 div').removeClass('hiddenCheck');
		$('#WS015Word' + currWord + 'Check4 div').removeClass('hiddenCheck');
		$('#WS015Word' + currWord + 'Check5 div').removeClass('hiddenCheck');


	} else {
		nextpage();
	}
}

function WS017() {
	step++;
	var remainder = step % 2;
	var currWord = parseInt((step - 1) / 2) + 1;
	if (step <= 2 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS017Word' + currWord + 'Circ1').removeClass('hiddenCirc');
				$('#WS017Word' + currWord + 'Circ2').removeClass('hiddenCirc');
				break;
			case 0:
				$('#WS017Word' + currWord + 'Col1Check .checkMark').removeClass('hiddenCheck');
				$('#WS017Word' + currWord + 'Col2Check .checkMark').removeClass('hiddenCheck');
				break;

		}
	} else {
		nextpage();
	}
}

function WS018() {
	step++;
	var remainder = step % 3;
	var currWord = parseInt(step / 3) + 1;
	if (step <= 3 * lessonData.pages[pageNum].words.length) {
		switch (remainder) {
			case 1:
				$('#WS018Word' + currWord + 'Col1Check0 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col1Check1 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col1Check2 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col1Check3 div').removeClass('hiddenCheck');
				break;
			case 2:
				$('#WS018Word' + currWord + 'Col2Check0 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col2Check1 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col2Check2 div').removeClass('hiddenCheck');
				$('#WS018Word' + currWord + 'Col2Check3 div').removeClass('hiddenCheck');
				break;
			case 0:
				$('#WS018SchwaCount' + (currWord - 1) + ' span').removeClass('hidden');
				break;
		}
		console.log(step);
		console.log(remainder);
	} else {
		nextpage();
	}
}

function l7av2() {
	step++;
	var remainder1 = step % 4;
	var currentStep = parseInt(step / 4) + 1;
	if (step < 48) {
		if (remainder1 == 2) {
			$('#l7av2Word' + currentStep + ' .wordPartsSyllable').removeClass('wordsNoStroke');
		}
		if (remainder1 == 1) {
			$('#l7av2Word' + currentStep + ' .wordPartsVowel').removeClass('vowelNoStroke');
		}
		if (remainder1 == 3) {
			$('#l7av2Word' + currentStep + ' .wordPartsSchwa').removeClass('schwaNoStroke');
		}
		if (remainder1 == 0) {
			$('#l7av2Word' + (currentStep - 1) + ' .wordPartsVowel').addClass('vowelNoStroke');
			$('#l7av2Word' + (currentStep - 1) + ' .wordPartsSyllable').addClass('wordsNoStroke');
			$('#l7av2Word' + (currentStep - 1) + ' .wordPartsSchwa').addClass('schwaNoStroke');
		}
	} else {
		nextpage();
	}
}

function l7bv2() {
	step++;

	var remainder = step % 2;


	var word = Math.ceil(step / 2);
	console.log('---------');
	console.log('word:' + word);
	console.log('step:' + step);
	if (step <= 24) {
		if (remainder == 1) {
			$('#l7bv2w' + word + ' div').removeClass('uHidden');
		} else {
			$('#l7bv2w' + word + ' div').removeClass('sHidden');
		}

	} else {
		nextpage();
	}
}

function CD001() {
	nextpage();
}

function CD003() {
	step++;
	if (step + 1 > lessonData.pages[pageNum].dataSet.length) {
		nextpage();
	} else {
		$('#CD003 .fullScreen').fadeOut(250);
		$('#CD003imageBlock' + step).fadeIn(250);
	}
}


function CD007() {

	$('#CD007').css('padding-left', '0');
	$('#CD007').css('padding-right', '0');
	var colWidth = 100 / exerciseData.exercises[pageNum - 1].dataSet[0].icons.length;
	var cols = exerciseData.exercises[pageNum - 1].dataSet[0].icons.length;
	CD007colWidthEms = ($('#CD007').width() / parseFloat($('#CD007').css('font-size'))) / exerciseData.exercises[pageNum - 1].dataSet[0].icons.length;
	var colHeightEms = $('#CD007').height() / parseFloat($('#CD007').css('font-size'));
	CD007IconSize = CD007colWidthEms * .9;

	if (CD007IconSize > colHeightEms * .8) {
		CD007IconSize = CD007colWidthEms * .7;
	}

	var htmlString = '';


	for (i = 0; i < exerciseData.exercises[pageNum - 1].dataSet[0].icons.length; i++) {
		htmlString += '<div id="CD007IconBlock" class="flexBlockInline">';
		htmlString += '<div id="CD007image' + i + '" class="standardIcon ' + exerciseData.exercises[pageNum - 1].dataSet[0].icons[i] + '"></div>';
		htmlString += '</div>';
	}

	$('#CD007').html(htmlString);
	$('#CD007 .flexBlock').css('width', (CD007colWidthEms - .5) + 'em');
	for (i = 0; i < exerciseData.exercises[pageNum - 1].dataSet[0].icons.length; i++) {
		$('#CD007image' + i).css('height', CD007IconSize + 'em');
		$('#CD007image' + i).css('width', CD007IconSize + 'em');
		$('#CD007image' + i).css('display', 'none');
	}
	$('#CD007').css('padding-top', (exerciseData.exercises[pageNum - 1].dataSet[0].icons.length * 2) + 'em');
	$('#CD007 .standardIcon').fadeIn(500);
	$('#CD007').unbind();
	$('#CD007').bind(clicker, function () {
		CD007Play();
	});
	initPage();
}

function CD007Play() {
	step++;
	if (step + 1 > exerciseData.exercises[pageNum - 1].dataSet.length) {
		nextPage();
	} else {
		$('#CD007').css('padding-left', '0');
		$('#CD007').css('padding-right', '0');
		var colWidth = 100 / exerciseData.exercises[pageNum - 1].dataSet[step].icons.length;
		var cols = exerciseData.exercises[pageNum - 1].dataSet[step].icons.length;
		CD007colWidthEms = ($('#CD007').width() / parseFloat($('#CD007').css('font-size'))) / exerciseData.exercises[pageNum - 1].dataSet[step].icons.length;
		var colHeightEms = $('#CD007').height() / parseFloat($('#CD007').css('font-size'));
		CD007IconSize = CD007colWidthEms * .9;

		if (CD007IconSize > colHeightEms * .8) {
			CD007IconSize = CD007colWidthEms * .7;
		}

		var htmlString = '';


		for (i = 0; i < exerciseData.exercises[pageNum - 1].dataSet[step].icons.length; i++) {
			htmlString += '<div id="CD007IconBlock" class="flexBlockInline">';
			htmlString += '<div id="CD007image' + i + '" class="standardIcon ' + exerciseData.exercises[pageNum - 1].dataSet[step].icons[i] + '"></div>';
			htmlString += '</div>';
		}


		$('#CD007').html(htmlString);
		$('#CD007 .flexBlock').css('width', (CD007colWidthEms - .5) + 'em');
		for (i = 0; i < exerciseData.exercises[pageNum - 1].dataSet[step].icons.length; i++) {
			$('#CD007image' + i).css('height', CD007IconSize + 'em');
			$('#CD007image' + i).css('width', CD007IconSize + 'em');
			$('#CD007image' + i).css('display', 'none');
		}

		$('#CD007').css('padding-top', (exerciseData.exercises[pageNum - 1].dataSet[step].icons.length * 2) + 'em');
		console.log('icons:' + exerciseData.exercises[pageNum - 1].dataSet[step].icons.length)
		$('#CD007 .standardIcon').fadeIn(500);
		$('#CD007').unbind();
		$('#CD007').bind(clicker, function () {
			CD007Play();
		});

	}

}

function CD015() {

	var clickArray = [];
	var totalClicks = 0; //negative one offset for first item
	for (i = 0; i < lessonData.pages[pageNum].dataSet.length; i++) {
		totalClicks += lessonData.pages[pageNum].dataSet[i].letters.length * 2 + 2;
		clickArray.push(totalClicks);
	}

	if (step == 0) {
		step = 2;
	} else {
		step++;
	}


	if (step > totalClicks) {
		nextpage();
	} else {
		var ds = 0;
		while (step > clickArray[ds]) {
			ds++;
		}
		var subClick = (step - clickArray[ds]) + (lessonData.pages[pageNum].dataSet[ds].letters.length * 2) + 1;

		if (subClick == 0) {
			var htmlString = '';
			//htmlString += '<div id="CD015" class="fullScreen">';
			htmlString += '<div id="CD015ColorBlock">';
			for (i = 0; i < lessonData.pages[pageNum].dataSet[ds].colors.length; i++) {
				htmlString += '<div id="CD015ColorTile' + (i + 1) + '" class="letterTileBack"><div class="letterTile ';
				htmlString += 'letterTile' + lessonData.pages[pageNum].dataSet[ds].colors[i] + '"></div></div>';
			}
			htmlString += '</div>';

			htmlString += '<div id="CD015LetterBlock">';
			for (i = 0; i < lessonData.pages[pageNum].dataSet[ds].letters.length; i++) {
				htmlString += '<div id="CD015LetterTile' + (i + 1) + '" class="letterTileBack"><div class="letterTile">';
				htmlString += checkLetter(lessonData.pages[pageNum].dataSet[ds].letters[i]) + '</div></div>';
			}
			htmlString += '</div>';

			htmlString += '<div id="CD015IconBlock">';
			htmlString += '<div id="CD015image" class="blockIcon ' + lessonData.pages[pageNum].dataSet[ds].icon + '"></div>';
			htmlString += '</div>';

			//htmlString += '</div>';


			$('#CD015').html(htmlString);
			//$('#CD015image').css('font-size', '1.25em');
			//$('#CD015 .letterTile').css('font-size', '3.75em');
			$('#CD015image').css('font-size', '1em');
			$('#CD015 .letterTile').css('font-size', '2.75em');
			$('#CD015 .letterTile').css('opacity', '0');
			$('#CD015 .blockIcon').css('opacity', '0');
			/*$('#CD015').unbind();
			$('#CD015').bind(clicker, function () {
				CD015();
			});*/
		} else {
			console.log(subClick);

			if (subClick == 1) {
				$('#CD015 .blockIcon').css('transition', 'all .5s 0s');
				$('#CD015 .blockIcon').css('opacity', '100');
			} else {
				if (subClick < lessonData.pages[pageNum].dataSet[ds].letters.length + 2) {
					$('#CD015ColorTile' + (subClick - 1) + ' .letterTile').css('transition', 'all .5s 0s');
					$('#CD015ColorTile' + (subClick - 1) + ' .letterTile').css('opacity', '100');
				} else {
					$('#CD015LetterTile' + (subClick - 1 - lessonData.pages[pageNum].dataSet[ds].letters.length) + ' .letterTile').css('transition', 'all .5s 0s');
					$('#CD015LetterTile' + (subClick - 1 - lessonData.pages[pageNum].dataSet[ds].letters.length) + ' .letterTile').css('opacity', '100');
				}
			}
		}
	}
}
