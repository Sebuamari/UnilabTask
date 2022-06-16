const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".burger-menu");
const container = document.querySelector(".container");

hamburger.addEventListener("click", show);
container.addEventListener("click", hideMenu); 

function show(){
    navMenu.style.display="block";
    navMenu.style.position="absolute";
    container.style.filter="blur(4.0rem)";
}

function hideMenu(){
    navMenu.style.display="none";
    container.style.filter="blur(0)";
}