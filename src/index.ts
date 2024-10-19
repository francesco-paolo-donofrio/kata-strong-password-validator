const passwordInput = document.getElementById('password') as HTMLInputElement;
const requirementList = document.querySelectorAll('.requirement') as NodeListOf<HTMLParagraphElement>;
const coloratedRow = document.getElementById('colorated-row') as HTMLElement;

function validatePassword(password: string): void {
    const conditions = [
        (password.length >= 9),
        /[A-Z]/.test(password), // controlla se c'è almeno una lettera maiuscola
        /\d/.test(password), // controlla se c'è almeno un numero
        /[!@#$%^&*]/.test(password) // controlla se c'è almeno un carattere speciale
    ];

    conditions.forEach((condition, index) => {
        requirementList[index].style.color = condition ? 'green' : 'red';
    });

    const validConditions = conditions.filter(condition => condition).length;
    if (validConditions === 4) {
        coloratedRow.style.backgroundColor = 'green';
    } else if (validConditions >= 2) {
        coloratedRow.style.backgroundColor = 'orange';
    } else {
        coloratedRow.style.backgroundColor = 'red';
    }

    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        validatePassword(password);
    });
}