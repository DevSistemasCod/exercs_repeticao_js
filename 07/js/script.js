// Função para pegar o número de linhas do triângulo fornecido pelo usuário
function obterNumeroDeLinhas() {
  let entrada = document.getElementById('linhas');
  let numeroDigitado = 0;
  if (entrada instanceof HTMLInputElement) {
    numeroDigitado = parseInt(entrada.value);
  }
  return numeroDigitado;
}

// Função para exibir o triângulo de pontos
function exibirTriangulo(linhas) {
  let saida = document.getElementById('saida');
  for (let i = 1; i <= linhas; i++) {
    if (saida !== null) {
      saida.insertAdjacentHTML('beforeend', '*'.repeat(i) + '<br>');
    }
  }
}

// Função principal que executa ao clicar no botão
function clicarNoBotao() {
  let numeroDeLinhas = obterNumeroDeLinhas();
  let saida = document.getElementById('saida');
  if (numeroDeLinhas > 0) {
    if (saida instanceof HTMLElement) {
      saida.innerHTML = '';
    }
    exibirTriangulo(numeroDeLinhas);
  } else {
    alert('Por favor, insira um número positivo.');
  }
}
