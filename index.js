const hamburgerLines = document.querySelector(".hamburger-lines");
const hamburgerLineTop = document.querySelector(".hamburger-lines__line-top");
const hamburgerLineMid = document.querySelector(".hamburger-lines__line-mid");
const hamburgerLineBot = document.querySelector(".hamburger-lines__line-bot");
const mobileMenu = document.querySelector(".mobile-menu");
const projectsButton = document.querySelector(".hero__button");
const mobileMenuItems = document.querySelectorAll(".mobile-menu__ul-item");

hamburgerLines.addEventListener("click", function () {
  hamburgerLineTop.classList.toggle("hamburger-lines__line-top--opened");
  hamburgerLineMid.classList.toggle("hamburger-lines__line-mid--opened");
  hamburgerLineBot.classList.toggle("hamburger-lines__line-bot--opened");
  mobileMenu.classList.toggle("mobile-menu--opened");
});

mobileMenuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    hamburgerLineTop.classList.toggle("hamburger-lines__line-top--opened");
    hamburgerLineMid.classList.toggle("hamburger-lines__line-mid--opened");
    hamburgerLineBot.classList.toggle("hamburger-lines__line-bot--opened");
    mobileMenu.classList.toggle("mobile-menu--opened");
  });
});

projectsButton.addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView();
});
