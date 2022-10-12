const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Elthon';
var nome2 = 'Elthon';
var nome2 = 'Ferreira'; // redeclarada

if (verdadeira) {
    let nome = 'Ferreira'; // 'nome' pode ser redeclarada porque está dentro de um bloco 
    var nome2 = 'Grace'; // redeclarada
    console.log(nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}

console.log(nome, nome2);


function funcaoLet () {
    let teste = 'teste var';
}

console.log(teste);
falaOi(); 
