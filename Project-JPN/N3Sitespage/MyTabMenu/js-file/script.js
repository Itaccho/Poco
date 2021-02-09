$(function() {
    $('#showModasp').click(function() {
        $('#showModasp').css('display', 'none');
        $('#hideModasp').css('display', 'inline');
        $('.header-lists').fadeIn(700);
        $('.text-wrapper').css('opacity', '0.1');
    });

    $('#hideModasp').click(function() {
        $('#showModasp').css('display', 'inline');
        $('#hideModasp').css('display', 'none');
        $('.header-lists').fadeOut(700);
        $('.text-wrapper').css('opacity', '1.0');
    });
    // end of head menu modal of largescreen page
});

$(function() {
    $('#showModalp').click(function() {
        $('#showModalp').css('display', 'none');
        $('#hideModalp').css('display', 'inline');
        $('.header-lists').fadeIn(700);
        $('.text-wrapper').css('opacity', '0.6');
    });

    $('#hideModalp').click(function() {
        $('#showModalp').css('display', 'inline');
        $('#hideModalp').css('display', 'none');
        $('.header-lists').fadeOut(700);
        $('.text-wrapper').css('opacity', '1.0');
    });
    // end of head menu modal of largescreen page
});

// search words function
$(function() {
    searchWord = function() {
        var searchResult,
        searchText = $(this).val(),
        // 
        targetText,
        hitNum;

        searchResult = [];

        // 検索結果エリアの表示を空にする
        $('#search-result__list').empty();
        $('.search-result__hit-num').empty();

        if (searchText != '') {
            $('.target-area p').each(function() {
                targetText = $(this).text();

                if (targetText.indexOf(searchText) != -1) {

                    searchResult.push(targetText);
                }
            });

            for (var i = 0; i < searchResult.length; i++) {
                $('<span>').text(searchResult[i]).appendTo('#search-result__list');
            }

            hitNum = '<span>Result</span>:' + searchResult.length;
            $('.search-result__hit-num').append(hitNum);
        }
    };

    $('#search-text').on('input', searchWord);
});
// -- end of search words