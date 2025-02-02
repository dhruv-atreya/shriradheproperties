const menuButton = document.getElementById("menu");
const nav = document.getElementById("nav");
var navIsOpen = false;

menuButton.addEventListener("click", function (e) {
  e.preventDefault();
  toggleNav();
});

var toggleNav = function () {
  if (navIsOpen) {
    navIsOpen = false;
    nav.classList.remove("mobile-nav");
  } else {
    navIsOpen = true;
    nav.classList.add("mobile-nav");
  }
};

const contactButton = document.getElementById("nav-contact-button");
const popup = document.getElementById("popup");
const contactForm = document.getElementById("contact-form");
let popupIsOpen = false;

contactButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (!popupIsOpen) {
    popup.classList.remove("hidden");
    document.getElementsByTagName("body")[0].classList.add("stop-scrolling");
    popupIsOpen = true;
  }
});

const popupCloseButton = document.getElementById("popup-close");

popupCloseButton.addEventListener("click", function (e) {
  if (popupIsOpen) {
    popup.classList.add("hidden");
    popupIsOpen = false;
    document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");
  }
});
