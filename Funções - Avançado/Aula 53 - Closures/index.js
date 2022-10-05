
function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

// Closure é a habilidade da função em acessar seu escopo léxico
const funcao = retornaFuncao('Elthon'); // 'funcao' recebe a função anônima dentro de 'retornaFuncao'
console.log(funcao);
console.dir(funcao);

const funcao2 = retornaFuncao('Ferreira');

// Quando declara a função e o parâmetro não vai mais mudar, é chamado de closure
console.log(funcao(), funcao2());