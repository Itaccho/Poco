$(function() {
    $('.seeAnswerBtn').click(function() {
        if ($(this).next($('.minusBtn')).css('display') == 'none') {
            $(this).children('.plusBtn').css('display', 'none');
            $(this).children('.minusBtn').css('display', 'inline');
            $(this).next('.answerContents').slideDown();
        } else {
            $(this).find('.plusBtn').css('display', 'inline');
            $(this).find('.minusBtn').css('display', 'none');
            $(this).nextAll('.answerContents').slideUp();
        }
    });
});
