// Escreva uma função chama isPaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number). Returna true se a imagem estiver no modo paisagem.

function isPaisagem (largura, altura) {
    if (largura > altura) return true;
    return false;
}

// conversão para arrow function
// const isPaisagem = (largura, altura) => largura > altura ? true : false;

console.log(isPaisagem(1920, 1080));