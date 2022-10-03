// Declaração de função (Function hoisting)
// Todas as declarações serão elevadas pelo motor do javascript para o topo do arquivo na hora da execução,
// ou seja, não faz diferença chamar a função antes ou depois de declara-lá.
falaOi();
function falaOi() {
    console.log('Oi!');
}
falaOi();

// First-class objects (Objetos de primeira classe)
// A função pode tratada como dado 
// Function expression, que é criar uma variável e jogar a função nela
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Função que recebe uma função como parâmetro
function executaFuncao(funcao) {
    console.log('Executando a função abaixo');
    funcao();
}
executaFuncao(souUmDado);


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');    
};
funcaoArrow();

// Função dentro de um objeto
const obj = {
    nome: 'Elthon',
    falar: function() {
        console.log('Estou falando.');
    },
    andar() { // Declara função sem precisar da palavra 'function'
        console.log('Estou andando.');
    }
};
console.log(obj.nome);
obj.falar();
obj.andar();