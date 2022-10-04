// Escopo léxico (pode acessar variável de fora do escopo, vai pulando de pai em pai, até encontrar a variável)
// Se não encontrar a variável até o escopo global, da erro de variável não definida

const nome = 'Elthon';

function falaNome() {
    const nome = 'Ferreira';
    console.log(nome);
}
falaNome();

function usaFalanome() {
    falaNome();
}
usaFalanome();