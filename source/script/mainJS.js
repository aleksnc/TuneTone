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

function mobileMenu(){
    $('.js_mobileMenu').click(function(){
       $(this).siblings('.mainMenu__link').toggleClass('active');
        $('.headerBlock__nav').toggleClass('active');
    })
}


$(document).ready(function () {
    mainTab()
    mobileMenu()
});