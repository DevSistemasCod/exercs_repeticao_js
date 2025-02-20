function somarNumeros() {
  let soma = 0;
  let numero;

  do {
    let entrada = prompt('Digite um número (ou -1 para encerrar):');
    if (entrada !== null) {
      numero = parseInt(entrada);

      //prettier-ignore
      if ((!isNaN(numero)) && (numero !== -1)) {
        soma = soma + numero;
      }
    }
  } while (numero !== -1);

  let saida = document.getElementById('resultado');
  if (saida !== null) {
    saida.textContent = String(soma);
  }
}

document.addEventListener('DOMContentLoaded', somarNumeros);
