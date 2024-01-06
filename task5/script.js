const inputField = document.querySelector('form input');
const buttonElement = document.querySelector('form button');
const duplicateField = document.querySelector("#duplicateField");

inputField.addEventListener('input', () => { 
        duplicateField.textContent = inputField.value;
    }
);

buttonElement.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputField.value);
    inputField.value = "";
    duplicateField.textContent = "";
});