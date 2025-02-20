function obterNumero() {
  let entrada = prompt('Digite um número (ou -1 para encerrar):');
  if (entrada !== null) {
    let numero = parseInt(entrada);
    if (!isNaN(numero)) {
      return numero;
    }
  }
  return null;
}

function somarNumeros() {
  let soma = 0;
  let numero;

  do {
    numero = obterNumero();
    //prettier-ignore
    if ((numero !== null) && (numero !== -1)) {
      soma = soma + numero;
    }
  } while (numero !== -1);

  return soma;
}

function exibirResultado(resultado) {
  let saida = document.getElementById('resultado');
  if (saida !== null) {
    saida.textContent = 'A soma total é: ' + resultado;
  }
}

function iniciar() {
  let soma = somarNumeros();
  exibirResultado(soma);
}

document.addEventListener('DOMContentLoaded', iniciar);
