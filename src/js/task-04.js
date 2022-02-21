const valueEl = document.querySelector("#value");
const decremEl = document.querySelector("[data-action='decrement']");
const incremEl = document.querySelector("[data-action='increment']");

let result = 0;
const onButtonClick = () => (valueEl.textContent = result);

decremEl.addEventListener("click", () => {
  result -= 1;
  onButtonClick();
});

incremEl.addEventListener("click", () => {
  result += 1;
  onButtonClick();
});
