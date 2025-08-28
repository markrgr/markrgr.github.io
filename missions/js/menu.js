//Controls operation of main menu
var menuBreak1 = 14;
var menuBreak2 = 24;
function setMaterials(unit) {
    console.log(unit);
    console.log(menuData.units[unit - 1].materials);
    var materialString = '';
    if (menuData.units[unit - 1].materials) {
        materialString = '<h1>Materials for Unit ' + unit+ '</h1>';

        for (i = 0; i < menuData.units[unit - 1].materials.length; i++) {

            materialString += '<a href="'+ menuData.units[unit - 1].materials[i].url +'" class="material pdf" target="_blank"><p>'+menuData.units[unit - 1].materials[i].title+'</p></a>';
        }
    } else {
        materialString = '<h1>No Materials for Unit ' + unit + '</h1>';
    }
    $('#s0Materials').html(materialString);

}
function setBook(bookObj) {
    $('#s0select0').unbind('change');
    $('#s0select1').unbind('change');
    $('#s0select2').unbind('change');
    $('#lessonShow').hide();
    $('#s0select0').prop('selectedIndex', 0);
    $('#s0select1').prop('selectedIndex', 0);
    $('#s0select2').prop('selectedIndex', 0);
    //activate dropdowns
    $('#s0select0').change(function (e) {
        $('.selectDiv').addClass('selected');
        $('#lessonShow').slideDown(500);
        unitNum = Number($(this).val());
        $('#lessonShow').html('');
        for (i = 0; i < menuData.units[unitNum - 1].lessons.length; i++) {
            $('#lessonShow').append('<div class="lessonSelector" id="s0btn' + (i + 1) + '" tabindex="0"><div class="lessonNum">' + (i + 1) + '</div><span class="lessonText" id="s0b' + (i + 1) + '">' + menuData.units[unitNum - 1].lessons[i].lessonText + '</span></div>');
        }
        setMaterials(unitNum);
        $('.lessonSelector').bind('click', function (e) {
            pageNum = 0;
            $('#s0Branding').fadeOut(200);
            navigate(unitNum, Number($(this).attr('id').substr(5)));
        });
        $('.lessonSelector').bind('keydown', function (e) {
            if (e.keyCode == 13) {
                pageNum = 0;
                $('#s0Branding').fadeOut(200);
                navigate(unitNum, Number($(this).attr('id').substr(5)));
            }

        });
    });
    $('#s0select1').change(function (e) {
        $('#lessonShow').slideDown(500);
        unitNum = Number($(this).val());
        $('#lessonShow').html('');
        for (i = 0; i < menuData.units[unitNum - 1].lessons.length; i++) {
            $('#lessonShow').append('<div class="lessonSelector" id="s0btn' + (i + 1) + '" tabindex="0"><div class="lessonNum">' + (i + 1) + '</div><span class="lessonText" id="s0b' + (i + 1) + '">' + menuData.units[unitNum - 1].lessons[i].lessonText + '</span></div>');
        }

        $('.lessonSelector').bind('click', function (e) {
            pageNum = 0;
            $('#s0Branding').fadeOut(200);
            navigate(unitNum, Number($(this).attr('id').substr(5)));

        });
        $('.lessonSelector').bind('keydown', function (e) {
            if (e.keyCode == 13) {
                pageNum = 0;
                $('#s0Branding').fadeOut(200);
                navigate(unitNum, Number($(this).attr('id').substr(5)));
            }

        });
    });
    $('#s0select2').change(function (e) {

        $('#lessonShow').slideDown(500);
        unitNum = Number($(this).val());
        $('#lessonShow').html('');
        for (i = 0; i < menuData.units[unitNum - 1].lessons.length; i++) {
            $('#lessonShow').append('<div class="lessonSelector" id="s0btn' + (i + 1) + '" tabindex="0"><div class="lessonNum">' + (i + 1) + '</div><span class="lessonText" id="s0b' + (i + 1) + '">' + menuData.units[unitNum - 1].lessons[i].lessonText + '</span></div>');
        }

        $('.lessonSelector').bind('click', function (e) {
            pageNum = 0;
            $('#s0Branding').fadeOut(200);
            navigate(unitNum, Number($(this).attr('id').substr(5)));

        });
        $('.lessonSelector').bind('keydown', function (e) {
            if (e.keyCode == 13) {
                pageNum = 0;
                $('#s0Branding').fadeOut(200);
                navigate(unitNum, Number($(this).attr('id').substr(5)));
            }

        });

    });
    $('.bookTab').removeClass('bookTabInactive');
    $('.bookTab').removeClass('bookTabActive');
    $(bookObj).addClass('bookTabActive');
    if ($(bookObj).attr('id') == 's0Book1') {
        $('#s0select0').show();
        $('#s0select1').hide();
        $('#s0select2').hide();
    }
    if ($(bookObj).attr('id') == 's0Book2') {
        $('#s0select1').show();
        $('#s0select2').hide();
        $('#s0select0').hide();
    }
    if ($(bookObj).attr('id') == 's0Book3') {
        $('#s0select2').show();
        $('#s0select1').hide();
        $('#s0select0').hide();
    }
    $('#selectArrowBlock').show(500);
}

