// В HTML есть список категорий ul#categories.
// Напиши скрипт который:

//основной сисок категорий
const categoriesListEl = document.querySelector("#categories");
//елемент основного списка категорий
const categoriesItemEl = document.querySelectorAll("#categories .item");
// 1) посчитать и вывести в консоль количество категорий в ul#categories, то есть элементов li.item.
console.log(`Numbers of categories: ${categoriesItemEl.length}`);

// Для каждого элемента li.item в списке ul#categories,
categoriesItemEl.forEach((element) => {
  // 2) найдет и выведет в консоль текст заголовка элемента(тега < h2 >)
  const ctgTitle = element.querySelector("h2").textContent;
  console.log(`Category: ${ctgTitle}`);
  // 3) и количество элементов в категории(всех вложенных в него < li >).
  const ctgAmounte = element.querySelectorAll("li").length;
  console.log(`Elements: ${ctgAmounte}`);
});
