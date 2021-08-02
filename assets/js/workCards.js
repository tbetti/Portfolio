var workContainer = $("#work-container");
// Create basic card
function createCard(siteName){
        var workCard = $("<div>").attr("class", "work-card");
        let overlay = $("<div>").attr("class", "overlay").attr("id", workSites[siteName].id);

        // Display website info in text box
        var textBox = $("<div>").attr("class", "text-box").attr("id", "text-box");
        var workImage = $("<img>").attr("src", workSites[siteName].image).attr("alt", workSites[siteName].description);
        var workTitle = $("<h3>").text(workSites[siteName].title);
        var workType = $("<p>").text(workSites[siteName].type);
        var workDescription = $("<p>").text(workSites[siteName].description);
        
        textBox.append(workTitle);
        textBox.append(workDescription);
        textBox.append(workType);

        // Display buttons and links to website and gitHub repository
        var btnBox = $("<div>").attr("class", "btn-box");
        var urlBtn = $("<button>").attr("class", "card-btn").attr("id", "url-btn");
        var workUrl = $("<a>").attr("href", workSites[siteName].site).attr("target", "_blank").text("Website");
        var gitHubBtn = $("<button>").attr("class", "card-btn").attr("id","gitHub-btn");
        var workGitHub = $("<a>").attr("href", workSites[siteName].gitHub).attr("target","_blank").text("Repository");

        urlBtn.append(workUrl);
        gitHubBtn.append(workGitHub);
        btnBox.append(urlBtn);
        btnBox.append(gitHubBtn);
        
        // Append text box and buttons to overlay
        overlay.append(textBox);
        overlay.append(btnBox);

        workCard.append(workImage);
        workCard.append(overlay);

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