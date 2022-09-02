
let nome = 'Eduardo'; // Vamos sempre utilizar "let" para declaração de variável, "var" é antigo, não é mais utilizado com frequencia.

let nome1; // Declarou a variável
nome = 'João'; // Inicializando a variável
console.log(nome);
nome = 'Otávio';
console.log(nome);


//console.log(nome, 'nasceu em 1984.');
//console.log('Em 2000,', nome, 'conheceu Maria.');
//console.log(nome, 'casou-se com Maria em 2012.');
//console.log('Maria teve 1 filho com', nome, 'em 2015.');
//console.log('O filho de', nome, 'se chama Eduardo.');

// Não é possível criar variáveis com palavras reservadas
// Variáveis devem ter nomes significativos

let nomeCliente = 'João cliente';
console.log(nomeCliente);

// Não é possível começar o nome de uma variável com um número
// Variáveis não podem conter espaços ou traços
// Utilizamos camelCase

// por exemplo
let nomeCompleto = 'Elthon Ferreira';

// Variáveis são Case-sensitive
let nomeCliente1 = 'Luiz';
let nomecliente1 = 'Otávio';
 
console.log(nomeCliente1, nomecliente1);