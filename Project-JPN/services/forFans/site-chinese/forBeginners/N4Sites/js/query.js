$(function() {
    $('#showAccordion').click(function() {
        $('#showAccordion').css('display', 'none');
        $('#hideAccordion').css('display', 'inline');
        $('.accContent').slideDown(1100);
    });
    $('#hideAccordion').click(function() {
        $('#hideAccordion').css('display', 'none');
        $('#showAccordion').css('display', 'inline');
        $('.accContent').slideUp(1100);
    });
});