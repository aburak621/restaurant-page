export default homePage;
import HeroImage from './hero.webp';

function homePage() {
  const element = document.createElement('div');

  const leftSection = document.createElement('left-section');

  const slogan = document.createElement('h2');
  slogan.classList.add('slogan');
  leftSection.appendChild(slogan);

  const buttons = document.createElement('div');
  const viewMenuButton = document.createElement('button');
  viewMenuButton.classList.add('menu-button');
  buttons.appendChild(viewMenuButton);
  const aboutUsButton = document.createElement('button');
  buttons.appendChild(aboutUsButton);
  leftSection.appendChild(buttons);

  // TODO: Maybe add reviews.

  element.appendChild(leftSection);

  const heroImage = new Image();
  heroImage.src = HeroImage;
  heroImage.classList.add('hero-image');
  element.appendChild(heroImage);

  return element;
}
