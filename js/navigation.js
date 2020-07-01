const burgerMenu = document.querySelector(".navigation__burger");
const menu = document.querySelector(".navigation__menu");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", function () {
  menu.classList.toggle("open");
  const isOpened = burgerMenu.getAttribute("aria-expanded") === "true";
  burgerMenu.classList.toggle("burger--open", !isOpened);
  burgerMenu.setAttribute("aria-expanded", String(!isOpened));
});
