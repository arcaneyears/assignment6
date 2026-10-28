$(document).ready(function () {
    function showStatus(action) {
        const state = $("#fadeImage").is(":visible") ? "visible" : "hidden";
        $("#status").text("Last method: " + action + ". The image is now " + state + ".");
    }

    showStatus("none");

    $("#fadeInButton").click(function () {
        $("#fadeImage").fadeIn(600, function () {
            showStatus(".fadeIn()");
        });
    });

    $("#fadeOutButton").click(function () {
        $("#fadeImage").fadeOut(600, function () {
            showStatus(".fadeOut()");
        });
    });

    $("#fadeToggleButton").click(function () {
        $("#fadeImage").fadeToggle(600, function () {
            showStatus(".fadeToggle()");
        });
    });

    $("#fadeToButton").click(function () {
        $("#fadeImage").fadeTo(600, 0.3, function () {
            showStatus(".fadeTo()");
        });
    });
});
