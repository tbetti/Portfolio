// call cards
fillWorkContainer();
function fillWorkContainer(){
    // Create small cards
    createSmallCards("coffeeChat", "techBlog");
    createSmallCards("gameTime", "weatherGenerator");
    createSmallCards("guessWord", "libraryOfCongress");
}

// Display menu when menu button clicked
$("#drop-btn").click(displayMenu);

// Display worksite info when clicked
$(".work-card").click(displayInfo);

// Stop propagation for website and GitHub buttons
$(".card-btn").click(stopProp);
