$(document).ready(function () {

  var startExpCarousel = function () {
    $('.exp-card-carousel').slick({
      dots: true,
      arrows: true
    });
  }

  var startMediumCarousel = function () {
    $('.wrt-card-carousel').slick({
      dots: true,
      arrows: true
    });
  }

  var accordionClick = function () {
    $('.accordion-btn').on('click', function (event) {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    $('.accordion .accordion-btn:last-of-type').on('click', function (event) {
      var panel = this.nextElementSibling;
      if (this.classList.contains("to-round")) {
        this.style.borderBottomRightRadius = "1em";
        this.style.borderBottomLeftRadius = "1em";
        this.classList.remove("to-round");
        panel.style.borderBottom = "none";
      }
      else {
        this.style.borderRadius = 0;
        this.classList.add("to-round");
        panel.style.borderBottom = "1px solid #66666622";
      }
    });
  }

  var fillExpCards = function () {
    var $exp = "/js/json/experience.json";
    $.getJSON($exp)
      .done(function (data) {
        if (data.exps.length > 0) {
          var $row = $(document.createElement("div")).attr({
            id: "exp-row",
            class: "row vert-fill-fourth justify-content-center"
          });

          var $col = $(document.createElement("div")).attr({
            id: "exp-col",
            class: "col-sm-10"
          })

          var $carousel = $(document.createElement("div")).attr({
            id: "exp-carousel",
            class: "exp-card-carousel"
          })

          $.each(data.exps, function (i, exp) {
            var $slide = $(document.createElement("div")).attr({
              id: exp.name,
              class: "slide purple-dark vert-center-col card-col shadow-def"
            });

            var $header = $(document.createElement("h4"))
              .append($(document.createTextNode("Experience")));
            $slide.append($header);

            var $rule = $(document.createElement("hr")).attr("class", "mini");
            $slide.append($rule);

            var $title = $(document.createElement("h5"))
              .append($(document.createTextNode(exp.title)));
            $slide.append($title);

            var $position = $(document.createElement("h6"))
              .append($(document.createTextNode(exp.position)));
            $slide.append($position);

            var $dates = $(document.createElement("h6"))
              .append($(document.createTextNode(exp.start + " - " + exp.end)));
            $slide.append($dates);

            var $accordion = $(document.createElement("div")).attr("class", "accordion");

            if (exp.description.length > 0) {
              var $descAccordionBtn = $(document.createElement("button")).attr("class", "accordion-btn")
                .append($(document.createTextNode("Description")));
              var $descPanel = $(document.createElement("div")).attr("class", "panel");
              var $desc = $(document.createElement("p"))
                .append($(document.createTextNode(exp.description)));
              $accordion.append($descAccordionBtn);
              $accordion.append($descPanel.append($desc));
            }

            if (exp.projects.length > 0) {
              var $projAccordionBtn = $(document.createElement("button")).attr("class", "accordion-btn")
                .append($(document.createTextNode("Projects")));
              var $projPanel = $(document.createElement("div")).attr("class", "panel");
              var $projList = $(document.createElement("ul"));
              $.each(exp.projects, function (i, proj) {
                var $projItem = $(document.createElement("li"))
                  .append($(document.createTextNode(proj)));
                $projList.append($projItem);
              });
              $accordion.append($projAccordionBtn);
              $accordion.append($projPanel.append($projList));
            }

            if (exp.skills.length > 0) {
              var $skillsAccordionBtn = $(document.createElement("button")).attr("class", "accordion-btn")
                .append($(document.createTextNode("Skills")));
              var $skillsPanel = $(document.createElement("div")).attr("class", "panel");
              var $skillsList = $(document.createElement("ul"));
              $.each(exp.skills, function (i, skill) {
                var $skillItem = $(document.createElement("li"))
                  .append($(document.createTextNode(skill)));
                $skillsList.append($skillItem);
              });
              $accordion.append($skillsAccordionBtn);
              $accordion.append($skillsPanel.append($skillsList));
            }

            if (exp.techs.length > 0) {
              var $techAccordionBtn = $(document.createElement("button")).attr("class", "accordion-btn")
                .append($(document.createTextNode("Primary Technologies")));
              var $techPanel = $(document.createElement("div")).attr("class", "panel");
              var $techList = $(document.createElement("ul"));
              $.each(exp.techs, function (i, tech) {
                var $techItem = $(document.createElement("li"))
                  .append($(document.createTextNode(tech)));
                $techList.append($techItem);
              });
              $accordion.append($techAccordionBtn);
              $accordion.append($techPanel.append($techList));
            }


            $slide.append($accordion);

            $($carousel).append($slide);
          });

          $("#experience").append($row.append($col.append($carousel)));

          accordionClick();
          startExpCarousel();
        }
      });
  }

  var fillMediumCards = function () {
    var $articles = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@draevinl";

    $.getJSON($articles)
      .done(function (data) {
        if (data.items.length > 0) {
          var $wrtRow = $(document.createElement("div")).attr({
            id: "wrt-row",
            class: "row vert-fill-fourth justify-content-center"
          });

          var $wrtCol = $(document.createElement("div")).attr({
            id: "wrt-col",
            class: "col-sm-8"
          })

          var $wrtCarousel = $(document.createElement("div")).attr({
            id: "wrt-carousel",
            class: "wrt-card-carousel"
          })
        }
        $.each(data.items, function (i, story) {
          if (i > 0) {
            return false;
          }
          var $card = $(document.createElement("div")).attr({
            class: "slide purple-dark vert-center-col card-col shadow-def"
          });

          var $header = $(document.createElement("h4")).append($(document.createTextNode("Recent on Medium:")));
          $card.append($header);

          var $rule = $(document.createElement("hr")).attr("class", "mini");
          $card.append($rule);

          var $title = $(document.createElement("a")).attr("href", story.guid);
          $title.append($(document.createElement("h5")).append($(document.createTextNode(story.title))));
          $card.append($title);

          var $pic = $(document.createElement("img")).attr({
            src: story.thumbnail,
            class: "thumbnail"
          });
          $card.append($pic);

          $($wrtCarousel).append($card);
        })

        $("#writing").append($wrtRow.append($wrtCol.append($wrtCarousel)));

        accordionClick();
        startMediumCarousel();
      })
  }

  fillExpCards();
  fillMediumCards();
}(jQuery));