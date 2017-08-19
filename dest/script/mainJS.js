//var eq;
//var perem = [];
//
//function footerPlay(id, indx){
//    $.getJSON('script/playList.json', function (data) {
//        var name =data.playList[id].name;
//        var title =data.playList[id].title;
//        var img =data.playList[id].img;
//
//        var allTimeSec = perem[indx].getDuration();
//
//        console.log(allTimeSec);
//
//        var allMinute = Math.floor(allTimeSec / 60);
//        var allSec = Math.floor(allTimeSec - (allMinute * 60));
//
//        if (allMinute < 10) {
//            allMinute = '0' + allMinute;
//        }
//
//        if (allSec < 10) {
//            allSec = '0' + allSec;
//        }
//
//        $('.footerPlayer__time')
//            .empty()
//            .html(allMinute + ":" + allSec);
//
//
//
//        $('.footerPlayer__artist')
//            .empty()
//            .html(name);
//
//        $('.footerPlayer__title')
//            .empty()
//            .html(title)
//
//        $('.footerPlayer__img img')
//            .attr('src', 'images/imgSingle/' + img);
//    })
//}
//
//function mainTab() {
//    $('.tabsContent__tab').click(function () {
//        $('.tabsContent__tab').removeClass('active');
//        $('.tabsContent').removeClass('active');
//        $(this).addClass('active');
//        var numTab = $(this).data('tab');
//        $('.' + numTab).addClass('active');
//        return false;
//    })
//}
//
//function mobileMenu() {
//    $('.js_mobileMenu').click(function () {
//        $(this).siblings('.mainMenu__link').toggleClass('active');
//        $('.headerBlock__nav').toggleClass('active');
//    })
//}
//
//function toggleBtn() {
//$('.toggleBtn_js').each(function(indx){
//    $(this).data('play', indx);
//})
//
//
//    $('.toggleBtn_js').click(function () {
//        var id = $(this).data('play');
//        console.log(id);
//
//        var leng = perem.length;
//
//        for (var i = 0; i < leng; i++) {
//            if (perem[i].isPlaying()) {
//                perem[i].pause();
//            }
//        }
//
//        if ($(this).hasClass('active')) {
//            $('.toggleBtn_js').removeClass('active');
//            $('.footerPlay_js').removeClass('active');
//            $('.footerPlayer__wrapper').slideUp();
//        } else {
//            $('.toggleBtn_js').removeClass('active');
//            $('.footerPlay_js').addClass('active');
//            $('.footerPlayer__wrapper').slideDown();
//            $(this).addClass('active');
//            perem[id].play();
//
//            var jsonId =$(this).data('id');
//
//            footerPlay(jsonId, id)
//        }
//    })
//
//
//    $('wave').click(function(){
//        alert("sdsd");
//    })
//}
//
//function musicWave() {
//    $('.Singleresult').css(
//        {
//            'height': 0,
//            'overflow': 'hidden'
//        });
//
//    $(function () {
//        $.getJSON('script/playList.json', function (data) {
//            $('.SingleResult').each(function (i) {
//
//                var eqId = $(this).find('.toggleBtn_js').data("id");
//
//                // eq = i;
//                perem[i] = WaveSurfer.create({
//                    container: '#waveform' + eqId,
//                    waveColor: '#828082',
//                    progressColor: '#3bd9a3',
//                    height: 80
//                })
//                console.log("eqId" + eqId);
//                console.log(data.playList[eqId].realTitle);
//                perem[i].load('music/' + data.playList[eqId].realTitle);
//
//                $('.Singleresult:eq(' + i + ')').find('.SingleResult__img img')
//                    .attr('src', 'images/imgSingle/' + data.playList[eqId].img);
//
//                $('.Singleresult:eq(' + i + ')').find('.SingleResult__artist')
//                    .empty()
//                    .html(data.playList[eqId].name);
//
//                $('.Singleresult:eq(' + i + ')').find('.SingleResult__title')
//                    .empty()
//                    .html(data.playList[eqId].title);
//
//                $('.Singleresult:eq(' + i + ')').find('.SingleResult__time').empty();
//
//            })
//
//        });
//    });
//}
//
//function musicPlay() {
//    var i=0;
//    var n=0;
//    $('.SingleResult .waveform').on('DOMSubtreeModified', 'canvas', function (event) {
//        $('.toggleBtn_js').each(function(indx){
//
//            console.log(indx);
//
//     //   indx =0;
//        perem[indx].on('ready', function () {
//            var allTimeSec = perem[indx].getDuration();
//
//            var allMinute = Math.floor(allTimeSec / 60);
//            var allSec = Math.floor(allTimeSec - (allMinute * 60));
//
//            if (allMinute < 10) {
//                allMinute = '0' + allMinute;
//            }
//
//            if (allSec < 10) {
//                allSec = '0' + allSec;
//            }
//
//            $('.SingleResult__time:eq(' + indx + ')')
//                .empty()
//                .attr('id','id_'+indx)
//                .html(allMinute + ":" + allSec);
//
//
//            $('.Singleresult:eq(' + indx + ')').css(
//                {
//                    'height': 'auto',
//                    'overflow': 'visible'
//                });
//        });
//
//        perem[indx].on('audioprocess', function () {
//            var left = $('.SingleResult:eq(' + indx + ') wave').find('wave').css('width');
//
//            var CurrentTimeSec = perem[indx].getCurrentTime();
//
//            var allMinute = Math.floor(CurrentTimeSec / 60);
//            var allSec = Math.floor(CurrentTimeSec - (allMinute * 60));
//
//            if (allMinute < 10) {
//                allMinute = '0' + allMinute;
//            }
//
//            if (allSec < 10) {
//                allSec = '0' + allSec;
//            }
//
//            $('.SingleResult__timePassed:eq(' + indx + ')')
//                .css('left', left)
//                .empty()
//                .html(allMinute + ":" + allSec)
//
//
//        });
//
//        })
//
//    })
//
//}
//
//function PageGET() {
//    var path = window.location.pathname.split("/");
//    var pathName = path[path.length - 1];
//    if (pathName == 'SinglePage.html') {
//        var getId = window.location.search.substring(1);
//        var dataId = getId.split("=")[1];
//        var imgId = parseInt(dataId) + 1;
//
//        $.getJSON('script/playList.json', function (data) {
//            $(".singleHeader__img").attr('src', '/images/single' + imgId + '.jpg');
//            $(".singleHeader__artis")
//                .empty()
//                .html(data.playList[dataId].name);
//            $(".singleHeader__soundName")
//                .empty()
//                .html(data.playList[dataId].title);
//        })
//    }
//}
//
//$(document).ready(function () {
//    musicPlay()
//    musicWave()
//    toggleBtn()
//    mainTab()
//    mobileMenu()
//    PageGET()
//});
//
var UrlPath;
var SoundData;
var SoundInit = [];
var idTrack = -1;

