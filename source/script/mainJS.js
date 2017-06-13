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


$(document).ready(function () {
    mainTab()
})