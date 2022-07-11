const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// document는 html이란 뜻이다. -> DOCTYPE


searchEl.addEventListener('click', function () {
  //logic...
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // searchInputEl에다가 html 속성을 부여한다
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // searchInputEl에다가 html 속성을 부여한다
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021