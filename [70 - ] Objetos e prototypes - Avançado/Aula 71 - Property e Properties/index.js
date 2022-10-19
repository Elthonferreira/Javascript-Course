// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    // this.nome = nome;   // atributo público
    // this.preco = preco; // atributo público

    Object.defineProperty(this, 'estoque', { // define propriedade para manipular o atributo 'estoque'
        enumerable: true,   // permite o atributo ser visualizado 
        value: estoque,     // valor do atributo é recebido pelo parâmetro // value pode ser qualquer coisa (function... etc)
        writable: false,    // não permite alterar o atributo
        configurable: true  // permite reconfigurar (criar outro Object.defineProperty...)
    });

    Object.defineProperty(this, 'estoque', { // define propriedade para manipular o atributo 'estoque'
        enumerable: true,    // permite o atributo ser visualizado 
        value: estoque,      // valor do atributo é recebido pelo parâmetro // value pode ser qualquer coisa (function... etc)
        writable: true,      // permite alterar o atributo
        configurable: false  // não permite reconfigurar nem apagar o atributo
    });

    Object.defineProperties(this, { // define mais de uma propriedade ao mesmo tempo
        nome: {
            enumerable: true,   // permite o atributo ser visualizado 
            value: nome,        // valor do atributo é recebido pelo parâmetro // value pode ser qualquer coisa (function... etc)
            writable: true,     // não permite alterar o atributo
            configurable: true  // permite reconfigurar (criar outro Object.defineProperty...)
        },
        preco: {
            enumerable: true,   // permite o atributo ser visualizado 
            value: preco,       // valor do atributo é recebido pelo parâmetro // value pode ser qualquer coisa (function... etc)
            writable: true,     // não permite alterar o atributo
            configurable: true  // permite reconfigurar (criar outro Object.defineProperty...)
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50;
console.log(p1);

console.log(Object.keys(p1)); // se enumerable for false, não é possível visualizar a chave

for (let chave in p1) { // aqui também se aplica a regra do enumerable
    console.log(chave);
}