const roller = document.querySelector(".rolling");

document.addEventListener("mousemove", function (e) {
  roller.style.left = "-" + e.pageX + "px";
  roller.style.top = "-" + e.pageY + "px";
});
