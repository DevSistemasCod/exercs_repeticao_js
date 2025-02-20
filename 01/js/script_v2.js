function clicarNoBotao() {
  let numeroInput = document.getElementById('numeroInput');

  if (numeroInput instanceof HTMLInputElement) {
    let numero = parseInt(numeroInput.value);
    let tabuada = gerarTabuada(numero);
    exibirConteudo(tabuada);
  }
}

function gerarTabuada(numero) {
  let tabuada = '';
  for (let i = 1; i <= 10; i++) {
    tabuada = tabuada + numero + ' x ' + i + '= ' + numero * i + '<br>';
  }
  return tabuada;
}

function exibirConteudo(conteudo) {
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLElement) {
    resultado.innerHTML = ''; // Limpa o conteúdo existente
    resultado.insertAdjacentHTML('beforeend', conteudo); // Insere o novo conteúdo
  }
}

function iniciar() {
  let gerarBtn = document.getElementById('gerarBtn');

  if (gerarBtn != null) {
    gerarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
