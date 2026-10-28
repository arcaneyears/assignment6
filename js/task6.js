$(document).ready(function () {
    const images = ["img/photo2.svg", "img/photo3.svg", "img/photo4.svg", "img/photo5.svg"];

    const links = [
        { href: "https://api.jquery.com", text: "jQuery API Documentation" },
        { href: "https://www.w3schools.com/jquery/", text: "W3Schools jQuery Tutorial" },
        { href: "https://getbootstrap.com/docs/5.3/", text: "Bootstrap 5.3 Documentation" },
        { href: "https://developer.mozilla.org", text: "MDN Web Docs" }
    ];

    let imageIndex = 0;
    let linkIndex = 0;

    function showSrc() {
        $("#srcInfo").text("Current src: " + $("#attrImage").attr("src"));
    }

    function showHref() {
        $("#hrefInfo").text("Current href: " + $("#demoLink").attr("href"));
    }

    showSrc();
    showHref();

    $("#srcButton").click(function () {
        imageIndex = (imageIndex + 1) % images.length;
        $("#attrImage").attr("src", images[imageIndex]);
        $("#attrImage").attr("alt", "Picture number " + (imageIndex + 1));
        showSrc();
    });

    $("#hrefButton").click(function () {
        linkIndex = (linkIndex + 1) % links.length;
        $("#demoLink").attr("href", links[linkIndex].href);
        $("#demoLink").text(links[linkIndex].text);
        showHref();
    });
});
