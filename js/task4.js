$(document).ready(function () {
    function showStatus(action) {
        const state = $("#panelBody").is(":visible") ? "open" : "collapsed";
        $("#status").text("Last method: " + action + ". The panel is now " + state + ".");
    }

    showStatus("none");

    $("#slideUpButton").click(function () {
        $("#panelBody").slideUp(500, function () {
            showStatus(".slideUp()");
        });
    });

    $("#slideDownButton").click(function () {
        $("#panelBody").slideDown(500, function () {
            showStatus(".slideDown()");
        });
    });

    $("#slideToggleButton").click(function () {
        $("#panelBody").slideToggle(500, function () {
            showStatus(".slideToggle()");
        });
    });
});
