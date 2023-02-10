const writteText = document.querySelector(".text-one");
console.log(writteText);

const headText = "Auto pro život...";

let text = 1;
let delay = 400;

function moveText() {
  writteText.innerText = headText.slice(0, text);
  text++;
  if (text > 14) {
    text = 1;
  }
  setTimeout(moveText, delay);
}

moveText();
