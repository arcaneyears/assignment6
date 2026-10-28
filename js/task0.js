$(document).ready(function () {
    console.log("jQuery is ready!");
    console.log("jQuery version: " + $.fn.jquery);

    $("#status").text("jQuery version " + $.fn.jquery + " is loaded and ready.");

    $("#checkButton").click(function () {
        console.log("jQuery is ready!");
        console.log("jQuery version: " + $.fn.jquery);
        $("#status").text("Checked again at " + new Date().toLocaleTimeString());
    });
});
