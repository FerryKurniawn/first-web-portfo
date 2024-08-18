const burgerButton = document.getElementById("navbar-button");
const burger = document.getElementById("navbar-default");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("hidden");
});
