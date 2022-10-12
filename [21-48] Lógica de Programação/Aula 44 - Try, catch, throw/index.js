
try {
    console.log(a);
} catch(e) {
    console.log('Erro!');
}

function soma (x, y) {
    if (typeof x !== 'number' || 
        typeof y !== 'number') {
        throw new Error('X e Y precisam ser números!');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    //console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.')
}
