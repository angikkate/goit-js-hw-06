const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
const spanElValue = spanEl.textContent;

inputEl.addEventListener('input', event => {
    if (event.target.value !== "") {
        spanEl.textContent = event.target.value;
    }
    else {
        spanEl.textContent = spanElValue;
    }
});