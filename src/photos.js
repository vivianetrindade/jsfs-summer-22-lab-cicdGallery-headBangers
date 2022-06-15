import { createHtml } from './structure';

const fetchPhotos = async () => {
  const uri = `https://api.unsplash.com/search/photos?client_id=${process.env.ACCESS_KEY}&query=dogs`;
  const response = await fetch(uri);
  const data = await response.json();
  return data.results;
};

const getPhotos = async () => {
  const photos = await fetchPhotos();
  console.log(photos);
  const arrayImgs = photos.map(photo => `<img class="section__img" src="${photo.urls.small}" alt="${photo.alt_description}">`).join('');
  console.log(arrayImgs, 'Images');
  return createHtml(arrayImgs, document.querySelector('.section__photos'));
};
export { fetchPhotos, getPhotos };
