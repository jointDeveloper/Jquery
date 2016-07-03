$(function() {
  $('img').hover(function() {
    $('.msj').fadeIn(1000);
  }, function() {
    $('.msj').fadeOut(1000);
  });

  $('img').on('click', function() {
    $(this).attr('src', 'img/img2.jpg');
    $('.msj').text('Te asuste verdad xD');
  });

  $("#btn").click(function(){
    var div = $(".anim");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
