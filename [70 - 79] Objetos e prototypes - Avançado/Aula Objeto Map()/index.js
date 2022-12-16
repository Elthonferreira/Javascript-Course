
const pessoas = [
    {id: 3, nome: 'Elthon'},
    {id: 2, nome: 'Grace'},
    {id: 1, nome: 'Eder'},
];

const novasPessoas = new Map();

for (const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, { ...pessoa });
}
console.log(novasPessoas);