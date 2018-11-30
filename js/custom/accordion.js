$(document).ready(function () {
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
}(jQuery));
