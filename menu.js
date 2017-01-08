$(document).ready(function () {

  $("#view-about").click(function() {
    $('html,body').animate({scrollTop: $("#about").offset().top},'slow');
  });

});
