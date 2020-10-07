!(function ($) {
  "use strict";

  // loader
  $(window).on("load", function () {
    if ($("#loader").length) {
      $("#loader")
        .delay(200)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });
})(jQuery);
