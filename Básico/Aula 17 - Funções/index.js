function saudacao (nome) {
    // console.log(`Olá!\n Bom dia, ${nome}!`);
    return `Olá!\n Bom dia, ${nome}!` // function é encerrada após o return, nada mais abaixo é executado
}

function soma (x = 3, y = 2) { // x = 3, y = 2 (x e y assumem varoles quando não é passado nada por parametro)
    return x + y;
}

saudacao("Elthon");

const variavel = saudacao("Elthon"); // é possível colocar o RETORNO de uma função em uma variável
console.log(variavel);

console.log(soma(1, 5));
console.log(soma());

const raizQuadrada = function (numero) {
    return `A raiz quadrada de ${numero} é ${numero ** 0.5}`;
}; // Sempre que atribuir a função a uma variável, é necessário o ';'

const raizQuadrada2 = (numero) => numero ** 0.5; // Maneira diferente de declarar função

console.log(raizQuadrada(9));
console.log(raizQuadrada(16));
console.log(raizQuadrada(25)); 

console.log(raizQuadrada2(36));
console.log(raizQuadrada2(49));
console.log(raizQuadrada2(64)); 