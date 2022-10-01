
// const container = document.querySelector('.container');
const tarefas = document.querySelector('.tarefas');
const inputTarefa = document.querySelector('.input-nova-tarefa');
const botaoAddTarefa = document.querySelector('.btn-add-tarefa');

inputTarefa.addEventListener('keypress', function (e) { // quando uma tecla é pressionada dentro do inputTarefa
    if (e.keyCode === 13) { //13 = keyCode do botão 'Enter'
        if (inputTarefa.value === '') return; // verifica input vazio
        criaTarefa(inputTarefa.value);
    }
});

botaoAddTarefa.addEventListener('click', function () { // captura o evento click no botao botaoAddTarefa
    if (inputTarefa.value === '') return; // se tarefa for vazia sai da função, poderia ser feito como na linha abaixo também, mas prefiro essa por deixar o código mais legível
    //if (!inputTarefa.value) return; // se inputTarefa avaliar como falsy, sai da função
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) { // captura o evento click em todo documento
    const el = e.target; // aponta para el o evento clicado

    if (el.classList.contains('apagar')) { // se o elemento clicado possuir a classe 'apagar'
        el.parentElement.remove(); // remove o 'pai' do elemento (remove a li junto com o botaoApagar)
        atualizaTarefas(); 
    }
});

function criaTarefa(textoInput) {
    const li = document.createElement('li'); // cria um li ('ul'->'li' no html)
    li.innerHTML = textoInput; // coloca o textoInput dentro do li
    tarefas.appendChild(li); // adiciona li dentro das tarefas (ul)
    clearInput(); // limpa input 
    criaBotaoApagar(li); // cria botão apagar
    atualizaTarefas(); 
}

function clearInput() {
    inputTarefa.value = ''; // limpa input
    inputTarefa.focus(); // mantém o foco no inputTarefa (deixa pronto para digitar novamente)
}

function criaBotaoApagar(li) {
    li.innerHTML += '  '; // cria um espaço entre o texto e o botão
    const botaoApagar = document.createElement('button'); // cria botão apagar
    botaoApagar.innerHTML = 'Apagar'; // adiciona o nome no botão
    // botaoApagar.classList.add('apagar'); // seta class do botão como 'apagar'
    botaoApagar.setAttribute('class', 'apagar'); // seta class do botão como 'apagar'
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar); // adiciona o botão dentro do li
}

function atualizaTarefas() {
    const liTarefas = tarefas.querySelectorAll('li'); // pega todas as tarefas e coloca numa variável
    const listaTarefas = []; // declaração de array vazio para salvar as tarefas posteriormente

    for (let tarefa of liTarefas) { // itera sobre toda tarefas (liTarefas) com a variável 'tarefa'
        let tarefaTexto = tarefa.innerText; // cria uma variável 'tarefaTexto' que recebe o texto de 'tarefa'
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // substitui o texto 'Apagar' por '' (texto vazio) e trim() remove os espaços
        listaTarefas.push(tarefaTexto); // adiciona cada 'tarefaTexto' na 'listaTarefas'
    }

    // JSON é um formato de texto para salvar dados entre sistemas
    const tarefasJSON = JSON.stringify(listaTarefas); // cria uma string do array 'listaTarefas' e converte para JSON
    // 'tarefas' é o nome do arquivo, o segundo parâmetro só aceita string, por isso foi salvo o JSON como string
    localStorage.setItem('tarefas', tarefasJSON); // localStorage é uma 'mini base de dados' do navegador
}

function resgataTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); // pega as tarefas da base de dados do navegador
    const listaTarefas = JSON.parse(tarefas); // converte a string de volta para array

    for (let tarefa of listaTarefas) { // itera 'tarefa' 
        criaTarefa(tarefa); 
    }
}

resgataTarefasSalvas();

// Para verificar os itens salvos: Navegador -> inspecionar -> application -> localStorage

