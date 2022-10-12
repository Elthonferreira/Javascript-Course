// Escveva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 -> return Fizz
// Número é divisível por 5 -> return Buzz
// Número é divisível por 3 e 5 -> return FizzBuzz
// Número NÃO é divisível por 3 e 5 -> Returna o próprio número
// Checar se o número é realmente um número -> Retorna mensagem erro

function verificaNaN(numero) {
    if (Number.isNaN(numero)) return true;
    else return false;
}

function fizzBuzz(numero) {
    numero = Number(numero); // Converte para number, para o caso de receber algo assim '10'
    if (verificaNaN(numero)) {
       return 'Valor passado não é um número';
    }
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz';
    } else if (numero % 5 === 0) {
        return 'Buzz';
    } else if (numero % 3 === 0) {
        return 'Fizz';
    } else {
        return numero;
    }
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}


