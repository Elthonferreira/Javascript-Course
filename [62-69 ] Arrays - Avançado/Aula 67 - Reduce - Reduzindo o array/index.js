// Reduce -> Reduz o array em um único elemento

// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Minha solução    
let somatorio = 0;
for (let num of numeros) {
    somatorio += num;
}
console.log(somatorio);

// Solução do professor com Reduce
// Reduce tem um parâmetro antes dos 3 outros que é o acumulador, e pode ser setado com valor inicial
const total = numeros.reduce((acumulador, valor) => {
    return acumulador += valor;
}, 0);
console.log(total); 

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    }
    return acumulador;
}, []);
console.log(pares); 

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro); 

const totalPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
console.log(totalPares); 



// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

// Minha solução
let maisVelha2 = 0;
let index;
for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade > maisVelha2) {
        maisVelha2 = pessoas[i].idade;
        index = i;
    }
}
console.log(`${pessoas[index].nome} é a pessoa mais velha, com ${pessoas[index].idade} anos!`);



// Solução do professor com Reduce
const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) { // acumulador é o primeiro elemento do objeto, ele vai ser comparado se é maior com todos valores de idade
        return acumulador; // se acumulador for maior, retorna acumulador
    } else { 
        return valor; // senão, retorna o valor 
    }
}, 0);
console.log(maisVelha); 