// Capturar o evento de submit do formulário

const form = document.querySelector('#formulario'); // classe = .form | id = #form

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Previne evento (evita o formulário ser enviado)

    const inputPeso = form.querySelector('.peso'); // Pega elemento do input peso
    const inputAltura = form.querySelector('.altura'); // Pega elemento do input altura

    const peso = Number(inputPeso.value); // Cria constante peso e converte para number
    const altura = Number(inputAltura.value); // Cria constante altura e converte para number

    if (!peso) { // NaN, null, ' ' avaliam como falsy, então se peso for !false, informa o erro
        setResultado('Peso inválido', false); // Seta mensagem e informa que não é valido
        return; // Sai da função
    }

    if (!altura) { // NaN, null, ' ' avaliam como falsy, então se peso for !false, informa o erro
        setResultado('Altura inválida', false); // Seta mensagem e informa que não é valido
        return; // Sai da função 
    }

    const imc = getImc(peso, altura); // Calcula imc
    const nivelImc = getNivelImc(imc); // Pega o nível do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Seta a mensagem
    setResultado(msg, true); // Seta a mensagem e informa que é válida

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Array com os níveis de IMC

    if (imc < 18.5)                 return nivel[0];
    if (imc >= 18.5 && imc <= 24.9) return nivel[1];
    if (imc >= 25 && imc <= 29.9)   return nivel[2];
    if (imc >= 30 && imc <= 34.9)   return nivel[3];
    if (imc >= 35 && imc <= 39.9)   return nivel[4];
    if (imc > 39.9)                 return nivel[5];
    
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2; // Cálculo de IMC
    return imc.toFixed(1); // Retorna IMC com 1 casa décimal
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado'); // Pega elemento resultado (div)
    resultado.innerHTML = ''; // Limpa a tela de resultado

    const p = document.createElement('p'); // Cria elemento p (paragrafo); 
    if (isValid) { // Verifica se o IMC é válido
        p.classList.add('paragrafo-resultado-success'); // Se for válido, vai para a classe com fundo verde
    } else {
        p.classList.add('paragrafo-resultado-error'); // Se não, vai para a classe com fundo vermelho
    } 
    
    p.innerHTML = msg; // Coloca a mensagem recebida da função no paragrafo
    resultado.appendChild(p); // Coloca o paragrafo na div resultado
}
