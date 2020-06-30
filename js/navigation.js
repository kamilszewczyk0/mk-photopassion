const burgerMenu = document.querySelector(".navigation__burger");
const menu = document.querySelector(".navigation__menu");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
  burgerMenu.classList.toggle("burger--open");
});
