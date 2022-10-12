
const nome = 'Elthon';

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.round(r);
}

let rand = random(1, 50);
console.log(rand);

// while checa a condição, e enquanto ela for verdadeira, ele executa o código, quando não for, ele sai
while (rand !== 10) { 
    rand = random(1, 50);
    console.log(rand);
}

console.log('--------------')

// do while, checa a condição e executa
do { // sempre executa esse código para depois checar a condição, ou seja, pelo menos uma vez, será executado
    rand = random(1, 50); 
    console.log(rand);
} while (rand !== 10);