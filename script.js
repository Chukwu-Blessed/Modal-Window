'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModalWindow = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden'); 
};

const closeModalWindow = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for(let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModalWindow)
};

btnCloseModal.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);
//  Adding a keypress event
documend.addEventListener('keydown', function(e) {
  if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});