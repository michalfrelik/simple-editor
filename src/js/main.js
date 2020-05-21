"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


const textarea = document.querySelector('.form__textarea--js');
const load1 = document.querySelector('.form__button--load-js1');
const save1 = document.querySelector('.form__button--save-js1');
const load2 = document.querySelector('.form__button--load-js2');
const save2 = document.querySelector('.form__button--save-js2');
const load3 = document.querySelector('.form__button--load-js3');
const save3 = document.querySelector('.form__button--save-js3');
const clear = document.querySelector('.form__button--clear-js');

save1.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textarea1', textarea.value);
  save1.classList.toggle('animation__save1')
});

load1.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem('textarea1');
  load1.classList.toggle('animation__load1')
});

save2.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textarea2', textarea.value);
  save2.classList.toggle('animation__save2')
});

load2.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem('textarea2');
  load2.classList.toggle('animation__load2')
});

save3.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('textarea3', textarea.value);
  save3.classList.toggle('animation__save3')
});

load3.addEventListener('click', (e) => {
  e.preventDefault();
  textarea.value = localStorage.getItem('textarea3');
  load3.classList.toggle('animation__load3')
});

clear.addEventListener('click', (e) => {
  localStorage.removeItem('textarea1');
  localStorage.removeItem('textarea2');
  localStorage.removeItem('textarea3');
})
