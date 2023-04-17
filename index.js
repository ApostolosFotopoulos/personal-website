const hamburgerLines = document.querySelector(".hamburger-lines");
const hamburgerLineTop = document.querySelector(".hamburger-lines__line--top");
const hamburgerLineMid = document.querySelector(".hamburger-lines__line--mid");
const hamburgerLineBot = document.querySelector(".hamburger-lines__line--bot");
const mobileMenu = document.querySelector(".mobile-menu");
console.log(hamburgerLines);

hamburgerLines.addEventListener("click", function () {
  hamburgerLineTop.classList.toggle("hamburger-lines__line--top-opened");
  hamburgerLineMid.classList.toggle("hamburger-lines__line--mid-opened");
  hamburgerLineBot.classList.toggle("hamburger-lines__line--bot-opened");
  mobileMenu.classList.toggle("mobile-menu--opened");
});
