$(document).ready(function () {
  $("#overlay-button").on('click',function () {
    $(this).toggleClass('active');
    $("#overlay").toggleClass('active');
  });


  var navbottom = $('nav').offset().top;

  var mainbottom = $('main').offset().top - navbottom;

  $(window).on('scroll',function(){
  console.log(navbottom);
      var stop = Math.round($(window).scrollTop());

      if (stop > mainbottom) {
          $('nav').addClass('past-main');
      } else {
          $('nav').removeClass('past-main');
      }

  });
});
