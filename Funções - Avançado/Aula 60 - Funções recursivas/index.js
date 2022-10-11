// Uma função que chama ela mesma, é necessário ter cuidado em quando parar 

function recursiva(max) { 
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max++);
}

recursiva(0);