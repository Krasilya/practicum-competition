const OpenButton = document.querySelector('#complain');
const popUp = document.querySelector(".popup");
const closeButton = document.querySelector('.popup__escape-button');

function popupOpen() {
  popUp.classList.remove('popup_hidden');
};

function popupClose() {
  popUp.classList.add('popup_hidden');
};

OpenButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
