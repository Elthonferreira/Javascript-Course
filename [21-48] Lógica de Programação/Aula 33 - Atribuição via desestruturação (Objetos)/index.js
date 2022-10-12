const pessoa = {
    nome: 'Elthon',
    sobrenome: 'Ferreira',
    idade: 26,
    endereço: {
        rua: 'Rua das Palmeiras',
        numero: 18
    }
};


const nome1 = pessoa.nome;
console.log(nome1);

const { nome: n, sobrenome, idade } = pessoa; // atribuição via desestruturação
console.log(n, sobrenome, idade);

const { endereço: { rua, numero }, endereço} = pessoa; 
console.log(rua, numero, endereço);

const { nome: nome3 = 'Grace', idade: idade2 = 27 } = pessoa; // se não existisse o atributo, seria atribuido o valor padrão declarado
console.log(nome3, idade2);

const { nome, ...resto} = pessoa; // atribuição com nome e todo o resto na variável 'resto'
console.log(resto); // tudo do objeto exceto nome