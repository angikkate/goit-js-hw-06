const refsBody = document.querySelector('body');
const refsSpan = document.querySelector('.color');
const refsBtn = document.querySelector('.change-color');

refsBtn.addEventListener('click', event => {
  const color = getRandomHexColor();
  refsBody.style.backgroundColor = color;
  refsSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
