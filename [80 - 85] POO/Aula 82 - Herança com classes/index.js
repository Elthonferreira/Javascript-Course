class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar () {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar () {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);
d1.ligar();
d1.ligar();
console.log(d1);
d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        //this.nome = nome;
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() { // método sobrescreveu o ligar da classe pai
        console.log('Olha, você alterou o método ligar.');
    }
}

const t1 = new Tablet('Tablet teste', true);
t1.ligar();
console.log(t1);