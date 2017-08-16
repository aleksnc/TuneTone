var eq;
var perem = [];



function footerPlay(id, indx){
    $.getJSON('script/playList.json', function (data) {
        var name =data.playList[id].name;
        var title =data.playList[id].title;
        var img =data.playList[id].img;

        var allTimeSec = perem[indx].getDuration();

        console.log(allTimeSec);

        var allMinute = Math.floor(allTimeSec / 60);
        var allSec = Math.floor(allTimeSec - (allMinute * 60));

        if (allMinute < 10) {
            allMinute = '0' + allMinute;
        }

        if (allSec < 10) {
            allSec = '0' + allSec;
        }

        $('.footerPlayer__time')
            .empty()
            .html(allMinute + ":" + allSec);



        $('.footerPlayer__artist')
            .empty()
            .html(name);

        $('.footerPlayer__title')
            .empty()
            .html(title)

        $('.footerPlayer__img img')
            .attr('src', 'images/imgSingle/' + img);
    })
}

function mainTab() {
    $('.tabsContent__tab').click(function () {
        $('.tabsContent__tab').removeClass('active');
        $('.tabsContent').removeClass('active');
        $(this).addClass('active');
        var numTab = $(this).data('tab');
        $('.' + numTab).addClass('active');
        return false;
    })
}

function mobileMenu() {
    $('.js_mobileMenu').click(function () {
        $(this).siblings('.mainMenu__link').toggleClass('active');
        $('.headerBlock__nav').toggleClass('active');
    })
}

function toggleBtn() {
$('.toggleBtn_js').each(function(indx){
    $(this).data('play', indx);
})


    $('.toggleBtn_js').click(function () {
        var id = $(this).data('play');
        console.log(id);

        var leng = perem.length;

        for (var i = 0; i < leng; i++) {
            if (perem[i].isPlaying()) {
                perem[i].pause();
            }
        }

        if ($(this).hasClass('active')) {
            $('.toggleBtn_js').removeClass('active');
            $('.footerPlay_js').removeClass('active');
            $('.footerPlayer__wrapper').slideUp();
        } else {
            $('.toggleBtn_js').removeClass('active');
            $('.footerPlay_js').addClass('active');
            $('.footerPlayer__wrapper').slideDown();
            $(this).addClass('active');
            perem[id].play();

            var jsonId =$(this).data('id');

            footerPlay(jsonId, id)
        }
    })


    $('wave').click(function(){
        alert("sdsd");
    })
}


function musicWave() {
    $('.Singleresult').css(
        {
            'height': 0,
            'overflow': 'hidden'
        });

    $(function () {
        $.getJSON('script/playList.json', function (data) {
            $('.SingleResult').each(function (i) {

                var eqId = $(this).find('.toggleBtn_js').data("id");

                // eq = i;
                perem[i] = WaveSurfer.create({
                    container: '#waveform' + eqId,
                    waveColor: '#828082',
                    progressColor: '#3bd9a3',
                    height: 80
                })
                console.log("eqId" + eqId);
                console.log(data.playList[eqId].realTitle);
                perem[i].load('music/' + data.playList[eqId].realTitle);

                $('.Singleresult:eq(' + i + ')').find('.SingleResult__img img')
                    .attr('src', 'images/imgSingle/' + data.playList[eqId].img);

                $('.Singleresult:eq(' + i + ')').find('.SingleResult__artist')
                    .empty()
                    .html(data.playList[eqId].name);

                $('.Singleresult:eq(' + i + ')').find('.SingleResult__title')
                    .empty()
                    .html(data.playList[eqId].title);

                $('.Singleresult:eq(' + i + ')').find('.SingleResult__time').empty();

            })

        });
    });
}

function musicPlay() {
    var i=0;
    var n=0;
    $('.SingleResult .waveform').on('DOMSubtreeModified', 'canvas', function (event) {
        $('.toggleBtn_js').each(function(indx){

            console.log(indx);

     //   indx =0;
        perem[indx].on('ready', function () {
            var allTimeSec = perem[indx].getDuration();

            var allMinute = Math.floor(allTimeSec / 60);
            var allSec = Math.floor(allTimeSec - (allMinute * 60));

            if (allMinute < 10) {
                allMinute = '0' + allMinute;
            }

            if (allSec < 10) {
                allSec = '0' + allSec;
            }

            $('.SingleResult__time:eq(' + indx + ')')
                .empty()
                .attr('id','id_'+indx)
                .html(allMinute + ":" + allSec);


            $('.Singleresult:eq(' + indx + ')').css(
                {
                    'height': 'auto',
                    'overflow': 'visible'
                });
        });

        perem[indx].on('audioprocess', function () {
            var left = $('.SingleResult:eq(' + indx + ') wave').find('wave').css('width');

            var CurrentTimeSec = perem[indx].getCurrentTime();

            var allMinute = Math.floor(CurrentTimeSec / 60);
            var allSec = Math.floor(CurrentTimeSec - (allMinute * 60));

            if (allMinute < 10) {
                allMinute = '0' + allMinute;
            }

            if (allSec < 10) {
                allSec = '0' + allSec;
            }

            $('.SingleResult__timePassed:eq(' + indx + ')')
                .css('left', left)
                .empty()
                .html(allMinute + ":" + allSec)


        });

        })

    })

}

function singlePageGET() {
    var path = window.location.pathname.split("/");
    var pathName = path[path.length - 1];
    if (pathName == 'SinglePage.html') {
        var getId = window.location.search.substring(1);
        var dataId = getId.split("=")[1];
        var imgId = parseInt(dataId) + 1;

        $.getJSON('script/playList.json', function (data) {
            $(".singleHeader__img").attr('src', '/images/single' + imgId + '.jpg');
            $(".singleHeader__artis")
                .empty()
                .html(data.playList[dataId].name);
            $(".singleHeader__soundName")
                .empty()
                .html(data.playList[dataId].title);
        })
    }
}

$(document).ready(function () {
    musicPlay()
    musicWave()
    toggleBtn()
    mainTab()
    mobileMenu()
    singlePageGET()
});

