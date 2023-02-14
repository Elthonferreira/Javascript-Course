// 705.484.450-52   070.987.720-03

/*
7x 0x  5x  4x  8x  4x  4x  5x  0x
10 9   8   7   6   5   4   3   2
70 0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x  5x  4x  8x  4x  4x  5x  0x  5x
11 10  9   8   7   6   5   4   3   2
77 0   45  32  56  24  20  20  0   10

11 - (284 % 11) = 2 (Segundo dígito)
*/

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', { // define propriedade para manipular o atributo 'cpfLimpo'
            writable: false,                      // não permite alterar o atributo
            enumerable: false,                    // não permite o atributo ser visualizado 
            configurable: false,                  // não permite reconfigurar (criar outro Object.defineProperty...)
            value: cpfEnviado.replace(/\D+/g, '') // valor do atributo é recebido pelo parâmetro
        });
    }

    isSequence() { // função para verificar se o CPF é uma sequencia
        //return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; 
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // sequencia recebe 11 números iguais ao primeiro do CPF passado
        return sequencia === this.cpfLimpo; // se sequencia for igual ao CPF limpo, é uma sequencia, então retorna true, senão retorna false
    }

    verificaCPF(cpf, parte) {
        let digito;
        let numeroFormula;
        let somatorio = 0;
        let posicao;

        if (parte === 1) {
            numeroFormula = 10;     // if parte1 ultimo digito é 10
            posicao = cpf[9];       // if parte1 checa a posição 9 do CPF           
        } 
        if (parte === 2) {
            numeroFormula = 11;     // if parte1 ultimo digito é 11
            posicao = cpf[10];      // if parte2 checa a posição 10 do CPF
        } 
        
        for (let i of cpf) {
            somatorio += (i * numeroFormula); 
            numeroFormula--;
            if (numeroFormula < 2) break;
        }
    
        if (11 - (somatorio % 11) > 9) {
            digito = 0;                           // Fórmula
        } else {
            digito = (11 - (somatorio % 11));     // Fórmula 
        } 
        
        if (digito == posicao) {
            return true;
        } else {
            return false;
        }
        //console.log('primeiro digito calculo: ' + primeiroDigito);
        //console.log('primeiro digito cpfLimpo: ' + cpfLimpo[9]);
    }

    validarCPF() {
        // se cair em um desses if's, o cpf já é inválido.
        if (!this.cpfLimpo) return false;                     // Se não existir cpfLimpo
        if (typeof this.cpfLimpo !== 'string') return false;  // Se cpfLimpo não for uma string
        if (this.cpfLimpo.length !== 11) return false;        // Se cpfLimpo não tiver exatamente tamanho 11
        if (this.isSequence()) return false;                  // Se cpfLimpo for uma sequencia

        const firstPartCPF  = this.verificaCPF(this.cpfLimpo, 1); // Retorna true ou false
        const secondPartCPF = this.verificaCPF(this.cpfLimpo, 2); // Retorna true ou false

        if (firstPartCPF && secondPartCPF) {
            return 'CPF válido.';
        } else {
            return 'CPF inválido.';
        }
    }
}

const cpf = new ValidaCPF('070.987.720-03');
console.log(cpf.validarCPF());