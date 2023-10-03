const form = document.getElementById('form-add');
const textInput = document.getElementById('text-input');
const numberInput = document.getElementById('number-input');
const phone = [];

let errorBox = document.getElementById('error-box');
let lines = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateNumber();
});

function validateNumber() {
    const number = numberInput.value;

    if (number.length === 9){
        numberInput.style.backgroundColor = '';
        addLine();
        errorBox.style.display = 'none';
    } else{
        numberInput.style.backgroundColor = 'rgb(213, 128, 128)';
        errorBox.style.display = 'block';
        errorBox.innerHTML = ("the number must contain 9 digits")
    }
}

function addLine(){
    const tableBody = document.querySelector('tbody');
    let line = '<tr>';
    
    if (phone.includes(numberInput.value)) {
        numberInput.style.backgroundColor = 'rgb(213, 128, 128)';
        errorBox.style.display = 'block';
        errorBox.innerHTML = ("number has already been added");
    } else {
        numberInput.style.backgroundColor = '';
        errorBox.style.display = 'none';

        phone.push(numberInput.value);

            line += `<td>${textInput.value}</td>`;
            line += `<td>${numberInput.value}</td>`;
            line += '</td>';

            lines += line;

            textInput.value = '';
            numberInput.value = '';

            tableBody.innerHTML = lines;
    }
}