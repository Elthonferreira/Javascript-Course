
const paragrafos = document.querySelector('.paragrafos'); // seleciona o elemento com a classe 'paragrafos'
const ps = paragrafos.querySelectorAll('p'); // seta todos os elementos 'p' de 'paragrafos', ps é como se fosse um array

const estilosBody = getComputedStyle(document.body); // pega todos os estilos que foram computados no body
const backgroundColorBody = estilosBody.backgroundColor; // pega o  backgroundColor do estilosBody

console.log(backgroundColorBody);

for (let p of ps) { // o recebe todos os elementos de ps (não é um array, mas tem basicamente as mesmas funções de um)
    p.style.backgroundColor = backgroundColorBody; // seta a cor de fundo de cada 'p' igual a cor do fundo do body
    p.style.color = 'white'; // seta a cor do texto de cada p como branco 
    console.log(p);
}

ps[0].style.backgroundColor = 'black'; // seta o primeiro 'p' para fundo preto