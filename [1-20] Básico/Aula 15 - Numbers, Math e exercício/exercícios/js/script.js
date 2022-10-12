
const numero = Number(prompt('Informe um número:')); 
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto'); // Em HTML é recomendável que tenhamos apenas elemento por id por página

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5} </p><br />`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p><br />`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p><br />`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p><br />`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero)}</p><br />`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p><br />`;