// 705.484.450-52 070.987.720-03

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

// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, ''); // expressão regular que tem a representação numérica de qualquer coisa que não é um número
// let cpfArray = Array.from(cpfLimpo);

function somatorioParte1(cpf) {
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

function verificaParte1(cpf, somatorioCPF) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let primeiroDigito;

    if (11 - (somatorioCPF % 11) > 9) primeiroDigito = 0;
    else primeiroDigito = (11 - (somatorioCPF % 11));

    console.log('primeiro digito calculo: ' + primeiroDigito);
    console.log('primeiro digito cpfLimpo: ' + cpfLimpo[9]);

    if (primeiroDigito == cpfLimpo[9]) {
        return true;
    } else {
        return false;
    }
}

function somatorioParte2(cpf) {
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

function verificaParte2(cpf, somatorioCPF) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let segundoDigito;

    if (11 - (somatorioCPF % 11) > 9) segundoDigito = 0;
    else segundoDigito = (11 - (somatorioCPF % 11));

    console.log('Segundo digito calculo: ' + segundoDigito);
    console.log('Segundo digito cpfLimpo: ' + cpfLimpo[10]);

    if (segundoDigito == cpfLimpo[10]) {
        return true;
    } else {
        return false;
    }
}

function validarCPF(cpf) {
    // somatorioParte1(cpf);
    console.log(somatorioParte1(cpf));
    console.log(verificaParte1(cpf, somatorioParte1(cpf)));
    console.log(somatorioParte2(cpf));
    console.log(verificaParte2(cpf, somatorioParte2(cpf)));
    if (verificaParte1(cpf, somatorioParte1(cpf)) && verificaParte2(cpf, somatorioParte2(cpf))) {
        return 'CPF válido.';
    } else {
        return 'CPF inválido.';
    }
}

//console.log(validarCPF('719.716.720-50'));

// código acima feito por mim Elthon

// código abaixo feito pelo professor (comentários feitos por mim)

function validaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {       // define a propriedade cpfLimpo
        get: function() {                           // método get formatado (limpo)
            return cpfEnviado.replace(/\D+/g, ''); 
        }
    });
}

validaCPF.prototype.valida = function() { // função que valida o CPF
    if (typeof this.cpfLimpo === 'undefined') return false; // verifica se o CPF foi passado na função
    if (this.cpfLimpo.length !== 11) return false;          // verifica se a quantidade de digitos é diferente de 11
    if (this.isSequencia()) return false;                   // verifica se o CPF é um sequencia

    const cpfParcial = this.cpfLimpo.slice(0, -2);          // passa a primeira parte do CPF (9 primemos digitos)
    const digito1 = this.criaDigito(cpfParcial);            // digito1 recebe um digito referente ao cpfParcial 
    const digito2 = this.criaDigito(cpfParcial + digito1);  // digito2 recebe um digito referente ao cpfParcial, concatenado com o digito1

     // novoCpf recebe a concatenação do cpfParcial (9 primeiros digitos) concatenado com o digito1 e digito2
    const novoCpf = cpfParcial + digito1 + digito2;        
      
    // se novoCpf for igual ao cpfLimpo, significa que a concatenação do cpfParcial com os digitos gera um CPF válido
    return novoCpf === this.cpfLimpo;  // se novoCpf for igual ao cpfLimpo, retorna true, senão retorna false          
                                                            
};

validaCPF.prototype.criaDigito = function(cpfParcial) { // função que cria um digito do CPF
    const cpfArray = Array.from(cpfParcial);            // transforma o CPF em um Array

    let regressivo = cpfArray.length + 1;               // variável auxiliar para decrementar no cálculo
    const total = cpfArray.reduce((ac, val) => {        // variável total para receber o cálculo final
        ac += (regressivo * Number(val));               // acumulador recebe o cálculo de CPF válido
        regressivo--;                                   // decremento da variável
        return ac;                                      // retorna o acumulador
    }, 0);                                              // acumulador começa com 0

    const digito = 11 - (total % 11);                   // fórmula de CPF válido
    return digito > 9 ? 0 : digito;                     // se dígito maior que 9, retorna 0, senão retorna digito
};

validaCPF.prototype.isSequencia = function () {         // função para verificar se o CPF é uma sequencia
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // sequencia recebe 11 números iguais ao primeiro do CPF passado
    return sequencia === this.cpfLimpo; // se sequencia for igual ao CPF limpo, é uma sequencia, então retorna true, senão retorna false
};

const cpf = new validaCPF('705.484.450-52'); // passa um CPF para verificar validade

if (cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}