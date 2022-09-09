
function meuEscopo() {
    const form = document.querySelector('.form'); // classe = .form | id = #form
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.');

    // };

    function criaPessoa(nome, sobrenome, peso, altura) {
        return {
            nome,
            sobrenome,
            peso,
            altura
        };
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Minha solução
        const novaPessoa = criaPessoa(nome.value, sobrenome.value, peso.value, altura.value);
        pessoas.push(novaPessoa);

        console.log(pessoas);
        // Solução do professor
        // pessoas.push({
        //     nome: nome.value,
        //     sobrenome: sobrenome.value,
        //     peso: peso.value,
        //     altura: altura.value
        // });
     
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();