// Basic functions for website
let menu = $("#menu");

// Display menu when clicked
function displayMenu(event) {
    event.preventDefault();

    if (menu[0].style.display === "block") {
        menu.css("display", "none");

    } else {
        menu.css("display", "block");
    }
}

// Display worksite information
function displayInfo(event) {
    $(".overlay").css("display", "none");

    let id = "#" + $(event.target)[0].name;
    if (id !== "#undefined") {
        let overlay = $(id);
        overlay.css("display", "block");
    }
}

// Stop propagation for URL links
function stopProp(event) {
    event.stopPropagation();
}