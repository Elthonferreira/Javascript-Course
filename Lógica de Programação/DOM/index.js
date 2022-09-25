// DOM = Document object model

// window = pai de todos elementos 

// document = child of window

// html = child of document

// body = child of html


// tags alinhadas são filhos

const div = document.createElement('div'); // criou o elemento div, mas nesse momento não é filho, nem pai de ninguém
let tagCriada = document.createElement( 'p'); // mesma coisa, apenas criada, não é pai nem filho.
let textoCriado = document.createTextNode('texto'); 

tagCriada.appendChild(textoCriado); // tagCriada agora é pai de textoCriado, e consequentemente, textoCriado é filho de tagCriada

// Sempre que falar DOM, são os objetos que permitem manipular os elementos da página html
// Árvore DOM são os elementos alinhados (relação de pai e filho)