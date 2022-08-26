// tipos primitivos
// String, number, undefined, null, boolean, symbol

const nome = 'Elthon';     // string
const nome1 = "Elthon";    // string
const nome2 = `Elthon`;    // string

const num1 = 10;           // number
const num2 = 10.52;        // number

let nomeAluno;               // underfined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = true;       // Boolean = true, false (lógico)

console.log(typeof num1);    // verificar tipo da variável
 
let numeroA = 2;
let numeroB = numeroA;          // gera uma cópia de 'numeroA' para 'numeroB'
console.log(numeroA, numeroB);  // 2, 2
numeroA = 3;
console.log(numeroA, numeroB);  // 3, 2

const arrayA = [1, 2];
const arrayB = arrayA;          // valor por referência (arrayB aponta para o mesmo lugar que arrayA)
console.log(arrayA, arrayB);    // [ 1, 2 ] [ 1, 2 ]
arrayB.push(3);
console.log(arrayA, arrayB);    // [ 1, 2, 3 ] [ 1, 2, 3 ]