$(document).ready(function () {
  
  $("#overlay-button").click(function() {
    $(this).toggleClass('active');
    $("#overlay").toggleClass('active');
  });

  $("#view-about").click(function() {
    $('html,body').animate({scrollTop: $("#about").offset().top},'slow');
  });

});
