const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const firstSection = document.querySelector(".first-section");
const heading = document.querySelector("h1");
const roller = document.querySelector(".our-roller");
const menuButton = document.querySelector(".show");
const menuClose = document.querySelector(".close");
const body = document.querySelector("body");
const backMenu = document.querySelector(".back-menu");

dark.addEventListener("click", function () {
  firstSection.style.background = "linear-gradient(#04619f,#000000)";
  dark.style.background = "#04619f";
  light.style.background = "#04619f";
  dark.style.color = "white";
  light.style.color = "white";
  heading.style.color = "white";
  menuButton.style.color = "white";
  menuButton.style.background = "#04619f";
  menuClose.style.color = "white";
  menuClose.style.background = "#04619f";
  body.style.background = "linear-gradient(#04619f,#000000)";
});
light.addEventListener("click", function () {
  firstSection.style.background = "linear-gradient(#f1a7f1, #fad0c4)";
  dark.style.background = "#f1a7f1";
  light.style.background = "#f1a7f1";
  dark.style.color = "black";
  light.style.color = "black";
  heading.style.color = "black";
  menuButton.style.color = "black";
  menuButton.style.background = "#f1a7f1";
  menuClose.style.color = "black";
  menuClose.style.background = "#f1a7f1";
  body.style.background = "linear-gradient(#f1a7f1, #fad0c4)";
});

menuButton.addEventListener("click", function () {
  firstSection.style.transform = "skew(20deg)";
  roller.style.transform = "scale(-1)";
  backMenu.style.zIndex = "1";
});
menuClose.addEventListener("click", function () {
  firstSection.style.transform = "skew(0deg)";
  roller.style.transform = "scale(1)";
  backMenu.style.zIndex = "-1";
});
