$(document).ready(function () {
  var $exp = "https://draevin-new.netlify.com/js/json/experience.json";
  $.getJSON($exp)
    .done(function (data) {
      $.each(data.items, function (i, item) {
        var $slide = $(document.createElement("<div>"), { id: item.name });
        $slide.appendTo("#experience");
      });
    });

  $('.card-carousel').slick({
    dots: true,
    arrows: true
  });
}(jQuery));