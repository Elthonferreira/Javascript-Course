const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue e break funcionam em qualquer laço de repetição
// continue pula para próxima iteração e continua executando
// break sai do laço

for (let numero of numeros) {

    if (numero === 2) { 
        console.log('Pulei o número 2');
        continue; // volta para o começo, e segue para próxima iteração
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Cheguei no número 7. Saindo...');
        break;
    }
    
}