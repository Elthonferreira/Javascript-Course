let umaString = 'Um \"texto\"'; // \" = " 
console.log(umaString);

// string é indexavel 
// índice    012345678
let teste = 'Elthon F.';
console.log(teste[3]);
console.log(teste.charAt(7));

// formas de concatenação 
console.log(umaString.concat(' em um', ' lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);

// 
console.log(umaString.indexOf('texto')); // procura o índice de onde começa a palavra 'texto' 
console.log(umaString.indexOf('Um', 3)); // procura o índice de onde começa a palavra 'Um' a partir do índice 3
console.log(umaString.lastIndexOf('Um', 3)); // procura o índice onde começa a palavra 'Um' a partir do índice 3 de trás para frente

console.log(umaString.match(/[a-z]/g)); // retorna um array contendo todas letras minúsculas da string de acordo com a expressão regular citada
console.log(umaString.search(/x/));     // retorna o índice da letra 'x' (similar ao indexOf, mas aceita expressões regulares)

let outraString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace('Um', 'Outra')); // retorna a string com o texto alterado (também aceita ER)
console.log(outraString.replace(/r/g, 'p'));   // expressão regular para encontrar o 'r' e o '/g' para repitir todas ocorrências

console.log(umaString.length);   // retorna tamanho da string
console.log(outraString.length); // retorna tamanho da string

console.log(outraString.slice(2));      // fatia a string no índice indicado
console.log(outraString.substring(outraString.length -5, outraString.length - 1)); // fatia a string nos índices indicados
console.log(outraString.slice(-5, -1)); // mesma função da linha acima, mas mais enxuta 
console.log(outraString.slice(-5));     // fatia a string no índice indicado (pega do final)
console.log(outraString.slice(2, 6));   // fatia a string nos índices indicados

console.log(outraString.split(' '));    // retorna um array da string separada por espaços
console.log(outraString.split(' ', 2)); // retorna um array da string separada por espaços apenas nas 2 primeiras ocorrências

console.log(outraString.toUpperCase()); // retorna a string toda maiúscula
console.log(outraString.toLowerCase()); // retorna a string toda minúscula