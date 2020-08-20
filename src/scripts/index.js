import '../styles/index.scss';

// const pil = document.querySelector('.button-wrapper');
const flip = document.querySelector('.flip-card-inner');
const affisch = document.querySelectorAll('.affisch');
const links = document.querySelectorAll('.nav-link');

affisch.forEach((element) =>
  element.addEventListener('click', (event) => {
    affisch.forEach((element) => {
      element.classList.remove('remove');
    });
    element.classList.add('remove');
    // let mainAffischSrc = document.getElementById('hej').getAttribute('src');
    let src = element.getAttribute('src');
    // element.setAttribute('src', mainAffischSrc);
    document.querySelector('#tja').setAttribute('src', src);
  })
);

// links.forEach((element) =>
//   element.addEventListener('click', (event) => {
//     links.forEach((element) => {
//       element.classList.remove('active');
//     });
//     element.classList.add('active');
//   })
// );
