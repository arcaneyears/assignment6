$(document).ready(function () {
    const box = $("#box");
    const status = $("#status");

    $("#startButton").click(function () {
        box.stop(true);

        box.animate({ left: "260px" }, 700, function () {
            status.text("Step 1 of 4: moved to the right.");
        });

        box.animate({ top: "150px" }, 700, function () {
            status.text("Step 2 of 4: moved down.");
        });

        box.animate({ width: "50px", height: "50px" }, 700, function () {
            status.text("Step 3 of 4: the box became smaller.");
        });

        box.animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 900, function () {
            status.text("Step 4 of 4: back at the original position and size.");
        });
    });

    $("#stopButton").click(function () {
        box.stop(true);
        status.text("The animation was stopped.");
    });

    $("#resetButton").click(function () {
        box.stop(true);
        box.css({ left: "0px", top: "0px", width: "100px", height: "100px" });
        status.text("The box was reset.");
    });
});
