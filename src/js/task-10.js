function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// Напиши скрипт создания и очистки коллекции элементов.

// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.
const controlsEl = document.querySelector("#controls");
const inputCountEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxexEl = document.querySelector("#boxes");

// При нажатии на кнопку Очистить, коллекция элементов очищается.
inputCountEl.addEventListener("input", onInputValue);
buttonDestroyEl.addEventListener("click", onDestroyBoxex);
buttonCreateEl.addEventListener("click", onCreateBoxex);

let inputCurrentValue = 0;
// Размеры самого первого <div> - 30px на 30px.
let size = 30;

function onInputValue(event) {
  inputCurrentValue = event.currentTarget.value;
  console.log(`value = ${inputCurrentValue}`);
}
function onDestroyBoxex() {
  inputCurrentValue = 0;
  inputCountEl.value = "";
  boxexEl.innerHTML = "";
}

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
function onCreateBoxex(event) {
  const amount = inputCountEl.value;
  inputCountEl.value = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    // Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую
    // функцию getRandomHexColor для получения цвета.
    box.style.backgroundColor = getRandomHexColor();
    // Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
    size += 10;
    console.log(boxexEl);
    boxexEl.appendChild(box);
  }
}
