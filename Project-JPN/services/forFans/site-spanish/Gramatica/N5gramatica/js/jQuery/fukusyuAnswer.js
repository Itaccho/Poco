$(function() {
    $('#seeAnswerBtn1').click(function() {
        if ($('#seeAnswerBtn1').next($('.minusBtn')).css('display') == 'none') {
            $(this).find('.plusBtn').css('display', 'none');
            $(this).find('.minusBtn').css('display', 'inline');
            $(this).next('.answerContents').slideDown();
        } else {
            $(this).find('.plusBtn').css('display', 'inline');
            $(this).find('.minusBtn').css('display', 'none');
            $(this).nextAll('.answerContents').slideUp();
        }
    });

    $('#seeAnswerBtn2').click(function() {
        if ($('#seeAnswerBtn2').next($('.minusBtn')).css('display') == 'none') {
            $(this).find('.plusBtn').css('display', 'none');
            $(this).find('.minusBtn').css('display', 'inline');
            $(this).next('.answerContents').slideDown();
        } else {
            $(this).find('.plusBtn').css('display', 'inline');
            $(this).find('.minusBtn').css('display', 'none');
            $(this).nextAll('.answerContents').slideUp();
        }
    });

    $('#seeAnswerBtn3').click(function() {
        if ($('#seeAnswerBtn3').next($('.minusBtn')).css('display') == 'none') {
            $(this).find('.plusBtn').css('display', 'none');
            $(this).find('.minusBtn').css('display', 'inline');
            $(this).next('.answerContents').slideDown();
        } else {
            $(this).find('.plusBtn').css('display', 'inline');
            $(this).find('.minusBtn').css('display', 'none');
            $(this).nextAll('.answerContents').slideUp();
        }
    });

    $('#seeAnswerBtn4').click(function() {
        if ($('#seeAnswerBtn4').next($('.minusBtn')).css('display') == 'none') {
            $(this).find('.plusBtn').css('display', 'none');
            $(this).find('.minusBtn').css('display', 'inline');
            $(this).next('.answerContents').slideDown();
        } else {
            $(this).find('.plusBtn').css('display', 'inline');
            $(this).find('.minusBtn').css('display', 'none');
            $(this).nextAll('.answerContents').slideUp();
        }
    });
});