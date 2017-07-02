var eq;
var perem = [];


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

    $('.toggleBtn_js').click(function () {
        var id = $(this).data('id');
        console.log(id);

        var leng = perem.length;

        for (var i = 0; i < leng; i++) {
            if (perem[i].isPlaying()) {
                perem[i].pause();
            }
        }

        if ($(this).hasClass('active')) {
            $('.toggleBtn_js').removeClass('active');
        } else {
            $('.toggleBtn_js').removeClass('active');
            $(this).addClass('active');
            perem[id].play();
        }

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
            for (var i = 0; i < data.playList.length; i++) {
                //$('.Singleresult__wrapper').append('<tr><td>' + data.playList[i].id + '</td><td>' + data.playList[i].name +
                //    '</td><td>' + data.playList[i].title +   '</td><td>' + data.playList[i].realTitle + '</td><tr>');

                //    $('.Singleresult.parent').clone().removeClass('parent').appendTo(".Singleresult__wrapper");
                console.log(i);

                eq = i;

                //   $('.Singleresult:eq(' + eq + ')').find('#waveform').removeAttr('id').attr('id', '#waveform' + eq);

                perem[i] = WaveSurfer.create({
                    container: '#waveform' + eq,
                    waveColor: '#828082',
                    progressColor: '#3bd9a3',
                    height: 80
                })
                perem[i].load('music/' + data.playList[i].realTitle);

                $('.Singleresult:eq(' + eq + ')')
                    .find('.SingleResult__img').attr('src', 'images/imgSingle/' + data.playList[i].img)
                    .find('.SingleResult__artist').empty().html(data.playList[i].name)
                    .find('.SingleResult__title').empty().html(data.playList[i].title)

            }
        });
    });

}


function musicWave() {
    $('.Singleresult').css(
        {
            'height': 0,
            'overflow': 'hidden'
        });

    $(function () {
        $.getJSON('script/playList.json', function (data) {
            // for (var i = 0; i < data.playList.length; i++) {

            $('.SingleResult').each(function (i) {
                //$('.Singleresult__wrapper').append('<tr><td>' + data.playList[i].id + '</td><td>' + data.playList[i].name +
                //    '</td><td>' + data.playList[i].title +   '</td><td>' + data.playList[i].realTitle + '</td><tr>');

                //    $('.Singleresult.parent').clone().removeClass('parent').appendTo(".Singleresult__wrapper");
                console.log(i);

                eq = i;

                //   $('.Singleresult:eq(' + eq + ')').find('#waveform').removeAttr('id').attr('id', '#waveform' + eq);

                perem[i] = WaveSurfer.create({
                    container: '#waveform' + eq,
                    waveColor: '#828082',
                    progressColor: '#3bd9a3',
                    height: 80
                })
                perem[i].load('music/' + data.playList[i].realTitle);


                // console.log('eq:'+eq);

                $('.Singleresult:eq(' + eq + ')').find('.SingleResult__img img')
                        .attr('src', 'images/imgSingle/' + data.playList[i].img);

                $('.Singleresult:eq(' + eq + ')').find('.SingleResult__artist')
                        .empty()
                        .html(data.playList[i].name);

                $('.Singleresult:eq(' + eq + ')').find('.SingleResult__title')
                        .empty()
                        .html(data.playList[i].title);

                $('.Singleresult:eq(' + eq + ')').find('.SingleResult__time').empty();

            })
        });
    });

}


function musicPlay() {
    $('.SingleResult .waveform').on('DOMSubtreeModified', 'canvas', function (event) {
        var indx = $(this).parents('.SingleResult').index();

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
                .html(allMinute + ":" + allSec);


            $('.Singleresult:eq(' + indx + ')').css(
                {
                    'height': 'auto',
                    'overflow': 'visible'
                });
        });

        perem[indx].on('audioprocess', function () {
            var left = $('.SingleResult:eq(' + indx + ') wave').find('wave').css('width');
            console.log(left);

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

}


$(document).ready(function () {
    musicPlay()
    musicWave()
    toggleBtn()
    mainTab()
    mobileMenu()

});

