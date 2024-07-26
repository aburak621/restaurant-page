import homePage from './homePage';
import menuPage from './menuPage';
import contactPage from './contactPage';
import './style.css';

const navButtons = Array.from(document.querySelector('.nav-buttons').children);
const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
const shoppingBag = document.querySelector('.shopping-bag');

homeButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(homePage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  homeButton.classList.add('selected');
});

const menuOnClick = () => {
  content.innerHTML = '';
  content.appendChild(menuPage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  menuButton.classList.add('selected');
};
menuButton.addEventListener('click', menuOnClick);
shoppingBag.addEventListener('click', menuOnClick);

contactButton.addEventListener('click', () => {
  content.innerHTML = '';
  content.appendChild(contactPage());
  navButtons.forEach(element => {
    element.classList.remove('selected');
  });
  contactButton.classList.add('selected');
});

const content = document.querySelector('#content');
content.appendChild(contactPage());
