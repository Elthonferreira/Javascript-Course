// For in -> lê os índices ou chaves do objeto

const frutas = ['Pêra', 'Maçã', 'Uva'];

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Elthon',
    sobrenome: 'Ferreira',
    idade: 26
};

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}