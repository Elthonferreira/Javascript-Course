// String literal = '' "" ``
// Array literal = []
// Número literal = 1, 22, 432...
// Função literal = function 
// Objeto literal = {}
// todos possuem construtores (new)

// Objeto é formado por chave e valor
const pessoa = {
    nome: 'Elthon',
    sobrenome: 'Ferreira'
};

// Acessar atributos de um objeto através de notação de ponto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);
// outra forma de acessar os atributos (notação de colchetes)
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

const chave = 'nome';
console.log(pessoa[chave]);

// ---------------------- / ------------------- // 
console.log('// ---------------------- / ------------------- //');

// construtor de array => new Array();
// para objeto também é da mesma forma

const pessoa1 = new Object();
pessoa1.nome = 'Elthon';
pessoa1.sobrenome = 'Ferreira';
pessoa1.idade = 30;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave]); // chave e valor do objeto
}

console.log(pessoa1.getDataNascimento());

// ---------------------- / ------------------- // 
console.log('// ---------------------- / ------------------- //');

// Moldes
// Factory function / Constructor functions
// Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Elthon', 'Ferreira');
console.log(p1.nomeCompleto());

// Constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Não permite que nenhum objeto altere os atributos de Pessoa
    // também não permite criar métodos, deletar atributos, nada funciona, o objeto está travado
}

// {} <- this
const p2 = new Pessoa('Elthon', 'Ferreira');
// p2 = 'Outra coisa'; // isso não é permitido (não pode alterar valor de constante)
// se não quiser permitir alterar o valor do objeto, é necessário "congelar" o objeto
Object.freeze(p2); // não permite p2 alterar os atributos
p2.nome = 'Outro nome'; // isso é permitido, pois não está alterando a referência de memória, apenas o valor em si
const p3 = new Pessoa('Grace', 'Kaller');
console.log(p2);
console.log(p3);


