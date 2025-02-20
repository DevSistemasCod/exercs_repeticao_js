function calcularMedia() {
  let soma = 0;
  let contador = 0;

  while (true) {
    let entrada = prompt(
      'Digite uma nota entre 0 e 10 (ou um valor fora do intervalo para sair):'
    );
    if (entrada != null) {
      let nota = parseFloat(entrada);

      if (isNaN(nota)) {
        alert('Valor inválido. Por favor, insira um número.');
        continue;
      }
      if (nota < 0 || nota > 10) {
        break; // Termina o loop quando o usuário insere uma nota inválida
      }

      soma = soma + nota;
      contador++;
    }
  }

  let resultado = document.getElementById('resultado');

  if (resultado != null) {
    if (contador === 0) {
      resultado.textContent = 'Nenhuma nota válida foi inserida.';
    } else {
      let media = soma / contador;
      resultado.textContent = 'A média das notas é: ' + media.toFixed(2);
    }
  }
}

function iniciar() {
  let iniciarBtn = document.getElementById('iniciarBtn');

  if (iniciarBtn) {
    iniciarBtn.addEventListener('click', calcularMedia);
  }
}

document.addEventListener('DOMContentLoaded', iniciar);
