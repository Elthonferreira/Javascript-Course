const numero = 10;



if (numero <= 10) {
    console.log('O número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.');
} /*else if (1 === 1) { // como 1 === 1 avalia em verdadeiro, esse trecho é executado e sai do if
    console.log('LITERAL');
}*/
else if (numero >= 9 && numero <= 11) { 
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

if (1 === 1) { 
    console.log('LITERAL');
}

// O bloco if checa todas condições, quando encontra uma condição verdadeira, ele executa o bloco e sai do if 


console.log('restante do código...');