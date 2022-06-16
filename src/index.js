import { createHtml, newHtml } from './structure';
import { fetchPhotos, getPhotos } from './photos';
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
createHtml(newHtml, document.querySelector('body'));
const button = document.querySelector('.button');
let list = [];
button.addEventListener('click', e => {
  const searchvalue = document.getElementById('input').value;

  e.preventDefault();

  list.push(searchvalue);
  localStorage.setItem('recomendation', JSON.stringify(list));

  getPhotos(searchvalue);
});
