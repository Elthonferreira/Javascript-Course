function mostraHora() {
    let data = new Date();

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        date: false,
        hour12: false
    });
}

// function funcaoDoInterval() {
//     console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000); // Passando a referência do que quer que seja executado, de 1 em 1 segundo (1000 milisegundos)

const timer = setInterval(function () { // seta um intervalo para executar determinado código
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // seta um tempo para executar determinado código
    clearInterval(timer);
}, 5000);

setTimeout(() => { // seta um tempo para executar determinado código
    console.log('Olá, meu fera!');
}, 6000);

//console.log(mostraHora());