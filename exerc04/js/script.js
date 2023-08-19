// Função principal para realizar os cálculos
function calcularResultados() {
    let numeros = [];
    let numero;

    // Obtém os números digitados até que -1 seja inserido
    do {
        numero = parseInt(prompt("Digite um número (ou -1 para encerrar):"));
        if ((!isNaN(numero)) && (numero !== -1)) {
            numeros.push(numero);
        }
    } while (numero !== -1);

    // Multiplicação de todos os números
    let multiplicacao = 1;
    for (let i = 0; i < numeros.length; i++) {
        multiplicacao = multiplicacao * numeros[i];
    }

    // Média dos números
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    let media = (soma / numeros.length);

    // Maior e menor número
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);


    // Exibe os resultados na página HTML
    document.getElementById("multiplicacao").textContent = "Multiplicação: "+multiplicacao;
    document.getElementById("media").textContent = "Média: "+media.toFixed(2);
    document.getElementById("maior").textContent = "Maior número: "+maior;
    document.getElementById("menor").textContent = "Menor número: "+menor;
}

document.addEventListener("DOMContentLoaded",calcularResultados);
