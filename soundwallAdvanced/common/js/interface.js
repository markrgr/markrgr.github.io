//Overall tabindex count used for menus and content loading
var tabCount = 1;

function toggleControls() {
    $('#controller').toggleClass('opened');
    $('.tools').toggleClass('opened');
}

function toggleMove() {
    $('#btnMoveToggle').toggleClass('opened');
    if ($('#btnMoveToggle').hasClass('opened')) {
        $('#wrapper > .object').draggable(true);
        $('#wrapper > .object').draggable({
            disabled: false
        });
        console.log('dragging on');
    } else {
        $('#wrapper > .object').draggable({
            disabled: true
        });
        console.log('dragging off');
    }
}
var ssoData;

function loadPreset(url) {
    presetData = [];
    //$.getJSON(url, function (data) {
    switch (url) {
        case 'vowelValley':
            presetData = ssoData[0].vowelValley;
            break;
        case 'vowelValley1':
            presetData = ssoData[0].vowelValley1;
            break;
        case 'vowelValley2':
            presetData = ssoData[0].vowelValley2;
            break;
        case 'consonantCanyon1':
            presetData = ssoData[0].consonantCanyon1;
            break;
        case 'consonantCanyon2':
            presetData = ssoData[0].consonantCanyon2;
            break;
        case 'sortingStream':
            presetData = ssoData[0].sortingStream;
            break;
        case 'wordMathMountain':
            presetData = ssoData[0].wordMathMountain;
            break;
        case 'media':
            presetData = ssoData[0].media;
            break;
        case 'aud':
            presetData = ssoData[0].aud;
            break;
        case 'countdown':
            presetData = ssoData[0].countdown;
            break;
        case 'blast':
            presetData = ssoData[0].blast;
            break;
        case 'hdword':
            presetData = ssoData[0].hdword;
            break;
        case 'boost':
            presetData = ssoData[0].boost;
            break;

        case 'apps':
            presetData = ssoData[0].apps;
            break;

        case 'library1':
            presetData = ssoData[0].library1;
            break;

        case 'ebkPlayer1':
            presetData = ssoData[0].ebkPlayer1;
            break;

        case 'vitcs':
            presetData = ssoData[0].vitcs;
            break;

        case 'suproom':
            console.log('ssoData:');
            console.log(ssoData);
            if (ssoData) {
                presetData = ssoData[0].suproom;
            }

            break;

        case 'morph':
            presetData = ssoData[0].morph;
            break;

        case 'lettertileFreePlay':
            presetData = ssoData[0].letterTileFreePlay;
            break;
        case 'countdownAdmin':
            presetData = ssoData[0].adminCountdown;
            break;
        case 'blastAdmin':
            presetData = ssoData[0].adminBlast;
            break;

        case 'hdwordAdmin':
            presetData = ssoData[0].adminHDWord;
            break;
        case 'heartwordAdmin':
            presetData = ssoData[0].adminHeartword;
            break;
        case 'markMedia':
            presetData = ssoData[0].markMedia;
            break;
        case 'markAIChat':
            presetData = ssoData[0].markAIChat;
            break;
        case 'markAIAvatar':
            presetData = ssoData[0].markAIAvatar;
            break;
    }

    if (presetData) {
        buildObjects(presetData);
    }
}

