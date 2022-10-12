// For of -> Lê o valor da string, array


/*
    For clássico - Geralmente com iteráveis (arrays ou strings)
    For in - Retorna o índice ou chave, (strings, arrays ou objetos)
    For of - Retorna o valor em si (iteráveis, arrays ou strings)
*/


const nome = 'Elthon Ferreira';

for (let i = 0; i < nome.length; i++) { // for normal
    console.log(nome[i]);
}

console.log();

for (let i in nome) { // for in
    console.log(nome[i]);
}

console.log();

const nomes = ['Elthon', 'Grace', 'Eder', 'Fabio'];

for (let valor of nomes) { // for of, lê o valor da string, array 
    console.log(valor); // não funciona bem com objetos
}

console.log();

nomes.forEach(function(valor, indice, array) { // forEach
    console.log(valor, indice, array);
});

