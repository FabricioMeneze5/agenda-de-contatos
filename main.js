//criando constantes
const form = document.getElementById('form-add');
const textInput = document.getElementById('text-input');
const numberInput = document.getElementById('number-input');
const nome = [];
const telefone = [];

let linhas = '';

//criando evento ao cliar em submit
form.addEventListener('submit', function(e){
    e.preventDefault();

    validaNumber();
});

//Validando numero de telefone com 9 digitos
function validaNumber() {
    const numero = numberInput.value;

    if (numero.length === 9){
        numberInput.style.backgroundColor = '';
        adicionaLinha();
        document.querySelector('.message-error2').style.display = 'none';
    } else{
        numberInput.style.backgroundColor = 'rgb(213, 128, 128)';
        document.querySelector('.message-error2').style.display = 'block';
    }
}

//criando linha para tabela para adicionar nome e numero.
function adicionaLinha(){
    const corpoTabela = document.querySelector('tbody');
    let linha = '<tr>';
    
    //verificando caso haja um numero adicionado anteriormente.
    if (telefone.includes(numberInput.value)) {
        numberInput.style.backgroundColor = 'rgb(213, 128, 128)';
        document.querySelector('.message-error1').style.display = 'block';
    } else {
        numberInput.style.backgroundColor = '';
        document.querySelector('.message-error1').style.display = 'none';

        nome.push(textInput.value);
        telefone.push(numberInput.value);

            linha += `<td>${textInput.value}</td>`;
            linha += `<td>${numberInput.value}</td>`;
            linha += '</td>';

            linhas += linha;

            //resetando campos para adicionar outros dados.
            textInput.value = '';
            numberInput.value = '';

            corpoTabela.innerHTML = linhas;
    }
}