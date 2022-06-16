import { createHtml } from './structure';
// let count = 3;
const fetchPhotos = async searchValue => {
  const uri = `https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=${searchValue}?page=2`;
  const response = await fetch(uri);
  const data = await response.json();
  return data.results;
};

const getPhotos = async searchValue => {
  const photos = await fetchPhotos(searchValue);
  const arrayImgs = photos.map(photo => `<img class="section__img" src="${photo.urls.small}" alt="${photo.alt_description}">`).join('');
  return createHtml(arrayImgs, document.querySelector('.section__photos'));
};

export { fetchPhotos, getPhotos };
