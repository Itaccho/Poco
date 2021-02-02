$(function() {
  // ここにプログラムを記述
  $('.insta').click(function() {
    $('.img-hided').css('display','block').slideDown(3000);
    $('.modal-background').css('opacity','0.2');
    $('.modal-background').css('background-color','#333333')
  });
  $('#close-img').click(function(){
    $('.img-hided').slideUp(1400);
    $('.modal-background').css('opacity','1.0');
    $('.modal-background').css('background-color','#fff')
  });



  $('.attractive-points-lists').hover(function() {
      $('li').fadeIn();
    }
  );

});
