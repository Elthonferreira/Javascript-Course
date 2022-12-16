/* 
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos 
Object.keys (retorna as chaves)
Object.freeza (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = produto;
outraCoisa.nome = 'Elthon';
console.log(produto); //  { nome: 'Elthon', preco: 1.8 }, outraCoisa e produto apontam para o mesmo lguar na memória

// Para copiar o objeto, pode-se usar o spread operator
const produto1 = {nome: 'Caneca', preco: 1.8};
const outraCoisa1 = {
    ...produto,
    material: 'porcelana' // pode-se adicionar outra chave
};
outraCoisa1.nome = 'Elthon';
outraCoisa1.preco = 2.4;
console.log(produto1);
console.log(outraCoisa1);

// Outra forma de copiar o objeto, é o Object.assign(des, any)
const produto2 = {nome: 'Caneca', preco: 1.8};
const outraCoisa2 = Object.assign({}, produto2, {material: 'Plástico'});
outraCoisa2.nome = 'Elthon Ferreira';
outraCoisa2.preco = 23.4;
console.log(produto2);
console.log(outraCoisa2);

// ---------------------- / ------------------- // 
console.log('// ---------------------- / ------------------- //');
const produto3 = {nome: 'Caneca', preco: 1.2};
Object.defineProperty(produto3, 'nome', {
    writable: false, 
    configurable: false,
    value: 'Copo'
});
console.log(Object.getOwnPropertyDescriptor(produto3, 'nome'));
console.log(produto3.nome);

console.log(Object.keys(produto3)); // retorna as chaves do objeto
console.log(Object.values(produto3)); // retorna os valores do objeto
console.log(Object.entries(produto3)); // retorna as chaves e os valores 

console.log('// ---------------------- / ------------------- //');
for (let entry of Object.entries(produto3)) {
    console.log(entry);
}

console.log('// ---------------------- / ------------------- //');
for (let [chave, valor] of Object.entries(produto3)) { // desestrutura diretamente no for
    console.log(chave, valor);
}

console.log('// ---------------------- / ------------------- //');
for (let valor of Object.entries(produto3)) { // mesma coisa do for anterior, só que mais intuitivo
    console.log(valor[0], valor[1]); // retorna chave e valor
}