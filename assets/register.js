const registerForm = document.querySelector("#register-form");
const nameInput = document.querySelector("#nombre");
const lastNameInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const showPasswordCheckbox = document.querySelector("#showPassword");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
};

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

const isValidEmail = (input) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(input.value.trim());
};


const isExistingEmail = (input) => {
 return users.some((user) =>user.email === input.value.trim()); 
};

const isSecurePassword = (input) => {
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(input.value.trim());
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

const checkEmail = (input) => {
    let valid = false;
    if (isEmpty(input)) {
        showError(input, "El campo es obligatorio");
        return;
    }
    if(!isValidEmail(input)) {
        showError(input, "El email no es valido");
        return;
    }
    if(isExistingEmail(input)) {
        showError(input, "El email que estas ingresando ya se encuentra registrado");
        return;
    }
    showSuccess(input);
    valid = true;
    return valid;
};

const checkPassword = (input) => {
    let valid = false;
    if (isEmpty(input)) {
        showError(input, "El campo es obligatorio");
        return;
    }
    if(!isSecurePassword(input)) {
        showError(input, "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un carácter especial y una longitud mínima de 8");
        return;
    }
    
    showSuccess(input);
    valid = true;
    return valid;
};

const checkboxPass = (input) => {
    passwordInput.type = input.checked ? "text" : "password";
};

const submitHandler = (e) => {
    e.preventDefault();
    let validName = checkTextInput(nameInput);
    let validLastName = checkTextInput(lastNameInput);
    let validEmail = checkEmail(emailInput);
    let validPass = checkPassword(passwordInput);

    let isValidForm = validName && validLastName && validEmail && validPass;

    if(isValidForm) {
        users.push({
            name: nameInput.value,
            lastName:lastNameInput.value,
            email:emailInput.value,
            password:passwordInput.value,
        });
        saveLocalStorage();
        alert(" ¡Registro exitoso! "); 
        window.location.href ="login.html";
    }

    
};

const init = () => {
    registerForm.addEventListener("submit", submitHandler);
    nameInput.addEventListener("input",() => checkTextInput(nameInput));
    lastNameInput.addEventListener("input",() => checkTextInput(lastNameInput));
    emailInput.addEventListener("input", () => checkEmail(emailInput));
    passwordInput.addEventListener("input", () => checkPassword(passwordInput));
    showPasswordCheckbox.addEventListener("change", () => checkboxPass(showPasswordCheckbox));
};

init();