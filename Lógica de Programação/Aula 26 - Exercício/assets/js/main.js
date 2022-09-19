// Capturar o evento de submit do formulário

function meuEscopo() {
    const form = document.querySelector('.formulario'); // classe = .form | id = #form
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        let imc; // peso / (altura²)
        imc = peso.value / (altura.value * altura.value);

        imc = Number(imc.toFixed(1));

        console.log(peso.value);
        console.log(altura.value);
        console.log("IMC: " + imc);

        console.log(typeof altura);
        console.log(typeof peso);

        // if (typeof peso === 'number') {
            // resultado.innerHTML = `<p>Peso Inválido!</p>`
        // } else if (typeof altura === 'number') {
            // resultado.innerHTML = `<p>Altura Inválida!</p>`
        // } else {
            if (imc < 18.5) {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Abaixo do peso)</p>`
            } else if (imc >= 18.5 && imc <= 24.9) {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Peso normal)</p>`
            } else if (imc >= 25 && imc <= 29.9) {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Sobrepeso)</p>`
            } else if (imc >= 30 && imc <= 34.9) {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Obesidade grau 1)</p>`
            } else if (imc >= 35 && imc <= 39.9) {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Obesidade grau 2)</p>`
            } else {
                resultado.innerHTML = `<p class="success">Seu IMC é ${imc} (Obesidade grau 3)</p>`
            }
        // }
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();