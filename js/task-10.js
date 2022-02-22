/* Напиши скрипт создания и очистки коллекции элементов.
Пользователь вводит количество элементов в input и нажимает кнопку Создать,
после чего рендерится коллекция.
При нажатии на кнопку Очистить, коллекция элементов очищается.
Размеры самого первого <div> - 30px на 30px.
Создай функцию createBoxes(amount), которая принимает один параметр - число.
Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую
функцию getRandomHexColor для получения цвета.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const inputCountEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", onCreateBoxes);
buttonDestroyEl.addEventListener("click", onDestroyBoxes);

let size = 30;

function onCreateBoxes() {
  const amount = inputCountEl.value;
  inputCountEl.value = "";
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxesEl.appendChild(box);
  }
}

function onDestroyBoxes() {
  size = 30;
  inputCountEl.value = "";
  boxesEl.innerHTML = "";
}
