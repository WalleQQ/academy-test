const navigationContainer = document.querySelector(".main-nav");
const openMenu = document.querySelector(".main-nav__toggle");
const closeMenu = document.querySelector(".main-nav__toggle-item");
const menu = document.querySelector(".main-nav__menu");

navigationContainer.classList.remove("main-nav--no-js");

openMenu.addEventListener("click", () => {
  menu.classList.toggle("main-nav__menu--show-menu");
  closeMenu.classList.toggle("main-nav__toggle-item--close-menu");
});
