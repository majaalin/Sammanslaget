import '../styles/index.scss';

// const pil = document.querySelector('.button-wrapper');
const flip = document.querySelector('.flip-card-inner');
const affisch = document.querySelectorAll('.affisch');

// pil.addEventListener('click', (event) => {
//   flip.classList.toggle('flip-card-inner-hover');
// });

affisch.forEach((element) =>
  element.addEventListener('click', (event) => {
    affisch.forEach((element) => {
      element.classList.remove('remove');
    });
    element.classList.add('remove');
    // let mainAffischSrc = document.getElementById('hej').getAttribute('src');
    let src = element.getAttribute('src');
    // element.setAttribute('src', mainAffischSrc);
    document.querySelector('#hej').setAttribute('src', src);
  })
);
