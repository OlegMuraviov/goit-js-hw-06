function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");
buttonEl.addEventListener("click", onButtonClick);
function onButtonClick() {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}
