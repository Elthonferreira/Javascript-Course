// Toda função construtora tem Object.prototype
// new Object 
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // configura o prototype de objB em objA
Object.setPrototypeOf(objC, objB); // configura o prototype de objC em objA
console.log(objB.chaveA);

console.log('// ---------------------- / ------------------- //');

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// Objeto de produto (possui prototypes)
const p1 = new Produto('Camiseta', 50);
p1.desconto(10);
//p1.aumento(100);
console.log(p1);

// Objeto literal (não possui prototypes)
const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // Agora o p2 possui os prototypes

p2.aumento(10);
console.log(p2);

// Pode setar o prototype na hora de criar o objeto
const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    cor: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Preto'
    }, 
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    }
});
p3.aumento(10);
console.log(p3);

