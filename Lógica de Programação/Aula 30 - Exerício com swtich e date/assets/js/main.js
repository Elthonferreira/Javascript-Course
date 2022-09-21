
const data = new Date();
const dataFormatada = formataData2(data);

const h1 = document.querySelector('.container h1 ');
//h1.innerHTML += dataFormatada.toString();
// Apenas uma linha fez o trabalho todo igual o da linha acima que necessita de todas as funções
h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'}); 

function zeroAEsquerda(num) {
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

function formataData2(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = getMesTexto(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const day = getDiaSemanaTexto(data.getDay());

    return `${day}, ${dia} de ${mes} de ${ano} ${hora}:${min}`;
}

function getMesTexto(mes) {
    let mesTexto;
    switch (mes) {
        case 0: mesTexto = 'Janeiro';
            return mesTexto;
        case 1: mesTexto = 'Fevereiro';
            return mesTexto;
        case 2: mesTexto = 'Março';
            return mesTexto;
        case 3: mesTexto = 'Abril';
            return mesTexto;
        case 4: mesTexto = 'Maio';
            return mesTexto;
        case 5: mesTexto = 'Junho';
            return mesTexto;
        case 6: mesTexto = 'Julho';
            return mesTexto;
        case 7: mesTexto = 'Agosto';
            return mesTexto;
        case 8: mesTexto = 'Setembro';
            return mesTexto;
        case 9: mesTexto = 'Outubro';
            return mesTexto;
        case 10: mesTexto = 'Novembro';
            return mesTexto;
        case 11: mesTexto = 'Dezembro';
            return mesTexto;
        default: mesTexto = '';
    }
}

function getMesTextoSimplificada(mes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                   'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return meses[mes];
}

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0: diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default: diaSemanaTexto = '';
    }
}

function getDiaSemanaTextoSimplificada(diaSemana) {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
                       'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return diasDaSemana[diaSemana];
}

