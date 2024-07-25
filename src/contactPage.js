export default contactPage;
import MapImage from './img/mapImage.webp';

function contactPage() {
  const element = document.createElement('div');

  // Address Section
  const addressSection = document.createElement('div');

  const addressTitle = document.createElement('h2');
  addressTitle.textContent = 'Address';
  addressSection.appendChild(addressTitle);

  const addressParagraph = document.createElement('p');
  addressParagraph.textContent = '697 Temple Road Pleasanton, CA 94566';
  addressSection.appendChild(addressParagraph);

  const mapImage = new Image();
  mapImage.src = MapImage;
  mapImage.alt = 'Location of the restaurant pinned on the map.';
  addressSection.appendChild(mapImage);

  // Form Section
  const formSection = document.createElement('div');

  const formTitle = document.createElement('h2');
  formTitle.textContent = 'Contact Form';
  formSection.appendChild(formTitle);

  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name';
  form.appendChild(nameLabel);

  form.appendChild(document.createElement('br'));

  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.name = 'name';
  form.appendChild(name);

  form.appendChild(document.createElement('br'));

  const mailLabel = document.createElement('label');
  mailLabel.setAttribute('for', 'mail');
  mailLabel.textContent = 'Mail';
  form.appendChild(mailLabel);
  formSection.appendChild(form);

  form.appendChild(document.createElement('br'));

  const mail = document.createElement('input');
  mail.setAttribute('for', 'mail');
  mail.type = 'mail';
  mail.id = 'mail';
  mail.name = 'mail';
  form.appendChild(mail);

  form.appendChild(document.createElement('br'));

  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Message';
  form.appendChild(messageLabel);
  formSection.appendChild(form);

  form.appendChild(document.createElement('br'));

  const message = document.createElement('textarea');
  message.setAttribute('for', 'message');
  message.id = 'message';
  message.name = 'message';
  form.appendChild(message);

  form.appendChild(document.createElement('br'));

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Send Message';
  form.appendChild(submitButton);

  element.appendChild(addressSection);
  element.appendChild(formSection);

  return element;
}
