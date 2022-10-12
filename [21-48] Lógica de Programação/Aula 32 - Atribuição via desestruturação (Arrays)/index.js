
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a]; // declaração de array
[a, b, c] = letras; // atribuição por desestruturação
console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
const primeiroNumero = numeros[0];
console.log(primeiroNumero);

// ... rest operator, ... spread
const [num1, num2, ... resto] = numeros; // atribuição por desestruturação
console.log("num1 e num2: " + num1, num2);
console.log("resto: " + resto);

const [um, , tres, , cinco, , sete] = numeros; // atribuição por desestruturação pulando índices
console.log(um, tres, cinco);

                     //    0          1          2
                     // 0  1  2    0  1  2    0  1  2
const numerosArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]; // array dentro de array
console.log(numerosArray[1][2]); // return 6 

const [, [, , seis]] = numerosArray; // atribuição por desestruturação de array dentro de array ( muito complexo, não vale a pena utilizar)
console.log(seis); // return 6
const [lista1, lista2, lista3] = numerosArray; // outra forma de atribuição
console.log(lista2[2]); // return 6


