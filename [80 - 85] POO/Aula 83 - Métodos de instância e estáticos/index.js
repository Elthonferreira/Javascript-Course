// Método estático é uma função que tá dentro de uma classe por questão de organização 

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Pilha trocada.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
//controle1.trocaPilha();

ControleRemoto.trocaPilha(); // método estático
console.log(Math.random()); // método estático

