//Напиши скрипт который, при наборе текста в инпуте input#name
// - input(событие input), подставляет его текущее значение в
// span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", onInputChange);
function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.output.textContent = event.currentTarget.value;
  refs.output.textContent === ""
    ? (refs.output.textContent = "Anonymous")
    : false;
}

/*refs.input.addEventListener("focus", onInputFocus);
refs.input.addEventListener("blur", onInputBlur);
// function onInputFocus() {
  console.log("input take focus - action focus");
}
function onInputBlur() {
  console.log("input lost focus - action blur");
}*/
