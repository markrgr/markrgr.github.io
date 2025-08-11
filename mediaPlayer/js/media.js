/*AROUND LINE 160 is the place to Emit 
the Video Done WS Call. */


var currentWidth;
var referenceWidth = 360;
var active = true;
var maxTime = 0;

function sizer() {
    if (active) {
        currentWidth = $('body').width();
        sizePercent = (currentWidth / referenceWidth) * 100;
        $('body').css('font-size', sizePercent + '%');
    } else {
        $('body').css('font-size', '14px');
    }
}

$(document).ready(function () {

    sizer();
    // window.addEventListener("contextmenu", function(e) { e.preventDefault(); });
    $(window).resize(function () {
        sizer();
    });

    const urlParams = new URLSearchParams(window.location.search);
    // Extract the value of the 'video' parameter
    // Extract the value of the 'video' parameter
    //const vid = urlParams.get('v');
    var style = urlParams.get('s');
    var link = urlParams.get('l');
    var vid = urlParams.get('v');
    var htmlString = '';

    //vid = '23189c13-078d-425b-b24c-dd57f40740a3';

    var vidString = 'https://media.reallygreatreading.com/object-link/' +vid+'/raw.mpd';
    const player = dashjs.MediaPlayer().create();
    player.initialize(
        document.getElementById("video1"),
        vidString,
        true);



    //$('#caption1').html('');
    htmlString = vidString;
    // Select the div by its ID
    const wrapper = document.getElementById('wrapper');

    // Insert the string into the div

    //wrapper.innerHTML = htmlString;

    //$('.vid.standard').addClass('s' + style);


    $('.vid.standard').addClass('s' + style);
    var video = $('#video1').get(0);
    video.pause();
    var loaded = false;
    video.autoplay = false;
    video.load();

    video.oncanplay = function () {
        if (!loaded) {
            loaded = true;
            var video = $('#video1').get(0);
            //video.play();

        }
    }

    video.onloadstart = function () {
        $('.vidCaption').html('');

        var video = $('#video1').get(0);
        //video.autoplay = true;
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
        // video.play();
    }

    $('.vidCaption').hide();

    $('.vidPlay').bind('click', function () {
        //$('.vidCaption').fadeOut(200);
        //$('.vidCaption').html('');
        //$('.vidCaption').html('');
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
    });

    $('.vidPlay').bind('keydown', function (e) {

        if (e.keyCode == 13) {
            //$('.vidCaption').fadeOut(200);
            //$('.vidCaption').html('');
            //$('.vidCaption').html('');
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
            var interaction = video.textTracks[1];
            interaction.mode = 'hidden';
            interaction.oncuechange = function (e) {
                var cue = this.activeCues[1];
                if (cue) {
                    var cueString = cue.getCueAsHTML();
                    if (cueString != '') {
                        $('#wsBlock').fadeIn(200);
                        $('#wsBlock').html(cue.getCueAsHTML());
                    } else {
                        $('#wsBlock').fadeOut(200);
                        $('#wsBlock').html('empty');
                    }
                }
            };
            $(this).fadeOut(200);
            video.play();
            console.log('video play');
        }
    });

    $('video').bind('timeupdate', function (e) {
        var video = $(this).get(0);
        if (parseInt(style) < 100) {
            maxTime = video.duration;
        } else {
            if (video.currentTime > maxTime) {
                maxTime = video.currentTime;
            }
        }

        if (video.currentTime >= video.duration) {
            //Opportunity to Notify video done
            console.log('Possible Web Socket for video done');
            //socket.emit("message", { object_id: objId, language_code: langCode });
            if (link != null) {
                //alert(link);
                window.location = link;
            } else {
                //alert('no link. Can send websocket call here.');
            }
            $('.vidSlider').val(0);
            $('.vidPlay').fadeIn(100);
            video.currentTime = 0;
            video.pause();

            $('.vidCaption').fadeOut(200);
            $('.vidCaption').html('');
            //sendComplete();

            $('.vidPlayToggle').addClass('paused');

            //Websocket Video Done
            console.log('video done');
        } else {
            $('.vidSlider').val((video.currentTime / video.duration) * 1000);
        }
    });

    $('.vidSlider').bind('input change', function (e) {
        //var target = $(this).attr('target');
        $('.vidCaption').fadeOut(200);
        $('.vidCaption').html('');
        var video = $('#video1').get(0);
        var min = $(this).attr('min');
        var max = $(this).attr('max');
        if (video.duration * ($(this).val() / max) <= maxTime) {
            video.currentTime = video.duration * ($(this).val() / max);

        } else {
            video.currentTime = maxTime;
        }
    });

    $('.vidPlayToggle').bind('click', function () {
        //var target = $(this).attr('target');
        // $('#' + target).requestFullscreen();
        $('.vidThumbnail').fadeOut(200);
        var video = $('#video1').get(0);
        video.play();
        //$('.vidCaption').fadeOut(200);
        //$('.vidCaption').html('');
        if ($(this).hasClass('paused')) {
            console.log('pause');
            $(this).hide();
            $(this).removeClass('paused');
            $(this).fadeIn(100);
            video.play();
        } else {
            console.log('play');
            $(this).hide();
            $(this).addClass('paused');
            $(this).fadeIn(100);
            video.pause();
        }
        $(this).blur();

    });

    $('.vidPlayToggle').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            $('.vidThumbnail').fadeOut(200);
            //$('.vidCaption').fadeOut(200);
            //$('.vidCaption').html('');
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

    $('.vidClose').bind('click', function () {
        //var target = $(this).attr('target');
        // $('#' + target).requestFullscreen();
        //var video = $('#video1').get(0);
        $('#video1').remove();
        //video.play();
        //video.requestFullscreen();
    });

    $('.vidClose').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            //var target = $(this).attr('target');
            // $('#' + target).requestFullscreen();
            $('#video1').remove();
            //video.play();
            //video.requestFullscreen();
        }
    });

});
