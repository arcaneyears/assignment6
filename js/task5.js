$(document).ready(function () {
    let counter = $("#itemList li").length;

    function showStatus() {
        const total = $("#itemList li").length;
        $("#status").text("Items in the list: " + total);
        $("#removeButton").prop("disabled", total === 0);
        $("#emptyButton").prop("disabled", total === 0);
    }

    $("#appendButton").click(function () {
        counter = counter + 1;
        $("#itemList").append('<li class="list-group-item">Item ' + counter + ' (append)</li>');
        showStatus();
    });

    $("#prependButton").click(function () {
        counter = counter + 1;
        $("#itemList").prepend('<li class="list-group-item">Item ' + counter + ' (prepend)</li>');
        showStatus();
    });

    $("#removeButton").click(function () {
        $("#itemList li:last-child").remove();
        showStatus();
    });

    $("#emptyButton").click(function () {
        $("#itemList").empty();
        showStatus();
    });

    showStatus();
});
