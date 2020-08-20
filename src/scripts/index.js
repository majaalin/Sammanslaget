import '../styles/index.scss';

const affisch = document.querySelectorAll('.affisch');

affisch.forEach((element) =>
  element.addEventListener('click', (event) => {
    affisch.forEach((element) => {
      element.classList.remove('remove');
    });
    element.classList.add('remove');
    let src = element.getAttribute('src');
    document.querySelector('#main').setAttribute('src', src);
  })
);
