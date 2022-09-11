/*
    Operadores Lógicos

    && -> AND -> E   -> Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR  -> OU
    !  -> NOT -> NÃO
*/

const expressaoAnd1 = true && true && false && true;
const expressaoAnd2 = true && true && true && true;
console.log(expressaoAnd1); // false
console.log(expressaoAnd2); // true

const expressaoOr1 = true || true || false || true;
const expressaoOr2 = false || false || false || false;
console.log(expressaoOr1); // true
console.log(expressaoOr2); // false

const usuario = 'Elthon'; // form que usuário digitou
const senha = '123456'; // form que usuário digitou

const login1 = usuario === 'Elthon' && senha === '123456';
const login2 = usuario === 'Elthon' && senha === '12345';
console.log('login1: ' + login1);
console.log('login2: ' + login2);

console.log(!true);  // inversor (return false)
console.log(!false); // inversor (return true)
