function somarNumeros() {
    // Inicializa a variável 'soma' como 0 
    let soma = 0;
    // Declaração da variável 'numero' 
    let numero;

    // Inicia um loop 'do-while' que continuará a pedir números ao usuário até que ele digite -1.
    do {
        // Solicita um número ao usuário através do 'prompt' e converte o valor para um número inteiro usando 'parseInt'.
        numero = parseInt(prompt("Digite um número (ou -1 para encerrar):"));

        /**
         *  Verifica se 'numero' é um número válido (não-NaN) e se não é igual a -1.
         *  se tiver dúvida sobre a isNaN verifique no material
        */
        if ((!isNaN(numero)) && (numero !== -1)) {
            soma = soma + numero;
        }
    } while (numero !== -1);

    // Obtém o elemento HTML com o ID 'resultado'.
    let saida = document.getElementById("resultado");
    // Define o texto dentro desse elemento com o resultado da soma.
    saida.innerText = "Resultado da soma: " + soma;
}

// Adiciona um ouvinte de evento que chama a função 'somarNumeros' quando o DOM (Documento) estiver pronto.
document.addEventListener("DOMContentLoaded", somarNumeros);
