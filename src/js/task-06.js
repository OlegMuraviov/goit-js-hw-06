// Напиши скрипт, который при потере фокуса на инпуте
// (событие blur), проверяет его содержимое на правильное
// количество введённых символов.
// Сколько символов должно быть в инпуте,
// указывается в его атрибуте data - length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным,
// если неправильное - красным.

const refs = {
  input: document.querySelector("#validation-input"),
};

refs.input.addEventListener("blur", onInputFocus);
function onInputFocus() {
  const inputNeedLength = Number(refs.input.dataset.length);
  let inputCurrentLength = Number(event.currentTarget.value.length);
  if (inputCurrentLength === inputNeedLength) {
    return (refs.input.style.borderColor = "#4caf50");
  }
  return (refs.input.style.borderColor = "#f44336");
}
