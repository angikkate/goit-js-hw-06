const refsInput = document.querySelector('#font-size-control');
const refsSpan = document.querySelector('#text');

refsInput.addEventListener('input', event => {
    refsSpan.style.fontSize = refsInput.value + 'px';
});