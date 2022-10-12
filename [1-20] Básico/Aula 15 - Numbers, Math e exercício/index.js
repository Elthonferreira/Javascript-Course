let num1 = 9.54543;

let num2 = Math.floor(num1);
let num3 = Math.ceil(num1);
let num4 = Math.round(num1);

console.log(num2);
console.log(num3);
console.log(num4);

// --------- //

console.log(Math.max(1,2,3,4,5,6,234,2455,-2,-45,24,5));
console.log(Math.min(1,2,3,4,5,6,234,2455,-2,-45,24,5));

const teste = Math.random(); // Gera números aleatórios > 0 e < 1
const aleatorio = Math.round(Math.random() * 5 + 5 ); // Gera números aleatórios entre 5 e 10
console.log(aleatorio);

console.log(Math.PI); // valor de PI
console.log(Math.pow(2, 10)); // 2 elevado a 10
console.log(2 ** 10); // 2 elevado a 10 (Bem mais fácil)

let numeroRaiz = 81;
console.log(numeroRaiz ** 0.5); // jeito fácil de calcular raiz quadrada 

console.log(100 / 0); // tende ao infinito, retorna Infinity, sim, Javascript permite a divisão por 0
