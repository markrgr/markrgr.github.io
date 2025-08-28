var currentWidth;
var referenceWidth = 1024;
var sizePercent;
var resize = true;
function toggleResize(){
    resize = !resize;
    if (resize) {
        $('.resize').removeClass('resizeOff');
    } else {
        $('.resize').addClass('resizeOff');
    }
    sizer();
}

function sizer()
{

    if (resize) {
        currentWidth = $('#wrapper').width();
        sizePercent = (currentWidth/referenceWidth)*100;
        $('#wrapper').css('font-size', sizePercent+'%');
       /* $('#controls').css('font-size', sizePercent+'%');
        $('#controls').css('font-size', sizePercent*3+'%');

        $('#content').css('font-size', sizePercent+'%');
        $('#popup').css('font-size', sizePercent*.8+'%');
        $('#menuBarParent').css('font-size', sizePercent+'%');
        $('#s0Branding').css('font-size', sizePercent+'%');
    */
        /*if ($('body').height()/$('body').width() < .57) {
            var newWidth = $('body').height()/.57;
            $('#contentSizer').css('width', newWidth + 'px');
            $('#contentSizer').css('padding-bottom',$('body').height()+ 'px');
            $('#contentSizer').css('font-size', newWidth/$('body').width() + 'em');
        }
        
        if ($('body').height()/$('body').width() > .75) {
            $('#contentSizer').css('width','100%');
            $('#contentSizer').css('padding-bottom','75%');
            $('#contentSizer').css('font-size','1em');
        }
        
        if ($('body').height()/$('body').width() <= .75 && $('body').height()/$('body').width() >= .57 ) {
            $('#contentSizer').css('width','100%');
            $('#contentSizer').css('padding-bottom',$('body').height() + 'px');
            $('#contentSizer').css('font-size','1em');
        }*/
    
       /*     if ($('body').height()/$('body').width() < .57) {
            var newWidth = $('body').height()/.57;
            $('#contentSizer').css('width', newWidth + 'px');
            $('#contentSizer').css('padding-bottom',$('body').height()+ 'px');
            $('#contentSizer').css('font-size', newWidth/$('body').width() + 'em');
        }
        
        if ($('body').height()/$('body').width() > .75) {
            $('#contentSizer').css('width','100%');
            $('#contentSizer').css('padding-bottom','75%');
            $('#contentSizer').css('font-size','1em');
    
        }
        
        if ($('body').height()/$('body').width() <= .75 && $('body').height()/$('body').width() >= .57 ) {
            $('#contentSizer').css('width','100%');
            $('#contentSizer').css('padding-bottom',$('body').height() + 'px');
            $('#contentSizer').css('font-size','1em');
        }
    } else {
        $('#contentSizer').css('font-size','14px');
        currentWidth = $('#wrapper').width();
        sizePercent = (currentWidth/referenceWidth)*100;
        $('#content').css('font-size', '100%');
        $('#contentSizer').css('width','100em');
        $('#popup').css('font-size', '80%');
        $('#menuBarParent').css('font-size', '100%');
        $('#s0Branding').css('font-size', '100%');
        $('#wrapper').css('overflow','auto');	*/
    }

} 


var bgWidth= 1024;
var bgHeight=680;

function setBG()
{
	var ratio = bgWidth/bgHeight;
	var docRatio = $('#wrapper').width()/$('#wrapper').height();
	if (ratio > docRatio) {
		$('#wrapper').css('background-size','auto 100%');
		
	} else {
		$('#wrapper').css('background-size','100% auto');
	}
	
	
}


function goFullScreen(){
	var i = document;
 
// go full-screen
if (i.requestFullscreen) {
    i.requestFullscreen();
} else if (i.webkitRequestFullscreen) {
    i.webkitRequestFullscreen();
} else if (i.mozRequestFullScreen) {
    i.mozRequestFullScreen();
} else if (i.msRequestFullscreen) {
    i.msRequestFullscreen();
}
}

function centerHObj(obj) {
	var parentWidth = $('#' + obj).parent().width();
alert($('#' + obj).outerWidth());
	var newLeft = parentWidth/2 -  $('#' + obj).width()/2;
	$('#' + obj).css('left', newLeft + 'px');
}

$(document).ready(function(e) {
     sizer();


    $('#toggleSizer').bind('click',function(e){
        toggleResize();
    });
    
    $(window).resize(sizer);
    $('body').resize(sizer);
});