$(function () {
    $.getJSON('script/playList.json', function (data) {
        SoundData = data.playList;
    })
});

function PageGET() {

    $('.GETcontent').empty();
    var path = window.location.pathname.split("/");
    var pathName = path[path.length - 1];
    UrlPath = pathName;

    switch (pathName) {
        case 'Index.html':
            indexPage()
            break;


        case 'SearchResult.html':
            SearchResult()
            break;

        case 'SinglePage.html':
            singlePage()
            break;

        default:
            indexPage()
            break;
    }

    if (pathName == 'test.html') {

    }
}

function SearchResult() {

    idTrack = -1;

    $.get(
        "/templates/_soundTemplate.html",
        onAjaxSuccess
    );

    function onAjaxSuccess(data) {
        $('.GETcontent').append(data);

        createSoundList()
    }
}

function singlePage() {

    var getId = window.location.search.substring(1);
    idTrack = getId.split("=")[1];


    $.get(
        "/templates/_singlePageTemplate.html",
        onAjaxSuccess
    );

    function onAjaxSuccess(data) {
        $('.GETcontent').append(data);

        createSoundList()
    }
}

function indexPage() {

    idTrack = -1;

    $.get(
        "/templates/_indexTemplate.html",
        onAjaxSuccess
    );

    function onAjaxSuccess(data) {

        $('.GETcontent').append(data);
    }
}

function createSoundList() {
    var countLenght = SoundData.length;

    for (var i = 0; i < countLenght; i++) {
        var SoundId = SoundData[i].id;
        if (SoundData[i].id != idTrack) {
            var CloneParent = $('.SingleResult.parent').clone();
            CloneParent.find('.toggleBtn_js').data('id', SoundId);
            CloneParent.find('.waveform').attr('id', 'waveform' + SoundId);
            CloneParent.removeClass('parent').appendTo('.GETcontent .Singleresult__wrapper');
        } else {
            var SingleSound = $('.singleHeader .SingleResult');

            SingleSound.find('.toggleBtn_js').data('id', SoundId);

            SingleSound.find('.waveform').attr('id', 'waveform' + SoundId);
        }
    }

    $('.SingleResult.parent').remove();

    initSound()
}

