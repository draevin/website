$(document).ready(function () {
  var $articles = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@draevinl";

  $.getJSON($articles)
    .done(function (data) {
      $.each(data.items, function (i, story) {
        if (i > 0) {
          return false;
        }
        var $card = $(document.createElement("div")).attr({
          class: "purple-dark col-10 col-md-6 vert-center-col card-col shadow-def",
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

        $("#writing").append($card);
      })
    })
}(jQuery));