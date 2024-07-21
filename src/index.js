import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './style.css';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(homePage());
});
menuButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(menuPage());
});
contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contactPage());
});

const content = document.querySelector('#content');
content.appendChild(homePage());
