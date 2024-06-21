// HAMBURGER
const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbarMenu.classList.toggle("hidden");
});

// navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navber-fixed");
  }
};
