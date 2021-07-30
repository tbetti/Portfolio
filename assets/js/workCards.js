var workContainer = $("#work-container");
// Create basic card
function createCard(siteName){
        var workCard = $("<div>").attr("class", "work-card").attr("id", workSites[siteName].id);
        var workUrl = $("<a>").attr("href", workSites[siteName].site).attr("target", "_blank");
        var workImage = $("<img>").attr("src", workSites[siteName].image).attr("alt", workSites[siteName].description);
        var titleBox = $("<div>").attr("class", "card-title");
        var workTitle = $("<h3>").text(workSites[siteName].title);
        var workType = $("<p>").text(workSites[siteName].type);

        titleBox.append(workTitle);
        titleBox.append(workType);

        workCard.append(workImage);
        workCard.append(titleBox);

        workUrl.append(workCard);

        return workUrl;
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