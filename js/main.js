!function(e){var t={};function l(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(n,c,function(t){return e[t]}.bind(null,c));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n  window.addEventListener('load', function () {\r\n    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n      // Registration was successful\r\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n    }, function (err) {\r\n      // registration failed :(\r\n      console.log('ServiceWorker registration failed: ', err);\r\n    });\r\n  });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconst textarea = document.querySelector('.form__textarea--js');\r\nconst load1 = document.querySelector('.form__button--load-js1');\r\nconst save1 = document.querySelector('.form__button--save-js1');\r\nconst load2 = document.querySelector('.form__button--load-js2');\r\nconst save2 = document.querySelector('.form__button--save-js2');\r\nconst load3 = document.querySelector('.form__button--load-js3');\r\nconst save3 = document.querySelector('.form__button--save-js3');\r\nconst clear = document.querySelector('.form__button--clear-js');\r\n\r\nsave1.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  localStorage.setItem('textarea1', textarea.value);\r\n  save1.classList.toggle('animation__save1')\r\n});\r\n\r\nload1.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  textarea.value = localStorage.getItem('textarea1');\r\n  load1.classList.toggle('animation__load1')\r\n});\r\n\r\nsave2.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  localStorage.setItem('textarea2', textarea.value);\r\n  save2.classList.toggle('animation__save2')\r\n});\r\n\r\nload2.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  textarea.value = localStorage.getItem('textarea2');\r\n  load2.classList.toggle('animation__load2')\r\n});\r\n\r\nsave3.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  localStorage.setItem('textarea3', textarea.value);\r\n  save3.classList.toggle('animation__save3')\r\n});\r\n\r\nload3.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  textarea.value = localStorage.getItem('textarea3');\r\n  load3.classList.toggle('animation__load3')\r\n});\r\n\r\nclear.addEventListener('click', (e) => {\r\n  localStorage.removeItem('textarea1');\r\n  localStorage.removeItem('textarea2');\r\n  localStorage.removeItem('textarea3');\r\n})\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIHNlcnZpY2Ugd29ya2VyIHJlZ2lzdHJhdGlvbiAtIHJlbW92ZSBpZiB5b3UncmUgbm90IGdvaW5nIHRvIHVzZSBpdFxyXG5cclxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgIC8vIFJlZ2lzdHJhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bCB3aXRoIHNjb3BlOiAnLCByZWdpc3RyYXRpb24uc2NvcGUpO1xyXG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XHJcblxyXG5cclxuY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fdGV4dGFyZWEtLWpzJyk7XHJcbmNvbnN0IGxvYWQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbi0tbG9hZC1qczEnKTtcclxuY29uc3Qgc2F2ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uLS1zYXZlLWpzMScpO1xyXG5jb25zdCBsb2FkMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLWxvYWQtanMyJyk7XHJcbmNvbnN0IHNhdmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbi0tc2F2ZS1qczInKTtcclxuY29uc3QgbG9hZDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybV9fYnV0dG9uLS1sb2FkLWpzMycpO1xyXG5jb25zdCBzYXZlMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19idXR0b24tLXNhdmUtanMzJyk7XHJcbmNvbnN0IGNsZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fX2J1dHRvbi0tY2xlYXItanMnKTtcclxuXHJcbnNhdmUxLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RleHRhcmVhMScsIHRleHRhcmVhLnZhbHVlKTtcclxuICBzYXZlMS5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRpb25fX3NhdmUxJylcclxufSk7XHJcblxyXG5sb2FkMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRhcmVhMScpO1xyXG4gIGxvYWQxLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGlvbl9fbG9hZDEnKVxyXG59KTtcclxuXHJcbnNhdmUyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RleHRhcmVhMicsIHRleHRhcmVhLnZhbHVlKTtcclxuICBzYXZlMi5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRpb25fX3NhdmUyJylcclxufSk7XHJcblxyXG5sb2FkMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRhcmVhMicpO1xyXG4gIGxvYWQyLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGlvbl9fbG9hZDInKVxyXG59KTtcclxuXHJcbnNhdmUzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RleHRhcmVhMycsIHRleHRhcmVhLnZhbHVlKTtcclxuICBzYXZlMy5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRpb25fX3NhdmUzJylcclxufSk7XHJcblxyXG5sb2FkMy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRleHRhcmVhLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RleHRhcmVhMycpO1xyXG4gIGxvYWQzLmNsYXNzTGlzdC50b2dnbGUoJ2FuaW1hdGlvbl9fbG9hZDMnKVxyXG59KTtcclxuXHJcbmNsZWFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGV4dGFyZWExJyk7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RleHRhcmVhMicpO1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0ZXh0YXJlYTMnKTtcclxufSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);