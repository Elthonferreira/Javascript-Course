/*

Primitivos (imutáveis) - String, Number, Boolean, undefined, null (bigint, symbol)

Referência (mutável) - Array, object, function

*/

let nome = 'Elthon';
nome = 'Ferreira';
console.log(nome);

let a = 'A';
let b = a; // Cópia
console.log(a, b);
a = 'Outra coisa';
console.log(a, b);

let arrayA = [1, 2, 3];
//let arrayB = [...arrayA]; // Cópia do arrayA para arrayB
let arrayB = arrayA; // Valor por referência
let arrayC = arrayB; // Valor por referência
console.log(arrayA, arrayB);

arrayA.push(4); // Essa mudança afeta arrayA, mas também o arrayB, porque ambos apontam para o mesmo lugar na memória
console.log(arrayA, arrayB);

arrayB.pop(); // Essa mudança também
console.log(arrayA, arrayB);

arrayA.push('Elthon'); // Adicionando valor no arrayA
console.log(arrayC); // Printando arrayC, mas contém a alteração do arrayA, porque o valor é passado por referência


const objetoA = {
    nome: 'Elthon',
    sobrenome: 'Ferreira'
};

const objetoB = objetoA; // Passagem por referência
// const objetoB = {...objetoA} // Cópia

objetoA.nome = 'Grace';  

console.log(objetoB);
