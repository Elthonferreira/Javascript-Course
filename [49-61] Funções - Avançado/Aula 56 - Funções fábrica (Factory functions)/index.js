// Factory function (Função fábrica)
// Vantagem: 
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        // Getter (possibilitou chamar a função sem utilizar os parenteses (como se fosse uma variável))
        get nomeCompleto() {
            return this.nome + ' ' + this.sobrenome;
        },
        // Setter 
        set nomeCompleto(valor) {
           valor = valor.split(' '); // separa por espaços e transforma em array
           this.nome = valor.shift(); // retira o primeiro item do array (nome)
           this.sobrenome = valor.join(' '); // junta o restante do array (sobrenome) separando por espaço
        },
        fala (assunto = 'está falando sobre NADA') { // this está referenciado ao objeto que está chamando a função
            return `${this.nome} está falando ${assunto}.`;
        },
        altura, 
        peso,
        // Getter (possibilitou chamar a função sem utilizar os parenteses (como se fosse uma variável))
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Elthon', 'Ferreira', 1.73, 73);
console.log(`IMC de ${p1.nome}: ${p1.imc}`);
const p2 = criaPessoa('Grace', 'Kaller', 1.62, 71);
console.log(`IMC de ${p2.nome}: ${p2.imc}`);
console.log(p1.fala('falando sobre JS'));

console.log(p1.nomeCompleto); // print get nomeCompleto
p1.nomeCompleto = 'Elthon jonhson'; // set nomeCompleto
console.log(p1.nomeCompleto); // print get nomeCompleto