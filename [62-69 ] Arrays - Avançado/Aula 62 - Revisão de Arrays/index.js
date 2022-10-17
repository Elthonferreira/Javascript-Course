// valor por referência
const nomes = ['Elthon', 'Grace', 'Eder'];
// Funciona para string, objetos, funções, números, etc. 
//const nomes = new Array('Elthon', 'Grace', 'Eder'); // da para usar o construtor para declarar um tipo de dado acima
nomes[2] = 'João'; // alterando array
//delete nomes[2]; // deletatando item sem remover o índice

const novo = nomes; // tudo que fizer em 'novo' reflete em 'nomes', pois valor é passado por referência
novo.pop(); // remove último item do array e retorna o elemento removido 
console.log(novo);
console.log(nomes);

// para passar o valor por cópia
const nomes2 = ['Elthon', 'Grace', 'Eder'];
const novo2 = [...nomes2]; 
console.log(nomes2);
console.log(novo2);

const removeUltimo = nomes2.pop();
const removePrimeiro = nomes2.shift();
console.log(removeUltimo);
console.log(removePrimeiro);
console.log(nomes2);

nomes2.push('Elthon'); // Adiciona no final do array
nomes2.push('Eder'); // Adiciona no final do array
nomes2.unshift('Fabio'); // Adiciona no início do array (pode ter problema de performace, pois desloca todos índices do array)
console.log(nomes2);

let arraySlice = nomes2.slice(1, 3); // fatia o array do índice 1 até o índice 3 (não inclui o 3)
console.log('arraySlice: ' + arraySlice);
arraySlice = nomes2.slice(0, -1); // fatia o array do índice 0 até o -1 (ou seja, remove o último)
console.log('arraySlice: ' + arraySlice);
arraySlice = nomes2.slice(1, -1); // fatia o array do índice 1 até o -1 (ou seja, remove o primeiro e último)
console.log('arraySlice: ' + arraySlice);



// conversão de string em array 
const nome = 'Elthon Ferreira Alves';
const nomesSplit = nome.split(' '); // separa o nome por espaços
console.log(nome, nomesSplit);

// conversão de array para string
const nomeArray = ['Elthon', 'Ferreira', 'Alves'];
const nome2 = nomeArray.join(' ');
console.log(nomeArray, nome2);





