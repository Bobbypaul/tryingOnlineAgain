const theContainer = document.getElementById("tags-containers");
const textarea = document.getElementById("textarea");

textarea.focus();
function showme(me) {
  const theArray = me.split(","); //turn anything inside show me to an aaray
  theContainer.innerHTML = ""; //this was important forthe words
  theArray.forEach(function (eachText) {
    //so for each element in the array a span was formed
    const theirCon = document.createElement("span");
    theirCon.classList.add("tag"); //that span was given a class in the css
    theirCon.innerText = eachText; //each element in an array was put into that span
    theContainer.appendChild(theirCon);
  });
}

textarea.addEventListener("keyup", function lol(e) {
  // 1 we create a function that calls showme.showme shows anything inside it
  showme(e.target.value);
  if (e.key === "Enter") {
    setTimeout(function () {
      e.target.value = "";
    }, 1000);
    randomSelect();
  }
});

function randomSelect() {
  var times = 30;

  var interval = setInterval(function () {
    var randomTag = pickRandomTag();
    hlt(randomTag);
    setTimeout(function () {
      unhlt(randomTag);
    }, 100);
  }, 100);

  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      const randomTag = pickRandomTag();
      hlt(randomTag);
    }, 100);
  }, times * 100);
}
function pickRandomTag() {
  const allSpan = document.querySelectorAll(".tag");

  return allSpan[Math.floor(Math.random() * allSpan.length)];
}
function hlt(tag) {
  tag.classList.add("highlight");
}
function unhlt(tag) {
  tag.classList.remove("highlight");
}
