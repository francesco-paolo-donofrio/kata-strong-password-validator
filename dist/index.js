"use strict";
const passwordInput = document.getElementById('password');
const requirementList = document.querySelectorAll('.requirement');
const coloratedRow = document.getElementById('colorated-row');
function validatePassword(password) {
    const conditions = [
        (password.length >= 9),
        /[A-Z]/.test(password),
        /\d/.test(password),
        /[!@#$%^&*]/.test(password)
    ];
    conditions.forEach((condition, index) => {
        requirementList[index].style.color = condition ? 'green' : 'red';
    });
    const validConditions = conditions.filter(condition => condition).length;
    if (validConditions === 4) {
        coloratedRow.style.backgroundColor = 'green';
    }
    else if (validConditions >= 2) {
        coloratedRow.style.backgroundColor = 'orange';
    }
    else {
        coloratedRow.style.backgroundColor = 'red';
    }
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        validatePassword(password);
    });
}
//# sourceMappingURL=index.js.map