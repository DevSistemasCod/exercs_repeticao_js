function clicarNoBotao() {
  let numeroInput = document.getElementById('numeroInput');
  let resultado = document.getElementById('resultado');
  let tabuada = '';

  if (numeroInput instanceof HTMLInputElement) {
    let numero = parseInt(numeroInput.value);

    for (let i = 1; i <= 10; i++) {
      tabuada = tabuada + numero + ' x ' + i + '= ' + numero * i + '<br>';
    }

    if (resultado instanceof HTMLElement) {
      if (resultado.innerHTML !== '') {
        resultado.innerHTML = ''; // Limpa o conteúdo existente
      }
      resultado.insertAdjacentHTML('beforeend', tabuada);
    }
  }
}

function iniciar() {
  let gerarBtn = document.getElementById('gerarBtn');

  if (gerarBtn != null) {
    gerarBtn.addEventListener('click', clicarNoBotao);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
