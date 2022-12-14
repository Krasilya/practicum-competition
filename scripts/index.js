const OpenMenu = document.querySelector('.header__button-img');
const ActiveMenu = document.querySelector('.header__nav-wrapper');
const LinksMenu = document.querySelector('.header__links_place_mobile-menu');
const Body = document.body;
const Menu = document.querySelector('.header__nav-wrapper_place_mobile-menu');


const OpenButton = document.querySelector('#complain');
const OpenButtonMobile = document.querySelector('#complain_mobile');
const popUp = document.querySelector(".popup");
const closeButton = document.querySelector('.popup__escape-button');


function menuOpen() {
  OpenMenu.classList.toggle('header__button-img_close');
  Menu.classList.toggle('header__nav-wrapper_place_mobile-menu_active')
  if (Body.style.overflow == 'hidden') {
    Body.style.overflow = '';
  } else {
    Body.style.overflow = 'hidden';
  }
};

function popupOpen() {
  popUp.classList.remove('popup_hidden');
  if (OpenMenu.classList.contains("header__button-img_close") != true) {
    Body.style.overflow = 'hidden';
  }
}

function popupClose() {
  popUp.classList.add('popup_hidden');
  if (OpenMenu.classList.contains("header__button-img_close") != true) {
    Body.style.overflow = '';
  }
};



OpenMenu.addEventListener('click', menuOpen);

OpenButton.addEventListener('click', popupOpen);
OpenButtonMobile.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
