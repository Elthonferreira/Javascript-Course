/*
  Operadores aritméticos 
  +   Adição / Concatenação
  -   Subtração
  /   Divisão
  *   Multiplicação
  **  Potenciação
  %   Resto da divisão 
  ++  Incremento
  --  Decremento
 */ 

const num1 = 2;
const num2 = 10;
const num3 = 5; 
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log();

let contador = 1;
contador++; // Pós-incremento
++contador; // Pré-incremento
console.log(contador++); // Executa a ação e depois incrementa
console.log(++contador); // Incrementa e depois executa a ação
console.log();

let contador1 = 1;
contador1 += 2; // contador = contador + 2; // Operador de atribuição (funciona para qualquer operador)
console.log(contador1);
console.log();


// NaN - Not a Number 
// parseInt -> converte para inteiro | parseFloat -> converte para ponto flutuante | Number -> converte para numero
const numero1 = 10;
const numero2 = Number('5.6');
console.log(numero1 + numero2);
console.log(numero1 * numero2);


