const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  let text = event.currentTarget.value;
  text !== ""
    ? (refs.output.textContent = text)
    : (refs.output.textContent = "Anonymous");
}
