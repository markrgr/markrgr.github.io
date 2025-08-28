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


$(document).ready(function () {
    getPopUp();
})