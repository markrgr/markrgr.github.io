
var currentInputCell = "";

var timerRunning = false;

var timerInterval;

function toggleCalc(){
    //$('#HD001Calculator .calculatorBox').css('transition','all 1s 0s');
    if (parseInt($('#HD001Calculator .calculatorBox').css('right'))<0) {
        $('#HD001Calculator').css('z-index', 102);
        $('#HD001Calculator .calculatorBox').animate(
            {
                'right':'0em'
            }, 1000, function(){
            
        });
    } else {  
         
         $('#HD001Calculator .calculatorBox').animate(
             {
                 'right':'-38em'
             }, 1000, function(){
             $('#HD001Calculator').css('z-index', 99);
         });
    }
}

function showNumberInput(inputCell) {
    
    currentInputCell = inputCell;
    var currentCell = $(inputCell).attr('id');
    var pickerPosition = $('#' + currentCell).position();
    console.log(pickerPosition.left);
    console.log(pickerPosition.top);
    var newLeft, newTop;
    switch (currentCell) {
        case 'r1A':
            newLeft = 16;
            newTop = -10;
            break;
            case 'r2A':
                newLeft = 22;
                newTop = -10;
                break;
                case 'r3A':
                    newLeft = 28;
                    newTop = -10;
                    break;
                    case 'r1B':
                        newLeft = 16;
                        newTop = -5;
                        break;
                        case 'r2B':
                            newLeft = 22;
                            newTop = -5;
                            break;
                            case 'r3B':
                                newLeft = 28;
                                newTop = -5;
                                break;
    }

  
    console.log(newLeft);
    console.log(newTop);
    $('#HD001Calculator .numberPicker').css('left', newLeft + 'em');
    $('#HD001Calculator .numberPicker').css('top', newTop+ 'em');
    $('#HD001Calculator .numberPicker').fadeIn(500);
}

function addToInput(inputValue) {
    var newValue = parseInt($(currentInputCell).val() + inputValue);
    $(currentInputCell).val(newValue);
    calcHDValues();
}

function calcHDValues() {
   //Reader 1
    for (i = 1; i < 4; i++) {
       if ($('#r'+i+'A').val() != '') {
            var words = $('#r' + i + 'A').val() - parseInt($('#r' + i + 'Offset').html());
            $('#r' + i + 'Attempt').html(words);
            $('#r' + i + 'B').removeAttr('disabled');
            $('#r' + i + 'B').parent().removeClass('calcTableDisabled');
        } else {
            $('#r' + i + 'Attempt').html('#');
            $('#r' + i + 'B').attr('disabled','disabled');
            $('#r' + i + 'B').parent().addClass('calcTableDisabled');
        }
        if ($('#r'+i+'A').val() != '' && $('#r' + i + 'B').val() != '') {
            var words = $('#r' + i + 'A').val() - parseInt($('#r' + i + 'Offset').html());
            var errors = $('#r' + i + 'B').val();
            
            
            var wordsCorrect = words - errors;
            var percentCorrect = (Math.round((wordsCorrect/words*10)*100))/10 + '%';
            $('#r' + i + 'C').html(percentCorrect);
            $('#r' + i + 'D').html(wordsCorrect);
        } else {
            $('#r' + i + 'C').html('#');
            $('#r' + i + 'D').html('#');
        }
    }
}

function clearHDValues() {
    $(currentInputCell).val('');
}
function playChime() {
	$('#chimeSound').get(0).play();
}

function stopChime() {
    var mediaElement = document.getElementById("chimeSound");
    mediaElement.pause();
    mediaElement.currentTime = 0;
}


function startTimer() {
    stopChime();
    playChime();
     $('#HD001Timer .timerVal').html('0');
    $('#HD001Timer .timerHand').css('transform','rotate(0deg');
    //$('#HD001Timer .startTimer').addClass('stopTimer');
    $('#HD001Timer .startTimerTrigger').html('x');
    $('#HD001 .hdPassageBlocker').fadeIn(500);
   $('#HD001Timer').animate({
       'fontSize':'3em',
        'top':'1em'
   }, 1000);
    var timerCount = 0;
    timerInterval = setInterval(function() {
        timerCount++;
         $('#HD001Timer .timerVal').html(timerCount);
        var newAngle = timerCount *6;
        $('#HD001Timer .timerHand').css('transform','rotate(' + newAngle + 'deg');
        if (timerCount >= 60) {
            stopTimer();
            timerRunning = false;
        }
    }, 1000);
}

function stopTimer() {
    stopChime();
    playChime();
   // $('#HD001Timer .startTimer').removeClass('stopTimer');
    $('#HD001Timer .startTimerTrigger').html('go');
    $('#HD001 .hdPassageBlocker').fadeOut(250);
    clearInterval(timerInterval);
       $('#HD001Timer').animate({
       'fontSize':'.8em',
        'top':'3em'
   }, 1000);
}

function updateTimer() {
    $('#HD001 .timerHand').css('transform','rotate(90deg');
}


$(document).ready(function (e) {
    
    $('#HD001Calculator .calculatorTab').mousedown(function(){
        toggleCalc();
    });
    $('#HD001Calculator .calculatorTab').bind('keydown', function(e){
        if (e.keyCode == 13) {
            toggleCalc();
        }
    });
    
   /* $('#HD001Calculator .calcInput').mousedown(function(){
        showNumberInput(this);
    });*/

    $('#HD001Calculator .calcInput').bind('focus', function(e){
        showNumberInput(this);
    });

     $('#HD001Calculator .closePicker').bind('click', function(e){
        $('#HD001Calculator .numberPicker').fadeOut(250);
    });
    
    $('#HD001Calculator .closePicker').bind('keydown', function(e){
        if (keyCode==13) {
            $('#HD001Calculator .numberPicker').fadeOut(250);
        }
       
    });


     $('#HD001Calculator .clearPicker').bind('click', function(){
        $(currentInputCell).val('');
          calcHDValues();
    });

    $('#HD001Calculator .clearPicker').bind('keydown', function(e){
        if (e.keyCode == 13) {
            $(currentInputCell).val('');
            calcHDValues();
        }
    });
    $('#HD001Calculator .inputNum').bind('click', function(e){
       addToInput($(this).html());
    });

    $('#HD001Calculator .inputNum').bind('keydown', function(e){
        if (e.keyCode==13) {
            addToInput($(this).html());
        }
        
     });

    $('.calcInput').change(function(){
       calcHDValues();
    });
    
    $('#HD001Timer .startTimerTrigger').bind('click', function(e){
        if (timerRunning) {
            stopTimer();
            timerRunning = false;
        } else {
            startTimer();
            timerRunning = true;
        }
    });
    $('#HD001Timer .startTimerTrigger').bind('keydown', function(e){
        if (e.keyCode==13) {
            if (timerRunning) {
                stopTimer();
                timerRunning = false;
            } else {
                startTimer();
                timerRunning = true;
            }
        }
  
    });
    
});