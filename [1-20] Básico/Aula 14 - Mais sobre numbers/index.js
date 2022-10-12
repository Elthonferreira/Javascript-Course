// IEEE 754-2008
let num1 = 12;   // number
let num2 = 2.5232; // number

console.log(num1.toString() + num2);
// num1 = num1.toString() // altera o tipo de num1 para string
console.log(typeof num1); 

console.log(num1.toString(2)); // Representação binária
console.log(num2.toFixed(2)); // Arredondamento
console.log(Number.isInteger(num1)); // verifica se é inteiro

let temp = num1 * 'Ola';
console.log(Number.isNaN(temp)); // verifica se é um NaN


let n1 = 0.7; // number
let n2 = 0.1; // number

n1 += n2; // 0.8
n1 += n2; // 0.9
n1 += n2; // 1.0
n1 += n2; // 1.1
n1 += n2; // 1.2
n1 += n2; // 1.3
n1 += n2; // 1.4
n1 += n2; // 1.5
n1 += n2; // 1.6
n1 += n2; // 1.7
n1 += n2; // 1.8
n1 += n2; // 1.9
n1 += n2; // 2.0

console.log('n1: ' + n1);

//n1 = n1.toFixed(2); 
console.log('n1: ' + n1);
console.log(Number.isInteger(n1));
//n1 = parseFloat(n1.toFixed(2));
n1 = Number(n1.toFixed(2)); 
console.log(Number.isInteger(n1));
console.log(n1);


let numero1 = 0.7;
let numero2 = 0.1;

numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.8
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 0.9
numero1 = ((numero1 * 100) + (numero2 * 100)) / 100; // 1.0

console.log(numero1);

// as contas tem uma certa imprecisão muito pequena e essas são algumas formas de resolver isso
// sendo a melhor das formas esta:
numero1 = Number(numero1.toFixed(2));



