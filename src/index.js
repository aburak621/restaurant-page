function component() {
  const element = document.createElement('div');
  element.innerHTML = 'Heyo';
  return element;
}

document.body.appendChild(component());
