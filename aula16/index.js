//            0123456789..... array é indexável
const nome = 'Elthon Ferreira';
console.log(nome[0]); // E

const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Eduardo';
// alunos[3] = 'Luiza';
console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

alunos[alunos.length] = 'Elthon'; // adiciona ao fim do array
// alunos[alunos.length] = 'Eder';
// alunos[alunos.length] = 'Fabio';

console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

alunos.push('Eder'); // adiciona ao fim do array de forma mais simples
console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

alunos.unshift('Fabio'); // adiciona ao início do array 
console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

const removido = alunos.pop(); // remove o último item
console.log("removido: " + removido);
console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

const removido2 = alunos.shift(); // remove o primeiro item
console.log("removido2: " + removido);
console.log(alunos);
console.log("Tamanho array: " + alunos.length); 

// delete alunos[1]; // deleta o item, mas não move os índices
// console.log(alunos);

console.log("array fatiado: " + alunos.slice(0, 3)); // fatia um pedaço do array

console.log("tipo const alunos: " + typeof alunos); 