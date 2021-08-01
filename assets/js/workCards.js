var workContainer = $("#work-container");
// Create basic card
function createCard(siteName){
        var workCard = $("<div>").attr("class", "work-card");
        let overlay = $("<div>").attr("class", "overlay").attr("id", workSites[siteName].id);
        var textBox = $("<div>").attr("class", "text-box").attr("id", "text-box");
        var workUrl = $("<a>").attr("href", workSites[siteName].site).attr("target", "_blank");
        var workImage = $("<img>").attr("src", workSites[siteName].image).attr("alt", workSites[siteName].description);
        var workTitle = $("<h3>").text(workSites[siteName].title);
        var workType = $("<p>").text(workSites[siteName].type);

        textBox.append(workTitle);
        textBox.append(workType);
        overlay.append(textBox);

        workCard.append(workImage);
        workCard.append(overlay);

        // workUrl.append(workCard);

        // return workUrl;
        return workCard;
}

function createLargeCard(siteName){
    var row = $("<div>").attr("class", "row");
    workCard = createCard(siteName);
    row.append(workCard);
    workContainer.append(row)
}

function createSmallCards(siteName1, siteName2){
    var row = $("<div>").attr("class", "row");
    workContainer.append(row);

    var workCard1 = createCard(siteName1);
    workCard1.attr("class", "work-card");
    row.append(workCard1);

    var workCard2 = createCard(siteName2);
    workCard2.attr("class", "work-card");
    row.append(workCard2);
}