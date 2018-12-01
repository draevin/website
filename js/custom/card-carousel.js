$(document).ready(function () {
  var fillCards = function () {
    var r = $.Deferred();

    var $exp = "https://draevin-new.netlify.com/js/json/experience.json";
    $.getJSON($exp)
      .done(function (data) {
        $.each(data.exps, function (i, exp) {
          var $slide = $(document.createElement("div")).attr({
            id: exp.name,
            class: "slide purple-dark vert-center-col card-col shadow-def"
          });
          var $title = $(document.createElement("h4"));
          var $titleText = $(document.createTextNode(exp.title));
          $title.append($titleText);
          $slide.append($title);
          $("#experience").append($slide);
        });
      });

    return r;
  }

  var startCarousel = function () {
    $('.card-carousel').slick({
      dots: true,
      arrows: true
    });
  }

  fillCards().done(startCarousel());
}(jQuery));