function AddInfoMusic(i, item) {

    var SoundBlock = $('#waveform' + item.id).parents('.SingleResult');

    if (item.id != idTrack) {

        SoundBlock.addClass('itemId' + item.id);

        SoundBlock.find('.SingleResult__img')
            .attr('href', '/SinglePage.html?id=' + item.id);

        SoundBlock.find('.SingleResult__img img')
            .attr('src', 'images/imgSingle/' + item.img);

        SoundBlock.find('.SingleResult__artist')
            .empty()
            .html(item.name)
            .attr('href', '/SinglePage.html?id=' + item.id);

        SoundBlock.find('.SingleResult__title')
            .empty()
            .html(item.title)
            .attr('href', '/SinglePage.html?id=' + item.id);

        SoundBlock.find('.SingleResult__time').empty();

    } else{
        $('.singleHeader__artis')
            .empty()
            .html(item.name);

        $('.singleHeader__soundName')
            .empty()
            .html(item.title);
    }


    SoundInit[i].on('ready', function () {
        var allTimeSec = SoundInit[i].getDuration();

        var allMinute = Math.floor(allTimeSec / 60);
        var allSec = Math.floor(allTimeSec - (allMinute * 60));

        if (allMinute < 10) {
            allMinute = '0' + allMinute;
        }

        if (allSec < 10) {
            allSec = '0' + allSec;
        }

        SoundBlock.find('.SingleResult__time')
            .empty()
            .html(allMinute + ":" + allSec);

        SoundBlock.css(
            {
                'height': 'auto',
                'overflow': 'visible'
            });
    });
}

function NavigationPlayer() {

    $(document).on('click', '.toggleBtn_js', function () {
        var $this = $(this);
        var myId = 'waveform' + $(this).data('id');
        var SoundBlock = $('#' + myId).parents('.SingleResult');

        if ($(this).hasClass('active')) {
            $('.toggleBtn_js').removeClass('active');
            $('.footerPlay_js').removeClass('active');
            $('.footerPlayer__wrapper').slideUp();
        } else {
            $('.toggleBtn_js').removeClass('active');
            $('.footerPlay_js').addClass('active');
            $('.footerPlayer__wrapper').slideDown();
            $(this).addClass('active');
        }

        PlayPause($this, SoundBlock, myId)
    })
}

function PlayPause(isClick, SoundBlock, myID) {
    $.each(SoundInit, function (i, item) {

        if (item.isPlaying()) {
            item.pause();
        }

        if (item.container.id == myID) {

            $.each(SoundInit, function (j, other) {

                if (other.isPlaying()) {
                    other.pause();
                }
            })


            if (isClick.hasClass('active')) {
                item.play();
                var jsonId = isClick.data('id');
                //  footerPlay(jsonId, id)
            }

            item.on('audioprocess', function () {
                var left = SoundBlock.find('wave').find('wave').css('width');

                var CurrentTimeSec = item.getCurrentTime();

                var allMinute = Math.floor(CurrentTimeSec / 60);
                var allSec = Math.floor(CurrentTimeSec - (allMinute * 60));

                if (allMinute < 10) {
                    allMinute = '0' + allMinute;
                }

                if (allSec < 10) {
                    allSec = '0' + allSec;
                }

                SoundBlock.find('.SingleResult__timePassed')
                    .css('left', left)
                    .empty()
                    .html(allMinute + ":" + allSec)
            });
        }
    })


}


/*Скорей всего нужные*/

function initSound() {
 var Soundlenght =SoundInit.length;

    if( Soundlenght==0) {
        $('.Singleresult').css(
            {
                'height': 0,
                'overflow': 'hidden'
            });
    }


    $.each(SoundData, function (i, item) {



        if( Soundlenght==0) {
               SoundInit[i] = WaveSurfer.create({
                   container: '#waveform' + item.id,
                   waveColor: '#828082',
                   progressColor: '#3bd9a3',
                   height: 80
               });
        } else{
        }

        console.log(SoundInit[i].drawer.params);
               SoundInit[i].load('music/' + item.realTitle);
        

          AddInfoMusic(i, item);


       });

}

function loadPage(url) {
    $categoryProducts.load(url + " .category-products > *");
}

$(document).ready(function () {
    window.onpopstate = function (event) {
        PageGET()
    }

    PageGET();
    NavigationPlayer();

    $('.inputSend__button').click(function (e) {
        var uri = 'SearchResult.html';
        history.pushState(null, '', uri);
        PageGET()
    })

    $(document).on('click', '.SingleResult a', function (e) {
        console.log('ok');
        var uri = $(this).attr('href');
        e.preventDefault();
        history.pushState(null, '', uri);
        PageGET()
    })

    $(document).on('click', '.mainLogo', function (e) {
        console.log('ok');
        var uri = $(this).attr('href');
        e.preventDefault();
        history.pushState(null, '', uri);
        PageGET()
    })
});