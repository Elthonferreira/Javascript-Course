/*
    Operadores de comparação

    > maior que
    >= maior que ou igual a
    < menor que
    <= menor que ou igual a
    == igualdade (valor) [Não recomendado utilizar]
    === igualdade estrita (valor e tipo)
    != diferente (valor) [Não recomendado utilizar]
    !== diferente estrito (valor e tipo)
*/

console.log(10 > 5); // true
console.log(10 >= 5); // true
console.log(10 < 5); // false
console.log(10 <= 5); // false

const num1 = 10; // number
const num2 = '10' // string

const expressao1 = num1 == num2; // retorna true mesmo sendo tipos diferentes
const expressao2 = num1 === num2; // retorna false
const expressao3 = num1 != num2; // mesma lógica, sendo que faz comparação de diferença (retorna false)
const expressao4 = num1 !== num2; // retorna true

console.log('num1 == num2? ' + expressao1);
console.log('num1 === num2? ' + expressao2);
console.log('num1 != num2? ' + expressao3);
console.log('num1 !== num2? ' + expressao4);