function getMenu() {
    $.getJSON('data/menu/menu.json' + '?version=' + version, function (data) {
        menuData = data;
        //Build DropDown
        $('#s0select0').html('<option value="">Pick a Unit...</option>');
        $('#s0select1').html('<option value="">Pick a Unit...</option>');
        $('#s0select2').html('<option value="">Pick a Unit...</option>');
        for (i = 0; i < menuBreak1; i++) {
            $('#s0select0').append('<option value="' + (i + 1) + '">' + menuData.units[i].unitTitle + '</option>');
        }
        for (i = menuBreak1; i < menuBreak2; i++) {
            $('#s0select1').append('<option value="' + (i + 1) + '">' + menuData.units[i].unitTitle + '</option>');
        }
        for (i = menuBreak2; i < menuData.units.length; i++) {
            $('#s0select2').append('<option value="' + (i + 1) + '">' + menuData.units[i].unitTitle + '</option>');
        }
        if (isFirefox) {
            $('.unitSelectIndicator').css('background-image', 'none');
            $('#menuSelectorIndicator').css('background-image', 'none');
        }
        //Default Values for Start
        $('#s0b1').html(menuData.units[0].lessons[0].lessonText);
        $('#s0b2').html(menuData.units[0].lessons[1].lessonText);
        $('#s0b3').html(menuData.units[0].lessons[2].lessonText);
        $('#s0b4').html(menuData.units[0].lessons[3].lessonText);
        $('#s0b5').html(menuData.units[0].lessons[4].lessonText);

        setMaterials(unitNum);
        $('.setupSelector').click(function (e) {
            $('#s0Branding').fadeOut(200);
            navigate(unitNum, Number($(this).attr('id').substr(3)));
        });

        $('#s0').fadeIn(500);
        $('#s0Banner').fadeIn(500);
    });
}

function setUpScreens() {
    //Initilize values for all screens

    $('#content').css('background-image', 'none');
}

