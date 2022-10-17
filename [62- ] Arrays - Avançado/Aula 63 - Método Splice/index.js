// Índices positivos e negativos
//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop (remove do fim)
nomes.splice(-1, 1); 
console.log(nomes);

// shift (remove no início)
nomes.splice(0, 1);
console.log(nomes);

// unshift 
nomes.splice(0, 0, 'Grace', 'Elthon');
console.log(nomes);

// push (adiciona no fim)
nomes.splice(nomes.length, 0, 'Elthon');
console.log(nomes);

// função muito poderosa, principalmente quando queremos mexer nos índices do meio do array
