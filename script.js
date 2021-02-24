let letterResult = "";

const letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
                "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

/// Validación inputs
let numberInput = document.getElementById('number-input');
let submitNumber = document.getElementById('number-validation')
let letterInput = document.getElementById('letter-input');
let submitLetter = document.getElementById('letter-validation');

function validateNumber () {
    let result = true;

    if(numberInput.value == '') {
        window.alert('Debe rellenar el campo del nº del DNI');

        result = false;
    } else if (!/([0-9]{8})/.test(numberInput.value)) {
        window.alert('Debe rellenar este campo solamente con 8 dígitos del 0 al 9');
        numberInput.value = '';

        result = false;
    }

    return result;
}

function validateLetter () {
    let result = true;

    if(letterInput.value == '') {
        window.alert('Debe rellenar el campo de letra del DNI');

        result = false;
    } else if (!/[a-zA-Z]{1}/.test(letterInput.value)) {
        window.alert('Debe rellenar este campo solamente con una letra');
        letterInput.value = '';

        result = false;
    }

    return result;
}


submitNumber.addEventListener('click', () => {
    validateNumber();
})

submitNumber.addEventListener('keyup', e => {
    if(e.key === 13) {
        validateNumber();
    }
})

submitLetter.addEventListener('click', () => {
    validateLetter();
})

submitLetter.addEventListener('keyup', e => {
    if(e.key === 13) {
        validateLetter();
    }
})

/// Cálculo letra
let formDiv = document.getElementById('form-wrapper');
let submitButton = document.getElementById('check-button');

function letterAlgorithm () {
    let checkNumber = validateNumber();
    
    if(checkNumber) {
        let checkLetter = validateLetter();

        if(checkLetter) {
            let restoDivision = numberInput.value % 23;

            letterResult = letters[restoDivision];
    
            let previousH1 = document.getElementsByClassName('green-h1');
            let previousH3 = document.getElementsByClassName('red-h3');

            if(letterResult === letterInput.value) {
                if(previousH1[0] != null) {
                    previousH1[0].parentNode.removeChild(previousH1[0]);
                } else if (previousH3[0] != null) {
                    previousH3[0].parentNode.removeChild(previousH3[0]);
                }
    
                let correctAnswer = document.createElement('h1');
                correctAnswer.className = 'green-h1';
                correctAnswer.innerHTML = `El resultado del cálculo es la letra ${letterResult}, igual a la letra introducida`;
    
                formDiv.appendChild(correctAnswer);
    
            } else  {
                if(previousH3[0] != null) {
                    previousH3[0].parentNode.removeChild(previousH3[0]);
                } else if (previousH1[0] != null) {
                    previousH1[0].parentNode.removeChild(previousH1[0]);
                }
    
                let wrongAnswer = document.createElement('h3');
                wrongAnswer.className = 'red-h3';
                wrongAnswer.innerHTML = `El resultado del cálculo es la letra ${letterResult}, no coincide con la letra introducida`;
    
                formDiv.appendChild(wrongAnswer);
            }
        }
    }    
}

submitButton.addEventListener('click', () => {
    letterAlgorithm();
})

submitButton.addEventListener('keyup', e => {
    if(e.key === 13) {
        letterAlgorithm();
    }
})

let resetButton = document.getElementById('reset-button');

function resetAnswers () {
    let previousH1 = document.getElementsByClassName('green-h1');
    let previousH3 = document.getElementsByClassName('red-h3');

    if(previousH1[0] != null) {
        previousH1[0].parentNode.removeChild(previousH1[0]);
    }

    if(previousH3[0] != null) {
        previousH3[0].parentNode.removeChild(previousH3[0]);
    }
}

resetButton.addEventListener('click', () => {
    resetAnswers();
}) 