//Supplemental Code
/*
var maxCol = 8;
var maxColSub = 7;

function getSupplemental() {
    $.getJSON("data/objects/supplementalv2.json", function (data) {
        var supMenuData = data;
        var htmlMenu = '';
        var htmlPanel = '';
        var tabCount = 17;
        for (i = 0; i < data.resources.length; i++) {
            if (data.resources[i].sublinks.length == 1) {
                // htmlMenu += '<div id="supNav' + (i + 1) + '" tabindex="' + tabCount + '" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[0].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                htmlMenu += '<div id="supNav' + (i + 1) + '" role="button" tabindex="0" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[0].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';

                tabCount++;
                htmlPanel += '<div id="supPanel' + (i + 1) + '" class="supPanel supBorder' + data.resources[i].color + '">';

                var titleString = data.resources[i].sublinks[0].title;
                var parsedTitleString = '';
                var foundBr = titleString.indexOf('<br />');

                if (foundBr > -1) {
                    parsedTitleString += titleString.substr(0, foundBr) + ' ';
                    parsedTitleString += titleString.substr((foundBr + 6));
                } else {
                    parsedTitleString = titleString;
                }

                //htmlPanel += '<h2 class="supColor' + data.resources[i].color + '">' + parsedTitleString + '</h2>';
                if (data.resources[i].sublinks[0].length <= maxCol) {
                    htmlPanel += '<div class="supPanelLinks">';
                } else {
                    htmlPanel += '<div class="supPanelLinks supPanelTwoCol">';
                }

                for (j = 0; j < data.resources[i].sublinks[0].links.length; j++) {
                    if (data.resources[i].sublinks[0].links[j].vid) {
                        // htmlPanel += '<a target="_blank" tabindex="' + tabCount + '" href="' + data.resources[i].sublinks[0].links[j].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[0].links[j].name + 'VIDEO</a><br />'
                        htmlPanel += '<a target="_blank" role="link" tabindex="0" href="' + data.resources[i].sublinks[0].links[j].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[0].links[j].name + 'VIDEO</a><br />'


                    } else {
                        //htmlPanel += '<a target="_blank" tabindex="' + tabCount + '" href="' + data.resources[i].sublinks[0].links[j].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[0].links[j].name + '</a><br />'
                        htmlPanel += '<a target="_blank" role="link" tabindex="0" href="' + data.resources[i].sublinks[0].links[j].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[0].links[j].name + '</a><br />'

                    }
                    tabCount++;
                }
                htmlPanel += '</div>';
                htmlPanel += '</div>';
            } else {
                //htmlMenu += '<div id="supNav' + (i + 1) + '" tabindex="' + tabCount + '" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].category + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                htmlMenu += '<div id="supNav' + (i + 1) + '" role="button" tabindex="0" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].category + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                tabCount++;
                htmlPanel += '<div id="supPanel' + (i + 1) + '" class="supPanel supPanelCenter supBorder' + data.resources[i].color + '">';
                for (j = 0; j < data.resources[i].sublinks.length; j++) {

                    //  htmlPanel += '<div id="supNav' + (i + 1) + (j + 1) + '"  tabindex="' + tabCount + '" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[j].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                    htmlPanel += '<div id="supNav' + (i + 1) + (j + 1) + '"  role="button" tabindex="0" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[j].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                    tabCount++;
                }


                for (j = 0; j < data.resources[i].sublinks.length; j++) {

                    htmlPanel += '<div id="supPanel' + (i + 1) + (j + 1) + '" class="supPanel supBorder' + data.resources[i].color + '">';

                    if (data.resources[i].sublinks[j].type == 'more') {
                        for (k = 0; k < data.resources[i].sublinks[j].categories.length; k++) {
                            // htmlPanel += '<div id="supNav' + (i + 1) + (j + 1) + (k + 1) + '" tabindex="' + tabCount + '" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[j].categories[k].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';
                            htmlPanel += '<div id="supNav' + (i + 1) + (j + 1) + (k + 1) + '" role="button" tabindex="0" class="supNavBtn sup' + data.resources[i].color + '"><p>' + data.resources[i].sublinks[j].categories[k].title + '</p><div class="supNavBtnPointer sup' + data.resources[i].color + ' supPointerHidden"></div></div>';

                            tabCount++;
                        }
                        for (k = 0; k < data.resources[i].sublinks[j].categories.length; k++) {
                            //begin inner nav
                            htmlPanel += '<div id="supPanel' + (i + 1) + (j + 1) + (k + 1) + '" class="supPanel supBorder' + data.resources[i].color + '">';

                            if (data.resources[i].sublinks[j].categories[k].links.length <= maxColSub) {
                                htmlPanel += '<div class="supPanelLinks">';

                            } else {
                                htmlPanel += '<div class="supPanelLinks supPanelTwoCol">';
                            }

                            for (l = 0; l < data.resources[i].sublinks[j].categories[k].links.length; l++) {
                                //htmlPanel += '<a target="_blank" tabindex="' + tabCount + '" href="' + data.resources[i].sublinks[j].categories[k].links[l].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].categories[k].links[l].name + 'HERE</a><br />'
                                htmlPanel += '<a target="_blank" role="link" tabindex="0" href="' + data.resources[i].sublinks[j].categories[k].links[l].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].categories[k].links[l].name + 'HERE</a><br />'
                                tabCount++;
                            }
                            htmlPanel += '</div>';
                            htmlPanel += '</div>';
                            //end inner nav
                        }
                    } else {


                        //Start

                        if (data.resources[i].sublinks[j].links.length <= maxCol) {
                            htmlPanel += '<div class="supPanelLinks">';

                        } else {
                            htmlPanel += '<div class="supPanelLinks supPanelTwoCol">';
                        }




                        for (k = 0; k < data.resources[i].sublinks[j].links.length; k++) {
                            if (data.resources[i].sublinks[j].links[k].vid) {
                                console.log(data.resources[i].sublinks[j].links[k].vid);
                                //   htmlPanel += '<a target="_blank"  tabindex="' + tabCount + '" href="supplemental/mediaPlayer/index.html?vid=' + data.resources[i].sublinks[j].links[k].vid + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].links[k].name + 'STREAM</a><br />'

                                htmlPanel += '<a target="_blank" role="link" tabindex="0" href="supplemental/mediaPlayer/index.html?vid=' + data.resources[i].sublinks[j].links[k].vid + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].links[k].name + 'STREAM</a><br />'

                            } else {
                                //  htmlPanel += '<a target="_blank"  tabindex="' + tabCount + '" href="' + data.resources[i].sublinks[j].links[k].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].links[k].name + 'LOCAL</a><br />'

                                htmlPanel += '<a target="_blank" role="link" tabindex="0" href="' + data.resources[i].sublinks[j].links[k].url + '"><span class="supColor' + data.resources[i].color + '">&#9658;</span>' + data.resources[i].sublinks[j].links[k].name + 'LOCAL</a><br />'

                            }

                            tabCount++;
                        }
                        htmlPanel += '</div>';

                        htmlPanel += '</div>'
                        //END
                    }
                }


                htmlPanel += '</div>';
                htmlPanel += '</div>';

            }
        }
        $('#supplementalNav').html(htmlMenu);
        $('#supPanels').html(htmlPanel);
        $('.supPanel').hide();
        $('.supMenu .supNavBtn').bind(clicker, function () {
            $('.supPanel .supNavBtnPointer').addClass('supPointerHidden');
            $('.supMenu .supNavBtnPointer').addClass('supPointerHidden');
            $('.supMenu #supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
            $('.supPanel').hide();
            $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
        });

        $('.supMenu .supNavBtn').bind('keydown', function (e) {
            if (e.keyCode == 13) {
                $('.supPanel .supNavBtnPointer').addClass('supPointerHidden');
                $('.supMenu .supNavBtnPointer').addClass('supPointerHidden');
                $('.supMenu #supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
                $('.supPanel').hide();
                $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
            }

        });

        $('.supPanel .supNavBtn').bind(clicker, function () {
            var panelNum = $(this).attr('id').substr(6);
            if (panelNum.length < 3) {
                $('.supPanel .supNavBtnPointer').addClass('supPointerHidden');
                $('.supPanel #supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
                $('.supPanel .supPanel').hide();
                $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
            } else {
                $('.supPanel .supPanel .supNavBtnPointer').addClass('supPointerHidden');
                $('#supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
                $('.supPanel .supPanel .supPanel').hide();
                $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
            }

        });


        $('.supPanel .supNavBtn').bind('keydown', function (e) {
            if (e.keyCode == 13) {
                var panelNum = $(this).attr('id').substr(6);
                if (panelNum.length < 3) {
                    $('.supPanel .supNavBtnPointer').addClass('supPointerHidden');
                    $('.supPanel #supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
                    $('.supPanel .supPanel').hide();
                    $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
                } else {
                    $('.supPanel .supPanel .supNavBtnPointer').addClass('supPointerHidden');
                    $('#supNav' + $(this).attr('id').substr(6) + ' .supNavBtnPointer').removeClass('supPointerHidden');
                    $('.supPanel .supPanel .supPanel').hide();
                    $('#supPanel' + $(this).attr('id').substr(6)).slideDown(500);
                }
            }
        });


    }, function () {
        alert('fail')
    });
}
function toggleMainNav(val) {
    if (val) {

        $('.arrowButton').each(function (e) {
            $(this).attr('tabback', $(this).attr('tabindex'));
            $(this).attr('tabindex', '-1');
        });
        $('.bookTab').each(function (e) {
            $(this).attr('tabback', $(this).attr('tabindex'));
            $(this).attr('tabindex', '-1');
        });
        $('.arrowSelect').each(function (e) {
            $(this).attr('tabback', $(this).attr('tabindex'));
            $(this).attr('tabindex', '-1');
        });
        $('.lessonSelector').each(function (e) {
            $(this).attr('tabback', $(this).attr('tabindex'));
            $(this).attr('tabindex', '-1');
        });
    } else {
        $('.arrowButton').each(function (e) {
            $(this).attr('tabindex', $(this).attr('tabback'));
        });
        $('.bookTab').each(function (e) {
            $(this).attr('tabindex', $(this).attr('tabback'));
        });
        $('.arrowSelect').each(function (e) {
            $(this).attr('tabindex', $(this).attr('tabback'));
        });
        $('.lessonSelector').each(function (e) {
            $(this).attr('tabindex', $(this).attr('tabback'));
        });
    }
}

function showSupplemental() {
    //Hide Main Nav
    toggleMainNav(true);
    $('#supplementalv2').slideDown(500);
}

function hideSupplemental() {
    //Show Main Nav
    toggleMainNav(false);
    $('#supplementalv2').slideUp(250);
}
*/
//PopUpCode
function getPopUp() {
    $.getJSON('data/objects/popup.json' + '?version=' + version, function (data) {
        popData = data[0];
        console.log(popData);
        //If live
        if (popData.active == 'true' && localStorage.getItem('hdwPop' + popData.popID) != '0') {
            popUp = true;
            $('#popupBox .popupBanner').html(popData.banner);
            $('#popupBox .popupTitle').html(popData.title);
            $('#popupBox .popupBody').html(popData.body);
            $('#popupBox #popupClose').html(popData.close);
            $('#popupBox #popupDismiss').html(popData.dismiss);
            setTimeout(function () {
                $('#popup').slideDown(500);
                $('#popupTab').html(popData.tabTitle + ' &#9660;');
            }, 2000);

            /*setTimeout(function () {
                $('#popup').slideUp(500);
            }, 15000);*/
            $('#popupTab').bind('click', function () {
                if ($('#popupBox').css('display') == 'none') {
                    $('#popupBox').slideDown(500);
                    $('#popupTab').html(popData.tabTitle + ' &#9660;');
                } else {
                    $('#popupBox').slideUp(500);
                    $('#popupTab').html(popData.tabTitle + ' &#9650;');
                };
            })
            $('#popupClose').bind('click', function () {
                $('#popupBox').slideUp(500);
                $('#popupTab').html(popData.tabTitle + ' &#9650;');
            });
            $('#popupDismiss').bind('click', function () {
                localStorage.setItem('hdwPop' + popData.popID, '0');
                $('#popupBox').slideUp(500);
                $('#popupTab').html(popData.tabTitle + ' &#9650;');
                $('#popupTab').css('display', 'none');
                popUp = false;
            })
        }
    });
}

$(document).ready(function (e) {
    getPopUp();
    getMenu();
    getSupplemental();
    setUpScreens();
    $('.bookTab').bind('click', function (e) {
        setBook(this);
    });
    $('.bookTab').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            setBook(this);
        }

    });
    $('#sup1').click(function (e) {
        showSupplemental();
    });

    $('#sup1').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            showSupplemental();
        }
    });

    /*$('#closeSupplementalv2').click(function (e) {
        console.log('close sup 2')
        hideSupplemental();
    });*/
    $('#closeSupplementalv2').bind(clicker, function (e) {
        hideSupplemental();
    })
    $('#closeSupplementalv2').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            hideSupplemental();
        }
    })
});