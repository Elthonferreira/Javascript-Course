// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log("Usuário normal");
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log('Nível do usuário: ' + nivelUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; // if corUsuario === null, corPadrao = 'Preta'

console.log(nivelUsuario, corPadrao);
