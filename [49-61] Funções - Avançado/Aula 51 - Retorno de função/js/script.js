// return -> retorna um valor -> termina a função

function soma(a, b) {
    return a + b;
}

function soma2(a, b) {
    console.log(a + b);
}
soma2(5, 2);

function criaPessoa(nome, sobrenome) {
    //return {nome: nome, sobrenome: sobrenome};
    return { nome, sobrenome };
}
// Maneiras diferentes de criar um objeto pessoa
const p1 = criaPessoa('Elthon', 'Ferreira');
const p2 = {
    nome: 'Grace',
    sobrenome: 'Kaller'
}
console.log(p1, p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

// *********************************

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }

// function quadriplica(n) {
//     return n * 4;
// }

// função closure 
function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));