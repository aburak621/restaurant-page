import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './style.css';

const navButtons = Array.from(document.querySelector('.nav-buttons').children);
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
console.log(navButtons);
homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(homePage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  homeButton.classList.add('selected');
});
menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menuPage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  menuButton.classList.add('selected');
});
contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contactPage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  contactButton.classList.add('selected');
});

const content = document.querySelector('#content');
content.appendChild(menuPage());
