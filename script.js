document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});

document.getElementById('fullName').addEventListener('change', validateName);
document.getElementById('email').addEventListener('change', validateEmail);
document.getElementById('phone').addEventListener('change', validatePhone);
document.getElementById('password').addEventListener('change', validatePassword);
document.getElementById('confirmPassword').addEventListener('change', validateConfirmPassword);

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateConfirmPassword();
}

function validateName() {
    const name = document.getElementById('fullName').value;
    const errorField = document.getElementById('fullNameError');
    if (name.length < 5) {
        errorField.textContent = 'Name must be at least 5 characters long.';
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const errorField = document.getElementById('emailError');
    if (!email.includes('@')) {
        errorField.textContent = 'Please enter a valid email address.';
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById('phone').value;
    const errorField = document.getElementById('phoneError');
    if (phone === '123456789' || phone.length !== 10) {
        errorField.textContent = 'Please enter a valid 10-digit phone number.';
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const name = document.getElementById('fullName').value;
    const errorField = document.getElementById('passwordError');
    if (password.length < 8 || password.toLowerCase() === 'password' || password === name) {
        errorField.textContent = 'Password must be at least 8 characters long and cannot be "password" or your name.';
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorField = document.getElementById('confirmPasswordError');
    if (password !== confirmPassword) {
        errorField.textContent = 'Passwords do not match.';
        return false;
    } else {
        errorField.textContent = '';
        return true;
    }
}
