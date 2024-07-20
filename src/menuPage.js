export default menuPage;
import PappardelleImage from './pappardelle.webp';
import RavioliImage from './ravioli.webp';

const items = [
  {
    name: 'Pappardelle',
    image: PappardelleImage,
    description: 'With Vegetable',
    price: '$35.00',
  },
  {
    name: 'Ravioli',
    image: RavioliImage,
    description: 'With Pesto Sauce',
    price: '$35.00',
  },
];

function menuPage() {
  const element = document.createElement('div');

  for (let i = 0; i < 8; i++) {
    const newCard = itemCard(items[i % 2]);
    element.appendChild(newCard);
  }

  return element;
}

function itemCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = new Image();
  image.src = item.image;
  image.alt = `Bowl of ${item.name} pasta`;
  card.appendChild(image);

  const name = document.createElement('h3');
  name.classList.add('name');
  card.appendChild(name);

  const description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('description');
  card.appendChild(description);

  const price = document.createElement('p');
  price.textContent = item.price;
  price.classList.add('price');
  card.appendChild(price);

  return card;
}
