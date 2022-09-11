/*
    Operadores Lógicos

    && -> AND -> false && true -> false "o valor mesmo"
    || -> OR  -> vai retornar "o valor verdadeiro"

    FALSY
    false
    0
    '' "" ``
    null / undefined
    NaN
*/

// Se uma expressão tiver "&& false", vai ser retornado o valor mesmo (avaliação de curto-circuito)

console.log('Elthon' && 'Grace'); // checa dois valores verdadeiros e retorna o último
console.log('Elthon' && 0 && 'Grace'); // return 0
console.log('Elthon' && null && 'Grace'); // return null
console.log('Elthon' && NaN && 'Grace'); // return NaN

function falaOi () {
    return 'Oi!';
}

const vaiExecutar1 = undefined; // pode ser false ou qualquer expressão que avalie em false (false, 0, null, undefined...)
const vaiExecutar2 = true; // pode ser true ou qualquer expressão que avalie em true 

console.log(vaiExecutar1 && falaOi()); // return undefined
console.log(vaiExecutar2 && falaOi()); // return Oi!


console.log(0 || false || null || 'Elthon' || true); // (return 'Elthon) O OR precisa de apenas uma expressão verdadeira para retornar O VALOR VERDADEIRO

const corUsuario1 = 'vermelho';
const corUsuario2 = null;
const corPadrao1 = corUsuario1 || 'preto';
const corPadrao2 = corUsuario2 || 'preto';

console.log(corPadrao1);
console.log(corPadrao2);

const a = 0;
const b = null;
const c = 'false';
//const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // return false, porém o false da variável c, que é uma string, ou seja, um valor
console.log(a || b || c || d || e); // return NaN, como false é um valor falso literal, retorna o ultimo valor
console.log(a || b || 'Elthon' || d || e); // return Elthon, que é o valor verdadeiro




