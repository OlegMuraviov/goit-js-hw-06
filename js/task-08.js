// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением
// о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем свойства,
// а значение поля - значением свойства.
// Выведи обьект с введенными данными в консоль и очисти значения
// полей формы методом reset.
//проверка валидности введенных данных

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
