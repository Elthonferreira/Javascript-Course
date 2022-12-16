const _velocidade = Symbol('velocidade');

class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    get nome() {
        console.log('GETTER NOME');
        return this._nome;
    }

    set nome(valor) {
        console.log('SETTER NOME');
        this._nome = valor;
    }

    get velocidade() {
        console.log('GETTER VELOCIDADE');
        return this._velocidade;
    }

    set velocidade(valor) {
        console.log('SETTER VELOCIDADE');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this._velocidade = valor;
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this.velocidade++;
    }

    freiar() {
        if (this.velocidade <= 0) return;
        this.velocidade--;
    }
}

const c1 = new Carro('Carrera GT');
// for (let i = 0; i <= 200; i++) {
//     c1.acelerar();
// }

c1.velocidade = 44;
console.log(c1.velocidade);


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' '); // Separa o nomeCompleto de acordo com os espaços e retorna um array
        this.nome = valor.shift(); // Remove o primeiro elemento da lista e retorna o elemento removido
        this.sobrenome = valor.join(' '); // Junta o restante do array de acordo com espaços
    }
}

const p1 = new Pessoa ('Elthon', 'Ferreira');
p1.nomeCompleto = 'Elthon Ferreira Alves';
console.log(p1.nomeCompleto);