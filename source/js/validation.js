const sendContactsForm = document.querySelectorAll(".send-contacts");
const telInput = document.querySelectorAll(".send-contacts__input--tel");
const mailInput = document.querySelectorAll(".send-contacts__input--mail");
const successForm = document.querySelector(".success");
const errorForm = document.querySelector(".error");
const successCloseButton = document.querySelector(".success__button");
const errorCloseButton = document.querySelector(".error__button");

const isEscapeKey = (evt) => evt.key === "Escape";

const onShowResultEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    successForm.classList.remove("success--show");
    errorForm.classList.remove("error--show");
  }
};

telInput.forEach((telItem) => {
  telItem.addEventListener("input", () => {
    const value = telItem.value;
    const telRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
    if (value.length > 10) {
      telItem.setCustomValidity("Введите не больше 10 цифр");
    } else if (telRegExp.test(value) === false) {
      telItem.setCustomValidity("Введите 10 цифр номера");
    } else {
      telItem.setCustomValidity("");
    }
    telItem.reportValidity();
  });
});

mailInput.forEach((emailItem) => {
  emailItem.addEventListener("input", () => {
    const value = emailItem.value;
    const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mailRegExp.test(value) === false) {
      emailItem.setCustomValidity("Введите корректный email");
    } else {
      emailItem.setCustomValidity("");
    }
    emailItem.reportValidity();
  });
});

sendContactsForm.forEach((item) => {
  item.addEventListener("submit", (evt) => {
    evt.preventDefault();

    fetch("https://echo.htmlacademy.ru/courses", {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          successForm.classList.add("success--show");
          document.addEventListener("keydown", onShowResultEscKeydown);
        } else {
          errorForm.classList.add("error--show");
        }
      })
      .catch(() => {
        errorForm.classList.add("error--show");
        document.addEventListener("keydown", onShowResultEscKeydown);
      });
  });
});

successCloseButton.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal--show");
  successForm.classList.remove("success--show");
});
errorCloseButton.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal--show");
  errorForm.classList.remove("error--show");
});
