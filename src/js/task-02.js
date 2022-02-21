// В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
ingredientsEl.style.listStyle = "none";
// Напиши скрипт, который для каждого элемента массива ingredients:
ingredients.forEach((element) => {
  // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement()
  const ingredientTitleEl = document.createElement("li");
  // Добавит название ингредиента как его текстовое содержимое.
  ingredientTitleEl.textContent = element;

  // Добавит элементу класс item.
  ingredientTitleEl.classList.add("item");
  // После чего вставит все <li> за одну операцию в список ul.ingredients.
  ingredientsEl.appendChild(ingredientTitleEl);
});
