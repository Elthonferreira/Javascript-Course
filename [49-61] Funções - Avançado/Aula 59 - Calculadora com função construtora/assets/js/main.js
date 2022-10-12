
function Calculadora() {

    this.display = document.querySelector('.display');

    this.iniciaCalculadora = () => {
        this.pegaBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter  = () => {
        this.display.addEventListener('keyup', e => { // quando keyup (soltar o botão)
            if (e.keyCode === 13) { // verifica se o código do botão é 13 (enter)
                this.realizaConta(this.display.value); // se sim, realiza a conta
            }
        });
    };

    this.pegaBotoes = () => {
        document.addEventListener('click', event => { // pega o event click da tela
            // this -> document
            const el = event.target;

            if (el.classList.contains('btn-num')) {
                this.display.value += el.innerText;
                this.display.focus(); // mantém o foco no display (tinha um bug acontecendo quando o foco ficava nos números)
            }

            if (el.classList.contains('btn-clear')) this.display.value = '';

            if (el.classList.contains('btn-del')) this.apagarUltimoDigito(this.display.value);
            
            if (el.classList.contains('btn-eq')) this.realizaConta(this.display.value);

        });
    };

    this.apagarUltimoDigito = digitos => {
        digitos = digitos.substr(0, digitos.length - 1); // remove o ultimo caractere
        this.display.value = digitos; // reescreve no display
    };

    this.realizaConta = conta => {
        try {
            conta = eval(conta); // faz a conta

            if (!conta) { // se a conta avaliar como false
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta); // reescreve a conta no display
        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.iniciaCalculadora();