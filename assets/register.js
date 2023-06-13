const registerForm = document.querySelector("#register-form");
const nameInput = document.querySelector("#nombre");
const lastNameInput = document.querySelector("#apellido");


const isEmpty = (input) => {
    return !input.value.trim().length;
};

const isBetween = (input) => {
    return input.value.length >= 3 && input.value.length <= 20;
};
const showError = (input, msj) => {
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");
    const error = formField.querySelector("small");
    error.style.display = "block";
    error.textContent = msj;
};

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");
    const error = formField.querySelector("small");
    error.style.display = "none";
    error.textContent = "";
};

const checkTextInput = (input) => {
    let valid = false;
    if (isEmpty(input)) {
        showError(input, "El campo es obligatorio");
        return;
    }

    if (!isBetween(input)) {
        showError(input, "Debe ingresar entre 3 y 20 caracteres");
        return;
    }

    showSuccess(input);
    valid = true;
    return valid;
};

const submitHandler = (e) => {
    e.preventDefault();
};

const init = () => {
    registerForm.addEventListener("submit", submitHandler);
    nameInput.addEventListener("input",() => checkTextInput(nameInput));
    lastNameInput.addEventListener("input",() => checkTextInput(lastNameInput));
};

init();