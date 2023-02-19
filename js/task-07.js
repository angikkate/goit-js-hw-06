const refsInput = document.querySelector('#font-size-control');
const refsSpan = document.querySelector('#text');

refsInput.addEventListener('change', event => {
    refsSpan.style.fontSize = refsInput.value + 'px';
});