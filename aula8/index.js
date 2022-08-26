/*
Elthon Ferreira tem 26 anos, pesa 74 kg, 
tem 1.71 de altura e seu IMC é de 25.3069320474676 
Elthon Ferreira nasceu em 1996
*/

const nome = 'Elthon';
const sobrenome = 'Ferreira';
const idade = 26;
const peso = 74;
const altura = 1.71;
let imc; // peso / (altura²)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu imc é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento + '.'); // Vírgula coloca um espaço por padrão, o + apenas concatena

// templete strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu imc é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);