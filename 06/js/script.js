function obterFrase() {
  let fraseEntrada = document.getElementById('frase');
  let frase = '';

  if (fraseEntrada instanceof HTMLInputElement) {
    frase = fraseEntrada.value;
  }

  return frase;
}

function contarVogais(frase) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let contador = 0;

  frase = frase.toLowerCase();

  for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) {
      contador++;
    }
  }

  return contador;
}

function exibirResultado(vogaisContadas) {
  let resultado = document.getElementById('resultado');
  if (resultado !== null) {
    resultado.textContent = 'Número de vogais na frase: ' + vogaisContadas;
  }
}

function contarEExibirVogais() {
  let fraseEntrada = document.getElementById('frase');
  let frase = obterFrase();

  if (frase.trim() === '') {
    alert('Por favor, insira uma frase.');

    // Limpa o campo de entrada
    if (fraseEntrada instanceof HTMLInputElement) {
      fraseEntrada.value = '';
    }

    return;
  }

  let vogaisContadas = contarVogais(frase);
  exibirResultado(vogaisContadas);
}
