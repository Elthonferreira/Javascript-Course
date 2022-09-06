const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
// array = 'Outra'; // não pode reatribuir 
console.log(array);


// [] = array
// {} = objeto

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    nome: 'Elthon',
    sobrenome: 'Ferreira',
    idade: 26,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa2.idade);

function criaPessoa(nome, sobrenome, idade) {
    return {
        // nome: nome,
        // sobrenome: sobrenome,
        // idade: idade
        nome,
        sobrenome,
        idade
    };
}

const pessoa01 = criaPessoa('Elthon', 'Ferreira', 26);
const pessoa02 = criaPessoa('Eder', 'Lucena', 38);
const pessoa03 = criaPessoa('Fabio', 'Alves', 24);
const pessoa04 = criaPessoa('Angelo', 'Hugo', 25);
const pessoa05 = criaPessoa('Grace', 'Kaller', 27);

console.log(pessoa01.nome, pessoa01.sobrenome, pessoa01.idade);
console.log(pessoa05.nome, pessoa05.sobrenome, pessoa05.idade);

pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.incrementaIdade();
pessoa2.fala();