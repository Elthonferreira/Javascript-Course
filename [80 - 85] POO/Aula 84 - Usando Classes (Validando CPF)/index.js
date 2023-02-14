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

    somatorioParte1(cpf) {
        let cpfLimpo = cpf.replace(/\D+/g, '');
        let somatorio = 0;
        let auxPrimeiroDigito = 10;
        for (let i of cpfLimpo) {
            somatorio = somatorio + (i * auxPrimeiroDigito);
            auxPrimeiroDigito--;
            if (auxPrimeiroDigito < 2) break;
        }
        return somatorio;
    }
    
    verificaParte1(cpf, somatorioCPF) {
        let cpfLimpo = cpf.replace(/\D+/g, '');
        let primeiroDigito;
    
        if (11 - (somatorioCPF % 11) > 9) primeiroDigito = 0;
        else primeiroDigito = (11 - (somatorioCPF % 11));
    
        //console.log('primeiro digito calculo: ' + primeiroDigito);
        //console.log('primeiro digito cpfLimpo: ' + cpfLimpo[9]);
    
        if (primeiroDigito == cpfLimpo[9]) {
            return true;
        } else {
            return false;
        }
    }
    
    somatorioParte2(cpf) {
        let cpfLimpo = cpf.replace(/\D+/g, '');
        let somatorio = 0;
        let auxSegundoDigito = 11;
        for (let i of cpfLimpo) {
            somatorio = somatorio + (i * auxSegundoDigito);
            auxSegundoDigito--;
            if (auxSegundoDigito < 2) break;
        }
        return somatorio;
    }
    
    verificaParte2(cpf, somatorioCPF) {
        let cpfLimpo = cpf.replace(/\D+/g, '');
        let segundoDigito;
    
        if (11 - (somatorioCPF % 11) > 9) segundoDigito = 0;
        else segundoDigito = (11 - (somatorioCPF % 11));
    
        //console.log('Segundo digito calculo: ' + segundoDigito);
        //console.log('Segundo digito cpfLimpo: ' + cpfLimpo[10]);
    
        if (segundoDigito == cpfLimpo[10]) {
            return true;
        } else {
            return false;
        }
    }
    
    validarCPF(cpf) {
        // somatorioParte1(cpf);
        //console.log(somatorioParte1(cpf));
        //console.log(verificaParte1(cpf, somatorioParte1(cpf)));
        //console.log(somatorioParte2(cpf));
        //console.log(verificaParte2(cpf, somatorioParte2(cpf)));
        if (this.verificaParte1(cpf, this.somatorioParte1(cpf)) && this.verificaParte2(cpf, this.somatorioParte2(cpf))) {
            return 'CPF válido.';
        } else {
            return 'CPF inválido.';
        }
    }

    isValid() {
                                                              // se cair em um desses if's, o cpf já é inválido.
        if (!this.cpfLimpo) return false;                     // Se não existir cpfLimpo
        if (typeof this.cpfLimpo !== 'string') return false;  // Se cpfLimpo não for uma string
        if (this.cpfLimpo.length !== 11) return false;        // Se cpfLimpo não tiver exatamente tamanho 11
        if (this.isSequence()) return false;                  // Se cpfLimpo for uma sequencia
        console.log(this.cpfLimpo);
        this.validarCPF(this.cpfLimpo);
    }
}

const validaCpf = new ValidaCPF('070.987.720-03');

console.log(validaCpf.isValid());