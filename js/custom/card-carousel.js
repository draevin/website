$(document).ready(function () {

  var startCarousel = function () {
    $('.card-carousel').slick({
      dots: true,
      arrows: true
    });
  }

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
        $slide.append($title.append($titleText));

        var $dates = $(document.createElement("h5"));
        var $datesText = $(document.createTextNode(exp.start + " - " + exp.end));
        $slide.append($dates.append($datesText));

        var $desc = $(document.createElement("p"));
        var $descText = $(document.createTextNode(exp.description));
        $slide.append($desc.append($descText));

        var $projAccordion = $(document.createElement("div")).attr("class", "accordion");
        var $projAccordionBtn = $(document.createElement("button")).attr("class", "accordion-btn");
        var $projPanel = $(document.createElement("div")).attr("class", "panel");
        var $projList = $(document.createElement("ul"));
        $.each(exp.projects, function (i, proj) {
          var $projItem = $(document.createElement("li"));
          var $projItemText = $(document.createTextNode(proj));
          $projList.append($projItem.append($projItemText));
        });
        $projAccordion.append($projAccordionBtn.append($projPanel.append($projList)));

        $("#experience").append($slide);
      });
      startCarousel();
    });
}(jQuery));