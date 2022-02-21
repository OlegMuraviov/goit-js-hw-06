function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color и
// выводит значение цвета в span.color.

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");
buttonEl.addEventListener("click", onButtonClick);
function onButtonClick() {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanColorEl.textContent = randomColor;
}
