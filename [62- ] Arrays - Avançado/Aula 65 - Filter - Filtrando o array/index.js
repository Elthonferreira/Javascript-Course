// Filter, map, reduce (aulas mais importantes de arrays)
// Filter -> Sempre vai retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Solução comum
let numerosMaioresQue10 = [];
for (let num of numeros) {
    if (num > 10) numerosMaioresQue10.push(num);
}
console.log(numerosMaioresQue10);


// Solução com filter
const numerosFiltrados = numeros.filter((valor) => { // filter já possui 3 parâmetros (valor, índice, array)
    return valor > 10; // retorna true ou false
});
console.log(numerosFiltrados);


// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const filtro1 = pessoas.filter(obj => {
    return obj.nome.length >= 5;
});

const filtro2 = pessoas.filter(obj => {
    return obj.idade > 50;
});

const filtro3 = pessoas.filter(obj => {
    //return obj.nome.charAt(obj.nome.length -1) === 'a'; // minha solução
    return obj.nome.toLowerCase().endsWith('a'); // solução do professor
});

console.log(filtro1); // Pessoas de nome com 5 letras ou mais
console.log(filtro2); // Pessoas com mais de 50 anos
console.log(filtro3); // Pessoas cujo nome termina com a letra 'a'
