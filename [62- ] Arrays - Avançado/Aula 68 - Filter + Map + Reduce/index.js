// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares = numeros.filter((valor) => {
    return valor % 2 === 0;
}).map((valor) => {
    return valor * 2;
}).reduce((acumulador, valor) => {
    return acumulador += valor;
}, 0);
console.log(numerosPares);