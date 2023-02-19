const refsInput = document.querySelector('#validation-input');

refsInput.addEventListener('blur', event => {

    if (refsInput.value.length != refsInput.dataset.length) {
        refsInput.classList.remove('valid');
        refsInput.classList.add('invalid');
    }
    else {
        refsInput.classList.remove('invalid');
        refsInput.classList.add('valid');
    }
});