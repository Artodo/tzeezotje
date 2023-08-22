"use strict"
const menuBtn = document.querySelector('#burgerBtn');
const menu = document.querySelector('.burger-menu');
const body = document.body;

function closeBurgerMenu() {
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
}

function isMenuOpen() {
  return menu.classList.contains("active") && menuBtn.classList.contains("active");
}

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  document.body.classList.toggle('noScroll');
})

body.addEventListener('click', function (e) {
  if (isMenuOpen()) {
    if (!e.target.classList.contains("burger-menu") && !e.target.classList.contains("burger-wrapper") && !e.target.classList.contains("burger")) {
      closeBurgerMenu();
    }
  }
})

const anchors = document.querySelectorAll('.burger-items');

anchors.forEach(anchor => {
  anchor.addEventListener('click', () => {
    closeBurgerMenu();
    document.body.classList.remove('noScroll');
  })
})



const reserveBtn = document.querySelector('#reserveBtn');
const modalWindow = document.querySelector('.modal-window');
const crossModal = document.querySelector('.cross-modal');
const shadow = document.querySelector('.shadow');

reserveBtn.addEventListener('click', function(){
  modalWindow.classList.add('show-modal');
  shadow.classList.add('active');
  document.body.classList.add('noScroll');
})

crossModal.addEventListener('click', function(){
  modalWindow.classList.remove('show-modal');
  shadow.classList.remove('active');
  document.body.classList.remove('noScroll');
})

const swiper = new Swiper('.swiper', {
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});