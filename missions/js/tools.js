var subSelect = false;

function tileDelete(tileID) {
    var targetTile = parseInt(tileID);
    if (targetTile > 0) {
        backTiles = tiles;
        var tempTiles = [];
        for (var i = 0; i < tiles.length; i++) {
            if (i != targetTile - 1) {
                tempTiles.push(tiles[i]);
            }
        }
        tiles = tempTiles;
        renderTiles();
    }
}

function tileUndo() {
    tiles = [];
    for (i = 0; i < backTiles.length; i++) {
        tiles.push(backTiles[i]);
    }
    renderTiles();
}

function tileClear() {
    newLine = startLine;
    lastTileType = -1;
    tiles = [];
    renderTiles();
}

function toggleVowel() {
    if ($('.vowelColor').hasClass('vowelBlack')) {
        $('.vowelColor').removeClass('vowelBlack');
        $('.vowel').removeClass('vowelBlack');
        vowelColor = true;
    } else {
        $('.vowelColor').addClass('vowelBlack');
        $('.vowel').addClass('vowelBlack');
        vowelColor = false;
    }

}

function toggleResize(){
    resize = !resize;
    if (resize) {
        $('.tool.resize').removeClass('resizeOff');
    } else {
        $('.tool.resize').addClass('resizeOff');
        $('#wrapper').css('font-size','.8em');
    }
    sizer();
}

function toggleNavPos(){
    if ($('#menuBarParent').hasClass('navBottom')) {
        $('#menuBarParent').removeClass('navBottom');
        $('#menuBarParent').addClass('navHidden');
        $('.navPos').removeClass('navTop');
        $('.navPos').removeClass('navBottom');
        $('.navPos').addClass('navHidden');

    } else {
        if ($('#menuBarParent').hasClass('navTop')) {
            $('#menuBarParent').removeClass('navTop');
            $('#menuBarParent').removeClass('navHidden');
            $('#menuBarParent').addClass('navBottom');
            $('.navPos').removeClass('navTop');
            $('.navPos').removeClass('navHidden');
            $('.navPos').addClass('navBottom');
        } else {
            $('#menuBarParent').addClass('navTop');
            $('#menuBarParent').removeClass('navHidden');
            $('#menuBarParent').removeClass('navBottom');
            $('.navPos').removeClass('navBottom');
            $('.navPos').removeClass('navHidden');
            $('.navPos').addClass('navTop');
        }
        
    }
    //alert('toggle Nav');
}

function toggleControls(){
        $('.tool').slideToggle(500);
}
function initTools() {
    $('.controlButton').bind('click', function(e){
        toggleControls();
    });
    $('.controlButton').bind('keydown', function(e){
        if (e.keyCode == 13) {
           toggleControls();
        }
    });
    $('.tool.delete').bind('click', function () {
        //Delete currentTile
        if (currentTile.length > 0) {
            tileDelete(currentTile);
        }
    })
    $('.tool.delete').bind('keydown', function (e) {
        //Delete currentTile
        if (e.keyCode == 13) {
            if (currentTile.length > 0) {
                tileDelete(currentTile);
            }
        }
    })
    $('.tool.undo').bind('click', function () {
        tileUndo();
    })
    $('.tool.undo').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            tileUndo();
        }
    })
    $('.tool.clear').bind('click', function () {
        tileClear();
    })
    $('.tool.clear').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            tileClear();
        }
    })
    $('.tool.vowelColor').bind('click', function () {
        toggleVowel();
    })
    $('.tool.vowelColor').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            toggleVowel();
        }
    })
    $('.tool.resize').bind('click', function () {
        toggleResize();
    })
    $('.tool.resize').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            toggleResize();
        }
    })
    $('.tool.navPos').bind('click', function () {
        toggleNavPos();
    })
    $('.tool.navPos').bind('keydown', function (e) {
        if (e.keyCode == 13) {
            toggleNavPos();
        }
    })
}
/*FH Menu options*/
function initFHMenu(){
    $('.message').bind('click', function(e){
        alert('send message');
    });
    $('.message').bind('keydown', function(e){
        if (e.keyCode == 13) {
            alert('send message');
        }
    });

    $('.header-user__open').bind('click', function(e){
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
            $('.header-user__menu').slideUp(200);
        } else {
            $(this).addClass('opened');
            $('.header-user__menu').slideDown(200);
        }
    });
    $('.header-user__open').bind('keydown', function(e){
        if (e.keyCode == 13) {
            if ($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.header-user__menu').slideUp(200);
            } else {
                $(this).addClass('opened');
                $('.header-user__menu').slideDown(200);
            }
        }
    });
}

/*End FH Menu*/
$(document).ready(function (e) {
    initTools();
    initFHMenu();
})