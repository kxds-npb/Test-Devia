const form = document.querySelector('form');
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const validationButton = document.getElementsByTagName('button')[0];

function validateForm() {
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (fullName && email && password && confirmPassword) {
        if (password == confirmPassword) {
            return true;
        }
    }
    return false;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    applyValidationStyle();

    if (validateForm()) {
        validationButton.disabled = true;
        setTimeout(() => {
            alert("✅ Inscription réussie !");
        }, 2000);
    } else {
        setTimeout(() => {
            alert("❌ Veuillez remplir tous les champs correctement");
        }, 500);
    }
});

function applyValidationStyle() {
    if (!fullNameInput.value.trim())
        fullNameInput.classList.add("error");
    else
        fullNameInput.classList.remove("error")

    if (!emailInput.value.trim()) 
        emailInput.classList.add("error");
    else
        emailInput.classList.remove("error");

    if (!passwordInput.value.trim())
        passwordInput.classList.add("error");
    else
        passwordInput.classList.remove("error");

    if (!confirmPasswordInput.value.trim() || passwordInput.value.trim() != confirmPasswordInput.value.trim()) 
        confirmPasswordInput.classList.add("error");
    else
        confirmPasswordInput.classList.remove("error");
}