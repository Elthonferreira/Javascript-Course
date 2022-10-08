Date.prototype.addHoras = function(horas){
    this.setHours(this.getHours() + horas)
};
Date.prototype.addMinutos = function(minutos){
    this.setMinutes(this.getMinutes() + minutos)
};
Date.prototype.addSegundos = function(segundos){
    this.setSeconds(this.getSeconds() + segundos)
};
Date.prototype.addDias = function(dias){
    this.setDate(this.getDate() + dias)
};
Date.prototype.addMeses = function(meses){
    this.setMonth(this.getMonth() + meses)
};
Date.prototype.addAnos = function(anos){
    this.setYear(this.getFullYear() + anos)
};

function addSegundos2 (segundos) {
    segundos.setSeconds(getSeconds() + segundos);
}

var dt = new Date();

//Exemplo adicionando 1 hora na sua data
dt.addHora(1);
//Exemplo adicionando 30 minutos na sua data
dt.addMinutos(30);
//Exemplo adicionando 15 segundos na sua data
dt.addSegundos(15);
//Exemplo adicionando 10 dias na sua data
dt.addDias(10);
//Exemplo adicionando 2 meses na sua data:
dt.addMeses(2);
//Exemplo adicionando 1 ano na sua data:
dt.addAnos(1);
//Imprimindo ela no console
console.log(dt);