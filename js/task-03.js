// Напиши скрипт для создания галереи изображений по массиву данных.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// В HTML есть список ul.gallery.
const galleryEl = document.querySelector(".gallery");

const imagesArr = images.map(
  (element) =>
    `<li><img src="${element.url}" alt="${element.alt}" class="image"></li>`
);
console.log(imagesArr);
galleryEl.insertAdjacentHTML("afterbegin", imagesArr);

/* способ через перебор массива методом map
const elements = images.map((image) => {
  //создаем елемент "li"
  const galleryItemEl = document.createElement("li");
  //создаем елемент "img"
  const galleryImageEl = document.createElement("img");
  //вставляем елемент "img" в елемент "li"
  galleryItemEl.append(galleryImageEl);
  //наполняем елемент "img" свойствами
  galleryImageEl.src = image.url;
  galleryImageEl.alt = image.alt;
  galleryImageEl.style.width = "100%";
  //возвращаем новый елемент "li", в котором елемент "img" в масив коллекции
  return galleryItemEl;
});
//вставляем в разметку распыленный массив новых елементов
galleryEl.append(...elements); */

// тот же способ но через функцию + мар
/*const makeOneElement = ({ url, alt }) => {
  const itemEl = document.createElement("li");
  const imageEl = document.createElement("img");
  itemEl.append(imageEl);
  imageEl.src = url;
  imageEl.alt = alt;
  imageEl.style.width = "100%";
  return itemEl;
};
const elements = images.map(makeOneElement);
galleryEl.append(...elements);*/

// Используй массив объектов images для создания элементов < img > вложенных в < li >.
// Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
