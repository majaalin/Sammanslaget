import '../styles/index.scss';

const adverts = document.querySelectorAll('.affisch');
const mainAdvert = document.querySelector('#main');

adverts.forEach((advert) =>
  advert.addEventListener('click', (event) => {
    adverts.forEach((advert) => {
      advert.classList.remove('remove');
    });
    advert.classList.add('remove');
    let src = advert.getAttribute('src');
    mainAdvert.setAttribute('src', src);
  })
);

mainAdvert.addEventListener('click', (event) => {
  mainAdvert.classList.toggle('zoom');
});
