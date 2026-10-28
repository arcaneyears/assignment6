$(document).ready(function () {
    const box = $("#box");

    $("#animateButton").click(function () {
        box.stop(true);
        box.css("opacity", 1);

        box.animate({
            left: "240px",
            top: "120px",
            width: "160px",
            height: "160px",
            opacity: 0.35
        }, 1200, "swing", function () {
            $("#status").text("Position, size and opacity were animated in one single call.");
        });
    });

    $("#resetButton").click(function () {
        box.stop(true);

        box.animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px",
            opacity: 1
        }, 800, function () {
            $("#status").text("The box is back at its original state.");
        });
    });
});
