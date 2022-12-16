class Pessoa { // Objeto com Classe
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
};

function Pessoa2(nome, sobrenome) { // Objeto com constructor function
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Elthon', 'Ferreira');
const p2 = new Pessoa('Grace', 'Kaller');
const p3 = new Pessoa('Eder', 'Lucena');
const p4 = new Pessoa('Fábio', 'Alves');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

