import homePage from './homePage';
import menuPage from './menuPage';
// import aboutPage from './aboutPage';
import './style.css';

const content = document.querySelector('#content');
content.appendChild(menuPage());
