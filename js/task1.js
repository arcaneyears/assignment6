$(document).ready(function () {
    const originalId = $("#byId").text();
    const originalClass = [];
    const originalQuote = $("blockquote").html();

    $(".by-class").each(function () {
        originalClass.push($(this).text());
    });

    $("#textButton").click(function () {
        $("#byId").text("The text of this paragraph was replaced with .text().");
        $(".by-class").text("Both paragraphs with this class were changed at once.");
    });

    $("#htmlButton").click(function () {
        $("blockquote").html("Now the blockquote contains <strong>bold</strong> and <em>italic</em> markup added with .html().");
    });

    $("#cssButton").click(function () {
        $("#byId").css("color", "#0d6efd");

        $(".by-class").css({
            "color": "#198754",
            "font-weight": "600"
        });

        $("blockquote").css({
            "background-color": "#fff3cd",
            "padding": "12px",
            "border-radius": "8px"
        });
    });

    $("#resetButton").click(function () {
        $("#byId").text(originalId).removeAttr("style");

        $(".by-class").each(function (index) {
            $(this).text(originalClass[index]).removeAttr("style");
        });

        $("blockquote").html(originalQuote).removeAttr("style");
    });
});
