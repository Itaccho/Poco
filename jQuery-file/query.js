$(function() {
    $('.click').click(function() {
        if ($(this).next($('showContentPre')).css('display') == ('none')) 
        {
            $(this).next('.showContentPre').slideDown();
        }
        else
        {
            $(this).next('.showContentPre').slideUp();
        }
    });
});