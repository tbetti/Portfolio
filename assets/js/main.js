// call cards
fillWorkContainer();
function fillWorkContainer(){
    // Create small cards
    createSmallCards("gameTime", "weatherGenerator");

    // Create large card
    createSmallCards("guessWord", "libraryOfCongress");
}

// Display menu when menu button clicked
$("#drop-btn").click(displayMenu);