function buildPresetControls(url) {
    console.log('url:' + url);
    $.getJSON('data/' + url + '.json', function (data) {
        console.log(data);
        ssoData = data;
        var menuString = '';
        var htmlString = '';
        for (i = 0; i < data[0].menu.length; i++) {
            if (data[0].menu[i].type == 'item') {
                //menuString += '<li class="' + data[0].menu[i].source + '" tabindex="' + tabCount + '" tabindexfixed="' + tabCount + '">';
                menuString += '<li class="' + data[0].menu[i].source + '" tabindex="0" tabindexfixed="' + tabCount + '">';

                menuString += '<h1>' + data[0].menu[i].label + '</h1></li>';
                tabCount++;
            }
            if (data[0].menu[i].type == 'link') {
               /* menuString += '<li class="presetLinkBox"><a href="' + data[0].menu[i].target + '" target="_new"  role="button" name="'+data[0].menu[i].alt+'" tabindex="0" tabindexfixed="' + tabCount + '"><li class="' + data[0].menu[i].source + '">';
                menuString += '<h1>' + data[0].menu[i].label + '</h1></a></li>';
                tabCount++;*/
                menuString += '<li class="presetLinkBox"><h1><a href="' + data[0].menu[i].target + '" target="_new"  role="button" name="'+data[0].menu[i].alt+'" tabindex="0" tabindexfixed="' + tabCount + '">' + data[0].menu[i].alt + '</a></h1></li>';

            }
            if (data[0].menu[i].type == 'img') {
                htmlString += '<img class="img ' + data[0].menu[i].style + '" alt="'+data[0].menu[i].alt+'" style="' + buildProps(data[0].menu[i]) + '"  src="' + data[0].menu[i].content + '">';
            }
            if (data[0].menu[i].type == 'txt') {
                htmlString += '<div class="txt ' + data[0].menu[i].style + '" style="' + buildProps(data[0].menu[i]) + '">' + data[0].menu[i].content + '</div>';
            }

        }
        $('#presets ul').html(menuString);
        $('#presets').append(htmlString);


        if (ssoData[0].library1) {
            loadPreset('library1');
        }

        if (ssoData[0].vitcs) {
            loadPreset('vitcs');
        }

        if (ssoData[0].suproom) {
            loadPreset('suproom');
        }

        if (ssoData[0].morph) {
            loadPreset('morph');
        }

        for (j = 0; j < data[0].menu.length; j++) {

            if (data[0].menu[j].action == 'openSlide') {
                var tempClass = data[0].menu[j].source + '';

                $('.' + tempClass).click(function () {
                    $('#ghoster').fadeIn(100);
                    $('.presetList li').removeAttr('tabindex');
                    $('.presetLinkBox a').attr('tabindex', '-1');
                    //disable preset tabbing
                    $('.presetList li').removeClass('current');
                    loadPreset($(this).attr('class'));
                    $(this).addClass('current');
                });

                $('.' + data[0].menu[j].source).bind('keydown', function (e) {
                    if (e.keyCode == 13) {
                        $('#ghoster').fadeIn(100);
                        $('.presetList li').removeAttr('tabindex');
                        $('.presetLinkBox a').attr('tabindex', '-1');
                        //disable preset tabbing
                        $('.presetList li').removeClass('current');
                        loadPreset($(this).attr('class'));
                    }
                });

            }

            if (data[0].menu[j].action == 'openLink') {
                var tempClass = data[0].menu[j].source + '';
                $('.' + tempClass).click(function () {
                    alert('click link');
                });
                $('.' + data[0].menu[j].source).bind('keydown', function (e) {
                    if (e.keyCode == 13) {
                        alert('click link keyboard');
                    }
                });
            };




        }
    });
}

function initControls(url) {
    buildPresetControls(url);
}
var isMobile = false; //initiate as false

$(document).ready(function () {
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }
    if ($('body').hasClass('sdw')) {
        initControls('soundwall');
        toggleControls();
    }

    if ($('body').hasClass('vtc')) {
        initControls('vitcs');
        toggleControls();
        loadPreset('vitcs');
    }
    if ($('body').hasClass('sup')) {
        initControls('suproom');
        toggleControls();
        loadPreset('suproom');
    }

    if ($('body').hasClass('mph')) {
        initControls('morph');
        toggleControls();
        loadPreset('morph');
    }
    if ($('body').hasClass('markMedia')) {
        initControls('markMedia');
        toggleControls();
        loadPreset('markMedia');
    }
    if ($('body').hasClass('med')) {
        initControls('media');
        toggleControls();
    }
    if ($('body').hasClass('aud')) {
        initControls('aud');
        toggleControls();
    }
    if ($('body').hasClass('mark')) {
        initControls('mark');
        toggleControls();
        loadPreset('mark');
    }
    if ($('body').hasClass('admin')) {
        initControls('admin');
        toggleControls();
        loadPreset('admin');
    }


    if ($('body').hasClass('ebk')) {
        initControls('library');
        toggleControls();
        loadPreset('library1');
    }





});
