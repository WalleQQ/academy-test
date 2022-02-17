const openModalButtons = document.querySelectorAll(".button-open-modal");
const closeModalButton = document.querySelector(".send-contacts__close-button");
const modalContainer = document.querySelector(".modal");

const isEscapeKey = (evt) => evt.key === "Escape";

const onShowModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    modalContainer.classList.remove("modal--show");
  }
};

const openModal = () => {
  modalContainer.classList.add("modal--show");
  document.addEventListener("keydown", onShowModalEscKeydown);
};

const closeModal = () => {
  modalContainer.classList.remove("modal--show");
};

openModalButtons.forEach((item) => {
  item.addEventListener("click", openModal);
});

closeModalButton.addEventListener("click", closeModal);
