$(document).ready(function () {
  var $exp = "https://draevin-new.netlify.com/js/json/experience.json";
  $.getJSON($exp)
    .done(function (data) {
      $.each(data.items, function (i, item) {
        var $slide = $("<div>", { id: item.name })
        $slide.appendTo("#experience");
      });
    });
}(jQuery));