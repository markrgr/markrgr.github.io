var level = 'F';
var bannerType = '';

function resetMain() {
    $('#lessonShow').hide();
    $('#s0select0').prop('selectedIndex', 0);
    $('#s0select1').prop('selectedIndex', 0);
    $('#s0select2').prop('selectedIndex', 0);
    $('#s0select0').hide();
    $('#s0select1').hide();
    $('#s0select2').hide();
    $('.bookTab').removeClass('bookTabActive');
    $('.arrowButton').removeClass('arrowButtonSelect');
    $('#selectArrowBlock').hide();
    $('#unitShow').hide();
}

function goHome() {
    $('#content').attr('tabindex','-1');

    $('#contentBacker').css('display', 'none');
    $('.contentPanel').css('display', 'none');
    //$('#menuBarParent').css('display', 'none');
    $('#menuBarLeft').fadeOut(250);
	$('#menuBarSelector').fadeOut(250);
	$('#menuBarRight').fadeOut(250);
    $('#menuBarCenter').fadeIn(250);
    $('#s0').css('display', 'block');
    //$('#s0Branding').css('display', 'block');


    //$('#' + lessonData.pages[pageNum].template).hide();
    $('#wrapper').unbind();
    navClick = true;

    stopVideo();

    pageNum = 0;
    lessonNum = 1;
    if (unitNum > 40) {
        unitNum = 40;
    }
    $('#s0select0').val(unitNum);

}


function setLevel(levelObj) {
    $('.selectDiv').removeClass('selected');
    $('#selectDiv1').addClass('selected');
    $('.arrowButton').removeClass('arrowButtonSelect');
    $(levelObj).addClass('arrowButtonSelect');
    switch ($(levelObj).attr('id')) {
        case 's0level0':
            console.log('level 0');
            level = 'F';
            bannerType = 'F'
            break;
        case 's0level1':
            console.log('level 1');
            level = 'E';
            bannerType = ''
            break;
        case 's0level2':
            console.log('level 2');
            level = 'L';
            bannerType = ''
            break;
    }

    $('#unitShow').slideDown(500);
}



function swapVideo(vid) {
    $('#VI001Vid').attr('src', vid);
    //alert('swap');
}

function stopVideo() {
    //$('#VI001Vid').get(0).pause();
    $('#VI001').html('');
}

function stopStream() {
    $('#VI001').html('');
}

$(document).ready(function (e) {
    $('#homeBtn').click(function (e) {
        navClick = true;
        stopVideo();
        goHome();
    });
    $('#homeBtn').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            navClick = true;
            stopVideo();
            goHome();
        }
    });

    $('#menuBarLessonSelector').change(function (e) {
        navClick = true;
        stopVideo();
        pageNum = e.target.selectedIndex;
        var nextPage = '#' + lessonData.pages[pageNum].template;
        //initPage(nextPage, lessonData.pages[pageNum].template);
        initPage(pageNum, lessonData.pages[pageNum].template);
        $('.contentPanel').hide();
        $(nextPage).fadeIn(500);
    });
    $('#menuBarLessonSelector').mousedown(function (e) {
        navClick = true;
    });
    $('#menuBarLessonSelector').mouseup(function (e) {
        navClick = false;
    });

    $('#navLeft').click(function (e) {
        navClick = true;
        stopVideo();
        $('.contentPanel').hide();
        prevpage();
    });
    $('#navLeft').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            navClick = true;
            stopVideo();
            $('.contentPanel').hide();
            prevpage();
        }
    });
    $('#navRight').click(function (e) {
        navClick = true;
        stopVideo();
        $('.contentPanel').hide();
        console.log('navRight NextPage');
        nextpage();
    });
    $('#navRight').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            navClick = true;
            stopVideo();
            $('.contentPanel').hide();
            console.log('navRight NextPage');
            nextpage();
        }
    });

    $('.arrowButton').bind('click', function (e) {
        setLevel(this);
    });

    $('.arrowButton').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            setLevel(this);
        }
    });



});