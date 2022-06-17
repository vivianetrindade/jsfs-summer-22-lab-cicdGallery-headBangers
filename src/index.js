import { createHtml, newHtml } from './structure';
import { getPhotos } from './photos';
import './style.scss';

// const state = {
//   title: 'Hello!',
//   message: '',
// };
// const template = state => `
//       <h3>${state.title}</h3>
//       <p>${state.message}</p>
//     `;

// const render = (htmlString, el) => {
//   el.innerHTML = htmlString;
// };

// window.addEventListener('statechange', () => {
//   render(template(state), document.querySelector('body'));
// });

// window.dispatchEvent(new Event("statechange"));

// fetchPhotos();
// getPhotos();
const createDataList = () => {
  const searchedTerms = JSON.parse(window.localStorage.getItem('recomendation'));
  const exist = document.getElementById('#recomendations');
  if (!exist) {
    const dataList = document.createElement('datalist');
    dataList.setAttribute('id', 'recomendations');

    const options = searchedTerms.map(term => `<option value=${term}>`).join('');
    console.log(options, 'options');
    dataList.innerHTML = options;
    const form = document.querySelector('form');
    form.appendChild(dataList);
  } else if (exist) {
    const options = searchedTerms.map(term => `<option value=${term}>`).join('');
    console.log(options, 'options');
    exist.innerHTML = options;
  }
};

createHtml(newHtml, document.querySelector('body'));
const button = document.querySelector('.button');
const next = document.querySelector('.button__next');
const list = [];
let page = 0;
let query = '';

next.addEventListener('click', e => {
  page += 1;
  const searchvalue = document.getElementById('input').value;
  if (searchvalue !== query) {
    page = 1;
    query = searchvalue;
  }

  e.preventDefault();

  list.push(searchvalue);
  localStorage.setItem('recomendation', JSON.stringify(list));

  getPhotos(searchvalue, page);
});

button.addEventListener('click', e => {
  const searchvalue = document.getElementById('input').value;
  if (searchvalue !== query) {
    page = 1;
    query = searchvalue;
    createDataList();
  }

  e.preventDefault();

  list.push(searchvalue);
  localStorage.setItem('recomendation', JSON.stringify(list));

  getPhotos(searchvalue, page);
});
