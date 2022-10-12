// For in -> lê os índices ou chaves do objeto

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++){ // for normal
    console.log(frutas[i]);
}

for (let i in frutas) { // for in -> i recebe os índices, para exibir os valores, faz frutas[i]
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Elthon',
    sobrenome: 'Ferreira',
    idade: 26
};

for (let key in pessoa) { // key recebe os chaves do objeto, para acessar os valores, faz pessoa[key]
    console.log(key, pessoa[key]);
}