function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        date: false,
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    relogio.classList.remove('pausado');
    relogio.classList.remove('zerado');
    relogio.classList.add('iniciado');
    iniciar.innerHTML = 'Iniciado';
    pausar.innerHTML = 'Pausar';
    zerar.innerHTML = 'Zerar';
    clearInterval(timer);
    timer = setInterval(function () { // seta um intervalo para executar determinado código
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);;
    }, 1000);
}

function pausaRelogio() {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('zerado');
    relogio.classList.add('pausado');
    iniciar.innerHTML = 'Reiniciar';
    pausar.innerHTML = 'Pausado';
    zerar.innerHTML = 'Zerar';
    clearInterval(timer);
}

function zeraRelogio() {
    relogio.classList.remove('iniciado');
    relogio.classList.remove('pausado');
    relogio.classList.add('zerado');
    iniciar.innerHTML = 'Iniciar';
    pausar.innerHTML = 'Pausar';
    zerar.innerHTML = 'Zerado';
    segundos = 0;
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
}

// iniciar.addEventListener('click', function (event) { // captura o evento click no botão iniciar
//     iniciaRelogio();
// });

// pausar.addEventListener('click', function (event) { // captura o evento click no botão pausar
//     pausaRelogio();
// });

// zerar.addEventListener('click', function (event) { // captura o evento click no botão zerar
//     zeraRelogio();
// });

// forma mais "simples" de fazer o código acima
document.addEventListener('click', function(event) { // captura o evento click em todo documento
    const element = event.target; // aponta para element o evento clicado

    if (element.classList.contains('iniciar')) iniciaRelogio(); // se element possui a classe 'iniciar', iniciaRelogio

    if (element.classList.contains('pausar')) pausaRelogio(); // se element possui a classe 'pausar', pausaRelogio

    if (element.classList.contains('zerar')) zeraRelogio(); // se element possui a classe 'zerar', zeraRelogio
});



