$(document).ready(function () {
    const box = $("#box");

    $("#animateButton").click(function () {
        box.stop(true);

        box.animate({
            left: "220px",
            top: "80px",
            width: "180px",
            height: "180px"
        }, 800, function () {
            $("#status").text("The animation is finished: the box is bigger and moved to the right.");
        });
    });

    $("#resetButton").click(function () {
        box.stop(true);

        box.animate({
            left: "0px",
            top: "0px",
            width: "100px",
            height: "100px"
        }, 600, function () {
            $("#status").text("The box is back at its original position and size.");
        });
    });
});
