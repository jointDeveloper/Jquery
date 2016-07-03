$(document).ready(function() {
  $('h3').html('Modificando el texto con <i>JQ<i>');
  $('#jq').addClass('otraclase').removeClass('miclase');
  $('ul').siblings().css('border', 'solid yellow');
  $('li').parent().css('border', 'solid red');
  $('li:eq(1)').css('color', "#F5E");
  $('li:lt(2)').css('background', "green");
  $('li:gt(2)').css('background', "gray");
  $('li:has(p)').css('color', "#FBD");
});
