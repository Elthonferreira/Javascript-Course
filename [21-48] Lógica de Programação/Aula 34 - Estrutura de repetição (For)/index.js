// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

for (let i = 0; i <= 5; i++) { // 0 a 5
    console.log(`Linha ${i}`);
}

for (let i = -100; i <= 500; i+= 10) { // -100 a 500 de 10 em 10
    console.log(`Linha ${i}`);
}

for (let i = 500; i >= 400; i--) { // 500 a 400
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) { // 500 a 400
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}