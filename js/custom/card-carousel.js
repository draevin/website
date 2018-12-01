$(document).ready(function () {
  var $exp = "https://draevin-new.netlify.com/js/json/experience.json";
  $.getJSON($exp)
    .done(function (data) {
      $.each(data.items, function (i, item) {
        var $slide = $(document.createElement("<div>")).attr("id", item.name);
        $slide.classList.add("slide", "purple-dark", "vert-center-col", "card-col", "shadow-def");
        var $title = $(document.createElement("<h4>"));
        var $titleText = $(document.createTextNode(item.title));
        $title.appendChild($titleText);
        $slide.appendChild($title);
        $("#experience").appendChild($slide);
      });
    });

  $('.card-carousel').slick({
    dots: true,
    arrows: true
  });
}(jQuery));