let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let aux = varA; // solução 
varA = varB;
varB = varC;
varC = aux;

[varA, varB, varC] = [varB, varC, varA]; // outra solução

console.log(varA, varB, varC);