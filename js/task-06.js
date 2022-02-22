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
