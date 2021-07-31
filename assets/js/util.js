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