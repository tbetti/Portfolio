// Basic functions for website
let menu = $("#menu");

// Display menu when clicked
function displayMenu(event){
    event.preventDefault();

    if(menu[0].style.display === "block"){
        menu.css("display", "none");

    }else{
        menu.css("display", "block");
    }
}

// Display worksite information
function displayInfo(){
    for(let site in workSites){
        let id = "#" + workSites[site].id;
        let overlay = $(id);
        if(overlay[0].style.display === "block"){
            overlay.css("display", "none");
        }else{
            overlay.css("display", "block");
        }
    }
}