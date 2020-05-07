"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


const saveButton = document.querySelector('.button__save--js');
console.log(saveButton);

const loadButton = document.querySelector('.button__load--js');
console.log(loadButton);

const textarea = document.querySelector('.textarea--js');
console.log(textarea);

saveButton.addEventListener('click', (e) => {
  localStorage.getItem('textarea', e.target.value);
})


// const inputTest = document.querySelector('.form__window-js');

// inputTest.addEventListener('keyup', (e) => {
//   localStorage.setItem('inputTest',e.target.value);
// });

// if (localStorage.getItem('inputTest')) {
//   inputTest.value = (localStorage.getItem('inputTest'))
// };



// const navigationSwitcher = document.querySelector('.navigation__switcher--js');

// navigationSwitcher.addEventListener('click', (e) => {
// 	const navigationList = document.querySelector('.navigation__list--js');
// 	navigationList.classList.toggle('navigation__list--visible');
// 	navigationSwitcher.innerHTML = 'X';
// });


// const button = document.querySelector('.header__button--js');
// console.log(button);

// button.addEventListener('click', (e) => {
// 	const header = document.querySelector('.header__title--js')
// 	header.innerHTML = '!! Pierwszy button !!';
// 	header.classList.toggle('header__title--red');
// 	if (header.classList.contains('header__title--red')) {
// 		console.log('jest klasa');
// 	} else {
// 		console.log('brak klasy');
// 	}
// });
