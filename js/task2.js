$(document).ready(function () {
    function showStatus(action) {
        const state = $("#target").is(":visible") ? "visible" : "hidden";
        $("#status").text("Last method: " + action + ". The paragraph is now " + state + ".");
    }

    showStatus("none");

    $("#hideButton").click(function () {
        $("#target").hide(400, function () {
            showStatus(".hide()");
        });
    });

    $("#showButton").click(function () {
        $("#target").show(400, function () {
            showStatus(".show()");
        });
    });

    $("#toggleButton").click(function () {
        $("#target").toggle(400, function () {
            showStatus(".toggle()");
        });
    });
});
