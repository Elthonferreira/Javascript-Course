// Palavra especial 'arguments' que sustenta todos os argumentos enviados 
function funcao() {
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[3]);
}
funcao('Valor', 1, true, 'e ae'); // argumentos

// função de soma sem receber nenhum parâmetro
function soma() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
soma(1, 2, 3, 4, 5);

// pode ter mais argumentos do que parâmetros e vice-versa
function funcaoTeste(a, b, c, d, e, f) { // parâmetros
    console.log(a, b, c, d, e, f);
}
funcaoTeste(1, 2, 3); // argumentos 

function soma2(a, b = 0) { // pode assumir valor padrão de b = 0, ou qualquer outro valor
    console.log(a + b);
}
soma2(2); // se eu só passo o valor de 'a'

function soma3(a, b = 2, c = 4) {
    console.log(a + b + c);
}
soma3(2, undefined, 20); // se quiser que 'b' assuma o valor padrão, é preciso passar 'underfined'

// Atribuição por desestruturação
function funcaoDesestruturacao({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
funcaoDesestruturacao({nome: 'Elthon', sobrenome: 'Ferreira', idade: 26});

function funcaoDesestruturacaoArray([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcaoDesestruturacaoArray(['Elthon',  'Ferreira', 26]);

// função com rest parameter
function conta(operador, acumulador, ...numeros) { // ...variavel = rest parameter (recebe os argumentos restantes)
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero; 
    }
    console.log(acumulador);
}
conta('+', 0, 20, 30, 40, 50);

