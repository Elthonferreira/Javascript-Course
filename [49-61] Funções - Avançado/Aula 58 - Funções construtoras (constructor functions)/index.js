// funções fábricas e funções contrutoras criam novos objetos.
// funções fábrica = função normal que retorna um objeto voluntariamente
// função construtora = cria objeto, retorna objeto
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos e métodos privados
    const ID = 123456; // variável privada
    
    const metodoInterno = function() { // função interna (não pode ser utilizada pelo objeto fora)
        //...
    };

    // Atributos e métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ', sou um método.');
    }
}

const p1 = new Pessoa ('Elthon', 'Ferreira');
const p2 = new Pessoa ('Grace', 'Kaller');

console.log(p1);
p1.metodo();