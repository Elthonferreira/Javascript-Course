
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia () { // função que sempre são chamadas ao iniciar a calculadora
            this.cliqueBotoes(); // sempre que referenciar uma chave do objeto detro do objeto, precisa do this
            this.pressionaEnter(); 
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => { // quando keyup (soltar o botão)
                if (e.keyCode === 13) { // verifica se o código do botão é 13 (enter)
                    this.realizaConta(); // se sim, realiza a conta
                }
            });
        },

        realizaConta() { // função eval() pode ser muito perigosa, pois o javascript avalia o que está dentro da 
                         // função e tenta executar, desta forma, pode abrir brechas para scripts maliciosos 
            let conta = this.display.value;
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
        },

        cliqueBotoes() {
            // this -> calculadora
            document.addEventListener('click', (e) => { // pega o event click da tela
                // this -> document
                const el = e.target; 

                if (el.classList.contains('btn-num')) { // se o evento click possuir a classe btn-num
                    this.btnParaDisplay(el.innerText); // passa o texto contido dentro do button para a função
                }

                if (el.classList.contains('btn-clear')) { // se o event click possuir a class btn-del
                    this.display.value = ''; // limpa o display
                }

                if (el.classList.contains('btn-del')) { // se o event click possuir a class btn-del
                    this.apagaUltimoDigito(this.display.value);
                }

                if (el.classList.contains('btn-eq')) { // se o event click possuir a class btn-eq
                    this.realizaConta();
                }
            }/*.bind(this)*/); // .bind(this) faz com que a função não use o this da função e sim do objeto
        }, // retirado o .bind(this), pois as arrow functions não mudam o comportamento do this

        btnParaDisplay(valor) {
            this.display.value  += valor;
        }, 

        apagaUltimoDigito(digitos) {
            digitos = digitos.substr(0, digitos.length - 1); // remove o ultimo caractere
            this.display.value = digitos; // reescreve no display
        },
        
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();