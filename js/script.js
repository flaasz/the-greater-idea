! function (e) {
    "use strict";
    e(window).on("load", function () {
        e(".loader-inner").fadeOut(), e(".loader").delay(200).fadeOut("slow")
    });

}(jQuery);