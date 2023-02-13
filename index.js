const cardNumber = document.querySelector('.card-number');
const cardHolderName = document.querySelector('.cardholder-name');
const cardExpMM = document.querySelector('.card-exp-mm');
const cardExpYY = document.querySelector('.card-exp-yy');

const cardCvc = document.querySelector('.cvc')

const cardNumberField = document.getElementById('number');
const cardHolderNameField = document.getElementById('name');
const cardExpFieldMM = document.querySelector('.mm');
const cardExpFieldYY = document.querySelector('.yy');
const cardCvcField = document.getElementById('cvc-field');

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const layover = document.querySelector('.layover');
    layover.style.visibility = 'visible'
})

let regName = /^[A-Za-z\s]*$/;
let regNumber = /^[0-9\s]*$/ ;
let regNumberLen = /^\b[0-9]{1,2}\b/;

cardNumberField.addEventListener('keyup',() => {
    const errorEl = document.querySelector('.number-error')
    let value = cardNumberField.value

    if(regNumber.test(value) && (/^\b[0-9]{1,16}\b/).test(value)){
        errorEl.textContent = '';
        cardNumber.textContent = value;
        
        cardNumberField.classList.remove('errorfield')  
    }else{
        cardNumber.textContent = ''
        cardNumberField.classList.add('errorfield')
        errorEl.textContent = 'Wrong format, numbers only'
    }
});


cardHolderNameField.addEventListener('keyup', () => {
    const errorEl = document.querySelector('.name-error');
    let value = cardHolderNameField.value;

    if(regName.test(value) || value === ''){
        errorEl.textContent = '';
        cardHolderName.textContent = value;

        cardHolderNameField.classList.remove('errorfield')
    }else{
        cardHolderNameField.classList.add('errorfield')
        errorEl.textContent = 'Wrong format, alphabets only'
    }
})

cardExpFieldMM.addEventListener('keyup', () => {
    const errorEl  = document.querySelector('.exp-error')
    const value = cardExpFieldMM.value

    if(regNumber.test(value) && regNumberLen.test(value) && value < 13){
        errorEl.textContent = ''
        cardExpMM.textContent = value
    
        cardExpFieldMM.classList.remove('errorfield')
    }else{
        cardExpMM.textContent = ''
        cardExpFieldMM.classList.add('errorfield')
        errorEl.textContent = `must contain number or less than 3 digits`
    }
})

cardExpFieldYY.addEventListener('keyup', () => {
    const errorEl  = document.querySelector('.exp-error')
    const value = cardExpFieldYY.value

    if(regNumber.test(value) && regNumberLen.test(value)){
        errorEl.textContent = ''
        cardExpYY.textContent = value
    
        cardExpFieldYY.classList.remove('errorfield')
    }else{
        cardExpYY.textContent = ''
        cardExpFieldYY.classList.add('errorfield')
        errorEl.textContent = "must contain number and less than 3 digits"
    }
})

cardCvcField.addEventListener('keyup', () => {
    const errorEl = document.querySelector('.cvc-error')
    const value = cardCvcField.value

    if(regNumber.test(value) && (/^\b[0-9]{1,3}\b/).test(value)){
        errorEl.textContent = ''
        cardCvc.textContent = value

        cardCvcField.classList.remove('errorfield')
    }else{
        cardCvc.textContent = ''
        cardCvcField.classList.add('errorfield')
        errorEl.textContent = 'must contain number and less than 3 digits'
    }
})