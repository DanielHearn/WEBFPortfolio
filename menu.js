$(document).ready(function () {
  $("#overlay-button").click(function() {
    $(this).toggleClass('active');
    $("#overlay").toggleClass('active');
  });

  function scrollToAnchor(aid){
    var aTag = $("a[id='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }

  $("#view-about").click(function() {
      scrollToAnchor('about');
  });

  var navbottom = $('nav').offset().top;
  var mainbottom = $('main').offset().top - 100;

  $(window).on('scroll',function(){
      var stop = Math.round($(window).scrollTop());

      if (stop > mainbottom) {
          $('nav').addClass('past-main');
      } else {
          $('nav').removeClass('past-main');
      }

  });
});
