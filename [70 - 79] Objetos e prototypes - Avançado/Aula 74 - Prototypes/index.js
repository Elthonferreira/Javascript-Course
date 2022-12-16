/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função constrtutora que foi usada para criá-lo.
Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar 
encontrar este membro no próprio objeto e depois a cadeira de protótipos é usada
até o topo (null) até encontrar (ou não) tal membro.
*/

// Prototype é usado para melhorar a performance do código, uma vez que ele não cria os métodos 
// várias vezes para cada objeto criado, eles vão utilizar a referência do 'pai' que é o prototype

// Construtora -> molde (classe)

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome; // esse método é executado, em vez do prototype
}

// pessoa1 (objeto) -> Pessoa.prototype -> Object.prototype
// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.estouAqui = "Estou aqui.";
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};



// instância
const pessoa1 = new Pessoa('Elthon', 'F.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Grace', 'K.');  // <- Pessoa = Função construtora

const data = new Date(); // <- Date = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);