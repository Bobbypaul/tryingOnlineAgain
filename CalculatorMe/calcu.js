const textArea = document.querySelector("p");
const button = document.querySelectorAll("button");

for (let i = 0; i <= button.length; i++) {
  button[i].addEventListener("click", function (e) {
    textArea.innerHTML += e.target.innerText;

    if (e.target.innerText === "Delete") {
      textArea.innerHTML = "";
    }
    if (e.target.innerText === "Enter") {
      textArea.innerText = textArea.innerText.slice(0, -5);
      try {
        textArea.innerText = eval(textArea.innerText);
      } catch {
        textArea.innerText = "Really Nigga, Error!";
      }
    }
    if (e.target.innerText === "Backspace") {
      textArea.innerText = textArea.innerText;
      textArea.innerText = textArea.innerText.slice(0, -10);
    }
  });
}
