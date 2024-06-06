// Variable for the explore button
let button = document.getElementById("Explore");

// Change the color of the explore button when hovered over
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "rgb(0, 41, 88)";
    button.style.color = "white"
})

// Change the color back when the mouse stops hovering
button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "rgb(97, 162, 235)";
    button.style.color = "black"
})

// Scroll to the about section when the explore button is pressed
function scroll_to_about(){
    var abt = document.getElementById("about");
    abt.scrollIntoView();
}

// Load the space chase webpage 
function loadSpaceChase() {
    document.location = "./page/space_chase.html"
}

// Load the space chase itch.io page 
function  loadSpaceGame() {
    window.open("https://keinon.itch.io/space-creeps")
}

// load the air traffic web page
function  loadAirGame() {
    window.open("https://keinon.itch.io/air-traffic")
}

// Load the air traffic itch.io page
let loadAirTraffic = () => {
    document.location = "./page/air_traffic.html"
}