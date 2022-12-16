// Protudo -> aumento, desconto
// Camiseta, caneca, lapis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // criando objeto vazio, e setando o prototype como produto
Camiseta.prototype.constructor = Camiseta; // Seta construtor como Camiseta

// Esse método sobrescreve o método de produto, se não encontrasse aqui, ia utilizar o método aumento de produto
Camiseta.prototype.aumento = function (percentual) { 
    this.preco = this.preco + (this.preco * (percentual / 100)); 
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Copo', 111);                   // instancia novo produto
const camiseta = new Camiseta('Regata', 7.5, 'Preta');      // instancia nova camiseta
const caneca = new Caneca('Canecão', 13, 'Plástico', 5);    // instancia nova caneca
camiseta.aumento(10);
console.log(camiseta);
console.log(produto);

caneca.estoque = 423; // seta estoque diferente para caneca
console.log(caneca.estoque);


