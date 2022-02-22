const categoriesListEl = document.querySelector("#categories");
const categoriesItemEl = document.querySelectorAll("#categories .item");

console.log(`Numbers of categories: ${categoriesItemEl.length}`);

categoriesItemEl.forEach((element) => {
  const ctgTitle = element.querySelector("h2").textContent;
  const ctgAmounte = element.querySelectorAll("li").length;
  console.log(`Category: ${ctgTitle}`);
  console.log(`Elements: ${ctgAmounte}`);
});
