export default homePage;
import HeroImage from './heroImage.webp';

function homePage() {
  const element = document.createElement('div');

  const heroImage = new Image();
  heroImage.src = HeroImage;
  heroImage.classList.add('hero-image');
  element.appendChild(heroImage);

  return element;
}
