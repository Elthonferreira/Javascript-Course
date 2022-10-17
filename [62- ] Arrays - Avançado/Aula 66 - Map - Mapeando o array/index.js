// Map altera o array

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Minha solução
const numerosDobrados = [];

for (let num of numeros) {
    numerosDobrados.push(num*2);
}
console.log(numerosDobrados);


// Solução do professor com map
const numerosEmDobro = numeros.map((valor) => {
    return valor*2;
});
console.log(numerosEmDobro);



// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Minha solução
// const map1 = pessoas.map(valor => {
//     return valor.nome;
// });
// console.log(map1);

// const map2 = pessoas.map(obj => {
//     delete obj.nome;
//     return obj;
// });
// console.log(map2);

// const map3 = pessoas.map((obj, indice) => {
//     obj["id"] = indice+1;
//     return obj;
// });
// console.log(map3);



// Solução do professor
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

const idades = pessoas.map(obj => {
    return { idade: obj.idade };
});
console.log(idades);

const comIds = pessoas.map((obj, indice) => {
    // para não afetar o objeto  original, podemos fazer o seguinte:
    const newObj = { ... obj};
    newObj.id = indice;
    return newObj;
})
console.log(comIds);


console.log(pessoas);
