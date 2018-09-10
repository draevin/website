$(document).ready(function () {
            
  //initially hide navbar
  $(".navbar").hide();
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#top'], .link-scroll a").on('click', function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
          scrollTop: $(hash).offset().top
      }, 1200, function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
      });
  });
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
