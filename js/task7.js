$(document).ready(function () {
    function updateOutput() {
        const name = $("#nameInput").val();
        const email = $("#emailInput").val();

        $("#nameOutput").text(name === "" ? "not filled" : name);
        $("#emailOutput").text(email === "" ? "not filled" : email);
    }

    $("#nameInput, #emailInput").on("keyup", updateOutput);
    $("#nameInput, #emailInput").on("change", updateOutput);

    $("#liveForm").on("submit", function (event) {
        event.preventDefault();
    });

    updateOutput();
});
