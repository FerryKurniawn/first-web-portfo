const burgerButton = document.getElementById("navbar-button");
const burger = document.getElementById("navbar-default");
const navList = document.getElementsByClassName("nav-menu");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("hidden");
});
Array.from(navList).forEach((navItem) => {
  navItem.addEventListener("click", function () {
    burger.classList.add("hidden");
  });
});
