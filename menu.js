var mainbottom = $('#main').offset().top + $('#main').height();

// on scroll,
$(window).on('scroll',function(){

    // we round here to reduce a little workload
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.nav').addClass('past-main');
    } else {
        $('.nav').removeClass('past-main');
   }

});

function nav() {
   document.getElementById("overlay").classList.toggle("active");
   document.getElementById("overlay-button").classList.toggle("active");
};
