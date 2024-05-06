//Funzione per aggiungere tre numeri//
function add(num1, num2,num3) {
return num1 + num2 ||  num2 + num3 || num1 + num3;
}

//Funzione per sottrarre tre numeri//
function sub(num1, num2, num3) {
return num1 - num2 || num2 - num3 || num1 - num3;
}

//Funzione per moltiplicare tre numeri//
function mult(num1, num2, num3) {
    return num1 * num2 || num2 * num3 || num1 * num3;
}

//Funzione per dividere tre numeri//
function div(num1, num2, num3) {
return num1 / num2 || num2 / num3 || num1 /num3;
}

//Funzione principale per eseguire l'operazione//
function calculate(num1, num2, num3, operation) {
    switch (operation) {
        case '+':
            return add(num1, num2, num3)
        break;
    case '-':
        return sub(num1, num2, num3)
        break;
        case '*':
            return mult(num1, num2, num3)
            break;
            case '/':
                return div(num1, num2, num3)
                break;
        default:
            return ('Operazione non valida');
    }
}

//Funzione di callback per gestire il click del pulsante "Calcola"//
function calculateHandler () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const operation = document.getElementById('operation').value;
}

const result = calculate(num1, num2, num3, operation);

document.getElementById('result').innerText = 'Risulato:' + result;

//Ho calcolato la funzione di callback al pulsante "Calcola"//
document.getElementById('calculateButton').addEventListener('click', calculateHandler);
