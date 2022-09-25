const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 1'},
    {tag: 'footer', texto: 'Frase 1'},
    {tag: 'section', texto: 'Frase 1'},
];

const container = document.querySelector('.container'); // seleciona o container do html
const div = document.createElement('div'); // cria o elemento 'div'

for (let i = 0; i < elementos.length; i++) { // percorre o array
    let { tag, texto } = elementos[i]; // cria variaveis tag e texto via desestruturação
    let tagCriada = document.createElement(tag); // cria um elemento (tag)
    // tagCriada.innerHTML = texto; // junta a tag criada com o texto
    tagCriada.innerText = texto; // mesma forma de fazer a linha acima (mais seguro porque é de fato um texto)
    div.appendChild(tagCriada); // adiciona o elemento (tag criada) na div
}

// outra forma de fazer o código
for (let i = 0; i < elementos.length; i++) { // percorre o array
    let { tag, texto } = elementos[i]; // cria variaveis tag e texto via desestruturação
    let tagCriada = document.createElement(tag); // cria um elemento (tag)
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada); // adiciona o elemento (tag criada) na div
}

container.appendChild(div); // adiciona o elemento (div) no container 