// call cards
fillWorkContainer();
function fillWorkContainer(){
    // Create large Card
    createLargeCard("gameTime");

    // Create small Card
    var row = $("<div>").attr("class", "row");
    workContainer.append(row);
    createSmallCard("weatherGenerator", row);
    createSmallCard("guessWord", row);

    // Create large Card
    createLargeCard("libraryOfCongress");
}