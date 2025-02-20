function clicarNoBotao() {
  let numero1Entrada = document.getElementById('numero1');
  let numero2Entrada = document.getElementById('numero2');
  let numero1 = 0, numero2 = 0;

  if (numero1Entrada instanceof HTMLInputElement) {
    numero1 = parseInt(numero1Entrada.value);
  }
  if (numero2Entrada instanceof HTMLInputElement) {
    numero2 = parseInt(numero2Entrada.value);
  }

  let pares = 0;
  let impares = 0;

  let menor = Math.min(numero1, numero2);
  let maior = Math.max(numero1, numero2);

  while (menor <= maior) {
    if (menor % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
    menor++;
  }

  exibirConteudo(pares, impares);
}

function exibirConteudo(pares, impares) {
  let qtd_pares = document.getElementById('saida_pares');
  let qtd_impares = document.getElementById('saida_impares');

  //prettier-ignore
  if ((qtd_pares !== null) && (qtd_impares !== null)) {
    qtd_pares.textContent = 'Quantidade de números pares: ' + pares;
    qtd_impares.textContent = 'Quantidade de números ímpares: ' + impares;
  }
}

function iniciar() {
  let calcularBtn = document.getElementById('calcularBtn');
  if (calcularBtn !== null) {
    calcularBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
