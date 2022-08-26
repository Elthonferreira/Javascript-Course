// Vamos sempre utilizar "let" para declaração de variável, "var" é antigo, não é mais utilizado com frequencia.

// Não é possível criar constantes com palavras reservadas
// Constantes devem ter nomes significativos
// Não é possível começar o nome de uma constantes com um número
// Constantes não podem conter espaços ou traços
// Utilizamos camelCase
// Constantes são Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var

const nome = 'João';
console.log(nome);

// + - * /
// String = Text | Number = Número
const primeiroNumero = 5; // Number
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);

console.log(primeiroNumero + segundoNumero);


