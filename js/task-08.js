// Напиши скрипт управления формой логина.

const formEl = document.querySelector(".login-form");
const inputEl = document.querySelectorAll("input");

// Обработка отправки формы form.login-form должна быть по событию submit.
formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // При отправке формы страница не должна перезагружаться.
  event.preventDefault();
  // Если в форме есть незаполненные поля, выводи alert с предупреждением
  // о том, что все поля должны быть заполнены.
  const elementData = event.currentTarget.elements;
  formInputChecker(elementData.email.value, elementData.password.value);

  // Если пользователь заполнил все поля и отправил форму,
  // собери значения полей в обьект, где имя поля будет именем свойства,
  // а значение поля - значением свойства.
  const email = elementData.email.value;
  const password = elementData.password.value;
  const formInputValues = {
    email,
    password,
  };
  // Выведи обьект с введенными данными в консоль и очисти значения
  console.log(formInputValues);
  // полей формы методом reset.
  event.currentTarget.reset();
}

//проверка валидности введенных данных
function formInputChecker(email, password) {
  const messageEmail =
    "Вы не ввели email! Также Вы можете поддержать нас донатом";
  const messagePSW =
    "Вы не ввели пароль! Также Вы можете поддержать нас донатом";
  if (email === "") return `${alert(messageEmail)}`;
  if (password === "") return `${alert(messagePSW)}`;
}
