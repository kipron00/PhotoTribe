var content = document.getElementsByTagName("main")[0];
content.style.visibility = "visible";

var sidebar = document.getElementsByClassName("sidebar")[0];

var lowerLayerBurger = document.getElementsByClassName("menu-toggler__line")[2];
lowerLayerBurger.addEventListener("animationend", function(evt) {
content.style.visibility = "visible";
});

// Add click listeners to the menu on the sidebar
document.getElementsByTagName("ul")[0].addEventListener("click", function(evt) {
// when a menu item is clicked hide the sidebar by unchecking the input
document.getElementById("menuToggler").checked = false;

function handleTransitionEnd(transitionEvent) {

  // remove listener
  sidebar.removeEventListener("transitionend", handleTransitionEnd);
}

sidebar.addEventListener("transitionend", handleTransitionEnd);
});
