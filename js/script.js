const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
var navIsOpen = false

menu.addEventListener('click', function(e){
    e.preventDefault();
    toggleNav();
})

var toggleNav = function() {
    if (navIsOpen){
        navIsOpen=false;
        nav.classList.remove("mobile-nav");
    } else {
        navIsOpen=true;
        nav.classList.add("mobile-nav");

    }
}