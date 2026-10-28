$(document).ready(function () {
    const thumbs = $(".gallery-thumb");
    let current = 0;

    function openImage(index) {
        current = index;

        const thumb = thumbs.eq(index);
        const source = thumb.attr("src");
        const caption = thumb.data("caption");

        thumbs.removeClass("active");
        thumb.addClass("active");

        $("#largeImage").fadeOut(250, function () {
            $("#largeImage").attr("src", source);
            $("#largeImage").attr("alt", caption);
            $("#caption").text(caption);
            $("#largeImage").fadeIn(400);
        });
    }

    thumbs.click(function () {
        openImage(thumbs.index(this));
    });

    thumbs.mouseenter(function () {
        $(this).stop(true).animate({ opacity: 0.7 }, 200);
    });

    thumbs.mouseleave(function () {
        $(this).stop(true).animate({ opacity: 1 }, 200);
    });

    $("#nextButton").click(function () {
        openImage((current + 1) % thumbs.length);
    });

    $("#prevButton").click(function () {
        openImage((current - 1 + thumbs.length) % thumbs.length);
    });
});
