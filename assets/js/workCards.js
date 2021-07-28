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

        workUrl.append(workImage);
        workUrl.append(titleBox);

        workCard.append(workUrl);

        return workCard;
}

function createLargeCard(siteName){
    var row = $("<div>").attr("class", "row");
    workCard = createCard(siteName);
    row.append(workCard);
    workContainer.append(row)
}

function createSmallCard(siteName, row){
    var workCard = createCard(siteName);
    workCard.attr("class", "work-card row-card");
    row.append(workCard);
}