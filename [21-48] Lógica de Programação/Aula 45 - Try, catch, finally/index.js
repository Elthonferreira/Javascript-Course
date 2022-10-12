
try {
    // Essa parte do código é executada quando não há erros
    // console.log(a);
    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch (e) {
        console.log('Deu erro');
    } finally {
        console.log('Também sou finally.');
    }

} catch (e) {
    // Essa parte do código é executada quando há erros
    console.log('Tratando o erro.');
} finally {
    // Sempre será executado
    console.log('FINALLY: Eu sempre sou executado.');
}

function retornaHora (data) {
    console.log(data);
    // trecho "data && ..." é necessário pois data avalia como true e impede de entrar no if no caso de não receber nada em data
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) { // [data avalia como falsy] Se não receber nada, cria nova data
        data = new Date();
    }

    return data.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        date: false,
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.');
}
