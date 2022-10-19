// defineProperty - Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;   // atributo público
    this.preco = preco; // atributo público

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', { // define propriedade para manipular o atributo 'estoque'
        enumerable: true,   // permite o atributo ser visualizado 
        configurable: true, // permite reconfigurar (criar outro Object.defineProperty...)
        get: function () {
            return estoquePrivado;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Value is not a number');
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', ''); // replace só para mostrar que é possível interceptar a chave através do get
            nome = valor;
        }
    }
};


const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 12;
console.log(p1);
console.log(p1.estoque);

// ---------------------- / ------------------- // 
console.log('// ---------------------- / ------------------- //');

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'; 
console.log(p2);
console.log(p2.nome);