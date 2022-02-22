const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formInputValues = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  formInputChecker(formInputValues);

  console.log(formInputValues);
  event.currentTarget.reset();
}

function formInputChecker({ email, password }) {
  const messageEmail = "Вы не ввели email!";
  const messagePSW = "Вы не ввели пароль!";
  if (email === "") return `${alert(messageEmail)}`;
  if (password === "") return `${alert(messagePSW)}`;
}
