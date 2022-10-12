function rand(min = 1000, max = 3000) {
    const numero = Math.random() * (max - min) + min;
    return Math.floor(numero);
}

// Na web, pode ter uma requisição numa API, uma consulta no banco e pode demorar um tempo diferente para
// cada função e o javascript não consegue prever esse tempo, então algumas funções podem ser executadas 
// em ordens errada, para corrigir isso, utilizamos um parâmetro de callback
// OBS: os setTimeout estão simulando essas ações com tempos diferentes

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// f1 é executado primeiro, mas é necessário que f2 seja executado logo em seguida, e f3, após f2, e por fim
// o console.log('Olá mundo!') , então fazemos desta forma e como existe um parâmetro callback em cada função,
// e um if para verificar, a ordem de execução das funções fica segura desta forma.

// f1(function () {
//     f2(function () {
//         f3(function () {
//             console.log('Olá mundo!');
//         });
//     });
// });

// Para evitar esse código de 'boneca russa', é possível fazer desta forma

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}