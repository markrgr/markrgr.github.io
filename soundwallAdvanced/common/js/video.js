
//SDW Video Controls
function initSDWVideo(vlink) {
    $('#video1Slider').val(0);
    vid = $('#video1').get(0);
    vid.src = vlink;

    var vidString = '';
    vidString += '<div class="vid"><video id="video1" data-dashjs-player="" src="' + vlink + '" crossorigin="anonymous">';
    vidString += '</video></div><script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>';
    $('.vidBox').html('');
    $('.vidBox').html(vidString);

    //Soundwall Video
    $('.sdw .slider[action="sdwVideoSlide"]').unbind('touchstart');
    $('.sdw .slider[action="sdwVideoSlide"]').bind('touchstart', function (e) {
        //var target = $(this).attr('target');
        var video = $('#video1').get(0);
        if (video.paused) {
            video.play();
            $(this).addClass('playing');
        } else {
            video.pause();
            $(this).removeClass('playing');
        }
    });

    $('.sdw .slider[action="sdwVideoSlide"]').unbind('click');
    $('.sdw .slider[action="sdwVideoSlide"]').bind('click', function (e) {
        //var target = $(this).attr('target');
        var video = $('#video1').get(0);
        if (video.paused) {
            video.play();
            $(this).addClass('playing');
        } else {
            video.pause();
            $(this).removeClass('playing');
        }
    });
    $('.sdw .slider[action="sdwVideoSlide"]').unbind('keydown');
    $('.sdw .slider[action="sdwVideoSlide"]').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            var video = $('#video1').get(0);
            if (video.paused) {
                video.play();
                $(this).addClass('playing');
            } else {
                video.pause();
                $(this).removeClass('playing');
            }
        }
    });
 $('.sdw .slider[action="sdwVideoSlide"]').unbind('input change');
    $('.sdw .slider[action="sdwVideoSlide"]').bind('input change', function (e) {
        //var target = $(this).attr('target');
        var video = $('#video1').get(0);
        var min = $(this).attr('min');
        var max = $(this).attr('max');
        video.currentTime = video.duration * ($(this).val() / max);
    });
    $('.sdw video').unbind('timeupdate');
    $('.sdw video').bind('timeupdate', function (e) {
        var video = $('#video1').get(0);
        if (video.duration > 0) {
            if (video.currentTime == video.duration) {
                $('.sdw .slider[action="sdwVideoSlide"]').val(0);
                $('.sdw .slider[action="sdwVideoSlide"]').removeClass('playing');
                video.currentTime = 0;
                video.pause();

            } else {
                $('.sdw .slider[action="sdwVideoSlide"]').val((video.currentTime / video.duration) * 1000);

            }

        }

    });

    //putting sdw audio buttons here too because they are related

    //Soundwall Video
    $('.sdw .wAudPlay').bind('click', function (e) {
        var audio = $(this).parent().children('.aud').children('audio').get(0);
        var wordParent = $(this).parent().children('.aud').children('audio');
        audio.play();
    });

    $('.sdw .wAudPlay').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            var audio = $(this).parent().children('.aud').children('audio').get(0);
            var wordParent = $(this).parent().children('.aud').children('audio');
            audio.play();
        }
    });


    //End Soundwall audio
}
function initSupVideo() {
    $('.btn[action="playVid"]').addClass('paused');

    //VIDEO OBJECTS HERE//

    $('.slider[action="setVideoVol"]').bind('input change', function (e) {
        var target = $(this).attr('target');
        var video = $('#' + target).get(0);
        video.volume = $(this).val() / 1000;;
    });

    $('.slider[action="setVideoTime"]').bind('input change', function (e) {
        var target = $(this).attr('target');
        var video = $('#' + target).get(0);
        var min = $(this).attr('min');
        var max = $(this).attr('max');
        video.currentTime = video.duration * ($(this).val() / max);
    });

    $('video').bind('loadeddata', function (e) {
        var video = $(this).get(0);
        $('.slider[action="setVideoVol"]').val(500);
        video.volume = .5;
        video.play();
    });

    $('video').bind('timeupdate', function (e) {
        var video = $(this).get(0);
        if (video.duration > 0) {
            $('.slider[action="setVideoTime"]').val((video.currentTime / video.duration) * 1000);
        }
        if (video.currentTime >= video.duration) {
            $('.med .playK').addClass('replayVideo');
        } else {
            $('.med .playK').removeClass('replayVideo');
        }

        $('.med .slider.audio').val(video.volume * 1000);
        //Update text
        var track = video.textTracks[0];
        track.mode = 'hidden';
        track.oncuechange = function (e) {
            var cue = this.activeCues[0];
            if (cue) {
                var cueString = cue.text;
                $('#caption1').html(cue.getCueAsHTML());
            }
        };
    });

}

function supVideoLoad(vlink, clink, tlink) {
    var htmlString = '';
    if (tlink) {
        //alert(tlink)
        $('#btnVidTranscripts').attr('target', '../assets/' + tlink);
        $('#btnVidTranscripts').fadeIn(50);
    } else {
        //alert('no tlink');
        $('#btnVidTranscripts').hide();
    };
    var vidString = '';
    vidString += '<div class="vid"><video id="video1" data-dashjs-player="" src="' + vlink + '" crossorigin="anonymous">';
    vidString += '<track default kind="captions" srclang="en" src="' + clink + '" />';
    vidString += '</video></div><script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>';
    $('#caption1').html('');
    $('#video0 .vidBox').html(vidString);
    $('.supSlideNavigation').hide();
    initSupVideo();
}