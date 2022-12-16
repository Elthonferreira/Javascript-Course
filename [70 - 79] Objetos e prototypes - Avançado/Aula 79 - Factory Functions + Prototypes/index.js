const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};


function criaPessoa(nome, sobrenome) {

    const pessoaPrototype = Object.assign({}, falar, comer, beber); // composição ou mixing 

    return Object.create(pessoaPrototype, { // retornando um novo objeto (pessoa) que tem o prototype, e que já
        nome: {value: nome},            // cria as chaves, que pode dizer se vai ser configuravel, editavel, etc
        sobrenome: {value: sobrenome}
    });

    // return {
    //     nome, 
    //     sobrenome,
    //     falar() {
    //         console.log(`${this.nome} está falando.`);
    //     }, 
    //     comer() {
    //         console.log(`${this.nome} está comendo.`);
    //     }, 
    //     beber() {
    //         console.log(`${this.nome} está bebendo.`);
    //     }
    // };
}

const p1 = criaPessoa('Elthon', 'Ferreira');
const p2 = criaPessoa('Grace', 'Kaller');
console.log(p1);