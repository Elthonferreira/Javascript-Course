
const tresHoras = 60 * 60 * 3 * 1000; // 3 horas em milisegundos  
const umDia = 60 * 60 * 24 * 1000;
const dataZero = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
const data = new Date();

console.log(data.toString());
console.log(dataZero.toString());

const dataAgora = new Date(); // Quando da new Date(); pega a data e hora atuais 
const elthonAniversario = new Date(2022, 04, 14, 12, 0, 0); // ano, mes, dia, hor, min, seg, ms (se omitir, o compilador zera)
 
console.log(elthonAniversario.toString());

const dataTeste = new Date ('2020-04-20 20:20:57');
console.log('Dia', dataTeste.getDate());
console.log('Mês', dataTeste.getMonth() + 1); // Mês começa do zero
console.log('Ano', dataTeste.getFullYear());
console.log('Hora', dataTeste.getHours());
console.log('Min', dataTeste.getMinutes());
console.log('Seg', dataTeste.getSeconds());
console.log('ms', dataTeste.getMilliseconds());
console.log('Dia da semana', dataTeste.getDay()); // 0 - domingo, 6 - sábado
console.log(dataTeste.toString());

console.log(Date.now()); // 1663727009685 (milésimos de segundos de 01/01/1970 até hoje)

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`; // if num >= 10, return num, else return 0${num}
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataFormatoBrasil = new Date();
console.log(formataData(dataFormatoBrasil));
formataData(dataFormatoBrasil);