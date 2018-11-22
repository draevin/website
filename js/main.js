$(document).ready(function ($) {
            
  //initially hide navbar
  $(".navbar").hide();
  
  // // Slide in elements on scroll
  // $(window).scroll(function () {
  //     $(".slideanim").each(function () {
  //         var pos = $(this).offset().top + 20;
  //         var winTop = $(window).scrollTop();
  //         if (pos < winTop + 700) {
  //             $(this).addClass("slide");
  //         }
  //     });
  // });
  // // Fade in elements after scroll
  // $(window).scroll(function () {
  //     $(".scroll-fade").each(function () {
  //         var pos = $(this).offset().top + 20;
  //         var winTop = $(window).scrollTop();
  //         if (pos < winTop + 800) {
  //             $(this).addClass("fadeIn");
  //             $(this).addClass("fadeIn-1s");
  //         }
  //     });
  // });
  //navbar show on scroll
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $(".navbar").fadeIn(500);
          }
          else {
              $(".navbar").fadeOut(500);
          }
      });
  });
}(jQuery));
