// Escreva uma função que recebe 2 números e retorne o maior deles

function verificaNaN(numero1, numero2) {
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) return true;
    else return false;
}

function retornaMaiorNumero(numero1, numero2) {
    numero1 = Number(numero1); // Converte para number, para o caso de receber algo assim '10'
    numero2 = Number(numero2); // Converte para number, par ao caso de receber algo assim '10'
    if (verificaNaN(numero1, numero2)) {
       return 'Valor passado não é um número';
    }
    if (numero1 > numero2) {
        return `Maior número: ${numero1}`;
    } else if (numero1 < numero2) {
        return `Maior número: ${numero2}`;
    } else {
        return 'Números iguais';
    }
}

const maiorNumero = retornaMaiorNumero(30, 30);
console.log(maiorNumero);

// console.log(verificaNaN(2, '2a3'));

// const teste = '2a3';

// if (Number.isNaN(teste)) {
//     console.log('É NAN');
// } else {
//     console.log(typeof teste);
//     console.log('Não é NAN');
// }